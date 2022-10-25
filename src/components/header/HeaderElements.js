import styled from "styled-components";

export const HeaderSection = styled.section`
  height: 50vh;
  margin-left: 60px;
  background: var(--white);
  display: flex;
  padding: 90px 60px;
  gap: 80px;
`;

export const HeaderImgContainer = styled.div`
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

export const HeaderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: relative;
`;

export const HeaderName = styled.span`
  font-size: 10rem;
  font-weight: bold;
  color: var(--dark);
`;

export const HeaderProfession = styled.span`
  font-size: 2.5rem;
  color: var(--primary);
`;

export const HeaderSecondInfoContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  right: 10px;
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

export const HeaderYear = styled.span``;

export const HeaderUbication = styled.span`
  text-align: center;
`;
