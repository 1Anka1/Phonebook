import { useState } from 'react';
import * as SC from './Form.styled';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import ButtonShow from '../shared/ui/ButtonShow/ButtonShow';
import Button from '../shared/ui/Button/Button';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [isShowedPass, setShowedPass] = useState({ type: 'pass', status: false });
  const [isShowedConfPass, setShowedConfPass] = useState({ type: 'conf', status: false });

  const dispatch = useDispatch();

  const handelInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        return;
      case 'name':
        setName(value);
        return;
      case 'password':
        setPassword(value);
        return;
      case 'confirmPass':
        setConfirmPass(value);
        return;
      default:
        return;
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPass) {
      alert('Wrong Password!');
      return;
    }
    dispatch(register({ name, email, password }));

    setEmail('');
    setName('');
    setPassword('');
    setConfirmPass('');
  };

  const handelShowPass = (e) => {
    const { name } = e.currentTarget;

    name === 'pass'
      ? setShowedPass({ type: 'pass', status: !isShowedPass.status })
      : setShowedConfPass({ type: 'conf', status: !isShowedConfPass.status });
  };

  return (
    <SC.FormWrapper>
      <SC.Form onSubmit={handelSubmit}>
        <SC.FormTitle>Registration</SC.FormTitle>
        <SC.Input
          onChange={handelInputChange}
          value={name}
          placeholder="Name"
          type="text"
          name="name"
        />
        <SC.Input
          onChange={handelInputChange}
          value={email}
          placeholder="Email"
          type="email"
          name="email"
        />
        <SC.PasswordWrapper>
          <SC.Input
            onChange={handelInputChange}
            value={password}
            type={isShowedPass.status ? 'text' : 'password'}
            name="password"
            placeholder="Password"
          />
          <ButtonShow handelShowPass={handelShowPass} name={isShowedPass} />
        </SC.PasswordWrapper>

        <SC.PasswordWrapper>
          <SC.Input
            onChange={handelInputChange}
            value={confirmPass}
            type={isShowedConfPass.status ? 'text' : 'password'}
            name="confirmPass"
            placeholder="Confirm your password"
          />
          <ButtonShow handelShowPass={handelShowPass} name={isShowedConfPass} />
        </SC.PasswordWrapper>

        <Button type="submit">Submit</Button>
      </SC.Form>
    </SC.FormWrapper>
  );
}
