import React from "react";
import { Download } from "lucide-react";

type AboutSectionProps = {
  darkMode: boolean;
};

const AboutSection: React.FC<AboutSectionProps> = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`py-20 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            About Me
          </h2>
          <div
            className={`h-1 w-20 mx-auto rounded ${
              darkMode ? "bg-blue-500" : "bg-blue-600"
            }`}
          ></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3
              className={`text-2xl font-bold mb-4 ${
                darkMode ? "text-blue-400" : "text-blue-600"
              }`}
            >
              Full Stack Developer | Software Developer
            </h3>

            <p
              className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
            >
              Hello, I'm Vedant Kankate, A Computer Science Graduate Student at
              Cal State LA with a strong interest in AI, Cloud Technologies, and
              Software Development. Proficient in Google Cloud Platform, Docker,
              and MongoDB. Experienced in developing scalable, client-focused
              applications. Passionate about innovation, collaboration, and
              solving real-world problems. Skilled in API development,
              microservices architecture, and CI/CD pipelines, ensuring
              efficient and robust software solutions.
            </p>

            <p
              className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
            >
              My approach to development focuses on writing clean, maintainable
              code while ensuring optimal performance and user experience. I'm
              constantly learning and staying updated with the latest
              technologies and best practices in web development.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4
                  className={`font-semibold mb-2 ${
                    darkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  Name:
                </h4>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  Vedant Kankate
                </p>
              </div>
              <div>
                <h4
                  className={`font-semibold mb-2 ${
                    darkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  Email:
                </h4>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  vedantkankate22@gmail.com
                </p>
              </div>
              <div>
                <h4
                  className={`font-semibold mb-2 ${
                    darkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  From:
                </h4>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  Los Angeles, California, USA
                </p>
              </div>
              <div>
                <h4
                  className={`font-semibold mb-2 ${
                    darkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  Education:
                </h4>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  Master's in Computer Science
                </p>
              </div>
            </div>

            <a
              href="https://drive.google.com/file/d/1_1Ecn2hSloNmngXYOtVxTUVmONiVswub/view?usp=view"
              className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all
                ${
                  darkMode
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                } 
                transform hover:scale-105 hover:shadow-lg`}
            >
              <Download size={18} className="mr-2" />
              Download CV
            </a>
          </div>

          <div className="order-1 lg:order-2">
            <div
              className={`relative rounded-lg overflow-hidden ${
                darkMode ? "shadow-xl" : "shadow-2xl"
              }`}
            >
              <div className="aspect-w-4 aspect-h-5">
                <img
                src="/Ved1.jpg"
                alt="Vedant Kankate portrait"
                className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Decorative elements */}
              <div
                className={`absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 ${
                  darkMode ? "border-blue-500" : "border-blue-600"
                }`}
              ></div>
              <div
                className={`absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 ${
                  darkMode ? "border-blue-500" : "border-blue-600"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
