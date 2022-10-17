import styled from "styled-components";
import "../../styles/colors.css";
import "../../styles/index.css";

export const NavbarWrapper = styled.nav`
  width: 60px;
  height: 100vh;
  background: var(--light);
  border-right: 8px solid var(--dark);
  position: fixed;
  z-index: 1;
  display: flex;
  align-items: center;
`;

export const NavbarUl = styled.ul`
  position: absolute;
  left: 0;
  border-radius: 0 20px 20px 0;
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 80px;
  margin: auto;
  justify-content: center;
  align-items: center;
  gap: 80px;
  list-style: none;
  background: var(--dark);
  border-right: 8px solid var(--black);
  border-top: 8px solid var(--black);
  border-bottom: 8px solid var(--black);
  box-shadow: 0 0 12px var(--dark);
`;

export const NavbarLi = styled.li`
  background: var(--primary);
  color: var(--white);
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  height: 70px;
  position: relative;
  z-index: 2;

  & > #tapa {
    height: 120px;
    width: 72px;
    position: absolute;
    left: 0;
    background: var(--dark);
    position: absolute;
    z-index: 5;
  }

  & a {
    color: var(--white);
  }

  & svg {
    height: 40px;
    width: 40px;
    position: relative;
    z-index: 8;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  &:hover svg {
    transform: scale(1.2);
  }

  &:hover #about-me-link {
    left: 72px;
  }

  &:hover #skills-link {
    left: 72px;
  }

  &:hover #works-link {
    left: 72px;
  }

  &:hover #contact-link {
    left: 72px;
  }
`;

export const NavbarLink = styled.a`
  display: flex;
  align-items: center;
  position: absolute;
  left: -1000px;
  z-index: 3;
  background: var(--dark);
  padding: 30px 30px 30px 10px;
  width: 200px;
  transition: all 0.5s ease;
  text-decoration: none;
  color: var(--white);
  font-size: 1.4rem;
  font-weight: bold;
  border: 8px solid var(--black);
  border-left: 8px solid var(--dark);
  border-radius: 0 20px 20px 0;
`;
