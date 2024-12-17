export type Project = {
  title: string;
  description: { en: string; de: string };
  image: string;
  techStack: string[];
  url: string;
  repositoryUrl: string;
};

export const projects: Project[] = [
  {
    title: "Scoot website",
    description: {
      en: "A multi-page website for a fictional scooter company",
      de: "Eine mehrseitige Website für ein fiktives Rollerunternehmen",
    },
    image: "/assets/images/project-previews/scoot.png",
    techStack: ["React", "TypeScript", "Styled Components"],
    url: "https://dudeldups.github.io/FM-scoot-website/",
    repositoryUrl: "https://github.com/Dudeldups/FM-scoot-website",
  },
  {
    title: "Portfolio website",
    description: {
      en: "My personal portfolio website",
      de: "Meine persönliche Portfolio-Website",
    },
    image: "/assets/images/project-previews/portfolio.png",
    techStack: ["React", "TypeScript", "Sass"],
    url: "https://dudeldups.dev/",
    repositoryUrl: "https://github.com/Dudeldups/portfolio",
  },
  {
    title: "Maker landing page",
    description: {
      en: "A landing page for a fictional product",
      de: "Eine Landingpage für ein fiktives Produkt",
    },
    image: "/assets/images/project-previews/maker.png",
    techStack: ["HTML", "TypeScript", "Tailwind CSS"],
    url: "https://dudeldups.github.io/FM-maker-landing-page/",
    repositoryUrl: "https://github.com/Dudeldups/FM-maker-landing-page",
  },
  {
    title: "Cofferoasters website",
    description: {
      en: "A multi-page website for a fictional coffee company",
      de: "Eine mehrseitige Website für ein fiktives Kaffeeunternehmen",
    },
    image: "/assets/images/project-previews/coffeeroasters.png",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    url: "https://coffeeroasters-9000.netlify.app/",
    repositoryUrl: "https://github.com/Dudeldups/FM-coffeeroasters",
  },
];
