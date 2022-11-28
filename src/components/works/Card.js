import {
  WorksCard,
  WorksCardImgContainer,
  WorksCardName,
  WorksCardStack,
} from "./WorksElements";
import { GrDeploy } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";

const Card = ({ work }) => {
  return (
    <WorksCard>
      <WorksCardImgContainer>
        <a href={work.linkDeploy} target="_blank">
          <img loading="lazy" src={work.img} />
        </a>
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

        <a title="Code" href={work.linkRepo} target="_blank">
          <AiFillGithub />
          <tool-tip>Code</tool-tip>
        </a>
      </div>
    </WorksCard>
  );
};

export default Card;
