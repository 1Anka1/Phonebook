import * as SC from '../Navigation.styled';

export default function AuthNav() {
  return (
    <SC.NavWrapper>
      <SC.NavItems>
        <SC.NavLinkItems to="login">login</SC.NavLinkItems>
      </SC.NavItems>
      <SC.NavItems>
        <SC.NavLinkItems to="register">register</SC.NavLinkItems>
      </SC.NavItems>
    </SC.NavWrapper>
  );
}
