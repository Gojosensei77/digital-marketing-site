import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Menu, X, Bitcoin } from 'lucide-react';

const Nav = styled.nav`
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #0A84FF;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  
  &:hover {
    color: #0056d3;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(26, 26, 26, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const StyledLink = styled(Link)`
  color: #e2e8f0;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.2s ease;
  position: relative;
  
  &:hover {
    color: #0A84FF;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #0A84FF, #FF5A5F);
    transition: width 0.2s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #e2e8f0;
  padding: 0.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
  
  &:hover {
    color: #0A84FF;
  }
`;

const SearchButton = styled.button`
  background: linear-gradient(135deg, #0A84FF 0%, #0056d3 100%);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(10, 132, 255, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          <Bitcoin size={28} />
          CryptoBlog
        </Logo>
        
        <NavLinks isOpen={isOpen}>
          <StyledLink to="/" onClick={closeMenu}>Home</StyledLink>
          <StyledLink to="/blog" onClick={closeMenu}>Blog</StyledLink>
          <StyledLink to="/category/Analysis" onClick={closeMenu}>Analysis</StyledLink>
          <StyledLink to="/category/Guide" onClick={closeMenu}>Guides</StyledLink>
          <StyledLink to="/about" onClick={closeMenu}>About</StyledLink>
          <SearchButton onClick={closeMenu}>Subscribe</SearchButton>
        </NavLinks>
        
        <MobileMenuButton onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuButton>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;