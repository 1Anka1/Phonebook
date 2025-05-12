import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 35px;
  background-color: var(--light-color);
  cursor: pointer;
  transition: color 250ms var(--timing-function), background-color 250ms var(--timing-function);

  &:hover {
    color: var(--light-color);
    background-color: var(--primary-color);
  }
`;
