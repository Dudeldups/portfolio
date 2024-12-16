import { mainSkills, skills } from "../../data/skills";
import "./_Skills.scss";

const Skills = () => {
  return (
    <div className="skills">
      <h2>Tech Stack</h2>
      <p>Here are some of the technologies I've worked with</p>

      <ul>
        {skills.map(
          (skill, index) =>
            // check if the skill is a main skill (is in the mainSkills array)
            mainSkills.includes(skill.name) && (
              <li key={`mainSkill-${index}`}>
                <figure>
                  {skill.icon}
                  <figcaption>{skill.name}</figcaption>
                </figure>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default Skills;
