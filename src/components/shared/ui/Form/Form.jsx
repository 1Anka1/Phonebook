import { useState } from 'react';
import * as SC from './Form.styled';
import { useDispatch } from 'react-redux';
import { register } from '../../../../redux/auth/authOperations';
import ButtonShow from '../ButtonShow/ButtonShow';

export default function Form({ children }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [isShowedPass, setShowedPass] = useState({ type: 'pass', status: false });
  const [isShowedConfPass, setShowedConfPass] = useState({ type: 'conf', status: false });

  const dispatch = useDispatch();

  const handelInputChange = (e) => {
    const { name, value } = e.target;
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

    dispatch(
      register({
        name,
        email,
        password,
      }),
    );
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
        <SC.FormTitle> {children}</SC.FormTitle>
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
            type="password"
            name="password"
            placeholder="Password"
          />
          <ButtonShow handelShowPass={handelShowPass} name={isShowedPass} />
        </SC.PasswordWrapper>

        {children === 'Registration' && (
          <>
            <SC.Input
              onChange={handelInputChange}
              value={name}
              placeholder="Name"
              type="text"
              name="name"
            />
            <SC.PasswordWrapper>
              <SC.Input
                onChange={handelInputChange}
                value={confirmPass}
                type="password"
                name="confirmPass"
                placeholder="Confirm your password"
              />
              <ButtonShow handelShowPass={handelShowPass} name={isShowedConfPass} />
            </SC.PasswordWrapper>
          </>
        )}
        <SC.FormButton type="submit">Submit</SC.FormButton>
      </SC.Form>
    </SC.FormWrapper>
  );
}
