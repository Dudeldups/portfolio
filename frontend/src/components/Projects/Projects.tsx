import { ImNewTab } from "react-icons/im";
import { projects } from "../../data/projects";
import { skills } from "../../data/skills";
import Skills from "./_Skills";
import "./Projects.scss";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <Skills />

      <div className="projects__inner">
        <h2>My Projects</h2>
        <p>
          Have a look at some of the projects I've worked on. You can also visit
          the live demo or view the repository on GitHub.
        </p>

        <ul className="projects__list">
          {projects.map((project, index) => (
            <li key={`project-${index}`} className="project">
              <figure>
                <img src={project.image} alt={project.title} />

                <figcaption>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </figcaption>
              </figure>

              <div className="project__tech">
                <strong>Technologies used:</strong>{" "}
                {skills.map(
                  (skill, index) =>
                    project.techStack.includes(skill.name) && (
                      <span key={`techName-${index}`}>
                        {skill.icon}
                        <span>{skill.name}</span>
                      </span>
                    )
                )}
              </div>

              <div className="project__links">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <span>Live Demo</span>
                  <ImNewTab />
                </a>
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer">
                  <span>View Repository</span>
                  <ImNewTab />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
