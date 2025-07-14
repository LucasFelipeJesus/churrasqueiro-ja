# Churrasqueiro Já - Planejador Inteligente

Um sistema inteligente que utiliza IA para gerar cardápios personalizados de churrasco, considerando número de convidados, tipo de evento e restrições alimentares.

## 🚀 Funcionalidades

- **Cálculo Inteligente de Quantidades**: Estima as quantidades ideais baseado no número de convidados
- **Recomendações Personalizadas**: Gera cardápios considerando o perfil do evento
- **Adaptação a Restrições**: Ajusta automaticamente para restrições alimentares e orçamento
- **Dashboard de Responsabilidade**: Demonstra nosso compromisso com IA ética

## 🛠️ Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3 (Tailwind), JavaScript ES6+
- **IA**: OpenAI API integrada via n8n
- **Visualização**: Chart.js para gráficos interativos
- **Arquitetura**: 
  - n8n (Orquestrador de workflows)
  - OpenAI API (Processamento de linguagem natural)
  - Embeddings Vetoriais (Análise de contexto)
  - Banco de Dados Vetorial (Armazenamento de conhecimento)

## 🎯 Como Usar

1. Abra o arquivo `src/index.html` em seu navegador
2. Navegue pelas seções para entender a solução
3. Use o "Experimente a IA" para testar a geração de cardápios
4. Explore o Dashboard de Responsabilidade

## 📁 Estrutura do Projeto

```
TEI-Apresentacao/
├── src/
│   ├── index.html      # Página principal
│   ├── app.js          # Lógica JavaScript e integração com API
├── README.md           # Este arquivo
└── .gitignore          # Arquivos a serem ignorados pelo Git
```

## 🔧 Configuração da API

O sistema está configurado para se conectar com um webhook n8n hospedado no Azure:
- Endpoint: `https://n8nflow-dvd3a6duhwchaxen.eastus-01.azurewebsites.net/webhook/churrasco-menu`

## 🎨 Design

O projeto utiliza uma paleta de cores neutras e quentes com destaque terracota (#D9534F), proporcionando uma experiência visual agradável e profissional.

## 📱 Responsividade

Interface totalmente responsiva, otimizada para desktop, tablet e dispositivos móveis.

## 🔒 IA Responsável

Este projeto foi desenvolvido seguindo princípios de IA responsável:
- **Ética**: Transparência nas recomendações
- **Privacidade**: Proteção de dados do usuário
- **Ausência de Viés**: Algoritmos justos e inclusivos

## 🤝 Contribuição

Desenvolvido como projeto acadêmico para demonstrar a aplicação prática de IA em soluções do cotidiano.

## 📄 Licença

Este projeto é de uso acadêmico e demonstrativo.
