import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 600px;
  padding: 50px;
  border-radius: 35px;
  box-shadow: #d59bf6 0px 0px 0px 3px;
`;

export const FormTitle = styled.h2`
  text-align: center;
  font-size: 36px;
`;

export const Input = styled.input`
  width: 500px;
  border: 1px solid;
  opacity: 0.6;
  border-radius: 40px;
  outline: none;
  padding: 14px 32px;
  font-size: 16px;
`;

export const PasswordWrapper = styled.div`
  position: relative;
  width: 510px;
  height: 50px;
`;
