import type { RaycastAIModels } from '../../types/raycast/models'

export const OPENAI_SERVICE_PROVIDERS: RaycastAIModels = [
  {
    id: 'openai-gpt-3.5-turbo',
    description: 'GPT-3.5 Turbo is OpenAI’s fastest model, making it ideal for tasks that require quick response times with basic language processing capabilities.\n',
    model: 'gpt-3.5-turbo',
    name: 'GPT-3.5 Turbo',
    features: ['chat', 'quick_ai', 'commands', 'api', 'emoji_search'],
    speed: 3,
    intelligence: 3,
    provider: 'openai',
    provider_name: 'OpenAI',
    provider_brand: 'openai',
    requires_better_ai: false,
    context: 16,
    capabilities: { image_generation: 'full', web_search: 'full' },
    suggestions: ['chat', 'quick_ai', 'commands'],
    in_better_ai_subscription: false,
    status: null,
  },
  {
    id: 'openai-gpt-4-1106-preview',
    description: 'GPT-4 Turbo is OpenAI’s most advanced model',
    model: 'gpt-4-turbo',
    name: 'GPT-4 Turbo',
    features: ['chat', 'quick_ai', 'commands', 'api', 'emoji_search'],
    speed: 3,
    intelligence: 3,
    provider: 'openai',
    provider_name: 'OpenAI',
    provider_brand: 'openai',
    requires_better_ai: true,
    context: 16,
    capabilities: { image_generation: 'full', web_search: 'full' },
    suggestions: ['chat', 'quick_ai', 'commands'],
    in_better_ai_subscription: true,
    status: null,
  },
]

export const GROQ_SERVICE_PROVIDERS: RaycastAIModels = [
  {
    id: 'gemma-7b-it',
    model: 'gemma-7b-it',
    name: 'Gemma 7B It',
    description: `Gemma is a family of lightweight, state-of-the-art open models from Google, built from the same research and technology used to create the Gemini models.\n`,
    provider: 'groq',
    provider_name: 'Google',
    provider_brand: 'google',
    requires_better_ai: false,
    speed: 5,
    intelligence: 3,
    context: 32,
    suggestions: ['chat', 'quick_ai', 'commands'],
    features: ['chat', 'quick_ai', 'commands', 'api', 'emoji_search'],
    capabilities: {},
    in_better_ai_subscription: false,
    status: null,
  },
  {
    id: 'llama2-70b-4096',
    model: 'llama2-70b-4096',
    name: 'Llama 2 70B 4096',
    description: `Llama 2 is a collection of pretrained and fine-tuned generative text models ranging in scale from 7 billion to 70 billion parameters.\n`,
    provider: 'groq',
    provider_name: 'Meta',
    provider_brand: 'meta',
    requires_better_ai: true,
    speed: 3,
    intelligence: 3,
    context: 16,
    suggestions: ['chat', 'quick_ai', 'commands'],
    features: ['chat', 'quick_ai', 'commands', 'api', 'emoji_search'],
    capabilities: {},
    in_better_ai_subscription: true,
    status: null,
  },
  {
    id: 'mixtral-8x7b-32768',
    model: 'mixtral-8x7b-32768',
    name: 'Mixtral 8x7B 32768',
    description: `A pretrained generative Sparse Mixture of Experts, by Mistral AI, for chat and instruction use. Incorporates 8 experts (feed-forward networks) for a total of 47 billion parameters.\n`,
    provider: 'groq',
    provider_name: 'Mistral AI',
    provider_brand: 'mistral',
    requires_better_ai: false,
    speed: 4,
    intelligence: 3,
    context: 64,
    suggestions: ['chat', 'quick_ai', 'commands'],
    features: ['chat', 'quick_ai', 'commands', 'api', 'emoji_search'],
    capabilities: {},
    in_better_ai_subscription: false,
    status: null,
  },
]

export const GEMINI_SERVICE_PROVIDERS: RaycastAIModels = [
  {
    id: 'gemini-pro',
    model: 'gemini-pro',
    name: 'Gemini Pro',
    description: `Gemini Pro is a Google's model. It's a foundation model that performs well at a variety of natural language tasks such as summarization, instruction following, content generation, sentiment analysis, entity extraction, classification etc`,
    provider: 'gemini',
    provider_name: 'Google',
    provider_brand: 'google',
    requires_better_ai: false,
    speed: 3,
    intelligence: 3,
    context: 16,
    suggestions: ['chat', 'quick_ai', 'commands'],
    features: ['chat', 'quick_ai', 'commands', 'api', 'emoji_search'],
    capabilities: {
      // image_generation: 'null',
      // web_search: 'null'
    },
    in_better_ai_subscription: false,
    status: 'beta',
  },
]

export const RAYCAST_DEFAULT_MODELS = {
  chat: 'openai-gpt-3.5-turbo',
  quick_ai: 'openai-gpt-3.5-turbo',
  commands: 'openai-gpt-3.5-turbo',
  api: 'openai-gpt-3.5-turbo',
}

export const RAYCAST_GEMINI_PRO_ONLY_MODELS = {
  chat: 'gemini-pro',
  quick_ai: 'gemini-pro',
  commands: 'gemini-pro',
  api: 'gemini-pros',
}

export const RAYCAST_DEFAULT_GROQ_MODELS = {
  chat: 'gemma-7b-it',
  quick_ai: 'gemma-7b-it',
  commands: 'gemma-7b-it',
  api: 'gemma-7b-it',
}

export const OPENAI_OFFICIAL_ENDPOINT = 'https://api.openai.com/v1/chat/completions'
export const GEMINI_OFFICIAL_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent'
