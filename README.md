# Radar Narcisista - MVP Multi-idioma

**Produto:** SaaS para clareza em relacionamentos abusivos  
**Idiomas:** Português | English | Español  
**Demo:** https://radar-mvp-flippa-new.vercel.app  
**Stack:** Next.js 15 + Supabase + Stripe + IA

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![i18n](https://img.shields.io/badge/i18n-PT%20%7C%20EN%20%7C%20ES-green)

---

## 🎯 Sobre Este MVP

Este é um **MVP completo e funcional** pronto para launch imediato. Produto global com suporte a 3 idiomas desde o primeiro dia.

### 🚀 Funcionalidades Principais

### 👤 Usuária Final
- **Diário Inteligente:** Registro com tags automáticas de risco
- **Teste de Clareza:** Autoavaliação guiada com score imediato
- **Coach IA:** Suporte emocional (sem diagnóstico médico)
- **Dashboard Personal:** Visão completa da jornada

### 👩‍⚕️ Profissional
- **Gestão de Clientes:** Lista e acompanhamento individual
- **Timeline Compartilhada:** Acesso autorizado aos registros
- **Métricas por Cliente:** Indicadores e evolução

### 👑 Administrador
- **Painel de Controle:** Gestão completa de usuários
- **Configuração de IA:** Ajuste de prompts e providers
- **Analytics Central:** Métricas gerais da plataforma

### 💰 Sistema de Monetização
- **4 Planos:** Free, Premium, Profissional, Whitelabel
- **Stripe Integrado:** Pagamentos e assinaturas automáticas
- **Controle de Features:** Acesso por nível de plano

---

## 👥 Personas e Papéis

| Papel | Descrição |
|-------|-----------|
| **Usuária Final** | Pessoa que registra episódios, usa o diário, vê indicadores de risco |
| **Profissional** | Psicólogo/terapeuta que acompanha casos de pacientes |
| **Admin** | Gerencia a plataforma, configura IA, monitora métricas |

---

## 🛠️ Stack Técnica

| Tecnologia | Uso |
|------------|-----|
| **Next.js 15** (App Router) | Frontend + API Routes |
| **TypeScript** | Tipagem estática |
| **Supabase** | Banco (Postgres) + Auth + RLS |
| **Stripe** | Billing e assinaturas |
| **OpenAI / Anthropic** | Integração de IA |
| **Tailwind CSS** | Estilização |
| **Vercel** | Deploy |
| **Playwright** | Testes E2E |

---

## 📊 Estado Atual do Projeto

### ✅ Implementado (97%)

| Módulo | Status |
|--------|--------|
| Autenticação (login/cadastro/recuperação) | ✅ 100% |
| Diário com detecção de risco | ✅ 100% |
| Dashboard da usuária | ✅ 100% |
| Sistema de alertas de risco | ✅ 100% |
| Oráculo (Coach de IA) | ✅ 100% |
| Teste de Clareza | ✅ 100% |
| Painel Admin | ✅ 100% |
| Billing/Planos (Stripe) | ✅ 90% |
| FanPage dinâmica | ✅ 95% |
| Gerador de SaaS (multi-instância) | ✅ 100% |
| Testes E2E (Playwright) | ✅ 90% |

### 🔧 Pendências Mínimas

1. Configurar `price_id` reais do Stripe (variáveis de ambiente)
2. Executar seed de conteúdo da FanPage no Supabase

---

## 📦 O que está incluído na venda

- ✅ **Código-fonte completo** (Next.js + Supabase + Stripe + IA)
- ✅ **Documentação extensa** (40+ arquivos .md/.txt)
- ✅ **Prompts de IA auditados** (Oráculo, detecção de risco)
- ✅ **Scripts de banco de dados** (migrações, seeds)
- ✅ **Testes E2E** (Playwright configurado)
- ✅ **Deploy configurado** (Vercel)
- ✅ **Marca "Radar Narcisista"** (opcional, negociável)

### Documentação Interna Inclusa

- `HISTORICO-UNIFICADO.txt` – Histórico completo de decisões
- `FUTURO-TERMINAR-IMPLEMENTACAO.txt` – Roadmap detalhado
- `AUDITORIA-MASTER-PREMIUM.txt` – Auditoria técnica completa
- `ATLAS-RADAR-NARCISISTA.txt` – Visão arquitetural
- `PROMPTS-MESTRES-RADAR.txt` – Prompts de IA calibrados
- 40+ documentos de especificação, manuais e guias

---

## 🚀 Possíveis Caminhos para o Comprador

1. **Lançar como SaaS B2C** focado em relacionamentos abusivos
2. **Generalizar** para "clareza emocional" ou "saúde de relacionamentos"
3. **Whitelabel para clínicas/ONGs** (arquitetura multi-instância pronta)
4. **Usar como boilerplate** de SaaS em saúde mental com IA
5. **Licenciar para profissionais** (psicólogos, coaches)

---

## 💻 Como Rodar Localmente

### Pré-requisitos

- Node.js 18+
- Conta Supabase (gratuita)
- Conta Stripe (modo teste)
- Chave OpenAI ou Anthropic

### Instalação

```bash
# Clonar repositório
git clone https://github.com/edueduardo/radar-narcisista.git
cd radar-narcisista

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env.local
# Editar .env.local com suas chaves

# Rodar em desenvolvimento
npm run dev
```

Acesse: http://localhost:3000

### Variáveis de Ambiente

Veja `.env.example` para a lista completa. Principais:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
STRIPE_SECRET_KEY=
OPENAI_API_KEY=
```

---

## 💰 Status de Monetização

- **Estágio**: Pre-revenue (MVP pronto, não lançado comercialmente)
- **Modelo planejado**: Assinaturas mensais/anuais (4 planos)
- **Potencial adicional**: Licenciamento B2B, whitelabel, serviços

---

## 📄 Licença

Este projeto é **PROPRIETÁRIO** (All Rights Reserved).

Veja `LICENSE-RADAR-ASSET.txt` para detalhes.

O repositório está público apenas para avaliação por potenciais compradores.

---

## 📞 Contato para Aquisição

Interessado em adquirir, licenciar ou fazer parceria?

- **Nome**: Eduardo
- **Email**: [SEU_EMAIL_AQUI]
- **GitHub**: https://github.com/edueduardo
- **Localização**: Brasil (BRT)

---

## 📚 Guias Adicionais

- [Guia de Demo Online](docs/DEMO-GUIDE.md)
- [Guia de Setup para Devs](docs/DEV-SETUP.md)
- [Data Room do Asset](docs/ASSET-DATA-ROOM.md)
- [Manual do Admin](docs/MANUAL-ADMIN.md)
- [Manual da Usuária](docs/MANUAL-USUARIA.md)
