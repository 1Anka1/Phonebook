import styled from 'styled-components';

export const Button = styled.button`
  color: #fff;
  background-color: var(--primary-color);
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px, rgba(0, 0, 0, 0.14) 0 6px 10px 0,
    rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  height: 48px;
  padding: 2px 24px;
  transition: box-shadow 280ms var(--timing-function), opacity 15ms linear 30ms,
    transform 270ms var(--timing-function) 0ms;

  &:hover {
    background: var(--background-color);
    color: var(--primary-color);
  }
`;
