# 🚀 SuporteEficiente - Sistema de Multiatendimento WhatsApp

<div align="center">
  <img src="backend/public/logotipos/login.png" alt="Whaticket Logo" width="200"/>
  
  [![Node.js](https://img.shields.io/badge/node.js-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)
  [![React](https://img.shields.io/badge/react-17.0.1-blue)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/typescript-4.6.3-blue)](https://www.typescriptlang.org/)
  [![License](https://img.shields.io/badge/license-Commercial-red)](https://painel.suporteeficiente.com.br)
  
  **Sistema profissional de atendimento ao cliente via WhatsApp com automação inteligente e recursos avançados**
  
  <!-- [🛒 Comprar Licença](https://painel.suporteeficiente.com.br) --> 
  [💼 Programa de Revenda](https://painel.suporteeficiente.com.br/register.php) • [📧 Suporte](https://chat.whatsapp.com/JM4oOAc9cxH8WzspShRz9q?mode=hqrt1)
  
</div>

---

## 📋 Sobre o Projeto

O **SuporteEficiente** é uma solução completa e profissional de multiatendimento desenvolvida para empresas que buscam excelência no atendimento ao cliente via WhatsApp. Com tecnologia de ponta e recursos avançados de automação, o sistema permite gerenciar múltiplas conversas simultaneamente, automatizar respostas inteligentes e integrar-se perfeitamente com seus sistemas existentes.

### 🎯 Diferenciais Competitivos

- ✅ **Integração Nativa com WuzAPI** - Conecte-se ao WhatsApp usando a tecnologia mais estável e confiável do mercado
- ✅ **FlowBuilder Visual** - Crie fluxos de automação complexos sem escrever código, com interface drag-and-drop intuitiva
- ✅ **Webhooks Avançados** - Integre facilmente com sistemas externos e automatize processos de negócio
- ✅ **Multi-tenant Completo** - Suporte a múltiplas empresas em uma única instalação
- ✅ **API RESTful Completa** - Integre com qualquer sistema através de endpoints completos
- ✅ **Dashboard Analytics** - Relatórios detalhados e métricas em tempo real para tomada de decisão

---

## ✨ Principais Funcionalidades

### 🤖 Automação Inteligente

- **FlowBuilder Visual** - Crie fluxos de conversação complexos com interface visual intuitiva
  - Nós de mensagem, menu, condições, intervalos e muito mais
  - Suporte a variáveis dinâmicas e templates personalizados
  - Integração com OpenAI para respostas inteligentes
  - Fluxos condicionais e ramificações avançadas
  
- **Bots e Assistentes Virtuais** - Configure respostas automáticas inteligentes
  - Integração com IA para respostas contextuais
  - Respostas rápidas pré-configuradas
  - Mensagens de boas-vindas e despedida personalizadas

### 🔗 Integrações Poderosas

- **WuzAPI/Whatsmeow** - Integração nativa com a plataforma mais estável para WhatsApp
  - Suporte a múltiplas conexões simultâneas
  - Gerenciamento de sessões robusto
  - Sincronização automática de contatos e mensagens
  
- **Webhooks Avançados** - Conecte-se com qualquer sistema externo
  - Disparo de fluxos via webhook
  - Mapeamento de variáveis personalizado
  - Processamento assíncrono de requisições
  - Estatísticas e monitoramento de requisições

### 👥 Gestão de Equipe

- **Múltiplos Atendentes** - Gerencie equipes de qualquer tamanho
  - Sistema de filas por departamento/setor
  - Distribuição automática de tickets
  - Transferência entre atendentes
  - Permissões granulares por perfil

- **Sistema de Tags** - Organize e categorize contatos e conversas
  - Tags personalizadas por empresa
  - Filtros avançados por tags
  - Relatórios segmentados

### 📊 Analytics e Relatórios

- **Dashboard Completo** - Visualize métricas importantes em tempo real
  - Tickets abertos/fechados
  - Tempo médio de resposta
  - Taxa de satisfação
  - Gráficos e estatísticas detalhadas

- **Relatórios Avançados** - Exporte dados para análise
  - Relatórios de atendimento
  - Histórico completo de conversas
  - Métricas de performance por atendente

### 🎯 Campanhas e Marketing

- **Campanhas de Mensagens** - Envie mensagens em massa de forma eficiente
  - Agendamento de envios
  - Personalização com variáveis
  - Controle de taxa de envio
  - Relatórios de entrega

### 🔐 Segurança e Confiabilidade

- **Autenticação JWT** - Sistema seguro de autenticação
- **Multi-tenant** - Isolamento completo entre empresas
- **Backup Automático** - Proteção de dados garantida
- **Logs Detalhados** - Rastreabilidade completa de ações

---

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** + **TypeScript** - Performance e type-safety
- **Express.js** - Framework web robusto
- **Sequelize** - ORM para PostgreSQL
- **Socket.io** - Comunicação em tempo real
- **Bull** - Processamento de filas assíncronas
- **Redis** - Cache e gerenciamento de sessões
- **PostgreSQL** - Banco de dados relacional

### Frontend
- **React** - Interface moderna e responsiva
- **Material-UI** - Componentes profissionais
- **Socket.io Client** - Atualizações em tempo real
- **Chart.js** - Visualizações e gráficos
- **React Flow** - Editor visual de fluxos

---

## 🚀 Instalação

### Pré-requisitos

- **Node.js** >= 20.0.0
- **PostgreSQL** (banco de dados obrigatório)
- **Redis**
- **Servidor Linux** (recomendado Ubuntu 20.04+)
- **Domínio** com SSL configurado

### 1. Instalação do WuzAPI

O sistema requer a instalação do **WuzAPI** em um subdomínio separado ou como proxy reverso.

```bash
# Clone o repositório do WuzAPI
git clone https://github.com/asternic/wuzapi.git
cd wuzapi

# Siga as instruções de instalação do WuzAPI
# Configure o WuzAPI em um subdomínio (ex: wuzapi.seudominio.com)
# ou configure como proxy reverso no Nginx
```

**Importante:** Configure o WuzAPI para ser acessível via proxy reverso no mesmo domínio principal.

### 2. Clone e Instalação do Projeto

```bash
# Clone o repositório
git clone https://github.com/AgilizaWeb/SuporteEficiente.git
```

### 2.1 Instalação do Backend
```bash

cd SuporteEficiente/backend

# Instale as dependências
npm install

# Copie o arquivo de configuração
cp .env.example .env

# Edite o arquivo .env com suas configurações
# Configure: banco de dados, Redis, JWT secrets, WuzAPI URL, etc.
nano .env
# Execute as migrations
npm run db:migrate

# Execute os seeds para dados iniciais
npm run db:seed
```

### 2.2 Instalação do Frontend
```bash
cd ../frontend

# Instale as dependências (apenas se for rebuildar)
npm install
```

**Nota:** O frontend já vem compilado e pronto para uso. Para ajustar URLs, cores ou nomes do sistema, edite `build/env-config.js` alterando as chaves `REACT_APP_*`. Não é necessário recompilar para aplicar essas configurações em produção.

### 3. Configuração do Nginx (Recomendado)

Configuração otimizada com proxy reverso para Backend e WuzAPI no mesmo domínio, com suporte completo para Socket.IO:

```nginx
    server {
        listen 80;
        server_name seudominio.com;
        
        # Frontend - Raiz do domínio
        location / {
            proxy_pass http://localhost:8002;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Host $host;
            proxy_set_header X-Forwarded-Server $host;
            proxy_cache_bypass $http_upgrade;
        }
        
        # Socket.IO - DEVE vir antes de /api para ter prioridade
        location /api/socket.io {
            proxy_pass http://localhost:8080/socket.io;
            proxy_http_version 1.1;
            
            # Headers essenciais para WebSocket/Socket.IO
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_set_header X-Forwarded-Host $host;
            proxy_set_header X-Forwarded-Server $host;
            
            # Cache bypass para WebSocket
            proxy_cache_bypass $http_upgrade;
            
            # Timeouts para conexões WebSocket persistentes
            proxy_read_timeout 300s;
            proxy_connect_timeout 75s;
            proxy_send_timeout 300s;
            
            # Buffer settings para WebSocket
            proxy_buffering off;
        }
        
        # Backend API - Proxy reverso
        location /api/ {
            proxy_pass http://localhost:8080/;
            proxy_http_version 1.1;
            
            # Headers padrão
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_set_header X-Forwarded-Host $host;
            proxy_set_header X-Forwarded-Server $host;
            
            # Headers para WebSocket (caso alguma rota precise)
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_cache_bypass $http_upgrade;
            
            # Timeouts
            proxy_read_timeout 300s;
            proxy_connect_timeout 75s;
        }
        
        # WuzAPI - Proxy reverso
        location /wuzapi {
            proxy_pass http://localhost:8081;  # Porta do WuzAPI
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_cache_bypass $http_upgrade;
            
            # Reescrever /wuzapi para remover o prefixo
            rewrite ^/wuzapi/(.*)$ /$1 break;
        }
    }
```

**Nota Importante:** 
- A location `/api/socket.io` **DEVE** vir antes de `/api/` para ter prioridade
- Não é necessário usar `map` para `$connection_upgrade` - use diretamente `"upgrade"` no header Connection
- Esta configuração é compatível com todas as versões do Nginx

**Importante:** 
- Configure a URL do WuzAPI no `.env` do backend como: `WUZAPI_URL=https://seudominio.com/wuzapi`
- Configure a URL do backend no `.env` do frontend como: `REACT_APP_BACKEND_URL=https://seudominio.com/api`
- Ajuste a porta do WuzAPI (8081) conforme sua instalação
- **Socket.IO**: A configuração acima já inclui suporte completo para Socket.IO através do proxy reverso

### 4. Iniciar o Sistema

#### Usando PM2 (Recomendado)

```bash
# Instale o PM2 globalmente
npm install -g pm2

# Navegue até a raiz do projeto
cd /caminho/para/SuporteEficiente

# Inicie todos os serviços usando o ecosystem.config.js
pm2 start ecosystem.config.js

# Salve a configuração para iniciar automaticamente com o sistema
pm2 save

# Configure o PM2 para iniciar no boot do sistema
pm2 startup
# Execute o comando que será exibido no terminal
```

#### Usando Node diretamente

```bash
# Backend
cd backend
node -r bytenode dist/server.jsc

# Frontend
cd frontend
node server.js
```

---

## 📖 Primeiros Passos

### 1. Acesse o Sistema

Abra seu navegador e acesse: `https://seudominio.com`

### 2. Crie sua Conta de Administrador

Na primeira execução, você será redirecionado para criar sua conta de administrador.

### 3. Configure uma Conexão WhatsApp

1. Acesse **Conexões** no menu
2. Clique em **Adicionar Conexão**
3. Preencha:
   - **Nome**: Nome da conexão
   - **Provider**: Selecione **WuzAPI**
4. Salve e aguarde a conexão ser estabelecida

### 4. Configure o FlowBuilder (Opcional)

1. Acesse **FlowBuilder** no menu
2. Clique em **Criar Novo Fluxo**
3. Use a interface visual para criar seu fluxo de automação
4. Conecte os nós conforme sua necessidade
5. Ative o fluxo quando estiver pronto

### 5. Configure Webhooks (Opcional)

1. Acesse **Webhooks** no menu
2. Crie um novo webhook
3. Configure o mapeamento de variáveis
4. Associe um fluxo para ser disparado
5. Use a URL gerada em seus sistemas externos

---

## 🔑 Licenciamento

Este sistema é distribuído sob licença comercial. Para uso em produção, é necessário adquirir uma licença válida.

### 💳 Comprar Licença

- **Licença por Domínio**: Válida por 1 ano por domínio
- **Programa de Revenda**: Oportunidade de revender o sistema

**Acesse:** [https://painel.suporteeficiente.com.br](https://painel.suporteeficiente.com.br)

### 📋 Benefícios da Licença

- ✅ Suporte técnico prioritário
- ✅ Atualizações e correções de segurança

---

## 🎓 Recursos Principais em Detalhes

### 🔄 FlowBuilder - Automação Visual

O FlowBuilder permite criar fluxos de conversação complexos sem conhecimento de programação:

- **Nós Disponíveis**:
  - Mensagem de texto
  - Menu interativo
  - Condições e ramificações
  - Intervalos e delays
  - Integração com OpenAI
  - Tags automáticas
  - Transferência de fila
  - E muito mais!

- **Variáveis Dinâmicas**: Use `{{variavel}}` em mensagens para personalização
- **Fluxos Condicionais**: Crie lógicas complexas com condições
- **Reutilização**: Duplique e reutilize fluxos existentes

### 🔗 Webhooks - Integração Externa

Conecte o sistema com qualquer aplicação externa:

- **Disparo de Fluxos**: Inicie conversas automaticamente via webhook
- **Mapeamento de Variáveis**: Configure como os dados externos são mapeados
- **Processamento Assíncrono**: Requisições são processadas em background
- **Estatísticas**: Monitore requisições e sucesso de integrações

### 📱 WuzAPI - Integração WhatsApp

O sistema utiliza WuzAPI para conexão estável com WhatsApp:

- **Múltiplas Instâncias**: Gerencie várias conexões simultaneamente
- **Sincronização Automática**: Contatos e mensagens sincronizados automaticamente
- **Alta Disponibilidade**: Arquitetura robusta e confiável
- **Suporte Completo**: Todos os tipos de mídia suportados

---

### 🐛 Reportar Problemas

Para reportar bugs, solicitar funcionalidades ou obter suporte técnico, utilize o sistema de tickets do painel. Nossa equipe está sempre pronta para ajudar.

---

## 🔄 Atualizações e Manutenção

### 📦 Política de Atualizações

O sistema recebe **atualizações regulares** com novas funcionalidades, correções de bugs e melhorias de segurança. Clientes com licença ativa recebem:

- ✅ **Atualizações de Segurança**: Correções críticas e patches de segurança
- ✅ **Novas Funcionalidades**: Melhorias e novos recursos constantemente adicionados
- ✅ **Otimizações de Performance**: Melhorias contínuas na velocidade e eficiência
- ✅ **Compatibilidade**: Garantia de compatibilidade com novas versões de dependências

### 🔄 Processo de Atualização

Para atualizar o sistema:

```bash
# No diretório do projeto
git pull

# Execute as migrations do banco de dados (IMPORTANTE)
cd backend
npm run db:migrate

# Reinicie os serviços
pm2 restart all
```

**Importante:** Sempre execute `npm run db:migrate` após atualizar para garantir que o banco de dados está sincronizado com as últimas alterações.

 Sempre confira as releases para saber se precisa de comandos/cuidados extras para a atualização

### ⚠️ Recomendações Importantes

- **Backup Antes de Atualizar**: Sempre faça backup do banco de dados antes de atualizar
- **Ambiente de Teste**: Teste atualizações em ambiente de desenvolvimento primeiro
- **Horário de Baixo Tráfego**: Execute atualizações em horários de menor movimento
- **Monitoramento**: Acompanhe os logs após atualizações para garantir que tudo está funcionando

### 📅 Ciclo de Atualizações

- **Atualizações de Segurança**: Liberadas imediatamente quando necessário
- **Atualizações de Funcionalidades**: Lançadas regularmente conforme desenvolvimento
- **Atualizações Maiores**: Comunicadas com antecedência para planejamento

---

## 🏆 Por que Escolher o SuporteEficiente?

✅ **Tecnologia de Ponta** - Desenvolvido com as melhores práticas e tecnologias modernas  
✅ **Alta Performance** - Otimizado para lidar com milhares de conversas simultâneas  
✅ **Segurança** - Código compilado e ofuscado para máxima proteção  
✅ **Escalabilidade** - Arquitetura preparada para crescer com seu negócio  
✅ **Suporte Profissional** - Equipe dedicada para ajudar você a ter sucesso  
✅ **Atualizações Constantes** - Sistema sempre evoluindo com novas funcionalidades  

---

## 👥 Desenvolvedores

O **SuporteEficiente** é desenvolvido por uma equipe dedicada de profissionais:

- [**Alisson Santos**](https://github.com/AgilizaWeb) - Desenvolvedor
- [**Paulo Carvalho**](https://github.com/Paulo7890) - Desenvolvedor

---

<div align="center">
  
  **Desenvolvido com ❤️ para transformar o atendimento ao cliente**
  
  <!-- [🛒 Comprar Licença Agora](https://painel.suporteeficiente.com.br) --> 
  [💼 Seja um Revendedor](https://painel.suporteeficiente.com.br/register.php)
  
  ⭐ **Transforme seu atendimento hoje mesmo!**
  
</div>
