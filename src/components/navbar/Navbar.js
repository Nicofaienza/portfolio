import {
  NavbarLi,
  NavbarLink,
  NavbarUl,
  NavbarWrapper,
} from "./NavbarElements";
import { FaUserTie } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineContacts } from "react-icons/ai";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarUl>
        <NavbarLi>
          <div id="tapa"></div>
          <a href="#about-me">
            <FaUserTie id="about-me-icon" />
          </a>

          <NavbarLink id="about-me-link" href="#about-me">
            Sobre mi
          </NavbarLink>
        </NavbarLi>
        <NavbarLi>
          <div id="tapa"></div>
          <a href="#skills">
            <GiSkills id="skills-icon" />
          </a>

          <NavbarLink id="skills-link" href="#skills">
            Habilidades
          </NavbarLink>
        </NavbarLi>
        <NavbarLi>
          <div id="tapa"></div>
          <a href="#works">
            <MdWorkOutline id="works-icon" />
          </a>

          <NavbarLink id="works-link" href="#works">
            Trabajos
          </NavbarLink>
        </NavbarLi>
        <NavbarLi>
          <div id="tapa"></div>
          <a href="#contact">
            <AiOutlineContacts id="contact-icon" />
          </a>

          <NavbarLink id="contact-link" href="#contact">
            Contacto
          </NavbarLink>
        </NavbarLi>
      </NavbarUl>
    </NavbarWrapper>
  );
};

export default Navbar;
