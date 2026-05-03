import React from "react";
import { ArrowDown, Github, Linkedin } from "lucide-react";

type HeroSectionProps = {
  darkMode: boolean;
};

const HeroSection: React.FC<HeroSectionProps> = ({ darkMode }) => {
  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Background pattern - subtle grid for visual interest */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(${
            darkMode ? "#ffffff" : "#000000"
          } 1px, transparent 1px), 
                           linear-gradient(to right, ${
                             darkMode ? "#ffffff" : "#000000"
                           } 1px, transparent 1px)`,
          backgroundSize: "4rem 4rem",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8">
          <div
            className="animate-fadeIn opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <h2
              className={`text-lg sm:text-xl font-medium ${
                darkMode ? "text-blue-400" : "text-blue-600"
              }`}
            ><br></br><br></br><br></br>
              Hello, I'm
            </h2>
          </div>

          <div
            className="animate-fadeIn opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              Vedant Kankate
            </h1>
          </div>

          <div
            className="animate-fadeIn opacity-0"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <h3
              className={`text-2xl sm:text-3xl md:text-4xl font-light ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <span className="inline-block">Full Stack Developer</span>
              <span className="mx-3 inline-block">•</span>
              <span className="inline-block">Software Developer</span>
              <span className="mx-3 inline-block">•</span>
              <span className="inline-block">Problem Solver</span>
            </h3>
          </div>

          <div
            className="animate-fadeIn opacity-0"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            <p
              className={`max-w-xl text-base sm:text-lg ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              👋 I'm a Computer Science Graduate Student at Cal State LA,
              passionate about AI, Cloud Technologies, and building scalable,
              impactful software solutions. With hands-on experience in Google
              Cloud Platform, Docker, MongoDB, and microservices architecture, I
              focus on client-centric design and solving real-world problems
              through robust engineering practices. <br></br><br></br>
              🔧 My technical toolkit
              includes API development, CI/CD pipelines, and cloud-native
              systems, supported by a strong foundation in full-stack
              development and machine learning. I’ve contributed to diverse
              projects, from smart meal planners and health-focused chatbots to
              AI-driven upskilling platforms, delivering production-ready
              applications that combine innovation, performance, and
              user-centric design. <br></br>
              Let’s build something extraordinary together!
            </p>
          </div>

          <div
            className="animate-fadeIn opacity-0 flex space-x-4 mt-6"
            style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          >
            <a
              href="https://drive.google.com/file/d/1_1Ecn2hSloNmngXYOtVxTUVmONiVswub/view?usp=view"
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all
                ${
                  darkMode
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                } 
                transform hover:scale-105 hover:shadow-lg`}
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all
                ${
                  darkMode
                    ? "bg-transparent border border-white/20 hover:border-white/40 text-white"
                    : "bg-transparent border border-gray-300 hover:border-gray-500 text-gray-900"
                } 
                transform hover:scale-105`}
            >
              View my work
            </a>
            <a
              href="#contact"
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all
                ${
                  darkMode
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                } 
                transform hover:scale-105 hover:shadow-lg`}
            >
              Get in touch
            </a>
            
          </div>

          <div
            className="animate-fadeIn opacity-0 flex space-x-4 mt-6"
            style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
          >
            <a
              href="https://github.com/vedant2402"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${
                darkMode
                  ? "text-gray-400 hover:text-white hover:bg-gray-800"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
              aria-label="GitHub"
            >
              <Github size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/vedant-kankate/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${
                darkMode
                  ? "text-gray-400 hover:text-white hover:bg-gray-800"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin size={30} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className={`p-2 rounded-full transition-colors ${
            darkMode
              ? "text-gray-400 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          }`}
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
