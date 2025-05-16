import * as SC from './Button.styled';

export default function Button({ children, onClick, type, variant = 'primary' }) {
  return (
    <SC.Button onClick={onClick} type={type} $variant={variant}>
      {children}
    </SC.Button>
  );
}
