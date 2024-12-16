import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaSass,
  FaLess,
} from "react-icons/fa6";
import {
  SiTailwindcss,
  SiStyledcomponents,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

export const mainSkills: string[] = [
  "HTML",
  "CSS",
  "TypeScript",
  "React",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
];

export type Skill = {
  name: string;
  icon: React.ReactNode;
};

export const skills: Skill[] = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    name: "Sass",
    icon: <FaSass />,
  },
  {
    name: "Less",
    icon: <FaLess />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Styled Components",
    icon: <SiStyledcomponents />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
  },
];
