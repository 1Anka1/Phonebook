import { useDispatch } from 'react-redux';
import * as SC from './Button.styled';
import { logout } from '../../../../redux/auth/authOperations';

export default function Button({ children }) {
  const dispatch = useDispatch();

  const buttonClick = (e) => {
    const value = e.target.innerHTML;

    if (value === 'Log out') {
      dispatch(logout());
    }

    return;
  };

  return (
    <SC.Button onClick={buttonClick} type="submit">
      {children}
    </SC.Button>
  );
}
