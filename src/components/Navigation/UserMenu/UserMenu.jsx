import { useSelector } from 'react-redux';
import * as SC from '../Navigation.styled.js';
import { selectUser } from '../../../redux/auth/authSelectors';
import Button from '../../shared/ui/Button/Button.jsx';

export default function UserMenu() {
  const { name } = useSelector(selectUser);

  return (
    <SC.NavWrapper>
      <img src="../../../../public/images/avatarPhoto.png" alt="Avatar" width="70" />
      <SC.UserName>{name.toUpperCase()}!</SC.UserName>
      <SC.NavItems>
        <Button>Log out</Button>
      </SC.NavItems>
    </SC.NavWrapper>
  );
}
