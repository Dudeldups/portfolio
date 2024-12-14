import Skills from "./_Skills";
import "./Projects.scss";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <Skills />

      <div className="projects__inner">
        <h2>My Projects</h2>
        <p>
          Here are some of the projects I've worked on. Click on the project to
          see more details.
        </p>

        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
