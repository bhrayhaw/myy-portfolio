interface Project {
  id: number;
  category: string;
  image: string;
  title: string;
  description: string;
  demoLink: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    category: "Web Development",
    image: "/images/palm oil.png",
    title: "Palm Oil Tracker App",
    description: "A simple and intuitive palm oil tracker application.",
    demoLink: "https://palm-oil-tracker.vercel.app/",
  },
  {
    id: 2,
    category: "Web Development",
    image: "/images/pylifer.png",
    title: "Task Planner App",
    description: "A simple and intuitive task planner application.",
    demoLink: "https://pylifer.netlify.app/",
  },
  {
    id: 3,
    category: "Web Development",
    image: "/images/treli.png",
    title: "Treli",
    description: "A modern and beautiful landing page design for a restaurant.",
    demoLink: "https://treli.netlify.app/",
  },
  {
    id: 4,
    category: "Graphic Design",
    image: "/images/shito.png",
    title: "Shito Flyer",
    description: "A vibrant and colorful flyer design for a food product.",
    demoLink: "",
  },
  {
    id: 5,
    category: "Web Design",
    image: "/images/nedge.png",
    title: "Nedge Ghana",
    description: "An elegant and modern design for a cleaning agency.",
    demoLink: "https://nedgeghana.com",
  },
  {
    id: 6,
    category: "UI/UX Design",
    image: "/images/agrich.png",
    title: "Agrich",
    description: "A lively and colorful design for an agriculture website.",
    demoLink:
      "https://www.figma.com/design/UmqtBVvkRuYHZQ8exekCTq/Agrich?node-id=0-1&t=ttlM0KXoadnvyFX8-0",
  },
];

