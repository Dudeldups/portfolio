import { ImNewTab } from "react-icons/im";
import { projects } from "../../data/projects";
import { skills } from "../../data/skills";
import Skills from "./_Skills";
import "./Projects.scss";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t, i18n } = useTranslation();

  const appLanguage = i18n.resolvedLanguage === "de" ? "de" : "en";

  return (
    <section id="projects" className="projects">
      <Skills />

      <div className="projects__inner">
        <h2>{t("PROJECTS.TITLE")}</h2>
        <p>{t("PROJECTS.DESCRIPTION")}</p>

        <ul className="projects__list">
          {projects.map((project, index) => (
            <li key={`project-${index}`} className="project">
              <figure>
                <img src={project.image} alt={project.title} />

                <figcaption>
                  <h3>{project.title}</h3>
                  <p>{project.description[appLanguage]}</p>
                </figcaption>
              </figure>

              <div className="project__tech">
                <span className="sr-only">{t("PROJECTS.TECH_USED")}</span>{" "}
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
                  <span>Repository</span>
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
