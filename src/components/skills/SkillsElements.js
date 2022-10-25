import styled from "styled-components";

export const SkillsSection = styled.section`
  height: 50vh;
  margin-left: 60px;
  background: var(--primary);
  color: var(--white);
  padding: 80px;

  & .container-content {
    align-items: center;
  }

  & .skills-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`;

export const SkillsTitle = styled.span`
  font-size: 2rem;
`;

export const SkillsIconsContainer = styled.ul`
  list-style: none;
  display: flex;
  gap: 60px;
`;

export const SkillsIconsLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  height: 100px;
  width: 100px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.23);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  & svg {
    height: 60px;
    width: 60px;
    color: var(--dark);
  }

  & span {
    font-size: 1.1rem;
  }
`;
