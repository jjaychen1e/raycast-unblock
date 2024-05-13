import type { RaycastAIModel } from '../raycast/models'

export interface AIConfig {
  default?: string
  temperature?: number
  maxTokens?: number
  functions?: AIServiceFunctionsConfig

  openai?: OpenAIServiceConfig
  gemini?: GeminiServiceConfig
  groq?: GroqServiceConfig
  usersApiKeyCustomizationEnabled?: boolean
  cohere?: CohereWebServiceConfig
}
export interface AIServiceFunctionsConfig {
  disable?: boolean
  plugins?: {
    [key: string]: string
  }
  serp?: {
    apyHubApiKey?: string
    tavilyAiApiKey?: string
  }
}
export interface AIServiceConfig {
  disable?: boolean
  apiKey?: string
  maxTokens?: number
  temperature?: number
  usersApiKeyCustomizationEnabled?: boolean
  userApiKeys?: { [key: string]: string }
}
export interface OpenAIServiceConfig extends AIServiceConfig {
  baseUrl?: string
  models?: AIServiceModelsConfig
  default?: string
  isAzure?: boolean
  azureDeploymentName?: string
}
export interface GeminiServiceConfig extends AIServiceConfig {}

export interface GroqServiceConfig extends Omit<AIServiceConfig, 'apiKey'> {
  refreshToken?: string
  default: string
}

export interface CohereWebServiceConfig extends AIServiceConfig {
  type?: 'api' | 'web'
  email?: string
  password?: string
}

interface AIModelConfig extends Omit<RaycastAIModel, 'capabilities'> {
  baseUrl?: string // Special endpoint for the model
  apiKey?: string // API key for the model
  realId?: string // Real ID for the model
  capabilities?: {
    imageGeneration: boolean
    webSearch: boolean
  }
}

export interface AIServiceModelsConfig {
  [key: string]: AIModelConfig
}
