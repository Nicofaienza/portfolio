import {
  ContactContainer,
  ContactSection,
  ContactSpan,
  ContactForm,
  ContactTitle,
  ContactSocialsContainer,
  ContactButton,
} from "./ContactElements";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { ImArrowUp } from "react-icons/im";
import { AboutMeSecondInfoContainer } from "../about me/AboutMeElements";

const Contact = () => {
  window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  };
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactTitle>CONTACTO</ContactTitle>

        <ContactForm action="https://formspree.io/f/mknelnyl" method="POST">
          <ContactSpan>¡No dudes en consultarme!</ContactSpan>
          <label>
            <input
              type="name"
              name="name"
              placeholder="Nombre y apellido / Empresa"
            />
          </label>
          <label>
            <input type="email" name="email" placeholder="Email" />
          </label>

          <textarea name="message" placeholder="Dejame tu mensaje"></textarea>

          <ContactButton type="submit">Enviar</ContactButton>
        </ContactForm>
        <ContactSocialsContainer>
          <AboutMeSecondInfoContainer style={{ background: "transparent" }}>
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
