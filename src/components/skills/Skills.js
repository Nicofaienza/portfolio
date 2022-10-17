import {
  SkillsIconsContainer,
  SkillsIconsLi,
  SkillsSection,
  SkillsTitle,
} from "./SkillsElements";

import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiNodedotjs, SiJavascript } from "react-icons/si";

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <div className="skills-container">
        <SkillsTitle>Tecnologías que uso</SkillsTitle>
        <SkillsIconsContainer>
          <SkillsIconsLi>
            <AiFillHtml5 />
          </SkillsIconsLi>

          <SkillsIconsLi>
            <DiCss3 />
          </SkillsIconsLi>

          <SkillsIconsLi>
            <SiJavascript />
          </SkillsIconsLi>

          <SkillsIconsLi>
            <FaReact />
          </SkillsIconsLi>
        </SkillsIconsContainer>
      </div>
      <div className="skills-container">
        <SkillsTitle>Aprendiendo</SkillsTitle>

        <SkillsIconsContainer>
          <SkillsIconsLi>
            <SiTypescript />
          </SkillsIconsLi>
          <SkillsIconsLi>
            <SiNodedotjs />
          </SkillsIconsLi>
        </SkillsIconsContainer>
      </div>
    </SkillsSection>
  );
};

export default Skills;
