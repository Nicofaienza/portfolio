import {
  HeaderImgContainer,
  HeaderInfoContainer,
  HeaderName,
  HeaderProfession,
  HeaderSecondInfoContainer,
  HeaderSection,
} from "./HeaderElements";
import perfil from "../../images/perfil.jpg";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Header = () => {
  return (
    <HeaderSection id="about-me">
        
      <div className="container-content">
        <HeaderInfoContainer>
          <HeaderName>NICOLÁS FAIENZA</HeaderName>
          <HeaderProfession>Frontend Developer</HeaderProfession>
          <HeaderSecondInfoContainer>
            <AiOutlineLinkedin />

            <AiOutlineGithub />
          </HeaderSecondInfoContainer>
        </HeaderInfoContainer>
      </div>
    </HeaderSection>
  );
};

export default Header;
