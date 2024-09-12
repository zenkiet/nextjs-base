// Third-party Imports
import 'server-only'

// Type Imports
import type { Locale } from '@configs/i18n'

const dictionaries = {
  en: () => import('@/locales/en.json').then(module => module.default),
  jp: () => import('@/locales/jp.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
