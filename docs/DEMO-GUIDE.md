# 🎬 DEMO GUIDE – Radar Narcisista (Multi-language)

> Guia para testar a demo online do Radar Narcisista.
> Guide to test the online demo of Narcissist Radar.
> Guía para probar la demo en línea de Radar Narcisista.

---

## 🌐 URL da Demo / Demo URL

**Demo Online**: https://radar-mvp-flippa.vercel.app

### 🌍 Idiomas Disponíveis / Available Languages
- 🇧🇷 **Português** - Idioma padrão
- 🇺🇸 **English** - Click flag icon in header
- 🇪🇸 **Español** - Haga clic en el icono de bandera

---

## 👤 Usuários de Teste

### Usuária Final
```
Email: demo.user@radar.test
Senha: DemoUser123!
```

### Profissional
```
Email: demo.pro@radar.test
Senha: DemoPro123!
```

### Admin
```
Email: demo.admin@radar.test
Senha: DemoAdmin123!
```

---

## 🎯 Roteiro de Teste

### 0. Teste de Idiomas / Language Test 🌍

1. Acesse a URL da demo
2. Clique no ícone de bandeira no header
3. Teste cada idioma:
   - 🇧🇷 Português - Textos em português
   - 🇺🇸 English - All texts in English
   - 🇪🇸 Español - Todos los textos en español
4. Verifique que TODA a interface muda de idioma

### 1. Landing Page (Pública)

1. Acesse a URL da demo
2. Observe:
   - Hero section com proposta de valor
   - Seções explicativas
   - Planos e preços
   - Footer com links
   - **Seletor de idioma funcionando**

### 2. Fluxo da Usuária

1. **Login**: Use as credenciais de `demo.user`
2. **Dashboard**: Veja o painel com:
   - Contagem de diários
   - Indicador de risco
   - Gráficos de humor
3. **Diário**: 
   - Clique em "Novo Registro"
   - Escreva um episódio
   - Observe as tags sugeridas
4. **Oráculo**:
   - Acesse o Coach de Clareza
   - Faça uma pergunta
   - Veja a resposta da IA
5. **Teste de Clareza**:
   - Responda o questionário
   - Veja o resultado

### 3. Fluxo do Profissional

1. **Login**: Use as credenciais de `demo.pro`
2. **Dashboard**: Veja:
   - Lista de pacientes (se houver)
   - Alertas de risco
   - Métricas gerais

### 4. Fluxo do Admin

1. **Login**: Use as credenciais de `demo.admin`
2. **Painel Admin**: Explore:
   - Configurações de IA
   - Gestão de usuários
   - Métricas da plataforma
   - Gerador de SaaS

---

## 🔍 O que Observar

### ✅ Funcionalidades Core

- [ ] Login/logout funcionando
- [ ] Navegação fluida
- [ ] Diário salva e lista entradas
- [ ] Tags de risco aparecem
- [ ] Oráculo responde (se IA configurada)
- [ ] Dashboard mostra dados

### ✅ UI/UX

- [ ] Design responsivo (mobile/desktop)
- [ ] Cores e tipografia consistentes
- [ ] Feedback visual em ações
- [ ] Loading states

### ✅ Segurança

- [ ] Rotas protegidas funcionam
- [ ] Usuário só vê seus dados
- [ ] Admin tem acesso especial

---

## ⚠️ Limitações da Demo

1. **IA pode estar desativada**: Se não houver chave de API configurada, o Oráculo não responderá.

2. **Stripe em modo teste**: Pagamentos não são reais.

3. **Dados de demo**: Os dados são fictícios e podem ser resetados.

4. **Performance**: Demo pode ser mais lenta que produção.

---

## 🛠️ Problemas Comuns

### "Não consigo fazer login"
- Verifique se está usando as credenciais corretas
- Tente limpar cookies do navegador

### "Oráculo não responde"
- A IA pode estar desativada na demo
- Isso é configurável via variáveis de ambiente

### "Página não carrega"
- Verifique sua conexão
- Tente outro navegador

---

## 📞 Suporte

Dúvidas sobre a demo? Entre em contato:

- **Email**: edueduardo@github.com
- **GitHub**: https://github.com/edueduardo

---

## 🔗 Links Relacionados

- [README (PT)](../README.md)
- [README (EN)](../README-EN.md)
- [Dev Setup Guide](DEV-SETUP.md)
- [Asset Data Room](ASSET-DATA-ROOM.md)
