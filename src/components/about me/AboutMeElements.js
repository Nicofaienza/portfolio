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
  width: 25%;
  height: 100%;
  align-items: flex-end;
  justify-content: end;
  gap: 20px;
  height: 100%;
  & svg {
    height: 40px;
    width: 40px;
    color: var(--primary);
    cursor: pointer;
  }
`;

export const AboutMeYear = styled.span``;

export const AboutMeUbication = styled.span`
  text-align: center;
`;
