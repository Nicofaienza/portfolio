import {
  AboutMeCard,
  AboutMeCardsContainer,
  AboutMeContainer,
  AboutMeDescription,
  AboutMeImgContainer,
  AboutMeInfoContainer,
  AboutMeName,
  AboutMeSecondInfoContainer,
  AboutMeSection,
  AboutMeStack,
  AboutMeStackTitle,
  TitleSection,
} from "./AboutMeElements";
import perfil from "../../images/perfil.png";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

import responsiveIcon from "../../images/responsive-icon.png";
import dynamicIcon from "../../images/dynamic-icon.png";

import {
  SkillsIconsContainer,
  SkillsIconsLi,
} from "../skills/SkillsElements.js";

import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const Aboutme = () => {
  return (
    <AboutMeSection id="about-me">
      <TitleSection>SOBRE MI</TitleSection>
      <div className="container-content ">
        <AboutMeContainer>
          <AboutMeImgContainer>
            <img loading="lazy" id="perfil" src={perfil} />
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
          </AboutMeImgContainer>

          <AboutMeInfoContainer>
            <AboutMeName>Nicolás Faienza</AboutMeName>
            <AboutMeDescription>
              Soy desarrollador frontend de formación autodidacta residente en
              Mar del Plata, Argentina. <br />
              Me apasiona crear soluciones tecnológicas eficientes y estéticas.
            </AboutMeDescription>
          </AboutMeInfoContainer>
        </AboutMeContainer>
        <div id="skills-container">
          <AboutMeCardsContainer>
            <AboutMeCard>
              <img loading="lazy" src={responsiveIcon} alt="" />
              <p>Mis trabajos se adaptan a cualquier dispositivo.</p>
            </AboutMeCard>
            <AboutMeCard>
              <img loading="lazy" src={dynamicIcon} alt="" />
              <p>Desarrollo experiencias de usuario intuitivas y dinámicas.</p>
            </AboutMeCard>
          </AboutMeCardsContainer>

          <AboutMeStack>
            <AboutMeStackTitle>STACK</AboutMeStackTitle>
            <SkillsIconsContainer>
              <SkillsIconsLi>
                <AiFillHtml5 />
                <tool-tip>HTML5</tool-tip>
              </SkillsIconsLi>

              <SkillsIconsLi>
                <DiCss3 />
                <tool-tip>CSS3</tool-tip>
              </SkillsIconsLi>

              <SkillsIconsLi>
                <SiJavascript />
                <tool-tip>JavaScript</tool-tip>
              </SkillsIconsLi>

              <SkillsIconsLi>
                <FaReact />
                <tool-tip>React JS</tool-tip>
              </SkillsIconsLi>

              <SkillsIconsLi>
                <FaGitAlt />
                <tool-tip>Git</tool-tip>
              </SkillsIconsLi>

              <SkillsIconsLi>
                <FaGithub />
                <tool-tip>GitHub</tool-tip>
              </SkillsIconsLi>
            </SkillsIconsContainer>
          </AboutMeStack>
        </div>
      </div>
    </AboutMeSection>
  );
};

export default Aboutme;
