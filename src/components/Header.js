import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const NavLinks = styled.div`
  a {
    margin-left: 20px;
    color: #0070f3;
    text-decoration: none;
    font-weight: 500;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Nav>
      <Logo>My Carrd Clone</Logo>
      <NavLinks>
        <a href="#gallery">Gallery</a>
        <a href="#about">About</a>
      </NavLinks>
    </Nav>
  </HeaderContainer>
);

export default Header;
