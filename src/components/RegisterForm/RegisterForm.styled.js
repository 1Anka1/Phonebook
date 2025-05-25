import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const InputWrapper = styled.div`
  display: grid;
  gap: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 50px;
  border-radius: 35px;
  box-shadow: var(--primary-color) 0px 0px 0px 3px;
`;

export const FormTitle = styled.h2`
  text-align: center;
  font-size: 50px;
`;

export const Input = styled.input`
  width: 500px;
  height: 55px;
  border: 1px solid;
  opacity: 0.6;
  border-radius: 35px;
  outline: none;
  padding: 14px 32px;
  font-size: 20px;
  border-color: ${(props) => (props.$error ? 'var(--accent-red-color)' : 'var(--primary-color)')};
`;

export const InputMessage = styled.p`
  font-size: 20px;
  color: var(--accent-red-color);
  margin-left: 20px;
`;

export const PasswordWrapper = styled.div`
  position: relative;
  width: 510px;
  height: 50px;
`;
