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
  border: 1px solid;
  background-color: var(--background-color);
  opacity: 0.6;
  border-radius: 40px;
  outline: none;
  padding: 14px 32px;
  font-size: 16px;
`;

export const FormButton = styled.button`
  color: white;
  background-color: var(--primary-color);
  border: none;
  border-radius: 40px;
  padding: 14px;
  font-size: 20px;
  cursor: pointer;
  transition: color 250ms var(--timing-function), background-color 250ms var(--timing-function);

  &:hover {
    color: var(--primary-color);
    background-color: var(--background-color);
  }
`;
