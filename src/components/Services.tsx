// src/components/Services.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faPaintBrush,
  faCamera,
  faCogs,
  faMobileAlt,
  faPencilRuler,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faPaintBrush,
    title: "Web Design",
    description:
      "Crafting visually appealing and user-friendly designs with a focus on user experience and accessibility.",
  },
  {
    icon: faLaptopCode,
    title: "Web Development",
    description:
      "Building robust and scalable web applications using modern technologies and best practices.",
  },
  {
    icon: faCamera,
    title: "Photography",
    description:
      "Providing high-quality photography services to capture stunning visuals for various needs.",
  },
  {
    icon: faCogs,
    title: "Automation",
    description:
      "Implementing automation solutions to streamline processes and increase efficiency.",
  },
  {
    icon: faMobileAlt,
    title: "Mobile App Development",
    description:
      "Creating intuitive and responsive mobile applications for both Android and iOS platforms.",
  },
  {
    icon: faPencilRuler,
    title: "Graphic Design",
    description:
      "Designing engaging graphics for digital and print media, ensuring brand consistency and appeal.",
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">My Offered Services</h2>
        <p className="text-gray-600 mb-12">
          Leveraging cutting-edge technologies and industry best practices to
          deliver top-notch solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-3xl text-blue-500 mb-4">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
