import type { RaycastAIModels } from '@ru/shared'

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
    capabilities: { },
    suggestions: ['chat', 'quick_ai', 'commands'],
    in_better_ai_subscription: false,
    status: null,
  },
  {
    id: 'openai-gpt-4-turbo',
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
    capabilities: { },
    suggestions: ['chat', 'quick_ai', 'commands'],
    in_better_ai_subscription: false,
    status: null,
  },
  {
    id: 'openai-gpt-3.5-turbo-online',
    description: 'GPT-3.5 Turbo is OpenAI’s fastest model, making it ideal for tasks that require quick response times with basic language processing capabilities.\n',
    model: 'gpt-3.5-turbo',
    name: 'GPT-3.5 Turbo Online',
    features: ['chat', 'quick_ai', 'commands', 'api', 'emoji_search'],
    speed: 3,
    intelligence: 3,
    provider: 'openai-web-search',
    provider_name: 'OpenAI',
    provider_brand: 'openai',
    requires_better_ai: false,
    context: 16,
    capabilities: { web_search: 'full' },
    suggestions: ['chat', 'quick_ai', 'commands'],
    in_better_ai_subscription: false,
    status: null,
  },
  {
    id: 'openai-gpt-4-turbo-online',
    description: 'GPT-4 Turbo is OpenAI’s most advanced model',
    model: 'gpt-4-turbo',
    name: 'GPT-4 Turbo Online',
    features: ['chat', 'quick_ai', 'commands', 'api', 'emoji_search'],
    speed: 3,
    intelligence: 3,
    provider: 'openai-web-search',
    provider_name: 'OpenAI',
    provider_brand: 'openai',
    requires_better_ai: true,
    context: 16,
    capabilities: { web_search: 'full' },
    suggestions: ['chat', 'quick_ai', 'commands'],
    in_better_ai_subscription: false,
    status: null,
  },
]

export const GROQ_SERVICE_PROVIDERS: RaycastAIModels = [

]

export const GEMINI_SERVICE_PROVIDERS: RaycastAIModels = [

]

export const COHERE_SERVICE_PROVIDERS: RaycastAIModels = [

]

export const RAYCAST_DEFAULT_MODELS = {
  chat: 'openai-gpt-3.5-turbo',
  quick_ai: 'openai-gpt-3.5-turbo',
  commands: 'openai-gpt-3.5-turbo',
  api: 'openai-gpt-3.5-turbo',
  emoji_search: 'openai-gpt-3.5-turbo',
}

export const RAYCAST_GEMINI_PRO_ONLY_MODELS = {
  chat: 'gemini-pro',
  quick_ai: 'gemini-pro',
  commands: 'gemini-pro',
  api: 'gemini-pro',
  emoji_search: 'gemini-pro',
}

export const RAYCAST_DEFAULT_GROQ_MODELS = {
  chat: 'llama3-70b-8192',
  quick_ai: 'llama3-70b-8192',
  commands: 'llama3-70b-8192',
  api: 'llama3-70b-8192',
  emoji_search: 'llama3-70b-8192',
}

export const OPENAI_OFFICIAL_ENDPOINT = 'https://api.openai.com/v1/chat/completions'
export const GEMINI_OFFICIAL_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent'
