// Next Imports
import type { headers } from 'next/headers'

// Type Imports
import LangRedirect from '@components/LangRedirect'
import type { Locale } from '@configs/i18n'
import type { ChildrenType } from '@core/types'

// Component Imports

// Config Imports
import { i18n } from '@configs/i18n'

const invalidLangs = ['_next']

const TranslationWrapper = (params: { headersList: ReturnType<typeof headers>; lang: Locale } & ChildrenType) => {
  const doesLangExist = i18n.locales.includes(params.lang)

  const isInvalidLang = invalidLangs.includes(params.lang)

  return doesLangExist || isInvalidLang ? params.children : <LangRedirect />
}

export default TranslationWrapper
