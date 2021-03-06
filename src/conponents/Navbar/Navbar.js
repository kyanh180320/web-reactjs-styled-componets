import React, { useState } from 'react';
import { IconContext } from 'react-icons/lib';
import {
  Nav,
  NavbarContainer,
  NavIcon,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './Navbar.elements';
// import { Container } from '../../globalStyles';
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>
              <NavIcon />
              ULTRA
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu oncClik={handleClick}>
              <NavItem>
                <NavLinks to='/'>Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/'>Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/'>Product</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
