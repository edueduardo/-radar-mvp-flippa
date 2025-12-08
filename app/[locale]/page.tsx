'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Shield, BookOpen, MessageCircle, ChevronRight, BarChart3, Globe, Heart, Sparkles, CheckCircle2 } from 'lucide-react'
import { useTranslation as useI18n, type Locale } from '../../lib/i18n'

// Map URL locale to i18n locale
function mapLocale(urlLocale: string): Locale {
  const map: Record<string, Locale> = {
    'pt': 'pt-BR',
    'pt-BR': 'pt-BR',
    'en': 'en',
    'es': 'es'
  }
  return map[urlLocale] || 'pt-BR'
}

export default function LocalizedHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const [currentLocale, setCurrentLocale] = useState<Locale>('pt-BR')
  const [urlLocale, setUrlLocale] = useState('pt')
  const { t } = useI18n(currentLocale)
  const [scrollProgress, setScrollProgress] = useState(0)
  const router = useRouter()
  
  // Obter locale dos params
  useEffect(() => {
    const getLocale = async () => {
      const { locale } = await params
      setUrlLocale(locale)
      setCurrentLocale(mapLocale(locale))
    }
    getLocale()
  }, [params])

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header */}
      <header className="fixed top-1 w-full z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
            <div className="flex justify-between items-center h-16 px-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-bold text-lg">Radar</span>
              </div>

              <nav className="hidden md:flex items-center space-x-1">
                {[
                  { href: '/teste-clareza', label: t('navigation.clarity_test') },
                  { href: '/diario', label: t('navigation.diary') },
                  { href: '/chat', label: t('navigation.ai_coach') },
                ].map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    className="text-slate-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center space-x-3">
                <LanguageSelector currentLocale={urlLocale} />
                <Link 
                  href="/login"
                  className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-violet-500/25"
                >
                  {t('navigation.login')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
          <div className="absolute top-40 right-1/4 w-80 h-80 bg-fuchsia-600/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-slate-200">Clareza emocional com IA</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">{t('hero.title1')}</span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              {t('hero.title2')}
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* Questions Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-12 max-w-3xl mx-auto">
            {['question1', 'question2', 'question3', 'question4'].map((q, i) => (
              <div 
                key={i} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-left hover:bg-white/10 transition-all"
              >
                <p className="text-slate-300 italic text-sm">"{t(`hero.${q}`)}"</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/teste-clareza"
              className="group bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-xl shadow-violet-500/30 flex items-center justify-center"
            >
              {t('hero.cta_test')}
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/login"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all flex items-center justify-center"
            >
              {t('hero.cta_learn')}
              <BookOpen className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('howItWorks.title')}
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              {t('howItWorks.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { key: 'step1', icon: Shield, color: 'from-violet-500 to-purple-600', num: '01' },
              { key: 'step2', icon: BarChart3, color: 'from-fuchsia-500 to-pink-600', num: '02' },
              { key: 'step3', icon: MessageCircle, color: 'from-amber-500 to-orange-600', num: '03' }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all hover:-translate-y-1">
                  <div className="absolute -top-4 -right-4 text-6xl font-bold text-white/5 group-hover:text-white/10 transition-all">
                    {step.num}
                  </div>
                  <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {t(`howItWorks.${step.key}.title`)}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {t(`howItWorks.${step.key}.desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-900 to-indigo-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('tools.title')}
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              {t('tools.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { key: 'test', icon: Shield, href: '/teste-clareza', color: 'violet' },
              { key: 'diary', icon: BookOpen, href: '/diario', color: 'fuchsia' },
              { key: 'coach', icon: MessageCircle, href: '/chat', color: 'amber' }
            ].map((tool, i) => (
              <Link 
                key={i} 
                href={tool.href} 
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1"
              >
                <div className={`w-14 h-14 bg-${tool.color}-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <tool.icon className={`w-7 h-7 text-${tool.color}-400`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-violet-300 transition-colors">
                  {t(`tools.${tool.key}.title`)}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  {t(`tools.${tool.key}.desc`)}
                </p>
                <div className="flex items-center text-violet-400 text-sm font-medium group-hover:text-violet-300">
                  Acessar
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronta para ter clareza?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Comece gratuitamente. Sem julgamentos, apenas clareza.
          </p>
          <Link 
            href="/teste-clareza"
            className="inline-flex items-center bg-white text-slate-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-100 transition-all shadow-xl"
          >
            Começar Agora
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold">Radar Narcisista</span>
            </div>
            <p className="text-slate-500 text-sm text-center">
              {t('footer.copyright')}
            </p>
            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <Link href="/termos" className="hover:text-white transition">Termos</Link>
              <Link href="/privacidade" className="hover:text-white transition">Privacidade</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function LanguageSelector({ currentLocale }: { currentLocale: string }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const locales = [
    { code: 'pt', name: '🇧🇷 PT' },
    { code: 'en', name: '🇺🇸 EN' },
    { code: 'es', name: '🇪🇸 ES' }
  ]

  const handleLanguageChange = (locale: string) => {
    const currentPath = window.location.pathname
    const newPath = currentPath.replace(`/${currentLocale}`, `/${locale}`)
    router.push(newPath)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-white hover:text-purple-400 transition"
      >
        <Globe className="w-4 h-4" />
        <span>{locales.find(l => l.code === currentLocale)?.name}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-slate-800 rounded-lg shadow-lg border border-white/10">
          {locales.map((locale) => (
            <button
              key={locale.code}
              onClick={() => handleLanguageChange(locale.code)}
              className="w-full text-left px-4 py-2 text-white hover:bg-slate-700 transition first:rounded-t-lg last:rounded-b-lg"
            >
              {locale.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

