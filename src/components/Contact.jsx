import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Reveal } from "./common/Reveal";

export const Contact = () => {
  return (
    <CONTACT id="contact">
      <Reveal>
        <h2>Find Me Here</h2>
      </Reveal>
      <Reveal>
        <div className="contact-container">
          <a
            href="https://github.com/dagar-Sahil03"
            target="_blank"
            id="contact-github"
          >
            <FontAwesomeIcon icon={faGithub} className="contact-icon" />
            <div className="tooltip">Github</div>
          </a>
          <a
            href="https://www.linkedin.com/in/sahil-dagar2002/"
            target="_blank"
            id="contact-linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
            <div className="tooltip">LinkedIn</div>
          </a>
          <a href="tel:+919643782988" id="contact-phone">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <div className="tooltip">Contact</div>
          </a>
          <a
            id="contact-email"
            href="mailto:Sahildagar3602@gmail.com"
            target="_blank"
          >
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <div className="tooltip">Gmail</div>
          </a>
        </div>
        <div className="vl"></div>
      </Reveal>
    </CONTACT>
  );
};

const CONTACT = styled.div`
  padding-block: clamp(3.5rem, 6vw, 5rem);
  padding-inline: 0;
  .contact-container {
    padding-block: 2.5rem;
    display: flex;
    gap: 4rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .contact-icon {
    font-size: 2rem;
  }
  input {
    padding: 0.65rem 1rem;
    border-radius: 50px;
    background-color: transparent;
    border: 2px solid var(--text);
    width: min(20rem, 100%);
    color: var(--text);
  }
  @media screen and (max-width: 1100px) {
    padding-block: 3rem;

    .contact-container {
      padding-block: 2rem;
      gap: 2rem;
    }
    .contact-icon {
      font-size: 1.75rem;
    }
  }
  @media screen and (max-width: 700px) {
    padding-block: 2.5rem;
    .contact-container {
      padding-block: 1rem;
      gap: 1rem;
    }
    .contact-icon {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 500px) {
    .contact-icon {
      font-size: 1.25rem;
    }
  }
`;
