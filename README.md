## 📋 Sobre

Aplicação web para monitoramento de componentes industriais, permitindo visualização hierárquica de locais, ativos e componentes, com informações sobre status e sensores.

## 🛠 Tecnologias Principais

### Core

- **React** - Framework JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool e dev server

### Gerenciamento de Estado

- **MobX** - Biblioteca de gerenciamento de estado
- **MobX React** - Integrações React para MobX

### Estilização

- **Styled Components** - CSS-in-JS
- **Theme Provider** - Gerenciamento de temas

### Testes

- **Vitest** - Framework de testes unitários
- **React Testing Library** - Testes de componentes React
- **Playwright** - Testes E2E

## 🏗 Estrutura do Projeto

```
src/
├── @types/          # Definições de tipos TypeScript
├── components/      # Componentes React reutilizáveis
│   ├── Header/
│   ├── Sidebar/
│   └── MainContent/
├── pages/          # Componentes de página
│   └── Dashboard/
├── stores/         # Stores MobX
│   └── CompanyStore/
├── styles/         # Estilos globais e tema
├── utils/          # Utilitários e helpers
└── tests/         # Configurações de teste
```

## 🧪 Testes

### Testes Unitários

- Localizados em `__tests__` dentro de cada componente
- Testam funcionalidades isoladas
- Utilizam Vitest e React Testing Library
- Foco em:
  - Renderização de componentes
  - Interações do usuário
  - Lógica de negócio
  - Estados e props

### Testes de Integração

- Testam interação entre componentes
- Verificam fluxos de dados
- Validam comportamento do MobX store

### Testes E2E

- Localizados em `test/`
- Utilizam Playwright
- Simulam comportamento real do usuário
- Testam fluxos completos como:
  - Navegação pela árvore de componentes
  - Visualização de detalhes
  - Estados de loading
  - Pesquisa e filtros

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar testes unitários
npm run test

# Executar testes E2E
npm run test:e2e
```

## 🧪 Cobertura de Testes

- Testes Unitários: Componentes individuais
- Testes de Integração: Interações entre componentes
- Testes E2E: Fluxos completos de usuário

### Principais Casos Testados

- Renderização de componentes
- Navegação pela árvore do sidebar
- Seleção de componentes
- Exibição de detalhes
- Estados de loading
- Tratamento de erros
- Responsividade
- Temas
