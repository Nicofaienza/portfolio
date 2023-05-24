import styled from "styled-components";

export const FooterWrapper = styled.footer`
  height: 85px;
  background: var(--black);
  @media screen and (max-width: 1000px) {
    height: max-content;
  }
`;

export const FooterContainer = styled.div`
  width: 90%;
  height: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 40px 0;
    gap: 60px;
  }
`;

export const FooterEmail = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 25px;
  color: var(--white);

  & span {
    font-weight: 300;
  }

  @media screen and (max-width: 1000px) {
    order: 2;
  }
`;

export const FooterLinks = styled.ul`
  display: flex;
  gap: 32px;
`;

export const FooterLinksLi = styled.li`
  list-style: none;
  width: 32px;
  height: 32px;
  & a {
    width: 100%;
    height: 100%;
  }

  & svg {
    width: 100%;
    height: 100%;
    color: var(--white);
  }
`;
