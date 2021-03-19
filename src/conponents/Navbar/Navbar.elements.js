import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  position: sticky;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  /* $(Container) */
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.9rem;
  color: pink;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(
      -100%,
      60%
    ); // -100% là dịch sang phải, 60% là đi xuống
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
