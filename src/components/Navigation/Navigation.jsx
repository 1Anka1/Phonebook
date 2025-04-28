import * as SC from './Navigation.styled.js';
import UserMenu from './UserMenu/UserMenu.jsx';
import AuthNav from './AuthNav/AuthNav.jsx';
import MenuNav from './MenuNav/MenuNav.jsx';
import { useSelector } from 'react-redux';
import { selectIsLogged } from '../../redux/auth/authSelectors.js';

export default function Navigation() {
  const isLogged = useSelector(selectIsLogged);

  return (
    <SC.NavBar>
      <SC.NavList>
        <MenuNav />
        {isLogged ? <UserMenu /> : <AuthNav />}
      </SC.NavList>
    </SC.NavBar>
  );
}
