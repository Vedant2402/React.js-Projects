import { PromptCategory } from '../types';

export const promptCategories: PromptCategory[] = [
  {
    id: 'writing',
    name: 'Creative Writing',
    description: 'Generate prompts for stories, articles, and creative content',
    icon: '✍️',
    color: 'bg-purple-500',
    templates: [
      {
        id: 'story-prompt',
        category: 'writing',
        template: 'Write a {genre} story about {character} who discovers {discovery} in {setting}. The story should be {tone} and {complexity}',
        variables: ['genre', 'character', 'discovery', 'setting', 'tone', 'complexity'],
        description: 'Generate creative story prompts with customizable elements',
        tags: ['story', 'fiction', 'creative']
      },
      {
        id: 'article-prompt',
        category: 'writing',
        template: 'Write a comprehensive article about {topic} targeted at {audience}. Include {sections} and make it {style}. Focus on {angle}',
        variables: ['topic', 'audience', 'sections', 'style', 'angle'],
        description: 'Create structured article writing prompts',
        tags: ['article', 'content', 'blog']
      }
    ]
  },
  {
    id: 'coding',
    name: 'Programming',
    description: 'Generate coding challenges and development prompts',
    icon: '💻',
    color: 'bg-blue-500',
    templates: [
      {
        id: 'code-challenge',
        category: 'coding',
        template: 'Create a {language} {project_type} that {functionality}. Use {framework} and implement {features}. Make it {complexity}',
        variables: ['language', 'project_type', 'functionality', 'framework', 'features', 'complexity'],
        description: 'Generate programming project challenges',
        tags: ['coding', 'challenge', 'project']
      },
      {
        id: 'debug-prompt',
        category: 'coding',
        template: 'Debug this {language} code that {problem}. Focus on {area} and provide {solution_type} solutions',
        variables: ['language', 'problem', 'area', 'solution_type'],
        description: 'Create debugging and troubleshooting prompts',
        tags: ['debug', 'troubleshoot', 'fix']
      }
    ]
  },
  {
    id: 'business',
    name: 'Business Strategy',
    description: 'Generate business analysis and strategy prompts',
    icon: '📊',
    color: 'bg-green-500',
    templates: [
      {
        id: 'market-analysis',
        category: 'business',
        template: 'Analyze the {industry} market for {product_service}. Focus on {target_market} and identify {analysis_points}. Cover {timeframe} trends',
        variables: ['industry', 'product_service', 'target_market', 'analysis_points', 'timeframe'],
        description: 'Generate market analysis prompts',
        tags: ['market', 'analysis', 'strategy']
      },
      {
        id: 'business-plan',
        category: 'business',
        template: 'Create a business plan for {business_type} targeting {market}. Include {sections} and focus on {unique_value}',
        variables: ['business_type', 'market', 'sections', 'unique_value'],
        description: 'Generate business plan prompts',
        tags: ['planning', 'startup', 'strategy']
      }
    ]
  },
  {
    id: 'education',
    name: 'Educational',
    description: 'Create learning and teaching prompts',
    icon: '🎓',
    color: 'bg-indigo-500',
    templates: [
      {
        id: 'lesson-plan',
        category: 'education',
        template: 'Create a lesson plan for {subject} targeting {grade_level}. Make it {duration} long, include {activities} and assess {skills}',
        variables: ['duration', 'subject', 'grade_level', 'activities', 'skills'],
        description: 'Generate educational lesson plans',
        tags: ['teaching', 'lesson', 'education']
      },
      {
        id: 'quiz-generator',
        category: 'education',
        template: 'Generate a quiz about {topic} for {difficulty} level. Include {question_count} questions with {question_types} format',
        variables: ['question_count', 'topic', 'difficulty', 'question_types'],
        description: 'Create quiz and assessment prompts',
        tags: ['quiz', 'assessment', 'learning']
      }
    ]
  }
];

export const getRandomTemplate = (categoryId?: string): any => {
  if (categoryId) {
    const category = promptCategories.find(cat => cat.id === categoryId);
    if (category && category.templates.length > 0) {
      return category.templates[Math.floor(Math.random() * category.templates.length)];
    }
  }
  
  const allTemplates = promptCategories.flatMap(cat => cat.templates);
  return allTemplates[Math.floor(Math.random() * allTemplates.length)];
};

export const getSuggestions = (variable: string): string[] => {
  const suggestions: Record<string, string[]> = {
    genre: ['fantasy', 'sci-fi', 'mystery', 'romance', 'thriller', 'horror', 'comedy', 'drama'],
    character: ['young detective', 'alien visitor', 'time traveler', 'magical creature', 'robot', 'space explorer'],
    discovery: ['hidden portal', 'ancient artifact', 'secret message', 'new technology', 'lost civilization'],
    setting: ['distant planet', 'medieval castle', 'futuristic city', 'haunted mansion', 'underwater kingdom'],
    tone: ['mysterious', 'humorous', 'dark', 'uplifting', 'suspenseful', 'whimsical'],
  complexity: ['simple and engaging', 'detailed with rich descriptions', 'complex with multiple plot twists'],
    language: ['JavaScript', 'Python', 'Java', 'C++', 'React', 'Vue', 'Angular'],
    project_type: ['web application', 'mobile app', 'desktop software', 'API', 'library', 'game'],
  framework: ['React', 'Vue', 'Angular', 'Express', 'Django', 'Spring Boot'],
    industry: ['technology', 'healthcare', 'finance', 'retail', 'education', 'entertainment'],
    business_type: ['SaaS startup', 'e-commerce store', 'consulting firm', 'mobile app', 'marketplace'],
    topic: ['artificial intelligence', 'climate change', 'digital marketing', 'personal finance', 'healthy lifestyle'],
    audience: ['beginners', 'professionals', 'students', 'general public', 'experts'],
    sections: ['introduction and conclusion', '3 main points with examples', '5 detailed sections with case studies'],
    style: ['conversational and friendly', 'professional and informative', 'academic with citations'],
    angle: ['practical tips', 'latest trends', 'common mistakes to avoid', 'future predictions'],
    functionality: ['manages user data', 'processes payments', 'analyzes data', 'automates workflows'],
    features: ['user authentication', 'real-time updates', 'data visualization', 'mobile responsiveness'],
    product_service: ['mobile app', 'SaaS platform', 'e-commerce site', 'consulting service'],
    target_market: ['small businesses', 'enterprise clients', 'individual consumers', 'startups'],
    analysis_points: ['market size and growth', 'competitor analysis', 'customer needs', 'pricing strategies'],
    timeframe: ['next 6 months', 'current year', 'next 2-3 years', 'long-term 5+ years'],
    unique_value: ['cost-effective solution', 'innovative technology', 'superior customer service', 'unique features'],
    duration: ['30 minutes', '45 minutes', '1 hour', '90 minutes'],
    subject: ['Mathematics', 'Science', 'History', 'Literature', 'Art', 'Music', 'Physical Education'],
    grade_level: ['elementary', 'middle school', 'high school', 'college', 'adult learners'],
    activities: ['group discussions', 'hands-on experiments', 'interactive presentations', 'problem-solving exercises'],
    skills: ['critical thinking', 'collaboration', 'communication', 'creativity'],
    question_count: ['5', '10', '15', '20'],
    difficulty: ['beginner', 'intermediate', 'advanced'],
    question_types: ['multiple choice', 'true/false', 'short answer', 'essay questions']
  };

  return suggestions[variable] || [];
};