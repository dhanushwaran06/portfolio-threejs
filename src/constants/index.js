import {
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
  project_1,
  project_2,
  project_3
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Backend Developer",
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
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "Bike Service",
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
    source_code_link: "https://github.com/dhanushwaran06/BikeServices-Application-Using-MERN-Stack",
  },
];

export { services, technologies, projects };
