import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

type ProjectsSectionProps = {
  darkMode: boolean;
};

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ darkMode }) => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'USA Smoke Forecast Visualizer',
      description: 'The Smoke Forecast Visualizer* is an Android app built with Kotlin and Jetpack Compose that displays real-time weather and wildfire smoke data through interactive heatmaps and forecasts. It features AQI insights, 12-hour forecasts, and location-based smoke tracking to help users monitor environmental conditions effectively.',
      imageUrl: 'https://images.pexels.com/photos/51951/forest-fire-fire-smoke-conservation-51951.jpeg',
      category: 'mobile',
      githubUrl: 'https://github.com/Vedant2402/Smoke-Forecast-Visualizer',
      liveUrl: 'https://github.com/Vedant2402/Smoke-Forecast-Visualizer',
      tags: ['Andorid Studio', 'Firebase', 'Kotlin', 'Mobile Development']
    },
    {
      id: 2,
      title: 'Meal Planner Application',
      description: 'Developed a 100% scalable Meal Planner Application using Node.js, Express.js, MongoDB Cloud Server, and Svelte.js, integrating the Spoonacular API for meal search & planning.',
      imageUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'fullstack',
      githubUrl: 'https://github.com/Vedant2402/Meal_Planner_App',
      tags: ['Node.js', 'Express.js', 'MongoDB', 'Svelte.js', 'REST API']
    },
    {
      id: 3,
      title: 'ML-Powered Prakriti Assessment Chatbot',
      description: 'Developed an AI-driven chatbot for Kayayurveda Clinic, helping users understand their Prakriti through ML-based analysis with 85%+ accuracy.',
      imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'ai',
      githubUrl: 'https://github.com/Vedant2402/Chikitishak-ML-Bot',
      tags: ['Python', 'Machine Learning', 'NLP', 'Random Forest']
    },
    {
      id: 4,
      title: 'Sambhav - Women Health Web Application',
      description: 'Developed a mobile application to assist 1,000+ underprivileged women in upskilling through interactive learning modules using Flutter and Firebase.',
      imageUrl: 'https://images.pexels.com/photos/7089629/pexels-photo-7089629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'mobile',
      liveUrl: 'https://sambhav-app.flutterflow.app/',
      tags: ['Flutter', 'Firebase', 'AWS S3', 'Mobile Development']
    },
    {
      id: 5,
      title: 'Fruit Quality Assessment ML Model',
      description: 'Implemented a 5-layer CNN model using TensorFlow and Keras to classify fruit quality with 90%+ accuracy, processing 10,000+ fruit images.',
      imageUrl: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'ai',
      tags: ['TensorFlow', 'Keras', 'CNN', 'Computer Vision']
    }
  ];

  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'mobile', name: 'Mobile Apps' }
  ];

  return (
    <section 
      id="projects" 
      className={`py-20 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured Projects
          </h2>
          <div className={`h-1 w-20 mx-auto rounded ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Here are some of my notable projects showcasing my skills in full-stack development, AI/ML, and mobile app development.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                filter === category.id
                  ? `${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`
                  : `${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={`group overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105 ${
                darkMode ? 'bg-gray-900' : 'bg-white'
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-60 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full flex justify-between items-center">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className={`text-xs px-2 py-1 rounded-full ${
                        darkMode 
                          ? 'bg-gray-800 text-gray-300' 
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;