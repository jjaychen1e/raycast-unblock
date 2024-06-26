import type { FastifyRequest } from 'fastify'
import type { AIConfig, AIServiceConfig, User } from '@ru/shared'
import { getStore } from '../../../utils/store.util'

export function getApiKey(request: FastifyRequest, aiConfig: AIConfig | undefined, config: AIServiceConfig | undefined): string | undefined {
  const raycastRequestHeaders = request.headers
  const token = raycastRequestHeaders.authorization
  const users = getStore<User[]>('users') || []
  const user = users.find(u => u.tokens?.includes(token ?? ''))

  const usersApiKeyCustomizationEnabled = config?.usersApiKeyCustomizationEnabled || aiConfig?.usersApiKeyCustomizationEnabled || false

  let apiKey: string | undefined
  if (usersApiKeyCustomizationEnabled && user?.email)
    apiKey = config?.userApiKeys?.[user.email]
  else
    apiKey = config?.apiKey

  return apiKey
}
