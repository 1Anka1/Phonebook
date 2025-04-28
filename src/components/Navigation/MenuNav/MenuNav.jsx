import * as SC from '../Navigation.styled';
import { NavLink } from 'react-router';

export default function MenuNav() {
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
        <SC.NavLinkItems to="phonebook">phonebook</SC.NavLinkItems>
      </SC.NavItems>
    </SC.NavWrapper>
  );
}
