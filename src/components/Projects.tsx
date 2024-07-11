import React, { useState } from "react";
import { projectsData } from "../data/ProjectsData";

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
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg flex flex-col justify-between h-full"
            >
              <img
                src={project.image}
                alt={project.title}
                className="mb-4 rounded-lg w-full h-48 object-cover"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
              </div>
              <a
                href={project.demoLink}
                className="bg-blue-500 text-white px-4 py-2 rounded-full self-center"
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
