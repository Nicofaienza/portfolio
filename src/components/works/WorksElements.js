import styled from "styled-components";

export const WorksSection = styled.section`
  display: flex;
  height: 100%;
  width: 100%;
  background: var(--white);
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 96px 0;
  gap: 96px;

  & .mainContainer {
    width: 100%;
    height: 2000px;
    transform: rotateY(180deg);
  }

  & .Container {
    margin: auto;
    background: var(--white);
  }

  & .Content {
    background: var(--white);
  }

  & .error {
    display: none;
  }

  @media screen and (max-width: 1100px) {
    padding: 96px 0 0;
  }
`;

export const WorkCardsContainer = styled.div`
  width: 90%;
  max-width: 1300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: 24px;
`;

export const WorksCard = styled.div`
  width: 30%;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  background: var(--dark);
  box-shadow: 0 4px 30px rgba(65, 90, 119, 0.2);
  align-items: center;
  transition: all 0.3s ease;
  padding-bottom: 16px;
  border-bottom: 4px solid var(--primary);

  & #card-icons-container {
    margin-top: 20px;
    display: flex;
    gap: 8px;
  }

  & #card-icons-container svg {
    width: 25px;
    height: 25px;
    cursor: pointer;
    color: var(--light);
  }

  & #card-icons-container svg path {
    stroke: var(--light);
  }
`;

export const WorksCardModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 100;
  color: #fff;
  justify-content: center;
  align-items: center;
  animation-name: animationBackgroundModal;
  animation-duration: 0.4s;
  animation-fill-mode: both;

  & #card-icons-container {
    display: flex;
    gap: 16px;
  }

  & #card-icons-container svg {
    width: 25px;
    height: 25px;
    cursor: pointer;
    color: var(--light);
  }

  & #card-icons-container svg path {
    stroke: var(--light);
  }

  & #works__card-modal-container {
    position: relative;
    background: var(--dark);
    height: 550px;
    width: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    animation-name: animationModalContainer;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    border-bottom: 4px solid var(--primary);
  }

  & #works__card-modal-container > svg {
    color: #fff;
    position: absolute;
    top: 10px;
    right: 10px;
    height: 40px;
    width: 40px;
    cursor: pointer;
  }

  & p {
    text-align: center;
    width: 80%;
  }

  @keyframes animationBackgroundModal {
    from {
      backdrop-filter: blur(0);
    }
    to {
      backdrop-filter: blur(15px);
    }
  }

  @keyframes animationModalContainer {
    from {
      filter: opacity(0);
    }
    to {
      filter: opacity(1);
    }
  }
`;

export const WorksCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const WorksCardImgContainer = styled.a`
  width: 100%;
  height: min-content;
  align-self: center;
  position: relative;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    transition: all 1s ease;
  }

  &::after {
    position: absolute;
    content: "Ir a la página.";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: transparent;
    background: transparent;
    transition: all 0.5s ease;
    z-index: 2;
    font-size: 1.2rem;
    font-weight: lighter;
  }

  &:hover::after {
    background: rgba(26, 33, 56, 0.9);
    color: var(--white);
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const WorksCardName = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--white);

  @media screen and (max-width: 1180px) {
    font-size: 1rem;
  }
`;

export const WorksCardStack = styled.span`
  display: flex;
  gap: 10px;
  font-size: 0.8rem;

  & > span {
    color: var(--black);
    background: var(--light);
    padding: 4px 8px;
  }

  @media screen and (max-width: 1180px) {
    font-size: 0.7rem;
  }
`;

export const WorksButton = styled.a`
  padding: 10px 22px;
  color: var(--primary);
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid var(--primary);
  position: relative;
  z-index: 5;
  overflow: hidden;
  cursor: pointer;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: -100%;
    left: 0;
    z-index: -1;
    transition: all 0.3s ease;
    background: var(--primary);
    overflow: hidden;
  }

  &:hover::after {
    bottom: 0;
  }

  &:hover {
    color: var(--white);
  }

  @media screen and (max-width: 1100px) {
    font-size: 0.9em;
  }
`;
