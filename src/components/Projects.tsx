import React, { useState } from "react";

const projectsData = [
  {
    category: "Web Development",
    image: "path/to/project-image1.jpg",
    title: "2D Vinyl Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    demoLink: "#",
  },
  {
    category: "Web Development",
    image: "path/to/project-image2.jpg",
    title: "2D Vinyl Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    demoLink: "#",
  },
  {
    category: "Graphic Design",
    image: "path/to/project-image3.jpg",
    title: "Creative Poster Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    demoLink: "#",
  },
  {
    category: "Graphic Design",
    image: "path/to/project-image4.jpg",
    title: "Embosed Logo Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    demoLink: "#",
  },
  {
    category: "Web Design",
    image: "path/to/project-image5.jpg",
    title: "Nedge Ghana",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    demoLink: "https://nedgeghana.com",
  },
  {
    category: "UI/UX Design",
    image: "path/to/project-image6.jpg",
    title: "2D Vinyl Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    demoLink: "#",
  },
];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const categories = [
    "ALL",
    "Web Design",
    "Web Development",
    "Graphic Design",
    "UI/UX Design",
  ];

  const filteredProjects =
    selectedCategory === "ALL"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          Our Latest Featured Projects
        </h2>
        <div className="flex justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 mx-2 ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } rounded-full`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="mb-4 rounded-lg"
              />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.demoLink}
                className="bg-blue-500 text-white px-4 py-2 rounded-full"
              >
                View Demo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
