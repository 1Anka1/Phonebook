import styled from 'styled-components';

export const Button = styled.button`
  color: var(--light-color);
  border-radius: 35px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px, rgba(0, 0, 0, 0.14) 0 6px 10px 0,
    rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  height: 48px;
  padding: 2px 24px;
  transition: box-shadow 250ms var(--timing-function), opacity 15ms linear 30ms,
    background-color 250ms var(--timing-function);
  background-color: ${({ $variant }) =>
    $variant === 'delete'
      ? 'var(--accent-red-color)'
      : $variant === 'edit'
      ? 'var(--accent-yellow-color)'
      : $variant === 'add'
      ? 'var(--accept-color)'
      : 'var(--primary-color)'};

  &:hover {
    background: var(--background-color);
    color: ${({ $variant }) =>
      $variant === 'delete'
        ? 'var(--accent-red-color)'
        : $variant === 'edit'
        ? 'var(--accent-yellow-color)'
        : $variant === 'add'
        ? 'var(--accept-color)'
        : 'var(--primary-color)'};
  }
`;
