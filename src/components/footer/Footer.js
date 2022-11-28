import React from "react";
import { FooterLi, FooterList, FooterSection } from "./FooterElements";

function Footer() {
  return (
    <FooterSection>
      <FooterList>
        <FooterLi>
          <a>Linkedin</a>
        </FooterLi>
        <FooterLi>
          <a>GitHub</a>
        </FooterLi>
        <FooterLi>nicolas.faienza1@gmail.com</FooterLi>
      </FooterList>
    </FooterSection>
  );
}

export default Footer;
