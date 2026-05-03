import React from 'react';

type SkillsProps = {
  darkMode: boolean;
};

interface Skill {
  name: string;
  level: number;
  category: 'Programming' | 'frontend' | 'backend' | 'tools';
}

const SkillsSection: React.FC<SkillsProps> = ({ darkMode }) => {
  const skills: Skill[] = [
    // Programming skills
    { name: 'Java', level: 90, category: 'Programming' },
    { name: 'C/C++', level: 85, category: 'Programming' },
    { name: 'Linux', level: 85, category: 'Programming' },
    { name: 'CMD', level: 70, category: 'Programming' },
    { name: 'Kotlin', level: 85, category: 'Programming' },
    { name: 'SQL', level: 60, category: 'Programming' },
    { name: 'Assembly Language', level: 55, category: 'Programming' },

    // Frontend skills
    { name: 'HTML & CSS', level: 90, category: 'frontend' },
    { name: 'JavaScript', level: 85, category: 'frontend' },
    { name: 'React.js', level: 85, category: 'frontend' },
    { name: 'TypeScript', level: 80, category: 'frontend' },
    { name: 'Next.js', level: 75, category: 'frontend' },
    { name: 'Melt.js', level: 75, category: 'frontend' },
    { name: 'Figma', level: 75, category: 'frontend' },
    
    // Backend skills
    { name: 'Node.js', level: 85, category: 'backend' },
    { name: 'Express.js', level: 80, category: 'backend' },
    { name: 'Python', level: 75, category: 'backend' },
    { name: 'MongoDB', level: 80, category: 'backend' },
    { name: 'MySQL', level: 80, category: 'backend' },
    { name: 'REST APIs', level: 80, category: 'backend' },
    { name: 'Google Marketplace', level: 80, category: 'backend' },
    
    // Tools & Others
    { name: 'Git & GitHub', level: 85, category: 'tools' },
    { name: 'Google Cloud Platform', level: 70, category: 'tools' },
    { name: 'Linux', level: 80, category: 'tools' },
    { name: 'AWS', level: 70, category: 'tools' },
    { name: 'FireBase', level: 85, category: 'tools' },
    { name: 'Docker', level: 85, category: 'tools' },
    { name: 'Kubernates', level: 70, category: 'tools' },
    { name: 'FlutterFlow', level: 70, category: 'tools' },
  ];

  const programmingSkills = skills.filter(skill => skill.category === 'Programming');
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const toolSkills = skills.filter(skill => skill.category === 'tools');

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{name}</span>
        <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{level}%</span>
      </div>
      <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
        <div 
          className={`h-2 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}
          style={{ width: `${level}%`, transition: 'width 1s ease-in-out' }}
        ></div>
      </div>
    </div>
  );

  return (
    <section 
      id="skills" 
      className={`py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            My Skills
          </h2>
          <div className={`h-1 w-20 mx-auto rounded ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Here's a comprehensive overview of my technical skills and expertise in various technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Skills */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg transition-transform hover:scale-105`}>
            <h3 className={`text-xl font-bold mb-6 pb-2 border-b ${darkMode ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-600'}`}>
              Programming
            </h3>
            {programmingSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>

          {/* Frontend Skills */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg transition-transform hover:scale-105`}>
            <h3 className={`text-xl font-bold mb-6 pb-2 border-b ${darkMode ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-600'}`}>
              Frontend
            </h3>
            {frontendSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>

          {/* Backend Skills */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg transition-transform hover:scale-105`}>
            <h3 className={`text-xl font-bold mb-6 pb-2 border-b ${darkMode ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-600'}`}>
              Backend
            </h3>
            {backendSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>

          {/* Tools & Others */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg transition-transform hover:scale-105`}>
            <h3 className={`text-xl font-bold mb-6 pb-2 border-b ${darkMode ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-600'}`}>
              Tools & DevOps
            </h3>
            {toolSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;