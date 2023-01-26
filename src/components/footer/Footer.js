import React from "react";
import {
  FooterContainer,
  FooterEmail,
  FooterLinks,
  FooterLinksLi,
  FooterWrapper,
} from "./FooterElements";

import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterEmail>
          Email: <span>nicolas.faienza1@gmail.com</span>
        </FooterEmail>

        <FooterLinks>
          <FooterLinksLi>
            <a
              href="https://www.linkedin.com/in/nicolas-faienza/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </FooterLinksLi>
          <FooterLinksLi>
            <a href="https://github.com/Nicofaienza" target="_blank">
              <FaGithubSquare />
            </a>
          </FooterLinksLi>
        </FooterLinks>
      </FooterContainer>
    </FooterWrapper>
  );
}
