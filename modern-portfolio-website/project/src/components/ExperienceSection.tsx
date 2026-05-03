import React from 'react';
import { Calendar } from 'lucide-react';

type ExperienceSectionProps = {
  darkMode: boolean;
};

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ darkMode }) => {
  const experiences: Experience[] = [
    {
      title: 'Orientation Leader',
      company: 'New Student & Family Engagement Dept, California State University - Los Angeles',
      location: 'Los Angeles',
      period: 'June 2025 - July 2025',
      description: [
        'Guided incoming students and families through orientation programs, ensuring a smooth and informed transition into university life.',
        'Facilitated connections between new students and campus resources, academic programs, and support services to foster early engagement.',
        'Promoted a welcoming and inclusive environment, helping students understand university policies, build community, and feel confident navigating campus life.'
      ]
    },
    {
      title: 'Graduate Assistant',
      company: 'California State University - Los Angeles',
      location: 'Los Angeles',
      period: 'Jan 2025 - June 2025',
      description: [
        'Designed and deployed an experimental server environment on AWS, optimizing metadata processing for an Entity Recognition Model.',
        'Assisted in data preprocessing for a 50,000+ text dataset from the Gutenberg Project, improving text classification accuracy.',
        'Developed on AWS Platform for microservices architecture'
      ]
    },
    {
      title: 'MERN Stack Developer',
      company: 'Webstack Academy',
      location: 'Remote',
      period: 'Aug 2023 - Oct 2023',
      description: [
        'Developed and deployed full-stack applications using the MERN stack, adhering to the Software Development Life Cycle (SDLC).',
        'Designed interactive user interfaces with HTML, CSS, JavaScript, and React.js, improving load times by 30% and enhancing user engagement by 20%.'
      ]
    }
  ];

  return (
    <section 
      id="experience" 
      className={`py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Professional Experience
          </h2>
          <div className={`h-1 w-20 mx-auto rounded ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            My professional journey and contributions in the tech industry.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`p-6 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-gray-50 hover:bg-gray-100'
              } shadow-lg`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {exp.title}
                  </h3>
                  <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center mt-2 md:mt-0">
                  <Calendar size={18} className={`mr-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {exp.period}
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                {exp.description.map((desc, i) => (
                  <p 
                    key={i} 
                    className={`flex items-start ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                  >
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;