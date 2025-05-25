import { useState } from 'react';
import * as SC from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { registration } from '../../redux/auth/authOperations';
import ButtonShow from '../shared/ui/ButtonShow/ButtonShow';
import Button from '../shared/ui/Button/Button';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export default function RegisterForm() {
  const basicSchema = yup.object().shape({
    name: yup.string().min(3).max(15).required(),
    email: yup.string().email('Please enter a valid email').required('Required'),
    password: yup
      .string()
      .required('Please provide a valid password')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
        'Password must contain at least one letter and one number',
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(basicSchema),
    mode: 'onChange',
  });

  const [isShowedPass, setShowedPass] = useState({ type: 'pass', status: false });
  const [isShowedConfPass, setShowedConfPass] = useState({ type: 'conf', status: false });

  const dispatch = useDispatch();

  const onSubmit = ({ name, email, password, confirmPassword }) => {
    console.log(name);

    // const { name, email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      alert('Wrong Password!');
      return;
    }

    dispatch(registration({ name, email, password }));
    reset();
  };

  const handelShowPass = (e) => {
    const { name } = e.currentTarget;
    name === 'pass'
      ? setShowedPass({ type: 'pass', status: !isShowedPass.status })
      : setShowedConfPass({ type: 'conf', status: !isShowedConfPass.status });
  };

  const errorEmail = formState.errors['email']?.message;
  const errorPassword = formState.errors['password']?.message;

  return (
    <SC.FormWrapper>
      <SC.Form onSubmit={handleSubmit(onSubmit)}>
        <SC.FormTitle>Registration</SC.FormTitle>

        <SC.Input
          placeholder="Name"
          type="text"
          name="name"
          {...register('name', {
            required: true,
          })}
        />

        <SC.Input
          placeholder="Email"
          type="email"
          name="email"
          $error={errorEmail}
          {...register('email', {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
        />

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

        <SC.PasswordWrapper>
          <SC.Input
            type={isShowedConfPass.status ? 'text' : 'password'}
            placeholder="Confirm password"
            name="confirmPassword"
            {...register('confirmPassword', {
              required: true,
            })}
          />
          <ButtonShow handelShowPass={handelShowPass} name={isShowedConfPass} />
        </SC.PasswordWrapper>

        <Button>Submit</Button>
      </SC.Form>
    </SC.FormWrapper>
  );
}
