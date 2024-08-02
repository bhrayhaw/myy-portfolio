import React, { useState } from "react";
import { projectsData } from "../data/ProjectsData";
import { motion, AnimatePresence } from "framer-motion";

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

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
      : projectsData.filter((project) =>
          project.category.includes(selectedCategory)
        );

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Latest Featured Projects
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Showcasing a selection of our most recent and innovative projects.
          </p>
        </div>
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 text-sm sm:text-base rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-400 to-purple-500 shadow-md text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-4 rounded-lg w-full h-48 object-cover"
                />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
                  {project.description}
                </p>
                <a
                  href={project.demoLink}
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm sm:text-base"
                >
                  View Demo
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
