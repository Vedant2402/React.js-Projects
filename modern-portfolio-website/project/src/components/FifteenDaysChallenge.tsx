import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

type FifteenDaysChallengeProps = {
  darkMode: boolean;
};

interface Project {
  id: number;
  name: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
  techStack: string[];
}

const FifteenDaysChallenge: React.FC<FifteenDaysChallengeProps> = ({ darkMode }) => {
  const projects: Project[] = [
    {
      id: 1,
      name: 'Day 1 - Static Portfolio Website',
      description: 'A clean and responsive personal portfolio built using React and modern CSS techniques.',
      githubUrl: 'https://github.com/Vedant2402/Static-Portfolio',
      liveUrl: 'https://vedant-kankate1.netlify.app/',
      techStack: ['React', 'TailwindCSS', 'Vercel']
    },
    {
      id: 2,
      name: 'Day 2 - Weather App',
      description: 'A React app that fetches weather data from an API and displays real-time conditions based on user location.',
      githubUrl: 'https://github.com/Vedant2402/weather-app',
      liveUrl: 'https://weatherclimate1.netlify.app/',
      techStack: ['React', 'OpenWeather API', 'TailwindCSS']
    },
    {
      id: 3,
      name: 'Day 3 - Music Search App',
      description: 'Search for music using the iTunes API with previews, dynamic visuals, and a sleek UI.',
      githubUrl: 'https://github.com/Vedant2402/music-search-app',
      liveUrl: 'https://musicapp-001.netlify.app/',
      techStack: ['React', 'iTunes API', 'CSS Animations']
    },
    {
      id: 4,
      name: 'Day 4 - Country Info App',
      description: 'Explore details about countries using the REST Countries API.',
      githubUrl: 'https://github.com/Vedant2402/Country-Info-App',
      liveUrl: 'https://countryinfoapp1.netlify.app/',
      techStack: ['React', 'REST Countries API', 'TailwindCSS']
    },
    {
      id: 5,
      name: 'Day 5 - Real-time Polling App',
      description: 'A full-stack polling app with real-time result visualization.',
      githubUrl: 'https://github.com/Vedant2402/Real-time-Polling-App',
      liveUrl: 'https://vedantslivepollingapp.netlify.app/',
      techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB']
    },
    {
      id: 6,
      name: 'Day 6 - Dictionary App',
      description: 'Look up word definitions, phonetics, and usage with a user-friendly interface.',
      githubUrl: 'https://github.com/Vedant2402/Dictionary-App',
      liveUrl: 'https://dictionaryapp01.netlify.app/',
      techStack: ['React', 'Free Dictionary API', 'TailwindCSS']
    },
    {
      id: 7,
      name: 'Day 7 - IP Address Tracker',
      description: 'Track IP location with live map view and geo-data insights.',
      githubUrl: 'https://github.com/Vedant2402/ip_tracker_app',
      liveUrl: 'https://ipaddresstracker01.netlify.app/',
      techStack: ['React', 'Leaflet', 'IP Geolocation API']
    },
    {
      id: 8,
      name: 'Day 8 - QR Code Generator',
      description: 'Create and customize QR codes with download support.',
      githubUrl: 'https://github.com/Vedant2402/QR-Code-Generator',
      liveUrl: 'https://qrgeneratorved.netlify.app/',
      techStack: ['React', 'QRCode.js', 'TailwindCSS']
    },
    {
      id: 9,
      name: 'Day 9 - Font Review Tool',
      description: 'Preview and compare Google Fonts with real-time controls.',
      githubUrl: 'https://github.com/Vedant2402/Font-Review-Tool',
      liveUrl: 'https://toolpreview.netlify.app/',
      techStack: ['React', 'Google Fonts API', 'Styled Components']
    },
    {
      id: 10,
      name: 'Day 10 - Portfolio Website',
      description: 'Advanced, full-featured personal website styled to reflect a creative and professional identity.',
      githubUrl: 'https://github.com/Vedant2402/Modern-Portfolio-Website-UP2',
      liveUrl: 'https://vedant-kankate.netlify.app/',
      techStack: ['React', 'Google Fonts API', 'TypeScript']
    },
    {
      id: 11,
      name: 'Day 11 - Nutriagent - Food Nutrition App',
      description: 'Search for food items and get nutritional insights using the Edamam API.',
      githubUrl: 'https://github.com/Vedant2402/Nutriagent',
      liveUrl: 'https://nutriagent.netlify.app/',
      techStack: ['React', 'React Router', 'Firebase Auth','Tailwind CSS']
    },
    {
      id: 12,
      name: 'Day 12 - AI Quotes Generator',
      description: 'Generate motivational or famous quotes using AI and display them dynamically with animations.',
      githubUrl: 'https://github.com/Vedant2402/AI-quotes-generator',
      liveUrl: 'https://aiquotegenerator1.netlify.app/',
      techStack: ['React', 'Quotable API', 'Framer Motion', 'Swiper.js']
    },
    {
      id: 13,
      name: 'Day 13 - MindBloom - Your Emotional Wellness Journey',
      description: 'A beautiful, intuitive platform for tracking your emotions, journaling your thoughts, and discovering patterns in your mental wellness journey.',
      githubUrl: 'https://github.com/Vedant2402/Emotional-Health-Journal',
      liveUrl: 'https://e-healthjournal.netlify.app/',
      techStack: ['React', 'Firebase Authentication', 'PostCSS', 'Autoprefixer','Firebase Analytic']
    },
    {
      id: 14,
      name: 'Day 14 - ATS Friendly Cover Letter Generator',
      description: 'A beautiful, retro-styled web application for generating personalized cover letters using AI. Built with React, TypeScript, Firebase Authentication, and featuring a vintage aesthetic.',
      githubUrl: 'https://github.com/Vedant2402/ATS-Friendly-Cover-Letter',
      liveUrl: 'https://coverletter-ai.netlify.app/',
      techStack: ['React 18', 'Firebase Authentication', 'TypeScript', 'Autoprefixer','Firestore']
    },
    {
      id: 15,
      name: 'Day 15 - Prompt-Engine-App',
      description: '(Private Repo) An AI-powered prompt ideation and generation web application. Users can sign up, generate structured prompts across categories (writing, coding, business, education), refine them, and export content. The interface supports light/dark themes, animated backgrounds, and responsive design.',
      githubUrl: 'https://github.com/Vedant2402/Prompt-Engine-App',
      liveUrl: 'https://prompthelperr.netlify.app/',
      techStack: ['Cohere API', 'Firebase Auth', 'TypeScript', 'Vite','Tailwind CSS']
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const nextProject = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
      setFade(false);
    }, 300);
  };

  const prevProject = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
      setFade(false);
    }, 300);
  };

  return (
    <section
      id="fifteen-days-challenge"
      className={`py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            15-Days React Challenge
          </h2>
          <div className={`h-1 w-20 mx-auto rounded ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            A collection of 15 React.js projects I built in 15 days to sharpen my full-stack development skills.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div
            className={`p-10 md:p-16 rounded-3xl shadow-2xl transition-all duration-300 ease-in-out ${
              darkMode ? 'bg-gray-800 bg-opacity-60 backdrop-blur-md' : 'bg-gray-100'
            } ${fade ? 'opacity-0' : 'opacity-100'}`}
          >
            <div className="text-center mb-10">
              <div className="w-full h-[500px] mb-6 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                <iframe
                  src={projects[currentIndex].liveUrl}
                  title={projects[currentIndex].name}
                  className="w-full h-full"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                />
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {projects[currentIndex].name}
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {projects[currentIndex].description}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {projects[currentIndex].techStack.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 text-sm rounded-full font-medium ${
                      darkMode
                        ? 'bg-blue-600 bg-opacity-20 text-blue-300'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-4 space-x-4">
              <a
                href={projects[currentIndex].githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-4 py-2 rounded-md font-medium transition-transform duration-200 hover:scale-105 ${
                  darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                }`}
              >
                <Github className="mr-2" size={20} />
                GitHub
              </a>
              <a
                href={projects[currentIndex].liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-4 py-2 rounded-md font-medium transition-transform duration-200 hover:scale-105 ${
                  darkMode ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                <ExternalLink className="mr-2" size={20} />
                Live Site
              </a>
            </div>

            <div className="flex justify-center mt-10 space-x-4">
              <button
                onClick={prevProject}
                className={`p-3 rounded-full transition-transform duration-200 hover:scale-110 ${
                  darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900'
                }`}
                aria-label="Previous project"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextProject}
                className={`p-3 rounded-full transition-transform duration-200 hover:scale-110 ${
                  darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900'
                }`}
                aria-label="Next project"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifteenDaysChallenge;
