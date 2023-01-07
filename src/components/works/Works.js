import {
  WorkCardsContainer,
  WorksSection,
  WorksButton,
  WorksCardModal,
} from "./WorksElements";
import Card from "./Card";
import data from "./data.js";
import { TitleSection } from "../about me/AboutMeElements";

const Works = () => {
  return (
    <WorksSection id="works">
      <TitleSection>TRABAJOS</TitleSection>
      <WorkCardsContainer>
        {data.map((work) => (
          <Card work={work} />
        ))}
      </WorkCardsContainer>
      <WorksButton
        href="https://github.com/Nicofaienza?tab=repositories"
        target="_blank"
      >
        Ver más
      </WorksButton>
    </WorksSection>
  );
};

export default Works;
