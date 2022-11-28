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
  min-width: 290px;
  display: flex;
  flex-direction: column;
  background: var(--dark);
  box-shadow: 0 4px 30px rgba(65, 90, 119, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  padding-bottom: 16px;
  border-bottom: 4px solid var(--primary);

  & #card-icons-container {
    margin-top: 20px;
    display: flex;
    gap: 8px;
  }

  & #card-icons-container a {
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

export const WorksCardImgContainer = styled.div`
  width: 100%;
  align-self: center;
  & img {
    width: 100%;
  }
`;

export const WorksCardName = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--white);
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
`;

export const WorksButton = styled.a`
  padding: 12px 18px;
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
`;
