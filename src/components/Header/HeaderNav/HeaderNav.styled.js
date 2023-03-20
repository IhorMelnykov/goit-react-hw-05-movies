import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkDiv = styled(NavLink)`
  font-size: 32px;
  margin-left: 10px;
  text-decoration: none;
  color: darkblue;
  &.active {
    color: orange;
  }
 
`;