import {
  ContactContainer,
  ContactSection,
  ContactSpan,
  ContactForm,
  ContactTitle,
  ContactSocialsContainer,
} from "./ContactElements";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { ImArrowUp } from "react-icons/im";
import { AboutMeSecondInfoContainer } from "../about me/AboutMeElements";

import { WorksButton } from "../works/WorksElements";

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactTitle>CONTACTO</ContactTitle>

        <ContactForm>
          <ContactSpan>¡No dudes en consultarme!</ContactSpan>
          <label className="contact__form-label">
            <input
              autoFocus
              className="contact__form-input"
              placeholder="Nombre y apellido / Empresa"
            ></input>
          </label>
          <label className="contact__form-label">
            <input
              className="contact__form-input"
              type="email"
              placeholder="Email"
            ></input>
          </label>
          <textarea placeholder="Dejame tu mensaje..."></textarea>
          <WorksButton>Enviar</WorksButton>
        </ContactForm>
        <ContactSocialsContainer>
          <AboutMeSecondInfoContainer>
            <a
              target="__blank"
              href="https://www.linkedin.com/in/nicolas-faienza/"
            >
              <AiOutlineLinkedin />
              <tool-tip>Linkedin</tool-tip>
            </a>
            <a target="__blank" href="https://github.com/Nicofaienza">
              <AiOutlineGithub />
              <tool-tip>GitHub</tool-tip>
            </a>
          </AboutMeSecondInfoContainer>
          <span id="contact__socials-gmail">nicolas.faienza1@gmail.com</span>
        </ContactSocialsContainer>
        <ImArrowUp
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        />
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
