import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.nav`
  padding: 20px 0;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItems = styled.li``;

export const NavLinkItems = styled(NavLink)`
  cursor: pointer;
  color: black;

  &.active {
    position: relative;
    color: var(--primary-color);
  }

  &.active::before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    bottom: -5px;
    height: 2px;
    background-color: var(--primary-color);
  }

  &:hover {
    color: var(--primary-color);
    transition: color 250ms var(--timing-function);
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const UserName = styled.p`
  letter-spacing: 3px;
`;
