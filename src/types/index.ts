export interface PromptTemplate {
  id: string;
  category: string;
  template: string;
  variables: string[];
  description: string;
  tags: string[];
}

export interface GeneratedPrompt {
  id: string;
  content: string;
  category: string;
  variables: Record<string, string>;
  length?: 'short' | 'medium' | 'long';
  timestamp: Date;
  favorite: boolean;
}

export interface PromptCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  templates: PromptTemplate[];
}

export interface ExportFormat {
  format: 'json' | 'txt';
  includeMetadata: boolean;
  selectedPrompts?: string[];
}

export type Theme = 'light' | 'dark';

export interface AppState {
  prompts: GeneratedPrompt[];
  favorites: GeneratedPrompt[];
  searchTerm: string;
  selectedCategory: string;
  currentPrompt: GeneratedPrompt | null;
}