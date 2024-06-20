import {
  o2d3_logo,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  linux,
  php,
  python,
  project_1,
  project_2,
  project_3,
  sql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "LAMP Stack Development",
    icon: backend,
  },
  {
    title: "MERN Stack Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "php",
    icon: php,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: sql,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Linux",
    icon: linux,
  },
];

const experiences = [
  {
    title: "Full Stack Engineer Intern",
    company_name: "O2D3",
    link: "https://o2d3.com/",
    icon: o2d3_logo,
    iconBg: "#383E56",
    date: "Feb 2024 - Present",
    "points": [
    "Joined a startup focused on technology-driven solutions for physiotherapy and fitness, aiming to address musculoskeletal problems and promote wellness.",
    "Collaborated with cross-functional teams to integrate user-centric features.",
    "Gained exposure to LAMP stack innovations using the internal framework 'FIBENIS', enhancing platform performance and user experience.",
    "Participated in various phases of the software development lifecycle, gaining insights into design, deployment, and maintenance processes.",
    "Observed manual and automation testing practices to ensure software quality and learned about integrating security measures."
  ]
  },
];

const projects = [
  {
    name: " A Notion Clone",
    description:
      "Developed a responsive clone of Notion with advanced functionalities, users can create an unlimited number of notes and publish them.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Convex",
        color: "green-text-gradient",
      },

      {
        name: "Clerk  ",
        color: "pink-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },
    ],
    image: project_1,
    source_code_link: "https://github.com/dhanushwaran06/Notion-clone-nextjs",
  },
  {
    name: "Job Networking Platform",
    description:
      "I designed and developed a job platform using the MERN stack. Inspired by Fiverr, it connects job seekers to hirers and facilitates communication.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "SASS",
        color: "green-text-gradient",
      },

      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      // {
      //   name: "Shadcn/ui",
      //   color: "green-text-gradient",
      // },
    ],
    image: project_2,
    source_code_link: "https://github.com/dhanushwaran06/Freelancing-Website",
  },
  {
    name: "Bike Service Website",
    description:
      " Create connections between bike service seekers and service providers. This project streamlines the process of matching customers with service providers.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "material ui",
        color: "blue-text-gradient",
      },
    ],
    image: project_3,
    source_code_link:
      "https://github.com/dhanushwaran06/BikeServices-Application-Using-MERN-Stack",
  },
];

export { services, technologies,experiences, projects };
