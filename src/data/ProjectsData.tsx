interface Project {
  category: string;
  image: string;
  title: string;
  description: string;
  demoLink: string;
}

export const projectsData: Project[] = [
  {
    category: "Web Development",
    image: "/images/palm oil.png",
    title: "Palm Oil Tracker App",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    demoLink: "https://palm-oil-tracker.vercel.app/",
  },
  {
    category: "Web Development",
    image: "/images/pylifer.png",
    title: "Task Planner App",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    demoLink: "https://pylifer.netlify.app/",
  },
  {
    category: "Web Development",
    image: "/images/treli.png",
    title: "Treli",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    demoLink: "https://treli.netlify.app/",
  },
  {
    category: "Graphic Design",
    image: "/images/shito.png",
    title: "Shito Flyer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    demoLink: "#",
  },
  {
    category: "Web Design",
    image: "/images/nedge.png",
    title: "Nedge Ghana",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    demoLink: "https://nedgeghana.com",
  },
  {
    category: "UI/UX Design",
    image: "/images/agrich.png",
    title: "Agrich",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    demoLink:
      "https://www.figma.com/design/UmqtBVvkRuYHZQ8exekCTq/Agrich?node-id=0-1&t=ttlM0KXoadnvyFX8-0",
  },
];

