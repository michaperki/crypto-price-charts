import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 16px;
`;

const FooterText = styled.p`
  font-size: 14px;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; {new Date().getFullYear()} Cryptocurrency App. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;