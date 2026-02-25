import Button from '../components/Button'
import { providerConfigs, type Provider } from '../constants/providers'

const providerMeta: Record<
  Provider,
  {
    name: string
    consoleUrl: string
    consoleLabel: string
    emojis: string[]
    steps: { title: string; desc: string }[]
  }
> = {
  google: {
    name: 'Google Gemini',
    consoleUrl: 'https://aistudio.google.com/apikey',
    consoleLabel: 'AI Studio 바로가기',
    emojis: ['🌐', '🔑', '📋'],
    steps: [
      {
        title: 'Google AI Studio 접속',
        desc: 'aistudio.google.com/apikey 에 접속하세요. 구글 계정으로 바로 로그인됩니다.'
      },
      {
        title: 'API 키 만들기',
        desc: 'Create API Key 버튼을 클릭하면 AIza... 로 시작하는 키가 즉시 생성됩니다.'
      },
      {
        title: '키 복사',
        desc: '생성된 키를 복사하세요. 나중에 다시 확인할 수 있지만, 지금 복사해 두는 게 편합니다.'
      }
    ]
  },
  openai: {
    name: 'OpenAI',
    consoleUrl: 'https://platform.openai.com/api-keys',
    consoleLabel: 'Platform 바로가기',
    emojis: ['🌐', '💳', '🔑', '📋'],
    steps: [
      {
        title: 'OpenAI Platform 접속',
        desc: 'platform.openai.com 에 접속하세요. 이메일로 간단히 가입할 수 있습니다.'
      },
      {
        title: '결제 수단 등록',
        desc: 'Settings → Billing 에서 신용카드를 등록하고 크레딧을 충전하세요. 최소 $5부터 시작!'
      },
      {
        title: 'API Keys 메뉴 이동',
        desc: 'API Keys 페이지로 이동하세요. 좌측 사이드바에서 찾을 수 있습니다.'
      },
      {
        title: '새 키 생성 및 복사',
        desc: 'Create new secret key → 이름 입력 → sk-... 로 시작하는 키를 복사하세요.'
      }
    ]
  },
  anthropic: {
    name: 'Anthropic',
    consoleUrl: 'https://console.anthropic.com/settings/keys',
    consoleLabel: '콘솔 바로가기',
    emojis: ['🌐', '💳', '🔑', '📋'],
    steps: [
      {
        title: 'Anthropic 콘솔 접속',
        desc: 'console.anthropic.com 에 접속하세요. 이메일로 간단히 가입할 수 있습니다.'
      },
      {
        title: '결제 수단 등록',
        desc: 'Settings → Billing 에서 신용카드를 등록하고 크레딧을 충전하세요. 최소 $5부터 시작!'
      },
      {
        title: 'API Keys 메뉴 이동',
        desc: 'Settings → API Keys 페이지로 이동하세요. 사이드바에서 열쇠 아이콘을 찾으면 됩니다.'
      },
      {
        title: '새 키 생성 및 복사',
        desc: 'Create Key 버튼 → 이름 입력 → sk-ant-... 로 시작하는 키를 복사하세요. '
      }
    ]
  },
  deepseek: {
    name: 'DeepSeek',
    consoleUrl: 'https://platform.deepseek.com/api_keys',
    consoleLabel: 'Platform 바로가기',
    emojis: ['🌐', '💳', '🔑', '📋'],
    steps: [
      {
        title: 'DeepSeek Platform 접속',
        desc: 'platform.deepseek.com 에 접속하세요. 이메일 또는 휴대폰 번호로 가입할 수 있습니다.'
      },
      {
        title: '크레딧 충전',
        desc: 'Top Up 메뉴에서 크레딧을 충전하세요. 가격이 매우 저렴합니다!'
      },
      {
        title: 'API Keys 메뉴 이동',
        desc: 'API Keys 페이지로 이동하세요. 좌측 사이드바에서 찾을 수 있습니다.'
      },
      {
        title: '새 키 생성 및 복사',
        desc: 'Create new API key → 이름 입력 → sk-... 로 시작하는 키를 복사하세요.'
      }
    ]
  },
  glm: {
    name: 'Z.AI (智谱)',
    consoleUrl: 'https://z.ai/manage-apikey/apikey-list',
    consoleLabel: 'Z.AI 바로가기',
    emojis: ['🌐', '💳', '🔑', '📋'],
    steps: [
      {
        title: 'Z.AI 접속',
        desc: 'z.ai 에 접속하세요. 이메일 또는 휴대폰 번호로 가입할 수 있습니다.'
      },
      {
        title: '크레딧 충전',
        desc: '충전 메뉴에서 크레딧을 충전하세요. 신규 가입 시 무료 크레딧이 제공됩니다.'
      },
      {
        title: 'API Keys 메뉴 이동',
        desc: 'API 키 관리 페이지로 이동하세요.'
      },
      {
        title: '새 키 생성 및 복사',
        desc: 'API 키 생성 버튼 → 생성된 키를 복사하세요.'
      }
    ]
  }
}

const providerOrder: Provider[] = ['google', 'openai', 'anthropic', 'deepseek', 'glm']

interface Props {
  provider: Provider
  onSelectProvider: (p: Provider) => void
  modelId?: string
  onSelectModel: (id: string) => void
  onNext: () => void
}

export default function ApiKeyGuideStep({
  provider,
  onSelectProvider,
  modelId,
  onSelectModel,
  onNext
}: Props): React.JSX.Element {
  const meta = providerMeta[provider]
  const providerConfig = providerConfigs.find((p) => p.id === provider)!
  const selectedModelId = modelId ?? providerConfig.models[0].id

  return (
    <div className="flex-1 relative px-8">
      <div className="text-center space-y-0.5 pt-2 pb-1.5">
        <h2 className="text-lg font-extrabold">AI 제공사 선택</h2>
        <p className="text-text-muted text-xs">사용할 AI 제공사를 선택하고 API 키를 발급받으세요</p>
      </div>

      <div className="flex rounded-xl border border-glass-border overflow-hidden bg-bg-card">
        {providerOrder.map((p, i) => (
          <button
            key={p}
            onClick={() => onSelectProvider(p)}
            className={`flex-1 py-2 text-center transition-colors duration-200 cursor-pointer ${
              i > 0 ? 'border-l border-glass-border' : ''
            } ${provider === p ? 'bg-primary/15 text-text' : 'hover:bg-white/5 text-text-muted'}`}
          >
            <p className={`text-xs font-bold ${provider === p ? 'text-primary' : ''}`}>
              {providerMeta[p].name}
            </p>
          </button>
        ))}
      </div>

      {/* 모델 선택 */}
      <div className="space-y-1 mt-2">
        <label className="text-xs font-bold text-text-muted">모델 선택</label>
        <div className="space-y-1 max-h-28 overflow-y-auto pr-1">
          {providerConfig.models.map((m) => (
            <button
              key={m.id}
              onClick={() => onSelectModel(m.id)}
              className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-left transition-all duration-150 cursor-pointer ${
                selectedModelId === m.id
                  ? 'bg-primary/15 border border-primary/40'
                  : 'bg-white/5 border border-transparent hover:bg-white/8'
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full border-2 shrink-0 transition-colors ${
                  selectedModelId === m.id
                    ? 'border-primary bg-primary'
                    : 'border-text-muted/30 bg-transparent'
                }`}
              />
              <div className="min-w-0 flex items-baseline gap-1.5">
                <span className="text-xs font-bold whitespace-nowrap">{m.name}</span>
                <span className="text-[10px] text-text-muted/60 truncate">{m.desc}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <a
        href={meta.consoleUrl}
        target="_blank"
        rel="noreferrer"
        className="block text-center text-primary text-xs font-semibold hover:text-primary-light transition-colors py-2"
      >
        {meta.consoleLabel} &rarr;
      </a>

      <div className="space-y-2">
        {meta.steps.map((s, i) => (
          <div key={i} className="glass-card p-3.5 flex gap-3 items-start">
            <div className="shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-sm">
              {meta.emojis[i] ?? '📌'}
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold">{s.title}</p>
              <p className="text-text-muted text-[11px] mt-0.5 leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-16 right-6">
        <Button variant="primary" size="lg" onClick={onNext}>
          키 준비 완료!
        </Button>
      </div>
    </div>
  )
}
