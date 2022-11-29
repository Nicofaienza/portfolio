import styled from "styled-components";

export const ContactSection = styled.div`
  width: 100%;
  background: var(--white);
`;

export const ContactContainer = styled.div`
  clip-path: polygon(50% 10%, 100% 0, 100% 60%, 100% 100%, 0 100%, 0% 60%, 0 0);
  background: var(--black);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 180px 0 96px;
  gap: 96px;
  margin: auto;

  svg {
    color: var(--light);
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`;

export const ContactTitle = styled.h3`
  font-size: 2rem;
  color: var(--white);
  letter-spacing: 2px;
  position: relative;
  padding: 8px 0;

  &::after {
    content: "";
    width: 70%;
    height: 2px;
    background: var(--white);
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
  @media screen and (max-width: 900px) {
    font-size: 1rem;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  min-width: 280px;
  gap: 16px;

  & label {
    width: 100%;
    height: 45px;
  }

  & input {
    width: 100%;
    height: 100%;
    background: var(--white);
    border: 2px solid var(--light);
    padding-left: 8px;
  }

  & input::placeholder {
    color: var(--dark);
  }

  & input:focus {
    outline: none;
    color: var(--black);
  }

  & input:focus::placeholder {
    color: #888;
  }

  & textarea {
    resize: none;
    width: 100%;
    height: 120px;
    background: var(--white);
    border: none;
    border: 2px solid var(--light);
    padding: 8px;
  }

  & textarea::placeholder {
    color: var(--dark);
  }

  & textarea:focus {
    outline: none;
    color: var(--black);
  }

  & textarea:focus::placeholder {
    color: #888;
  }
`;

export const ContactButton = styled.button`
  padding: 12px 18px;
  color: var(--white);
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid var(--primary);
  position: relative;
  z-index: 5;
  overflow: hidden;
  cursor: pointer;
  background: transparent;

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
