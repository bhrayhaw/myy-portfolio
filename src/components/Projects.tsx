import React, { useState } from "react";
import { projectsData } from "../data/ProjectsData";
import { motion, AnimatePresence } from "framer-motion";

const Projects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const categories = [
    "ALL",
    "Web Design",
    "Web Development",
    "Graphic Design",
    "UI/UX Design",
  ];

  const filteredProjects =
    selectedId === null
      ? projectsData
      : projectsData.filter((project) => project.id === selectedId);

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
                selectedId === null && category === "ALL"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } rounded-full`}
              onClick={() =>
                setSelectedId(
                  category === "ALL" ? null : filteredProjects[0].id
                )
              }
            >
              {category}
            </button>
          ))}
        </div>
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              onClick={() => setSelectedId(project.id)}
              className="bg-white p-6 shadow-lg rounded-lg flex flex-col justify-between h-full cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="mb-4 rounded-lg w-full h-48 object-cover"
              />
              <div className="flex-grow">
                <motion.h3
                  layoutId={`${project.id}-title`}
                  className="text-xl font-bold mb-2"
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  layoutId={`${project.id}-description`}
                  className="text-gray-700 mb-4"
                >
                  {project.description}
                </motion.p>
              </div>
              <motion.a
                layoutId={`${project.id}-link`}
                href={project.demoLink}
                className="bg-blue-500 text-white px-4 py-2 rounded-full self-center"
              >
                View Demo
              </motion.a>
            </motion.div>
          ))}
        </AnimatePresence>
        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId}
              className="fixed top-0 left-0 w-full h-full bg-white z-10 flex flex-col items-center justify-center"
            >
              <motion.h3
                layoutId={`${selectedId}-title`}
                className="text-2xl font-bold mb-4"
              >
                {
                  projectsData.find((project) => project.id === selectedId)
                    ?.title
                }
              </motion.h3>
              <motion.p
                layoutId={`${selectedId}-description`}
                className="text-gray-700 mb-8"
              >
                {
                  projectsData.find((project) => project.id === selectedId)
                    ?.description
                }
              </motion.p>
              <motion.a
                layoutId={`${selectedId}-link`}
                href={
                  projectsData.find((project) => project.id === selectedId)
                    ?.demoLink
                }
                className="bg-blue-500 text-white px-4 py-2 rounded-full"
              >
                View Demo
              </motion.a>
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
