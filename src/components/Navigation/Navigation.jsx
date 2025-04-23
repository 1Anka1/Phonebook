import * as SC from './Navigation.styled.js';

export default function Navigation() {
  return (
    <SC.NavBar>
      <img width="70px" height="50px" src="../../../public/images/phonebook-icon.png" />
      <SC.NavList>
        <SC.NavItems>
          <SC.NavLinkItems to="/">home</SC.NavLinkItems>
        </SC.NavItems>
        <SC.NavItems>
          <SC.NavLinkItems to="login">login</SC.NavLinkItems>
        </SC.NavItems>
        <SC.NavItems>
          <SC.NavLinkItems to="register">register</SC.NavLinkItems>
        </SC.NavItems>
        <SC.NavItems>
          <SC.NavLinkItems to="phonebook">phonebook</SC.NavLinkItems>
        </SC.NavItems>
      </SC.NavList>
    </SC.NavBar>
  );
}
