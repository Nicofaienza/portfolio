import styled from "styled-components";

export const ContactSection = styled.div`
  width: 100%;
  background: var(--white);
`;

export const ContactContainer = styled.div`
  background: var(--white);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 0 96px;
  gap: 96px;
  margin: auto;

  svg {
    color: var(--primary);
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  svg:hover {
    transform: scale(1.05);
  }
`;

export const ContactTitle = styled.h3`
  font-size: 2rem;
  color: var(--dark);
  letter-spacing: 2px;
  position: relative;
  padding: 8px 0;

  &::after {
    content: "";
    width: 70%;
    height: 2px;
    background: var(--dark);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

export const ContactSpan = styled.span`
  color: var(--white);
  font-size: 1.3rem;
  font-weight: 300;
  margin-bottom: 32px;
  @media screen and (max-width: 900px) {
    font-size: 1rem;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;

  gap: 24px;
  background: var(--dark);
  padding: 56px 40px;
  border-bottom: 4px solid var(--primary);

  & label {
    width: 100%;
    height: 45px;
  }

  & input {
    width: 100%;
    height: 100%;
    background: var(--white);
    border: transparent;
    border-bottom: 4px solid var(--primary);
    padding-left: 8px;
    min-width: 280px;
  }

  & input::placeholder {
    color: #888;
    font-weight: 600;
  }

  & input:focus {
    outline: none;
    color: var(--black);
  }

  & textarea {
    resize: none;
    width: 100%;
    height: 120px;
    background: var(--white);
    border: transparent;
    border-bottom: 4px solid var(--primary);
    padding: 8px;
    min-width: 280px;
  }

  & textarea::placeholder {
    color: #888;
    font-weight: 600;
    font-size: 14px;
  }

  & textarea:focus {
    outline: none;
  }

  @media screen and (max-width: 1100px) {
    width: 90%;
  }
`;

export const ContactButton = styled.button`
  padding: 10px 20px;
  color: var(--white);
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid var(--light);
  position: relative;
  z-index: 5;
  overflow: hidden;
  cursor: pointer;
  background: transparent;
  margin-top: 32px;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: -100%;
    left: 0;
    z-index: -1;
    transition: all 0.3s ease;
    background: var(--light);
    overflow: hidden;
  }

  &:hover::after {
    bottom: 0;
  }

  &:hover {
    color: var(--dark);
  }
`;

export const ContactSocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  & span {
    color: var(--light);
    font-size: 1.2rem;
  }
`;
