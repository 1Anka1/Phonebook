import { useDispatch } from 'react-redux';
import * as SC from '../RegisterForm/Form.styled';
import { login } from '../../redux/auth/authOperations';
import { useState } from 'react';
import ButtonShow from '../shared/ui/ButtonShow/ButtonShow';
import Button from '../shared/ui/Button/Button';

export default function LoginForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowedPass, setShowedPass] = useState({ type: 'pass', status: false });

  const handelInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        return;
      case 'password':
        setPassword(value);
        return;
      default:
        return;
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  const handelShowPass = () => {
    setShowedPass({ type: 'pass', status: !isShowedPass.status });
  };

  return (
    <SC.FormWrapper>
      <SC.Form onSubmit={handelSubmit} autoComplete="on">
        <SC.FormTitle>Login</SC.FormTitle>
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

        <Button>Submit</Button>
      </SC.Form>
    </SC.FormWrapper>
  );
}
