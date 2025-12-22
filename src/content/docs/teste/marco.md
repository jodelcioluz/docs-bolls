---
title: 'Marco Pereira'
description: 'Um teste do Markdown do Astro'
---

# 🚀 DeliveryMarco Dashboard

Dashboard automatizado para gerenciamento de vendas, rastreios e comunicação via WhatsApp.

## 📋 Funcionalidades

✅ **Sistema de Login Seguro**
- Autenticação via API
- Proteção de rotas e interface

✅ **Menu Principal com Cards Animados**
- Enviar Rastreio para Grupo
- Configurar Horários Automáticos
- Gerenciar Clientes
- Iniciar/Finalizar Vendas

✅ **Envio de Rastreios**
- Seleção de grupos do WhatsApp via API (Bolls)
- Formulário completo (Nome, Rastreio, Produto, Preço)
- Persistência de dados no MongoDB Atlas
- 3 ações principais:
  - **SAUDAÇÃO**: Envia mensagem de boas-vindas personalizada
  - **ENVIAR STATUS**: Consulta e envia atualização do rastreio (com verificação de status "unchanged")
  - **FINALIZAR VENDA**: Encerra a venda, notifica o cliente e limpa os dados

✅ **Horários Automáticos**
- Configure 2 horários por dia
- Verificação automática de rastreios em background
- Envio programado de mensagens

## 🛠️ Instalação

### 1. Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
PORT=3000
MONGODB_URI=sua_string_de_conexao_mongodb_atlas
```

### 2. Instalar Dependências

```powershell
npm install
```

### 3. Iniciar o Servidor Backend

Para desenvolvimento (com auto-reload):
```powershell
npm run dev
```

Para produção:
```powershell
npm start
```

O servidor estará rodando em: **http://localhost:3000**

### 4. Abrir o Dashboard

Abra o arquivo `index.html` no navegador.

## 📡 Endpoints da API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/saudacao` | Envia mensagem de saudação |
| POST | `/enviar-rastreio-unico` | Envia atualização de rastreio (verifica status) |
| POST | `/finalizar` | Finaliza a venda e envia mensagem de conclusão |
| POST | `/horarios` | Salva horários automáticos |
| GET | `/api/configuracoes` | Lista todas as configurações salvas |
| GET | `/api/configuracao/:groupId` | Busca dados de um grupo específico |
| POST | `/api/rastreio/adicionar` | Adiciona novo código de rastreio |

## 🔧 Estrutura de Dados (Exemplos)

### POST /enviar-rastreio-unico
```json
{
  "group": "120363423586748511@g.us",
  "pushname": "João Silva",
  "rastreio": "AA123456789BR",
  "description": "Produto X",
  "preco": 150.00
}
```

### POST /finalizar
```json
{
  "group": "120363423586748511@g.us",
  "pushname": "João Silva",
  "description": "Produto X"
}
```

## 🎨 Tecnologias Utilizadas

### Frontend
- HTML5
- Tailwind CSS (via CDN)
- JavaScript Vanilla
- Fetch API

### Backend
- Node.js (v18+)
- Express.js
- MongoDB Atlas (Persistência de dados)
- Node-Fetch (Integração com API externa)

## 📝 Como Usar

### 1. Login
- Acesse o dashboard e utilize suas credenciais de acesso.

### 2. Enviar Rastreio
1. Clique em "Enviar Rastreio" no menu.
2. Selecione um grupo do WhatsApp.
3. Preencha os dados do cliente e produto.
4. Adicione os códigos de rastreio.
5. Utilize os botões de ação para interagir com o cliente.

### 3. Configurar Horários
1. Clique em "Horários Automáticos".
2. Defina os horários de verificação.
3. O sistema rodará em background verificando atualizações.

## 🔥 Próximos Passos

- [ ] Integração completa com API do Correios
- [ ] Dashboard de estatísticas avançadas
- [ ] Histórico de vendas exportável
- [ ] Notificações push no navegador

## 📞 Suporte

Para dúvidas ou problemas, verifique o console do navegador (F12) e os logs do servidor.

---

**Desenvolvido para automatizar o fluxo de vendas do Marco Pereira! 🎉**