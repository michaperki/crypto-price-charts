import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
`;

export const Logo = styled.h1`
  font-size: 24px;
  margin: 0;
`;

export const Nav = styled.nav`
  display: flex;
`;

export const NavItem = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;

export const AboutButton = styled(NavItem)`
  font-weight: bold;
`;

export const PopOutModule = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  & > div {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
  }
`;