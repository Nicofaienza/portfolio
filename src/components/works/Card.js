import {
  WorksCard,
  WorksCardContainer,
  WorksCardImgContainer,
  WorksCardName,
  WorksCardStack,
} from "./WorksElements";
import { GrDeploy } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";

const Card = ({ work }) => {
  return (
    <WorksCard>
      <WorksCardContainer>
        <WorksCardImgContainer target="_blank" href={work.linkDeploy}>
          <img loading="lazy" src={work.img} alt={work.name} />
        </WorksCardImgContainer>
        <WorksCardName>{work.name.toUpperCase()}</WorksCardName>

        <WorksCardStack>
          {work.stack.map((work) => (
            <span key={work}>{work}</span>
          ))}
        </WorksCardStack>
        <div id="card-icons-container">
          <a href={work.linkDeploy} target="_blank">
            <GrDeploy />
            <tool-tip>Deploy</tool-tip>
          </a>

          <a href={work.linkRepo} target="_blank">
            <AiFillGithub />
            <tool-tip>Code</tool-tip>
          </a>
        </div>
      </WorksCardContainer>
    </WorksCard>
  );
};

export default Card;
