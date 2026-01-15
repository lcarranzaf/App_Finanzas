'use client'

import { useLocale } from 'next-intl'
import { Link } from '@/i18n/client'

export default function LanguageToggle() {
  const locale = useLocale()

  return (
    <div className="relative inline-block w-14 h-7 bg-gray-300 rounded-full transition-colors duration-300">
      <Link
        href="/"
        locale="en"
        className={`absolute top-0 left-0 w-7 h-7 flex items-center justify-center text-xs font-medium rounded-full transition-all duration-300 ${
          locale === 'en' ? 'bg-blue-500 text-white translate-x-7 z-10' : 'text-gray-600 z-0'
        }`}
      >
        EN
      </Link>
      <Link
        href="/"
        locale="es"
        className={`absolute top-0 right-0 w-7 h-7 flex items-center justify-center text-xs font-medium rounded-full transition-all duration-300 ${
          locale === 'es' ? 'bg-blue-500 text-white -translate-x-7 z-10' : 'text-gray-600 z-0'
        }`}
      >
        ES
      </Link>
    </div>
  )
}