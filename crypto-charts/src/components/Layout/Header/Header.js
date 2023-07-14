import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 16px;
`;

const HeaderTitle = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Cryptocurrency Prices</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;