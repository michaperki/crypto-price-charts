import React from 'react';
import FooterContainer from './FooterStyles';

const Footer = () => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} Michael Perkins
    </FooterContainer>
  );
};

export default Footer;