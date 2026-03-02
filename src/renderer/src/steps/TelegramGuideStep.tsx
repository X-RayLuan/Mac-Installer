import { useTranslation } from 'react-i18next'
import Button from '../components/Button'

const emojis = ['🔍', '⌨️', '✏️', '🚀', '📋']

export default function TelegramGuideStep({ onNext }: { onNext: () => void }): React.JSX.Element {
  const { t } = useTranslation('steps')
  const steps = t('telegramGuide.steps', { returnObjects: true }) as {
    title: string
    desc: string
  }[]

  return (
    <div className="flex-1 flex flex-col min-h-0 px-8">
      <div className="flex-1">
        <div className="text-center space-y-0.5 pt-2 pb-1">
          <h2 className="text-lg font-extrabold">{t('telegramGuide.title')}</h2>
          <p className="text-text-muted text-xs">{t('telegramGuide.desc')}</p>
        </div>

        <a
          href="https://t.me/BotFather"
          target="_blank"
          rel="noreferrer"
          className="block text-center text-primary text-xs font-semibold hover:text-primary-light transition-colors py-1.5"
        >
          {t('telegramGuide.botfatherLink')}
        </a>

        <div className="space-y-1">
          {steps.map((s, i) => (
            <div key={i} className="glass-card p-2 flex gap-2 items-start">
              <div className="shrink-0 w-6 h-6 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-xs">
                {emojis[i]}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold">{s.title}</p>
                <p className="text-text-muted text-[11px] leading-snug">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="shrink-0 flex justify-end py-3">
        <Button variant="primary" size="lg" onClick={onNext}>
          {t('telegramGuide.tokenReady')}
        </Button>
      </div>
    </div>
  )
}
