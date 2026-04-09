import React from "react";
import styled from "styled-components";
import { Reveal } from "./common/Reveal";
import { projects } from "../data/projects";

export const Projects = () => {
  return (
    <PROJECTS id="projects">
      <Reveal>
        <h2>Some of my work</h2>
      </Reveal>
      <Reveal>
        <div className="projects-container development">
          {projects.map((project) => (
            <article
              key={project.id}
              className="project-card col-2"
              tabIndex={0}
              aria-label={`${project.title}. Enterprise project; details available on request.`}
            >
              <div className="overlay"></div>
              <div className="overlay"></div>

              <div className="project-media" aria-hidden="true">
                <img
                  //src={`${process.env.PUBLIC_URL || ""}/${project.image}`}
                  alt=""
                />
              </div>

              <div className="project-content">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                <p className="enterprise-note">
                  🔒 Enterprise Project – Details available on request
                </p>
              </div>

              <div className="project-tech-stack tags" aria-label="Tech stack">
                {project.techStack.map((tech) => (
                  <div key={tech} className="tag">
                    {tech}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </PROJECTS>
  );
};

const PROJECTS = styled.section`
  padding-block: clamp(3.5rem, 6vw, 5rem);
  h2 {
    margin-bottom: clamp(2rem, 4vw, 3.5rem);
  }
  hr {
    margin-block: 2rem;
    border: none;
  }

  .projects-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
    padding-inline: 1rem;
    margin-bottom: clamp(2rem, 4vw, 4rem);
    .project-card {
      text-align: left;
      position: relative;
      border-radius: 0.5rem;
      overflow: hidden;
      background-blend-mode: hard-light;
      background-color: var(--background-light);
      border: 1px solid rgba(255, 255, 255, 0.06);
      transition: transform 200ms ease, border-color 200ms ease,
        background-color 200ms ease;
      outline: none;

      &:hover .overlay {
        top: 0%;
      }
      &:hover .project-content > * {
        transform: translateY(-6px);
      }
      &:hover {
        transform: translateY(-4px);
        border-color: rgba(223, 164, 100, 0.25);
      }
      &:focus-visible {
        transform: translateY(-2px);
        border-color: rgba(223, 164, 100, 0.35);
        box-shadow: 0 0 0 3px rgba(223, 164, 100, 0.18);
      }

      .project-media {
        width: 100%;
        aspect-ratio: 16 / 10;
        overflow: hidden;
        background-color: var(--background);
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.02);
          transition: transform 250ms ease;
        }
      }
      &:hover .project-media img,
      &:focus-visible .project-media img {
        transform: scale(1.05);
      }

      .project-content {
        position: relative;
        z-index: 11;
        width: 100%;
        padding: 1.1rem 1.1rem 1.25rem;
        h4 {
          color: var(--text);
          opacity: 0.9;
          margin-bottom: 0.5rem;
          line-height: 1.2;
          transition: transform 200ms ease;
          transform-origin: left;
        }
        p {
          transition: transform 200ms ease;
          transform-origin: left;
          color: var(--secondary);
          margin-bottom: 0.75rem;
          max-width: 62ch;
          line-height: 1.6;
        }
        .enterprise-note {
          margin-bottom: 0;
          color: var(--primary);
          opacity: 0.9;
          letter-spacing: 0.3px;
        }
      }
      .tags {
        position: absolute;
        top: 0.9rem;
        left: 0.9rem;
        z-index: 15;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.5rem;
        .tag {
          background-color: var(--background-lightest);
          padding: 0.35rem 0.65rem;
          border-radius: 50px;
          font-size: 0.8rem;
          color: var(--primary);
          letter-spacing: 0.5px;
          border: 1px solid rgba(223, 164, 100, 0.18);
        }
      }
      .overlay {
        position: absolute;
        inset: 0;
        top: 80%;
        background-color: var(--background-light);
        background-image: linear-gradient(to top, var(--background), transparent);
        opacity: 0.35;
        z-index: 10;
        transition: top 250ms ease, opacity 250ms ease;
      }
      .overlay:last-of-type {
        background-color: var(--background-lightest);
        top: 50%;
        opacity: 0.18;
      }
    }
    .project-card::before {
      position: absolute;
      content: "";
      inset: 0;
      background-color: var(--background-lightest);
      opacity: 0.1;
    }
    .project-card:first-of-type {
      border: 4px solid var(--primary);
    }
  }
  @media screen and (max-width: 1100px) {
    h2 {
      margin-bottom: 3rem;
    }
    hr {
      margin-block: 1.5rem;
      border: none;
    }

    .projects-container {
      grid-template-columns: 1fr;
      gap: 1.1rem;
      padding-inline: 0.5rem;
      margin-bottom: 3rem;
      .project-card.col-2 {
        grid-column: span 1;
        height: auto;
      }
      .project-card {
        .project-content {
          z-index: 8;
          p {
            max-width: 500px;
          }
        }
        .tags {
          z-index: 9;
        }
        .overlay {
          z-index: 8;
        }
      }
      .project-card:first-of-type {
        border: 3px solid var(--primary);
      }
    }
  }
  @media screen and (max-width: 850px) {
    h2 {
      margin-bottom: 2rem;
    }
    .projects-container {
      gap: 0.9rem;
      margin-bottom: 2rem;
      .project-card.col-2 {
        height: auto;
      }
      .project-card {
        .project-content {
          z-index: 8;
          p {
            max-width: 60ch;
            font-size: var(--p);
          }
        }
        .tags {
          z-index: 9;
        }
        .overlay {
          z-index: 8;
        }
      }
      .project-card:first-of-type {
        border: 3px solid var(--primary);
      }
    }
  }

  @media screen and (max-width: 700px) {
  }

  @media screen and (min-width: 900px) {
    .projects-container {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.5rem;
    }
  }

  @media screen and (min-width: 1280px) {
    .projects-container {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1.6rem;
    }
  }
`;
