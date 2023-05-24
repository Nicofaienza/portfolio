import styled from "styled-components";

export const AboutMeSection = styled.section`
  width: 100%;
  background: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 96px;
  padding: 96px 0;

  .container-content {
    margin: auto;
    width: 90%;
    max-width: 1200px;
    display: flex;
    height: 100%;
    justify-content: space-between;
  }

  & #skills-container {
    width: 50%;
  }

  @media screen and (max-width: 1000px) {
    padding: 96px 0 0;

    .container-content {
      flex-direction: column;
      align-items: center;
      gap: 48px;
    }

    #skills-container {
      width: 90%;
      display: flex;
      flex-direction: column;
      gap: 48px;
    }
  }
`;

export const TitleSection = styled.h2`
  font-size: 2rem;
  color: var(--black);
  letter-spacing: 2px;
  position: relative;
  padding: 8px 0;

  &::after {
    content: "";
    width: 70%;
    height: 2px;
    background: var(--black);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  @media screen and (max-width: 1000px) {
    font-size: 1.6rem;
  }
`;

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;

  @media screen and (max-width: 1000px) {
    width: 300px;
  }
`;

export const AboutMeImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 300px;
  width: 290px;
  position: relative;
  margin-bottom: 16px;
  border: 4px solid var(--dark);
  border-bottom: 0;

  & #perfil {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  @media screen and (max-width: 1000px) {
    height: 260px;
    width: 250px;
  }
`;

export const AboutMeSecondInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
  height: fit-content;
  background: var(--dark);
  z-index: 5;
  position: relative;
  padding: 4px 0;

  & a {
    width: 40px;
    height: 40px;
    display: flex;
  }

  & svg {
    height: 100%;
    width: 100%;
    color: var(--white);
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  svg:hover {
    transform: scale(1.05);
  }
`;

export const AboutMeInfoContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AboutMeName = styled.span`
  font-size: 2.3rem;
  font-weight: bold;
  color: var(--dark);

  @media screen and (max-width: 1000px) {
    font-size: 1.8rem;
  }
`;

export const AboutMeDescription = styled.p`
  min-width: 200px;
  text-align: center;
  color: var(--black);
  font-weight: 300;
  font-size: 1.2rem;

  @media screen and (max-width: 1000px) {
    font-size: 0.9rem;
  }
`;

export const AboutMeCardsContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
`;

export const AboutMeCard = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  height: 100%;

  & img {
    height: 120px;
  }

  & p {
    text-align: center;
    width: 80%;
    font-size: 1.1rem;
    font-weight: 300;
    color: var(--black);
  }

  @media screen and (max-width: 1000px) {
    & p {
      font-size: 0.9rem;
    }

    & img {
      height: 80px;
    }
  }
`;

export const AboutMeStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 50%;
  gap: 16px;
`;

export const AboutMeStackTitle = styled.h3`
  font-weight: 300;
  letter-spacing: 2px;
  color: var(--black);

  @media screen and (max-width: 1000px) {
    font-size: 1rem;
  }
`;
