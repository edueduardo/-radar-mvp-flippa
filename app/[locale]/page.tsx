'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { Shield, BookOpen, MessageCircle, ChevronRight, Heart, Lock, Phone, Menu, X, BarChart3, Globe, Check, Moon, Sun, Monitor, ArrowUp, Users, Sparkles, RefreshCw, FileText, Lightbulb, MapPin, Star, TrendingUp } from 'lucide-react'
import HeaderMenuDropdown, { MobileMenuDropdown } from '../../components/HeaderMenuDropdown'
import SocialProofWidget from '../../components/SocialProofWidget'
import SkipLinks, { SectionMarker, ScreenReaderAnnouncement } from '../../components/SkipLinks'
import { initializeEasterEggs } from '../../lib/easter-eggs'
import { initializeUltraSecrets } from '../../lib/easter-eggs-secret'
import { initializeHiddenPowers } from '../../lib/hidden-powers'
import { getDisplayPlans } from '../../lib/plans-config'
import { useConsumerPlans, type PlanWithPromotion } from '../../hooks/usePlans'
import DynamicSections from '../../components/frontpage/DynamicSections'

type Theme = 'light' | 'dark' | 'high-contrast'

export default function LocalizedHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { t } = useTranslation('common')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>('dark')
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [periodo, setPeriodo] = useState<'mensal' | 'anual'>('mensal')
  const router = useRouter()
  const [currentLocale, setCurrentLocale] = useState('pt')
  
  // Obter locale dos params
  useEffect(() => {
    const getLocale = async () => {
      const { locale } = await params
      setCurrentLocale(locale)
    }
    getLocale()
  }, [params])
  
  // Planos do banco de dados (com fallback para hardcoded)
  const { plans: dbPlans, source: plansSource } = useConsumerPlans(currentLocale)
  
  // Usar planos do banco se disponíveis, senão fallback
  const displayPlans = dbPlans.length > 0 
    ? dbPlans.filter(p => !p.comingSoon)
    : getDisplayPlans(false, false).filter(p => !p.comingSoon)

  // Scroll progress + botão voltar ao topo
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Easter eggs
  useEffect(() => {
    initializeEasterEggs()
    initializeUltraSecrets()
    initializeHiddenPowers()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-zinc-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg border-b border-white/10 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href={`/${currentLocale}/dashboard`} className="text-white font-bold text-xl">
                {t('app.name')}
              </Link>
              <span className="text-purple-400 text-sm hidden sm:inline">
                {t('header.tagline')}
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href={`/${currentLocale}/dashboard`} className="text-white hover:text-purple-400 transition">
                {t('navigation.dashboard')}
              </Link>
              <Link href={`/${currentLocale}/diario`} className="text-white hover:text-purple-400 transition">
                {t('navigation.diary')}
              </Link>
              <Link href={`/${currentLocale}/teste-clareza`} className="text-white hover:text-purple-400 transition">
                {t('navigation.clarity_test')}
              </Link>
              <Link href={`/${currentLocale}/chat`} className="text-white hover:text-purple-400 transition">
                {t('navigation.ai_coach')}
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <LanguageSelector currentLocale={currentLocale} />
              <Link 
                href={`/${currentLocale}/login`}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition"
              >
                {t('navigation.login')}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {t('hero.title1')} <br />
            <span className="text-purple-400">{t('hero.title2')}</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
            {['question1', 'question2', 'question3', 'question4'].map((q, i) => (
              <div key={i} className="text-left text-gray-300 italic">
                "{t(`hero.${q}`)}"
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href={`/${currentLocale}/teste-clareza`}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition flex items-center justify-center"
            >
              {t('hero.cta_test')}
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href={`/${currentLocale}/dashboard`}
              className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition flex items-center justify-center"
            >
              {t('hero.cta_learn')}
              <BookOpen className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              {t('howItWorks.title')}
            </h2>
            <p className="text-gray-300 text-lg">
              {t('howItWorks.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { key: 'step1', icon: Shield },
              { key: 'step2', icon: BarChart3 },
              { key: 'step3', icon: MessageCircle }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {t(`howItWorks.${step.key}.title`)}
                </h3>
                <p className="text-gray-300">
                  {t(`howItWorks.${step.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              {t('tools.title')}
            </h2>
            <p className="text-gray-300 text-lg">
              {t('tools.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { key: 'test', icon: Shield, href: `/${currentLocale}/teste-clareza` },
              { key: 'diary', icon: BookOpen, href: `/${currentLocale}/diario` },
              { key: 'coach', icon: MessageCircle, href: `/${currentLocale}/chat` }
            ].map((tool, i) => (
              <Link key={i} href={tool.href} className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-700/50 transition">
                <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <tool.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {t(`tools.${tool.key}.title`)}
                </h3>
                <p className="text-gray-300">
                  {t(`tools.${tool.key}.desc`)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            {t('footer.description')}
          </p>
          <p className="text-gray-500 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </footer>
    </div>
  )
}

function LanguageSelector({ currentLocale }: { currentLocale: string }) {
  const router = useRouter()
  const { t } = useTranslation('common')
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

