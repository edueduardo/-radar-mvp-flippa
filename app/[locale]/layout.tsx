import { ReactNode } from 'react'

interface LocaleLayoutProps {
  children: ReactNode
  params: Promise<{ locale: string }>
}

// Supported locales
export const locales = ['pt', 'en', 'es'] as const
export type Locale = (typeof locales)[number]

// Generate static params for all locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  // Just pass through children - the root layout handles html/body
  return <>{children}</>
}
