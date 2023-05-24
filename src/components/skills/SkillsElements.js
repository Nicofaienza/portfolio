import styled from "styled-components";

export const SkillsIconsContainer = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  align-items: center;
  justify-items: center;
  height: 100%;
  width: 100%;

  & #ts-icon {
    height: 50px;
    width: 50px;
  }

  @media screen and (max-width: 900px) {
    & #ts-icon {
      height: 35px;
      width: 35px;
    }
  }
`;

export const SkillsIconsLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;

  & svg {
    height: 100%;
    width: 100%;
    color: var(--dark);
  }

  @media screen and (max-width: 900px) {
    height: 40px;
    width: 40px;
  }
`;
