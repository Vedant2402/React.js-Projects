import { CohereClient } from 'cohere-ai';

const COHERE_API_KEY = import.meta.env.VITE_COHERE_API_KEY?.trim();

const cohere = new CohereClient({
  token: COHERE_API_KEY,
});

const DEFAULT_MODELS = ['command-r-plus-08-2024', 'command-r-08-2024'];

const getCandidateModels = () => {
  const customModel = import.meta.env.VITE_COHERE_MODEL?.trim();
  return customModel ? [customModel, ...DEFAULT_MODELS] : DEFAULT_MODELS;
};

const ensureApiKey = () => {
  if (!COHERE_API_KEY) {
    throw new Error('Missing VITE_COHERE_API_KEY in environment variables.');
  }
};

const chatWithModelFallback = async (
  message: string,
  preamble: string,
  maxTokens: number,
  temperature: number
) => {
  ensureApiKey();
  const models = getCandidateModels();
  let lastError: unknown = null;

  for (const model of models) {
    try {
      const response = await cohere.chat({
        model,
        message,
        preamble,
        maxTokens,
        temperature,
      });

      if (response.text?.trim()) {
        return response.text.trim();
      }

      throw new Error(`Cohere returned an empty response using model ${model}.`);
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError ?? new Error('All Cohere model attempts failed.');
};

export interface PromptEnhancementRequest {
  originalPrompt: string;
  category: string;
  targetAudience?: string;
  tone?: string;
  length?: 'short' | 'medium' | 'long';
}

export const enhancePrompt = async (request: PromptEnhancementRequest): Promise<string> => {
  const systemPrompt = `You are an expert AI prompt engineer. Your task is to enhance and improve prompts to make them more effective, specific, and likely to produce better results from AI models.

Guidelines:
- Make prompts more specific and detailed
- Add context and constraints where helpful
- Improve clarity and structure
- Maintain the original intent
- Consider the target audience and tone
- Optimize for the specified category: ${request.category}`;

  const userPrompt = `Please enhance this prompt:

Original prompt: "${request.originalPrompt}"

Requirements:
- Category: ${request.category}
- Target audience: ${request.targetAudience || 'general'}
- Tone: ${request.tone || 'professional'}
- Length preference: ${request.length || 'medium'}

Provide an enhanced version that is more effective and specific while maintaining the original intent.`;

  return chatWithModelFallback(userPrompt, systemPrompt, 500, 0.7);
};

export const generatePromptSuggestions = async (category: string, context: string): Promise<string[]> => {
  const message = `Generate 5 creative and diverse prompt ideas for the ${category} category with context: ${context}. 

Return only the prompts, one per line, without numbering or additional formatting.`;

  const responseText = await chatWithModelFallback(
    message,
    'You are a creative prompt generator. Generate diverse and creative prompt ideas that are specific, actionable, and inspiring.',
    300,
    0.8
  );

  const suggestions = responseText.split('\n').filter(line => line.trim());
    return suggestions.slice(0, 5);
};