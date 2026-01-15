'use client'

import { useLocale, useTranslations } from 'next-intl'
import { Link } from '@/i18n/client'

export default function LanguageToggle() {
  const locale = useLocale()
  const t = useTranslations()

  return (
    <div className="flex items-center space-x-2">
      <Link href="/" locale="en" className={`px-2 py-1 rounded ${locale === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
        EN
      </Link>
      <Link href="/" locale="es" className={`px-2 py-1 rounded ${locale === 'es' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
        ES
      </Link>
    </div>
  )
}