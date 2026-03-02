import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'ko', label: '한국어' },
  { code: 'en', label: 'English' },
  { code: 'ja', label: '日本語' },
  { code: 'zh', label: '中文' }
] as const

export default function LanguageSwitcher(): React.JSX.Element {
  const { i18n } = useTranslation()

  const handleChange = async (lng: string): Promise<void> => {
    const prev = i18n.language
    await i18n.changeLanguage(lng)
    try {
      const result = await window.electronAPI.i18n.setLanguage(lng)
      if (!result.success) await i18n.changeLanguage(prev)
    } catch {
      await i18n.changeLanguage(prev)
    }
  }

  return (
    <select
      value={i18n.language}
      onChange={(e) => handleChange(e.target.value)}
      className="bg-bg-card border border-glass-border rounded-lg px-2 py-1 text-xs text-text-muted outline-none cursor-pointer hover:border-primary/40 transition-colors"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  )
}
