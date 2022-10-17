import styled from "styled-components";

export const WorksSection = styled.section`
  position: relative;
  height: 100vh;
  margin-left: 60px;
  background: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 60px;
`;

export const WorksContainer = styled.div`
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
  align-items: center;
  height: 50vh;

  & #works-arrow-left {
    top: 50%;
    left: 10%;
  }

  & #works-arrow-right {
    top: 50%;
    right: 10%;
  }
`;

export const WorksArrow = styled.div`
  position: absolute;
  cursor: pointer;
  height: 50px;
  width: 50px;

  & svg {
    height: 100%;
    width: 100%;
    transition: transform 0.3s ease;
    color: var(--dark);
  }

  & svg:hover {
    transform: scale(1.1);
  }
`;

export const WorksTitle = styled.span`
  font-size: 3rem;
  font-weight: bold;
  color: var(--primary);
`;

export const WorksCard = styled.div`
  display: flex;
  flex-direction: column;

  background: rgba(65, 90, 119, 0.5);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(65, 90, 119, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  padding: 20px;
  border-radius: 20px;
  gap: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  & #card-icons-container {
    margin-top: 20px;
    display: flex;
    gap: 8px;
    align-self: flex-end;
  }

  & #card-icons-container a {
    color: var(--vlack);
  }

  & #card-icons-container svg {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`;

export const WorksCardMain = styled.div`
  display: flex;
  flex-direction: column;

  background: rgba(65, 90, 119, 0.5);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(65, 90, 119, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  padding: 20px;
  border-radius: 20px;
  gap: 10px;
  transition: all 0.3s ease;
  & > #works-card-img-container {
    width: 450px;
  }

  & > #works-card-img-container img {
    width: 100%;
  }

  &:hover {
    transform: scale(1.1);
  }

  & #card-icons-container {
    margin-top: 20px;
    display: flex;
    gap: 8px;
    align-self: flex-end;
  }

  & #card-icons-container a {
    color: var(--vlack);
  }

  & #card-icons-container svg {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`;

export const WorksCardImgContainer = styled.div`
  width: 260px;
  align-self: center;
  & img {
    width: 100%;
    border-radius: 20px;
  }
`;

export const WorksCardName = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--dark);
`;

export const WorksCardStack = styled.span`
  display: flex;
  gap: 10px;

  & > span {
    color: var(--white);
    background: var(--black);
    padding: 4px 8px;
  }
`;

export const WorksButton = styled.a`
  padding: 15px 35px;
  border-radius: 15px;
  background: var(--primary);
  color: var(--white);
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  border: 4px solid var(--dark);

  &:hover {
    transform: scale(1.1);
    color: var(--primary);
    background: var(--white);
    border: 4px solid var(--dark);
  }
`;
