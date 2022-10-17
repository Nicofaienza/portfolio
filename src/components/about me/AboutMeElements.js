import styled from "styled-components";

export const AboutMeSection = styled.section`
  height: 50vh;
  margin-left: 60px;
  background: var(--white);
  display: flex;
  padding: 90px 60px;
  gap: 80px;
`;

export const AboutMeImgContainer = styled.div`
  min-height: 300px;
  min-width: 300px;
  width: 300px;
  height: 300px;
  overflow: hidden;
  border: 8px solid var(--primary);
  border-radius: 50px;

  & #perfil {
    height: 900px;
    position: relative;
    left: -60px;
    top: -45px;
  }
`;

export const AboutMeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 80px;
  border-left: 1px solid var(--dark);
  width: 40%;
`;

export const AboutMeName = styled.span`
  font-size: 2.3rem;
  font-weight: bold;
  color: var(--dark);
`;

export const AboutMeProfession = styled.span`
  font-size: 1.6rem;
  color: var(--primary);
`;

export const AboutMeDescription = styled.p`
  min-width: 300px;
  margin-top: 30px;
  color: var(--black);
`;

export const AboutMeSecondInfoContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 200px;
    color: var(--dark);
    gap: 10px;
    position: relative;
  }

  & > div > svg {
    height: 60px;
    width: 60px;
    color: var(--primary);
  }
`;

export const AboutMeYear = styled.span``;

export const AboutMeUbication = styled.span`
  text-align: center;
`;
