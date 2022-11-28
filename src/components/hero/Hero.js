import {
  HeroSection,
  HeroContainer,
  HeroName,
  HeroTitle,
  HeroBg,
  Button,
} from "./HeroElements";
import heroVideo from "./videos/bg-hero.mp4";

const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroBg>
        <video autoPlay loop muted>
          <source src={heroVideo} type="video/mp4"></source>
        </video>
      </HeroBg>
      <HeroContainer id="hero__container">
        <HeroName>Nicolás Faienza</HeroName>
        <HeroTitle>Frontend Developer</HeroTitle>
        <Button href="#works">Ver trabajos</Button>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
