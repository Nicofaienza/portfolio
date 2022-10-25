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
          <img src={work.img} />
        </a>
      </WorksCardImgContainer>
      <WorksCardName>{work.name}</WorksCardName>

      <WorksCardStack>
        {work.stack.map((work) => (
          <span>{work}</span>
        ))}
      </WorksCardStack>
      <div id="card-icons-container">
        <a href={work.linkDeploy} target="_blank">
          <GrDeploy />
        </a>

        <a href={work.linkRepo} target="_blank">
          <AiFillGithub />
        </a>
      </div>
    </WorksCard>
  );
};

export default Card;
