import { useSelector } from 'react-redux';
import { selectIsLogged } from '../../../redux/auth/authSelectors';
import * as SC from '../Navigation.styled';
import { NavLink } from 'react-router';

export default function MenuNav() {
  const isLogged = useSelector(selectIsLogged);

  return (
    <SC.NavWrapper>
      <SC.NavItems>
        <NavLink to="/">
          <img width="70px" height="50px" src="/images/phonebook-icon.png" />
        </NavLink>
      </SC.NavItems>
      <SC.NavItems>
        <SC.NavLinkItems to="/">home</SC.NavLinkItems>
      </SC.NavItems>
      <SC.NavItems>
        {isLogged ? <SC.NavLinkItems to="phonebook">phonebook</SC.NavLinkItems> : ''}
      </SC.NavItems>
    </SC.NavWrapper>
  );
}
