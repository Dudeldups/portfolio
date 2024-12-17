import { useTranslation } from "react-i18next";
import { mainSkills, skills } from "../../data/skills";
import "./_Skills.scss";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className="skills">
      <h2>{t("SKILLS.TITLE")}</h2>
      <p>{t("SKILLS.DESCRIPTION")}</p>

      <ul>
        {skills.map(
          (skill, index) =>
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
