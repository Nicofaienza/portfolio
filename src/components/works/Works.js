import {
  WorksArrow,
  WorksButton,
  WorksCard,
  WorksCardImgContainer,
  WorksCardName,
  WorksCardStack,
  WorksContainer,
  WorksSection,
  WorksTitle,
  WorksCardMain,
} from "./WorksElements";
import data from "./data.js";
import { GrDeploy } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";
import { useState } from "react";

const Works = () => {
  const [positionMain, setPositionMain] = useState(1);

  const dataLength = data.length;
  const main = data[positionMain];
  const lateral1 = data[positionMain === 0 ? dataLength - 1 : positionMain - 1];
  const lateral2 = data[positionMain === dataLength - 1 ? 0 : positionMain + 1];
  console.log("main name", main.name);
  console.log("lateral1 name", lateral1.name);
  console.log("lateral2 name", lateral2.name);

  return (
    <WorksSection id="works">
      <WorksTitle>Trabajos</WorksTitle>
      <WorksContainer>
        <WorksArrow id="works-arrow-left">
          <FaRegArrowAltCircleLeft
            onClick={() => {
              positionMain === 0
                ? setPositionMain(dataLength - 1)
                : setPositionMain(positionMain - 1);
            }}
          />
        </WorksArrow>
        <WorksArrow id="works-arrow-right">
          <FaRegArrowAltCircleRight
            onClick={() => {
              positionMain === dataLength - 1
                ? setPositionMain(0)
                : setPositionMain(positionMain + 1);
            }}
          />
        </WorksArrow>

        <WorksCard>
          <WorksCardImgContainer>
            <a href={lateral1.linkDeploy} target="_blank">
              <img src={lateral1.img} />
            </a>
          </WorksCardImgContainer>
          <WorksCardName>{lateral1.name}</WorksCardName>

          <WorksCardStack>
            {lateral1.stack.map((work) => (
              <span>{work}</span>
            ))}
          </WorksCardStack>
          <div id="card-icons-container">
            <a href={lateral1.linkDeploy} target="_blank">
              <GrDeploy />
            </a>

            <a href={lateral1.linkRepo} target="_blank">
              <AiFillGithub />
            </a>
          </div>
        </WorksCard>

        <WorksCardMain>
          <div id="works-card-img-container">
            <a href={main.linkDeploy} target="_blank">
              <img src={main.img} />
            </a>
          </div>
          <WorksCardName>{main.name}</WorksCardName>

          <WorksCardStack>
            {main.stack.map((work) => (
              <span>{work}</span>
            ))}
          </WorksCardStack>
          <div id="card-icons-container">
            <a href={main.linkDeploy} target="_blank">
              <GrDeploy />
            </a>

            <a href={main.linkRepo} target="_blank">
              <AiFillGithub />
            </a>
          </div>
        </WorksCardMain>

        <WorksCard>
          <WorksCardImgContainer>
            <a href={lateral2.linkDeploy} target="_blank">
              <img src={lateral2.img} />
            </a>
          </WorksCardImgContainer>
          <WorksCardName>{lateral2.name}</WorksCardName>

          <WorksCardStack>
            {lateral2.stack.map((work) => (
              <span>{work}</span>
            ))}
          </WorksCardStack>
          <div id="card-icons-container">
            <a href={lateral2.linkDeploy} target="_blank">
              <GrDeploy />
            </a>

            <a href={lateral2.linkRepo} target="_blank">
              <AiFillGithub />
            </a>
          </div>
        </WorksCard>
      </WorksContainer>
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
