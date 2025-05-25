import { useDispatch, useSelector } from 'react-redux';
import * as SC from '../Navigation.styled.js';
import { selectUser } from '../../../redux/auth/authSelectors';
import Button from '../../shared/ui/Button/Button.jsx';
import { logout } from '../../../redux/auth/authOperations.js';

export default function UserMenu() {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <SC.NavWrapper>
      <img src="/images/avatarPhoto.png" alt="Avatar" width="70" />
      <SC.UserName>{name.toUpperCase()}!</SC.UserName>
      <SC.NavItems>
        <Button type="submit" onClick={() => handleLogOut()}>
          Log out
        </Button>
      </SC.NavItems>
    </SC.NavWrapper>
  );
}
