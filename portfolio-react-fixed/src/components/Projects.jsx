import React from "react";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

const projects = [
  {
    id: 1,
    title: "Puzzle",
    text:
      "A dynamic JavaScript puzzle game built from scratch using data from a remote API. Users can interact, change colors, and check puzzle completion.",
    image: project1,
    link: "https://reimagined-fishstick-4j994xj4v5wrfj559.github.dev/"
    
  },
  {
    id: 2,
    title: "Lawncare",
    text:
      "A responsive website layout using CSS Grid and media queries. Demonstrates adaptive layouts for desktop, tablet, and mobile devices.",
    image: project2,
    link: "https://potential-barnacle-g4ww9g496q45c976.github.dev/"
    
  },
  {
    id: 3,
    title: "Acme Adventure Travel Website",
    text:
      "A responsive business website designed for all devices with mobile-first layout, clean navigation, and optimized content.",
    image: project3,
    link: "https://animated-fortnight-r4vv9j49wg6wf5p5w.github.dev/"
  },
  {
    id: 4,
    title: "ICA – Exploring Express.js",
    text:
      "A backend API built with Express.js featuring full CRUD operations, showing server-side development and REST API structure.",
    image: project4,
    link: "https://shiny-goldfish-v6774x64wp6qfpp65.github.dev/"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-underline" />

      <div className="projects-list">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className={
              index % 2 === 0
                ? "project-row project-row-left"
                : "project-row project-row-right"
            }
          >
            <div className="project-text">
              <h3>{project.title}</h3>
              <p>{project.text}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-small"
              >
                View Project
              </a>
            </div>

            <div className="project-image-wrap">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={project.image} alt={project.title} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
