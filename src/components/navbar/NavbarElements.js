import styled from "styled-components";
import "../../styles/colors.css";
import "../../styles/index.css";

export const NavbarWrapper = styled.nav`
  height: 55px;
  width: 100%;
  position: sticky;
  top: -1px;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  background: var(--black);
  border-bottom: 1px solid var(--light);
`;

export const NavbarUl = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 48px;
  height: 100%;

  @media screen and (max-width: 900px) {
    gap: 24px;
  }
`;

export const NavbarLi = styled.li`
  display: flex;
  height: 100%;
  min-width: 90px;
  padding: 0 16px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;

  &::after {
    content: "";
    width: 50%;
    height: 2px;
    background: var(--white);
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 20%;
    transition: all 0.3s ease;
    transform: scale(0);
  }

  &:hover::after {
    transform: scale(1);
  }

  @media screen and (max-width: 900px) {
    font-size: 0.9rem;
    padding: 0 8px;
  }
`;

export const NavbarLink = styled.a`
  display: flex;
  align-items: center;
  z-index: 3;
  top: 0;
  transition: all 0.3s ease;
  text-decoration: none;
  color: var(--white);
  font-weight: 400;
`;
