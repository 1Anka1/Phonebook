import { useSelector } from 'react-redux';
import * as SC from '../Navigation.styled.js';
import { selectUser } from '../../../redux/auth/authSelectors';
import Button from '../../shared/ui/Button/Button.jsx';

export default function UserMenu() {
  const { name, avatarURL } = useSelector(selectUser);

  return (
    <SC.NavWrapper>
      <img src={avatarURL} alt="Avatar" width="30" />
      <p>Welcome, {name}</p>
      <SC.NavItems>
        <Button>Log out</Button>
      </SC.NavItems>
    </SC.NavWrapper>
  );
}
