import type { Locale } from '@/configs/i18n'
import { getDictionary } from '@/utils/getDictionary'

export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang)

  return <h1>{dict.home.title}</h1>
}
