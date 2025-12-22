# 📚 Bolls Docs (Starlight)

[![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?logo=astro&logoColor=fff)](https://astro.build)
[![Starlight](https://img.shields.io/badge/Starlight-docs-7C3AED?logo=astro&logoColor=fff)](https://starlight.astro.build)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.x-06B6D4?logo=tailwindcss&logoColor=fff)](https://tailwindcss.com)

Documentação da **Bolls.Tech** — guias, referência e exemplos da API.

🌐 Website: https://docs.bolls.tech

💬 Comunidade/ajuda: https://bolls.tech/discord

---

## ✨ O que é este repositório?

Este projeto é o **website de documentação** da Bolls, construído com **Astro + Starlight**, com suporte a **MDX** e **Markdoc**.

O conteúdo principal fica em `src/content/docs/` e é publicado como rotas automaticamente.

---

## ✅ Requisitos

- Node.js (recomendado: LTS)
- npm

---

## 🚀 Como rodar localmente

1) Instale as dependências:

```bash
npm install
```

2) Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra: http://localhost:4321

---

## 🧱 Build & Preview

Gerar build de produção:

```bash
npm run build
```

Pré-visualizar o build localmente:

```bash
npm run preview
```

---

## 🗂️ Estrutura do projeto

```text
.
├─ public/                 # assets estáticos
├─ src/
│  ├─ content/docs/        # páginas da documentação (.md/.mdx)
│  ├─ layouts/             # layouts Astro
│  ├─ styles/              # CSS global (tema/estilos)
│  └─ content.config.ts    # schema/loader da coleção docs (Starlight)
├─ astro.config.mjs        # config do Astro + Starlight (sidebar, título, social)
├─ package.json            # scripts
└─ tsconfig.json
```

---

## 🧭 Navegação (Sidebar)

A sidebar do Starlight está configurada em `astro.config.mjs` com:

- 📘 **Guides** (ex.: `guides/example`)
- 📎 **Reference** (autogerado a partir de `src/content/docs/reference/`)
- 🧪 **Testes** (autogerado a partir de `src/content/docs/teste/`)

---

## 📝 Como contribuir com a documentação

1) Crie/edite arquivos em `src/content/docs/` (Markdown ou MDX)
2) Rode `npm run dev` para revisar
3) Abra um PR com uma descrição clara do que mudou ✍️

---

## 📦 Scripts (npm)

| Comando | Ação |
|---|---|
| `npm run dev` | inicia o servidor local |
| `npm run build` | gera o site em produção |
| `npm run preview` | pré-visualiza o build |
| `npm run astro` | roda o CLI do Astro |

---

## 🔗 Links

- 🌐 https://bolls.tech
- 💬 https://bolls.tech/discord
