import {
  NavbarLi,
  NavbarLink,
  NavbarUl,
  NavbarWrapper,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarUl>
        <NavbarLi>
          <NavbarLink id="about-me-link" href="#about-me">
            SOBRE MI
          </NavbarLink>
        </NavbarLi>

        <NavbarLi>
          <NavbarLink id="works-link" href="#works">
            TRABAJOS
          </NavbarLink>
        </NavbarLi>
        <NavbarLi>
          <NavbarLink id="contact-link" href="#contact">
            CONTACTO
          </NavbarLink>
        </NavbarLi>
      </NavbarUl>
    </NavbarWrapper>
  );
};

export default Navbar;
