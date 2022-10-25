import { WorksButton, WorksSection, WorksTitle } from "./WorksElements";

import CarouselComponent from "../Carousel/CarouselComponent";

const Works = () => {
  return (
    <WorksSection id="works">
      <WorksTitle>Proyectos</WorksTitle>
      <CarouselComponent />
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
