import { useDispatch } from 'react-redux';
import * as SC from '../RegisterForm/RegisterForm.styled';
import { login } from '../../redux/auth/authOperations';
import { useState } from 'react';
import ButtonShow from '../shared/ui/ButtonShow/ButtonShow';
import Button from '../shared/ui/Button/Button';
import Loader from '../Loader/Loader';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export default function LoginForm() {
  const userSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required('Required'),
    password: yup
      .string()
      .required('Please provide a valid password')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
        'Password must contain at least one letter and one number',
      ),
  });

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(userSchema),
    mode: 'onChange',
  });

  const dispatch = useDispatch();

  const onSubmit = ({ email, password }) => {
    dispatch(login({ email, password }));
    reset();
  };

  const [isShowedPass, setShowedPass] = useState({ type: 'pass', status: false });

  const handelShowPass = () => {
    setShowedPass({ type: 'pass', status: !isShowedPass.status });
  };

  const errorEmail = formState.errors['email']?.message;
  const errorPassword = formState.errors['password']?.message;

  return (
    <SC.FormWrapper>
      <Loader>
        <SC.Form onSubmit={handleSubmit(onSubmit)}>
          <SC.FormTitle>Login</SC.FormTitle>
          <SC.InputWrapper>
            <SC.Input
              placeholder="Email"
              type="email"
              name="email"
              $error={errorEmail}
              {...register('email')}
            />
            <SC.InputMessage>{errorEmail}</SC.InputMessage>
          </SC.InputWrapper>
          <SC.InputWrapper>
            <SC.PasswordWrapper>
              <SC.Input
                type={isShowedPass.status ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                $error={errorPassword}
                {...register('password')}
              />
              <ButtonShow handelShowPass={handelShowPass} name={isShowedPass} />
            </SC.PasswordWrapper>
            <SC.InputMessage>{errorPassword}</SC.InputMessage>
          </SC.InputWrapper>
          <Button>Submit</Button>
        </SC.Form>
      </Loader>
    </SC.FormWrapper>
  );
}
