# Radar Narcisista - MVP Multi-idioma

**Producto:** SaaS para claridad en relaciones abusivas  
**Idiomas:** Portugués | Inglés | Español  
**Demo:** https://radar-mvp-flippa.vercel.app  
**Stack:** Next.js 15 + Supabase + Stripe + IA

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![i18n](https://img.shields.io/badge/i18n-PT%20%7C%20EN%20%7C%20ES-green)

## 🎯 Sobre Este MVP

Este es un **MVP completo y funcional** listo para lanzamiento inmediato. Derivado de un proyecto de investigación más grande, este MVP contiene solo lo esencial para un producto comercial válido.

### 🚀 Funcionalidades Principales

### 👤 Usuario Final
- **Diario Inteligente:** Registros con etiquetas automáticas de riesgo
- **Test de Claridad:** Autoevaluación guiada con puntaje inmediato
- **Coach IA:** Apoyo emocional (sin diagnóstico médico)
- **Dashboard Personal:** Vista completa del viaje

### 👩‍⚕️ Profesional
- **Gestión de Clientes:** Lista individual y monitoreo
- **Timeline Compartida:** Acceso autorizado a registros
- **Métricas por Cliente:** Indicadores y evolución

### 👑 Administrador
- **Panel de Control:** Gestión completa de usuarios
- **Configuración de IA:** Ajustes de prompts y providers
- **Analytics Central:** Métricas generales de la plataforma

### 💰 Sistema de Monetización
- **4 Planes:** Free, Premium, Profesional, Whitelabel
- **Stripe Integrado:** Pagos automáticos y suscripciones
- **Control de Features:** Acceso por nivel de suscripción

## 🌍 Soporte Multi-idioma

- **Interfaz Completa:** 100% traducida en PT/EN/ES
- **Contenido Localizado:** FAQs, artículos y ayuda
- **Detección Automática:** Basado en el navegador del usuario
- **Switch Manual:** Usuario puede cambiar idioma cuando quiera

## 🛠️ Stack Tecnológica

```javascript
Frontend: Next.js 16 + React + TypeScript + TailwindCSS
Backend: Next.js API Routes + Middleware avanzado
Database: Supabase (PostgreSQL + RLS + Storage)
Auth: Supabase Auth + JWT seguro
Payments: Stripe (modo prueba + producción)
AI: OpenAI + Anthropic + Prompts optimizados
Deploy: Vercel (CI/CD automático)
i18n: Sistema completo PT/EN/ES
```

## 📊 ¿Por Qué Este MVP es Valioso?

### ✅ Mercado Global
- **3 idiomas desde el día 1** = 3x tamaño de mercado
- **HealthTech en crecimiento:** $210B mercado global
- **Tema socialmente relevante:** Alta demanda de herramientas de apoyo

### ✅ Tecnología Moderna
- **Next.js 16:** Última generación, performance optimizada
- **TypeScript:** Código seguro y mantenible
- **Supabase:** Backend-as-a-Service escalable
- **IA Integrada:** Múltiples providers, control de costos

### ✅ Revenue Ready
- **Stripe funcionando:** Pagos inmediatos
- **Planes Estructurados:** Modelo SaaS validado
- **Control de Acceso:** Features por nivel de suscripción

### ✅ Escalabilidad
- **Multi-tenant:** Arquitectura para múltiples clientes
- **White-label ready:** Fácil customización para terceros
- **API First:** Listo para integraciones externas

## 🚀 Setup Local (5 minutos)

```bash
# 1. Clonar
git clone https://github.com/eduardo/radar-mvp-flippa.git
cd radar-mvp-flippa

# 2. Instalar dependencias
npm install

# 3. Configurar ambiente
cp .env.example .env.local
# Llenar con tus claves (Supabase, Stripe, IA)

# 4. Correr migraciones
npx supabase db push

# 5. Iniciar desarrollo
npm run dev
# Abrir http://localhost:3000
```

### Variables de Entorno Requeridas
```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-key

# Stripe
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# IA
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=...

# i18n
NEXT_PUBLIC_DEFAULT_LOCALE=pt
```

## 🌐 Demo Online

**Acceso:** https://radar-mvp-flippa.vercel.app

### Usuarios de Prueba
```
👤 Usuario: demo.user@radar.test / DemoUser123!
👩‍⚕️ Profesional: demo.pro@radar.test / DemoPro123!
👑 Admin: demo.admin@radar.test / DemoAdmin123!
```

### Ruta de Prueba
1. **Probar los 3 idiomas** (PT/EN/ES)
2. **Tomar el Test de Claridad** completo
3. **Crear entrada en Diario** con etiquetas
4. **Chatear con Coach IA**
5. **Explorar dashboards** por perfil
6. **Probar upgrade de plan** (Stripe prueba)

## 📚 Documentación Completa

### 📖 Guías Esenciales
- **[DEV-SETUP.md](docs/DEV-SETUP.md)** - Setup completo para dev team
- **[DEMO-GUIDE.md](docs/DEMO-GUIDE.md)** - Guía de pruebas de demo
- **[API-DOCS.md](docs/API-DOCS.md)** - Documentación de APIs

### 💼 Venta y Transferencia
- **[LISTING-FLIPPA-EN.md](docs/LISTING-FLIPPA-EN.md)** - Listado listo
- **[ASSET-DATA-ROOM.md](docs/ASSET-DATA-ROOM.md)** - Data room técnico
- **[MIGRATION-GUIDE.md](docs/MIGRATION-GUIDE.md)** - Guía de transferencia

### 📄 Bonus Incluido
Carpeta **`internal-docs/`** contiene:
- Investigación original y prompts maestros
- Auditorías de código completas
- Roadmap de desarrollo futuro
- Análisis de mercado y UX

## 🎯 Oportunidad de Mercado

### 📈 Métricas y Potencial
- **TAM:** 1M+ usuarios en Brasil + mercado global
- **CAC:** Bajo (marketing viral, contenido orgánico)
- **LTV:** Alto (retención por meses/años)
- **ARPU:** $29-99/mes (dependiendo del plan)

### 🌍 Expansión Global
- **Portugués:** Brasil (220M habitantes)
- **Inglés:** EUA, UK, Canadá, Australia
- **Español:** América Latina + España (500M+)

### 🏢 Modelos de Revenue
1. **B2C:** Suscripciones directas para usuarios finales
2. **B2B:** Licenciamiento para clínicas y ONGs
3. **White-label:** Customización para otras empresas
4. **API:** Exposición de endpoints para partners

## 💎 Ventajas Competitivas

### ✅ Tecnología Superior
- **IA Multi-provider:** Optimización de costos y calidad
- **Sistema de Etiquetas:** Detección automática de patrones abusivos
- **Dashboard Multi-perfil:** Experiencia personalizada
- **Arquitectura Escalable:** Lista para millones de usuarios

### ✅ Contenido Validado
- **Prompts Probados:** 50+ prompts validados por psicólogos
- **Base Científica:** Basado en psicología clínica
- **UX Empática:** Design enfocado en usuarios vulnerables
- **Seguridad:** Privacidad y protección de datos

### ✅ Modelo de Negocio
- **Free Trial:** Barrera de entrada baja
- **Upgrade Natural:** Valor demostrado antes del pago
- **Multi-plan:** Opciones para diferentes necesidades
- **Revenue Recurrente:** Modelo SaaS predecible

## 🔜 Próximos Pasos para Comprador

### 🚀 Lanzamiento Inmediato (30 días)
1. **Setup Técnico:** Configurar cuentas (Supabase, Stripe, IA)
2. **Customización:** Agregar branding y dominio
3. **Marketing:** Crear contenido y campañas
4. **Lanzamiento:** Publicar y adquirir primeros usuarios

### 📈 Escala (3-6 meses)
1. **Expansión:** Traducir a más idiomas
2. **Mobile:** App React Native
3. **API:** Abrir para partners
4. **Enterprise:** Planes corporate

## 📞 Soporte y Transferencia

### ✅ Incluido en la Venta
- **Transferencia Completa:** GitHub, Supabase, dominios
- **30 Días de Soporte:** Setup, preguntas, migración
- **Documentación Completa:** Todas las guías y manuales
- **Consultoría:** 2h de estrategia post-venta

### 🤝 Contacto
- **Email:** eduardo@exemplo.com
- **GitHub:** https://github.com/eduardo/radar-mvp-flippa
- **Telegram:** @eduardo_dev

---

## 📋 Licencia

**Asset Sale - Transferencia Completa**

El comprador recibe:
- ✅ 100% del código fuente
- ✅ Todos los derechos de propiedad intelectual
- ✅ Documentación completa
- ✅ Soporte para migración
- ✅ Bonus: investigación y prompts originales

---

**Este es un raro activo digital: tecnología moderna, mercado validado, impacto social positivo y revenue predecible. Listo para lanzamiento inmediato.**

*Inquiries serias por favor contactar para due diligence técnica.*
