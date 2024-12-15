export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  url: string;
  repositoryUrl: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Scoot website",
    description: "A multi-page website for a fictional scooter company",
    image: "project-preview-scoot.png",
    techStack: ["React", "TypeScript", "Styled Components"],
    url: "https://dudeldups.github.io/FM-scoot-website/",
    repositoryUrl: "https://github.com/Dudeldups/FM-scoot-website",
  },
  {
    id: 2,
    title: "Portfolio website",
    description: "My personal portfolio website",
    image: "project-preview-portfolio.png",
    techStack: ["React", "TypeScript", "Sass", "BACKEND"],
    url: "https://dudeldups.dev/",
    repositoryUrl: "https://github.com/Dudeldups/portfolio",
  },
  {
    id: 3,
    title: "Maker landing page",
    description: "A landing page for a fictional product",
    image: "project-preview-maker.png",
    techStack: ["HTML", "TypeScript", "Tailwind CSS"],
    url: "https://dudeldups.github.io/FM-maker-landing-page/",
    repositoryUrl: "https://github.com/Dudeldups/FM-maker-landing-page",
  },
  {
    id: 4,
    title: "Cofferoasters website",
    description: "A multi-page website for a fictional coffee company",
    image: "project-preview-cofferoasters.png",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    url: "https://coffeeroasters-9000.netlify.app/",
    repositoryUrl: "https://github.com/Dudeldups/FM-coffeeroasters",
  },
];
