import React from "react";
import styled from "styled-components";
import Ticker from "framer-motion-ticker";

export const Skills = () => {
  return (
    <SKILLS id="skills">
      <h3>My Stack</h3>
      <div className="skills-row">
        <h4>Tools</h4>
        <Ticker duration={60} direction={-1}>
          <div className="skills-card">
            <img src={`${process.env.PUBLIC_URL || ''}/aws.png`} className="skills-card-img" />
            <p className="skills-card-name">Amazon Web Service</p>
          </div>
          <div className="skills-card">
            <img src={`${process.env.PUBLIC_URL || ''}/azure.webp`} className="skills-card-img" />
            <p className="skills-card-name">Azure</p>
          </div>
          <div className="skills-card">
            <img src={`${process.env.PUBLIC_URL || ''}/GCP.webp`} className="skills-card-img" />
            <p className="skills-card-name">Google Cloud Platform</p>
          </div>

          <div className="skills-card">
            <img src={`${process.env.PUBLIC_URL || ''}/DigitalOcean.svg`} className="skills-card-img" />
            <p className="skills-card-name">DigitalOcean</p>
          </div>
          <div className="skills-card">
            <img src={`${process.env.PUBLIC_URL || ''}/jenkins.svg`} className="skills-card-img" />
            <p className="skills-card-name">Jenkins</p>
          </div>
          <div className="skills-card">
            <img src={`${process.env.PUBLIC_URL || ''}/kubernetes.svg`} className="skills-card-img" />
            <p className="skills-card-name">Kubernetes</p>
          </div>
          <div className="skills-card">
            <img src={`${process.env.PUBLIC_URL || ''}/linux-tux-colour.svg`} className="skills-card-img" />
            <p className="skills-card-name">Linux</p>
          </div>
          <div className="skills-card">
            <img src={`${process.env.PUBLIC_URL || ''}/terraform.svg`} className="skills-card-img" />
            <p className="skills-card-name">Terraform</p>
          </div>
          <div className="skills-card">
            <img src={`${process.env.PUBLIC_URL || ''}/grafana.svg`} className="skills-card-img" />
            <p className="skills-card-name">Grafana</p>
          </div>
          <div className="skills-card">
            <img src={`${process.env.PUBLIC_URL || ''}/docker.svg`} className="skills-card-img" />
            <p className="skills-card-name">Docker</p>
          </div>
          <div className="skills-card">
            <img src={`${process.env.PUBLIC_URL || ''}/kubernetes.svg`} className="skills-card-img" />
            <p className="skills-card-name">Kubernetes</p>
          </div>
        </Ticker>
      </div>
      <div className="skills-row">
        <Ticker duration={60} direction={1} className="container">
          <div className="skills-card">
            <img
              src={`${process.env.PUBLIC_URL || ""}/github-1.svg`}
              className="skills-card-img"
            />
            <p className="skills-card-name">GitHub</p>
          </div>
          <div className="skills-card">
            <img
              src={`${process.env.PUBLIC_URL || ""}/GIT.svg`}
              className="skills-card-img"
            />
            <p className="skills-card-name">GIT</p>
          </div>
          <div className="skills-card">
            <img
              src={`${process.env.PUBLIC_URL || ""}/apache.png`}
              className="skills-card-img"
            />
            <p className="skills-card-name">Apache</p>
          </div>
          <div className="skills-card">
            <img
              src={`${process.env.PUBLIC_URL || ""}/nginx.svg`}
              className="skills-card-img"
            />
            <p className="skills-card-name">Nginx</p>
          </div>
          <div className="skills-card">
            <img
              src={`${process.env.PUBLIC_URL || ""}/bash.svg`}
              className="skills-card-img"
            />
            <p className="skills-card-name">Bash</p>
          </div>
          <div className="skills-card">
            <img
              src={`${process.env.PUBLIC_URL || ""}/python.png`}
              className="skills-card-img"
            />
            <p className="skills-card-name">Python</p>
          </div>
        </Ticker>
        <h4>Tools</h4>
      </div>
    </SKILLS>
  );
};

const SKILLS = styled.section`
  grid-area: skills;
  background: var(--background-light);
  border-radius: 0.5rem;
  padding: 1.75rem 1.25rem;
  h3 {
    color: var(--secondary);
    margin-bottom: 0.75rem;
  }
  h4 {
    color: var(--secondary);
  }
  .skills-row {
    width: 100%;
    margin-inline: auto;
    padding: 0.5rem 0;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    .skills-card {
      background: var(--background-lightest);
      padding: 0.75rem;
      border-radius: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-inline: 0.75rem;
      img {
        width: 3rem;
        height: 3rem;
        object-fit: contain;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    padding: 1.25rem 1rem;
    .skills-row {
      width: 90%;
      .skills-card {
        img {
          width: 2.5rem;
          height: 2.5rem;
        }
      }
    }
  }
  @media screen and (max-width: 700px) {
    .skills-row {
      width: 100%;
      .skills-card {
        img {
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
  @media screen and (max-width: 500px) {
    .skills-row {
      .skills-card {
        border-radius: 0.25rem;
        img {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
`;
