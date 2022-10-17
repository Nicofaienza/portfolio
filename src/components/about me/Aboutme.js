import {
  AboutMeDescription,
  AboutMeImgContainer,
  AboutMeInfoContainer,
  AboutMeName,
  AboutMeProfession,
  AboutMeSecondInfoContainer,
  AboutMeSection,
  AboutMeUbication,
  AboutMeYear,
} from "./AboutMeElements";
import perfil from "../../images/perfil.jpg";
import { HiOutlineCake } from "react-icons/hi";
import { RiMapPin2Line } from "react-icons/ri";

const Aboutme = () => {
  return (
    <AboutMeSection id="about-me">
      <AboutMeImgContainer>
        <img id="perfil" src={perfil} />
      </AboutMeImgContainer>

      <AboutMeInfoContainer>
        <AboutMeName>Nicolás Faienza</AboutMeName>
        <AboutMeProfession>Frontend Developer</AboutMeProfession>

        <AboutMeDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          aliquid eius dolorem quisquam ea! Tempora, odio facere nesciunt enim
          delectus praesentium consequatur exercitationem assumenda vel culpa
          sequi error! Distinctio, eum!
        </AboutMeDescription>
      </AboutMeInfoContainer>

      <AboutMeSecondInfoContainer>
        <div>
          <HiOutlineCake />
          <AboutMeYear>02/09/1997</AboutMeYear>
        </div>
        <div>
          <RiMapPin2Line />
          <AboutMeUbication>
            Mar del Plata <br /> Argentina
          </AboutMeUbication>
        </div>
      </AboutMeSecondInfoContainer>
    </AboutMeSection>
  );
};

export default Aboutme;
