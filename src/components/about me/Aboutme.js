import {
  AboutMeDescription,
  AboutMeImgContainer,
  AboutMeInfoContainer,
  AboutMeName,
  AboutMeProfession,
  AboutMeSecondInfoContainer,
  AboutMeSection,
} from "./AboutMeElements";
import perfil from "../../images/perfil.jpg";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Aboutme = () => {
  return (
    <AboutMeSection id="about-me">
      <div className="container-content">
        <AboutMeImgContainer>
          <img id="perfil" src={perfil} />
        </AboutMeImgContainer>

        <AboutMeInfoContainer>
          <AboutMeName>Nicolás Faienza</AboutMeName>
          <AboutMeProfession>Frontend Developer</AboutMeProfession>

          <AboutMeDescription>
            Mi primer contacto con el mundo de la programación fue en el 2017
            con Python en la escuela secundaria. Solo aprendí los conceptos
            básicos de este lenguaje de programación e hice mis primeros
            programas pero no avancé mucho más. Luego de unos años, decidí
            retomar con el aprendizaje y a comienzos de 2022 empecé un curso de
            HTML y CSS. Para practicar hice mis primeras páginas web estáticas.
            Continué con JavaScript y el manejo del DOM. Al tener un
            conocimiento aceptable de estas tecnologías, decidí aprender a usar
            ReactJS y poner en práctica todos mis conocimientos a través de la
            realización de proyectos. Durante este periodo, utilicé librerías
            como react-icons, styled-components, react-intersection-observer y
            react-router. Aprendí a consumir API's, a maquetear un proyecto de
            Figma en Perfect Pixel y a usar Git y GitHub. Cada día sigo
            aprendiendo y consumiendo contenido de grandes profesionales para
            mejorar en esta profesión.
          </AboutMeDescription>
        </AboutMeInfoContainer>

        <AboutMeSecondInfoContainer>
          <AiOutlineLinkedin />

          <AiOutlineGithub />
        </AboutMeSecondInfoContainer>
      </div>
    </AboutMeSection>
  );
};

export default Aboutme;
