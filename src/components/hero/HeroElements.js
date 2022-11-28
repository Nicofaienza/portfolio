import styled from "styled-components";

export const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroBg = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(51, 102, 255, 0.3);
  }

  & video {
    width: 100%;
    height: 100vh;
    position: absolute;
    object-fit: cover;
    margin: auto;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroName = styled.h2`
  font-size: 3rem;
  color: var(--light);
  font-weight: 600;
  @media screen and (max-width: 900px) {
    font-size: 2.5rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 2rem;
  color: var(--white);
  margin-bottom: 32px;
  font-weight: 400;

  @media screen and (max-width: 900px) {
    font-size: 1.5rem;
  }
`;

export const Button = styled.a`
  color: var(--white);
  padding: 12px 18px;
  border: 1px solid var(--primary);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-decoration: none;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: -100%;
    transition: all 0.2s ease;
    background: var(--primary);
    z-index: -1;
  }

  &:hover::after {
    bottom: 0;
  }

  @media screen and (max-width: 900px) {
    font-size: 0.9rem;
  }
`;
