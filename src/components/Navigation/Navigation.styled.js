import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 35px;
  justify-content: center;
`;

export const NavItems = styled.li``;

export const NavLinkItems = styled(NavLink)`
  cursor: pointer;
  color: black;

  &.active {
    position: relative;
    color: #d59bf6;
  }

  &.active::before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    bottom: -5px;
    height: 2px;
    background-color: #d59bf6;
  }

  &:hover {
    color: #d59bf6;
    transition: color 250ms var(--timing-function);
  }
`;
