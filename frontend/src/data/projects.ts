export type Project = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  url: string;
  repositoryUrl: string;
};

export const projects: Project[] = [
  {
    title: "Scoot website",
    description: "A multi-page website for a fictional scooter company",
    image: "/assets/images/project-previews/scoot.png",
    techStack: ["React", "TypeScript", "Styled Components"],
    url: "https://dudeldups.github.io/FM-scoot-website/",
    repositoryUrl: "https://github.com/Dudeldups/FM-scoot-website",
  },
  {
    title: "Portfolio website",
    description: "My personal portfolio website",
    image: "/assets/images/project-previews/portfolio.png",
    techStack: ["React", "TypeScript", "Sass"],
    url: "https://dudeldups.dev/",
    repositoryUrl: "https://github.com/Dudeldups/portfolio",
  },
  {
    title: "Maker landing page",
    description: "A landing page for a fictional product",
    image: "/assets/images/project-previews/maker.png",
    techStack: ["HTML", "TypeScript", "Tailwind CSS"],
    url: "https://dudeldups.github.io/FM-maker-landing-page/",
    repositoryUrl: "https://github.com/Dudeldups/FM-maker-landing-page",
  },
  {
    title: "Cofferoasters website",
    description: "A multi-page website for a fictional coffee company",
    image: "/assets/images/project-previews/coffeeroasters.png",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    url: "https://coffeeroasters-9000.netlify.app/",
    repositoryUrl: "https://github.com/Dudeldups/FM-coffeeroasters",
  },
];
