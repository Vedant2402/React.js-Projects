import React from 'react';
import { Github, Linkedin, Mail, Download, Cloud, Server, Database, Terminal } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-gray-300">
      {/* Header/Hero Section */}
      <header className="bg-[#112240] shadow-lg border-b border-[#233554]">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Vedant Kankate
          </h1>
          <div className="flex space-x-4">
            <a href="mailto:vedantkankate22@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/vedant-kankate/" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/Vedant2402" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Download Resume Button */}
        <div className="flex justify-center mb-12">
          <a href="https://drive.google.com/file/d/10fSu6YWarnDhX9pAmRSXA9uQ7D9VPNJ1/view?usp=sharing" 
          download
          className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50">
            <Download className="h-5 w-5" />
            Download Resume
          </a>
  </div>

        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <Cloud className="h-6 w-6" />
            About Me
          </h2>
          <div className="bg-[#112240] shadow-xl rounded-lg p-6 border border-[#233554] hover:border-cyan-500 transition-colors">
            <p className="text-gray-300">
            Hello, I'm Vedant Kankate, A Computer Science Graduate Student at Cal State LA with a strong interest in AI, Cloud Technologies, and Software Development. Proficient in Google Cloud Platform, Docker, and MongoDB. Experienced in developing scalable, client-focused applications. Passionate about innovation, collaboration, and solving real-world problems. 
            Skilled in API development, microservices architecture, and CI/CD pipelines, ensuring efficient and robust software solutions.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <Server className="h-6 w-6" />
            Cloud & Technical Skills
          </h2>
          <div className="bg-[#112240] shadow-xl rounded-lg p-6 border border-[#233554]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="hover:transform hover:scale-105 transition-transform">
                <h3 className="font-semibold mb-2 text-cyan-400">Cloud Platforms</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    GCP Services
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    GCP BigQuery
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    Kubernetes
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    Firebase
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    Docker
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    Cloud Formation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    Cloud Storage
                  </li>
                </ul>
              </div>
              <div className="hover:transform hover:scale-105 transition-transform">
                <h3 className="font-semibold mb-2 text-cyan-400">DevOps Tools</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    Jenkins
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    Terraform
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    Git
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    GitHub Actions
                  </li>
                </ul>
              </div>
              <div className="hover:transform hover:scale-105 transition-transform">
                <h3 className="font-semibold mb-2 text-cyan-400">Front End Tools</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    HTML/CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    React.js
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    Express.js
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    Melt.js
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    Figma
                  </li>
                </ul>
              </div>
              <div className="hover:transform hover:scale-105 transition-transform">
                <h3 className="font-semibold mb-2 text-cyan-400">BackEnd Tools</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    MongoDB
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    Node.js
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    Flask
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    MySQL
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    REST APIs
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    DBMS
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    Google Marketplace
                  </li>
                </ul>
              </div>
              <div className="hover:transform hover:scale-105 transition-transform">
                <h3 className="font-semibold mb-2 text-cyan-400">Programming</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    Java
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    JavaScript
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    Python
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    HTML/CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    Linux
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-cyan-400 rounded-full"></div>
                    C/C++
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* React.js Projects Challenge Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <Terminal className="h-6 w-6" />
            15 Days React.js Projects Challenge 🚀
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#112240] shadow-xl rounded-lg p-6 border border-[#233554] hover:border-cyan-500 transition-all transform hover:scale-105">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Day 1 - Static Portfolio</h3>
                <a href="https://github.com/Vedant2402/Static_Portfolio" 
                className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2">
                  View Project <span>→</span>
                  </a>
              </div>
            <div className="bg-[#112240] shadow-xl rounded-lg p-6 border border-[#233554] hover:border-cyan-500 transition-all transform hover:scale-105">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Day 2 - Weather App</h3>
              <a href="https://github.com/Vedant2402/weather-app" 
              className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2">
                View Project <span>→</span>
                </a>
                </div>
              <div className="bg-[#112240] shadow-xl rounded-lg p-6 border border-[#233554] hover:border-cyan-500 transition-all transform hover:scale-105">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Day 3 - Music Search App</h3>
                <a href="https://github.com/Vedant2402/Music-Search-App" 
                className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2">View Project <span>→</span>
                </a>
              </div>
            <div className="bg-[#112240] shadow-xl rounded-lg p-6 border border-[#233554] hover:border-cyan-500 transition-all transform hover:scale-105">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Day 4 - Country Info App</h3>
              <a href="https://github.com/Vedant2402/Country-Info-App" 
              className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2">
                View Project <span>→</span>
                </a>
              </div>
            <div className="bg-[#112240] shadow-xl rounded-lg p-6 border border-[#233554] hover:border-cyan-500 transition-all transform hover:scale-105">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Day 5 - Real-time Polling App</h3>
              <a href="https://github.com/Vedant2402/Real-time-Polling-App" 
              className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2">
                View Project <span>→</span></a>
            </div>
            <div className="bg-[#112240] shadow-xl rounded-lg p-6 border border-[#233554] hover:border-cyan-500 transition-all transform hover:scale-105">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Day 6 - Dictionary App</h3>
              <a href="https://github.com/Vedant2402/Dictionary-App" 
              className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2">
                View Project <span>→</span></a>
            </div>
            <div className="bg-[#112240] shadow-xl rounded-lg p-6 border border-[#233554] hover:border-cyan-500 transition-all transform hover:scale-105">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Day 7 - IP Address Tracker</h3>
              <a href="https://github.com/Vedant2402/ip_tracker_app" 
              className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2">
                View Project <span>→</span></a>
            </div>
            <div className="bg-[#112240] shadow-xl rounded-lg p-6 border border-[#233554] hover:border-cyan-500 transition-all transform hover:scale-105">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Day 8 - QR Code Generator</h3>
              <a href="https://github.com/Vedant2402/QR-Code-Generator" 
              className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2">
                View Project <span>→</span></a>
            </div>
            <div className="bg-[#112240] shadow-xl rounded-lg p-6 border border-[#233554] hover:border-cyan-500 transition-all transform hover:scale-105">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Day 8 - Font Review Tool</h3>
              <a href="https://github.com/Vedant2402/Font-Review-Tool" 
              className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2">
                View Project <span>→</span></a>
            </div>
          </div>
          
          <p className="mt-6 text-center text-gray-400 italic">More projects coming soon......</p>
          </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <Terminal className="h-6 w-6" />
            Cloud Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#112240] shadow-xl rounded-lg p-6 border border-[#233554] hover:border-cyan-500 transition-all transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">Meal Planner Application</h3>
              <p className="text-gray-300 mb-4">
              Developed a 100% scalable Meal Planner Application using Node.js, Express.js, MongoDB Cloud Server, and 
              Svelte.js, integrating the Spoonacular API for meal search & planning. Implemented a RESTful backend with JWT-based authentication, 
              automated CI/CD pipeline using GitHub Actions with a 99.9% deployment success rate, 
              & optimized 3+ microservices for modular functionality.
              </p>
              <a href="https://github.com/Vedant2402/Meal_Planner_App" 
                className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2">
                View Project <span>→</span>
              </a>
            </div>

            <div className="bg-[#112240] shadow-xl rounded-lg p-6 border border-[#233554] hover:border-cyan-500 transition-all transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">ML-Powered Prakriti Assessment Chatbot</h3>
              <p className="text-gray-300 mb-4">
              Developed an AI-driven chatbot in collaboration with Kayayurveda Clinic, Pune, helping users understand their Prakriti 
              (body type, hair type, etc.) through a structured questionnaire-based analysis. Integrated ML models (Random Forest) to provide 
              personalized recommendations, achieving 85%+ accuracy in Prakriti classification.
              </p>
              <a href="https://github.com/Vedant2402/Chikitishak-ML-Bot" 
                className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2">
                View Project <span>→</span>
              </a>
            </div>

            <div className="bg-[#112240] shadow-xl rounded-lg p-6 border border-[#233554] hover:border-cyan-500 transition-all transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">Sambhav - A woman Health Web Application</h3>
              <p className="text-gray-300 mb-4">
              Upskilling Application for Underprivileged Women – Developed a mobile application to assist 1,000+ underprivileged women in 
              upskilling through interactive learning modules. Built using Flutter and FlutterFlow for a seamless full Stack experience, integrated 
              Firebase for real-time data management, & AWS S3 for secure storage.
              </p>
              <a href="https://sambhav-app.flutterflow.app/" 
                className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2">
                View Project <span>→</span>
              </a>
            </div>

            <div className="bg-[#112240] shadow-xl rounded-lg p-6 border border-[#233554] hover:border-cyan-500 transition-all transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">Deep Learning - “Prediction Model” - Fruit Quality Assessment</h3>
              <p className="text-gray-300 mb-4">
              Designed and implemented a 5-layer CNN model using TensorFlow and Keras to classify fruit quality with 90% + accuracy.
              Processed 10,000+ fruit images, applied data augmentation to cut overfitting by 30%, and optimized preprocessing for a 5x speed-up.
              Developed a real-time fruit quality detection pipeline, leveraging RGB-based defect assessment, with potential applications in food processing industries.
              </p>
              <a href="https://sambhav-app.flutterflow.app/" 
                className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2">
                View Project <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <Database className="h-6 w-6" />
            Experience
          </h2>
          <div className="bg-[#112240] shadow-xl rounded-lg p-6 border border-[#233554]">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-cyan-400">Graduate Assistant</h3>
              <p className="text-gray-400">California State University - Los Angeles | Jan 2025 - Present</p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                <li>Designed and deployed an experimental server environment on AWS, optimizing metadata processing for an Entity Recognition Model. </li>
                <li>Assisted in data preprocessing for a 50,000+ text dataset from the Gutenberg Project, improving text classification accuracy.</li>
                <li>Developed on AWS Platform for microservices architecture</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-cyan-400">MERN Stack Developer</h3>
              <p className="text-gray-400">Webstack Academy | Remote | Aug 2023 - Oct 2023</p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                <li>Developed and deployed full-stack applications using the MERN stack, adhering to the SDLC.</li>
                <li>Designed interactive user interfaces with HTML, CSS, JavaScript, and React.js, improving load times by 30% and enhancing user engagement by 20%.</li>
              </ul>
            </div>
          </div>
        </section>

          {/* Achievemnts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <Database className="h-6 w-6" />
            Achievements
          </h2>
          <div className="bg-[#112240] shadow-xl rounded-lg p-6 border border-[#233554]">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-cyan-400">Contributing to a Guinness World Record</h3>
              <p className="text-gray-400">Savitribai Phule Pune University | 11th August 2022 - 15th Auguest 2022</p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
              <p className="text-gray-300 mb-4">
              Designed and implemented a 5-layer CNN model using TensorFlow and Keras to classify fruit quality with 90% + accuracy.
              Processed 10,000+ fruit images, applied data augmentation to cut overfitting by 30%, and optimized preprocessing for a 5x speed-up.
              Developed a real-time fruit quality detection pipeline, leveraging RGB-based defect assessment, with potential applications in food processing industries.
              </p>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-cyan-400">Institute-wise Topper</h3>
              <p className="text-gray-400">MIT ADT University, Pune IN | 29th - 30th September 2021</p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
              <p className="text-gray-300 mb-4">
              Feeling truly blessed to be awarded “Institute-wise Topper” in ADT Talk 2020-21 – Super Speaker Oratorical Championship by the School of Holistic Development, MIT ADT University.
              ADT Talk, the university’s largest public speaking platform, spanned 4 months of intense and inspiring rounds.
              Grateful to MIT ADT for this amazing opportunity to grow as a speaker and leader! 💯🎤
              </p>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Let's Connect</h2>
          <div className="bg-[#112240] shadow-xl rounded-lg p-6 border border-[#233554]">
            <p className="text-gray-300 mb-4">
              Interested in Software Internship, Cloud Internship, DevOps practices, or collaboration opportunities? Let's talk!
            </p>
            <div className="flex flex-col space-y-3">
              <a href="mailto:vedantkankate22@gmail.com" 
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                <Mail className="h-5 w-5 mr-2" />
                vedantkankate22@gmail.com
              </a>
              <a href="https://linkedin.com/in/vedant-kankate/" 
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5 mr-2" />
                linkedin.com/in/vedant-kankate
              </a>
              <a href="https://github.com/Vedant2402" 
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                <Github className="h-5 w-5 mr-2" />
                github.com/Vedant2402
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#112240] shadow-lg border-t border-[#233554] mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 text-center text-gray-400">
          © 2024 Vedant Kankate. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;