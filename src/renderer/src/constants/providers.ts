export type Provider = 'anthropic' | 'google' | 'openai' | 'deepseek' | 'glm'

export interface ModelOption {
  id: string
  name: string
  desc: string
}

export interface ProviderConfig {
  id: Provider
  label: string
  placeholder: string
  pattern: RegExp
  models: ModelOption[]
}

export const providerConfigs: ProviderConfig[] = [
  {
    id: 'anthropic',
    label: 'Anthropic',
    placeholder: 'sk-ant-...',
    pattern: /^sk-ant-/,
    models: [
      { id: 'anthropic/claude-opus-4-6', name: 'Claude Opus 4.6', desc: '최신 최고 성능' },
      { id: 'anthropic/claude-sonnet-4-6', name: 'Claude Sonnet 4.6', desc: '최신 균형 (추천)' },
      { id: 'anthropic/claude-opus-4-5', name: 'Claude Opus 4.5', desc: '고성능' },
      { id: 'anthropic/claude-sonnet-4-5', name: 'Claude Sonnet 4.5', desc: '균형' },
      { id: 'anthropic/claude-opus-4-1', name: 'Claude Opus 4.1', desc: '고성능' },
      { id: 'anthropic/claude-sonnet-4-0', name: 'Claude Sonnet 4.0', desc: '균형' },
      { id: 'anthropic/claude-opus-4-0', name: 'Claude Opus 4.0', desc: '고성능' },
      { id: 'anthropic/claude-haiku-4-5', name: 'Claude Haiku 4.5', desc: '빠르고 저렴' },
      {
        id: 'anthropic/claude-3-7-sonnet-latest',
        name: 'Claude 3.7 Sonnet',
        desc: '이전 세대'
      },
      {
        id: 'anthropic/claude-3-5-sonnet-20241022',
        name: 'Claude 3.5 Sonnet',
        desc: '이전 세대'
      },
      { id: 'anthropic/claude-3-5-haiku-latest', name: 'Claude 3.5 Haiku', desc: '이전 세대 경량' },
      { id: 'anthropic/claude-3-opus-20240229', name: 'Claude 3 Opus', desc: '레거시' }
    ]
  },
  {
    id: 'google',
    label: 'Google',
    placeholder: 'AIza...',
    pattern: /^AIza/,
    models: [
      { id: 'google/gemini-3.1-pro-preview', name: 'Gemini 3.1 Pro', desc: '최신 최고 성능' },
      { id: 'google/gemini-3-pro-preview', name: 'Gemini 3 Pro', desc: '고성능' },
      {
        id: 'google/gemini-3-flash-preview',
        name: 'Gemini 3 Flash',
        desc: '최신 빠른 (추천)'
      },
      { id: 'google/gemini-2.5-pro', name: 'Gemini 2.5 Pro', desc: '안정 고성능' },
      { id: 'google/gemini-2.5-flash', name: 'Gemini 2.5 Flash', desc: '안정 균형' },
      { id: 'google/gemini-2.5-flash-lite', name: 'Gemini 2.5 Flash Lite', desc: '경량' },
      { id: 'google/gemini-2.0-flash', name: 'Gemini 2.0 Flash', desc: '이전 세대' }
    ]
  },
  {
    id: 'openai',
    label: 'OpenAI',
    placeholder: 'sk-...',
    pattern: /^sk-(?!ant-)/,
    models: [
      { id: 'openai/gpt-5.2', name: 'GPT-5.2', desc: '최신 (추천)' },
      { id: 'openai/gpt-5.2-pro', name: 'GPT-5.2 Pro', desc: '최고 성능' },
      { id: 'openai/gpt-5.2-codex', name: 'GPT-5.2 Codex', desc: '코딩 특화' },
      { id: 'openai/gpt-5.1', name: 'GPT-5.1', desc: '범용' },
      { id: 'openai/gpt-5.1-codex', name: 'GPT-5.1 Codex', desc: '코딩 특화' },
      { id: 'openai/gpt-5', name: 'GPT-5', desc: '범용' },
      { id: 'openai/gpt-5-pro', name: 'GPT-5 Pro', desc: '고성능' },
      { id: 'openai/gpt-5-mini', name: 'GPT-5 Mini', desc: '경량' },
      { id: 'openai/gpt-5-nano', name: 'GPT-5 Nano', desc: '초경량' },
      { id: 'openai/o4-mini', name: 'o4-mini', desc: '추론 최신' },
      { id: 'openai/o3-pro', name: 'o3 Pro', desc: '추론 최고 성능' },
      { id: 'openai/o3', name: 'o3', desc: '추론' },
      { id: 'openai/gpt-4.1', name: 'GPT-4.1', desc: '이전 세대' },
      { id: 'openai/gpt-4.1-mini', name: 'GPT-4.1 Mini', desc: '이전 세대 경량' }
    ]
  },
  {
    id: 'deepseek',
    label: 'DeepSeek',
    placeholder: 'sk-...',
    pattern: /^sk-/,
    models: [
      { id: 'deepseek/deepseek-chat', name: 'DeepSeek V3', desc: '범용 최신 (추천)' },
      { id: 'deepseek/deepseek-reasoner', name: 'DeepSeek R1', desc: '추론 특화' }
    ]
  },
  {
    id: 'glm',
    label: 'Z.AI',
    placeholder: 'API 키 입력',
    pattern: /^.{8,}$/,
    models: [
      { id: 'zai/glm-5', name: 'GLM-5', desc: '최신 최고 성능 (추천)' },
      { id: 'zai/glm-4.7', name: 'GLM-4.7', desc: '고성능' },
      { id: 'zai/glm-4.7-flash', name: 'GLM-4.7 Flash', desc: '빠른' },
      { id: 'zai/glm-4.6', name: 'GLM-4.6', desc: '텍스트' },
      { id: 'zai/glm-4.6v', name: 'GLM-4.6V', desc: '이미지 지원' },
      { id: 'zai/glm-4.5', name: 'GLM-4.5', desc: '텍스트' },
      { id: 'zai/glm-4.5-air', name: 'GLM-4.5 Air', desc: '경량' },
      { id: 'zai/glm-4.5-flash', name: 'GLM-4.5 Flash', desc: '빠른' },
      { id: 'zai/glm-4.5v', name: 'GLM-4.5V', desc: '이미지 지원' }
    ]
  }
]
