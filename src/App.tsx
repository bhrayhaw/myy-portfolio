import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
// import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Plans from "./components/Plans";
import Blog from "./components/Blog";
import HomePage from "./pages/HomePage";
import "./App.css";
import CustomCursor from "./components/CustomCursor";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

const AppContent: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    // background: {
    //   color: {
    //     value: isDarkMode ? "#000000" : "#ffffff",
    //   },
    // },
    fpsLimit: 30,
    particles: {
      color: {
        value: isDarkMode ? "#ffffff" : "#000000",
      },
      links: {
        color: isDarkMode ? "#ffffff" : "#000000",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: {
          default: "bounce" as const,
        },
        random: false,
        speed: 1.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "polygon" as const,
      },
      size: {
        random: true,
        value: 3,
      },
    },
    detectRetina: true,
  };

  return init ? (
    <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <CustomCursor />
      <div
        className={`pointer ${isDarkMode ? "border-white" : "border-purple-500"}`}
        id="pointer"
      ></div>
      <Particles id="tsparticles" options={particlesOptions} />
      <Router>
        <div
          className="flex flex-col min-h-screen"
          style={{ position: "relative", zIndex: 10 }}
        >
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </main>
          {/* <Footer /> */}
        </div>
      </Router>
    </div>
  ) : null;
};

export default App;
