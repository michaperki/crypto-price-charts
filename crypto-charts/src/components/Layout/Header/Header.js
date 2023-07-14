import React, { useState } from 'react';
import { HeaderContainer, Logo, Nav, NavItem, AboutButton, PopOutModule } from './HeaderStyles';

const Header = () => {
  const [showModule, setShowModule] = useState(false);

  const handleAboutButtonClick = () => {
    setShowModule(true);
  };

  const handleCloseModule = () => {
    setShowModule(false);
  };

  return (
    <HeaderContainer>
      <Logo>CryptoTracker</Logo>
      <Nav>
        <NavItem>Home</NavItem>
        <NavItem>Charts</NavItem>
        <AboutButton onClick={handleAboutButtonClick}>About</AboutButton>
      </Nav>
      {showModule && (
        <PopOutModule onClick={handleCloseModule}>
          <div>
            <h2>About CryptoTracker</h2>
            <p>This is a React application that tracks cryptocurrency prices.</p>
            <button onClick={handleCloseModule}>Close</button>
          </div>
        </PopOutModule>
      )}
    </HeaderContainer>
  );
};

export default Header;
