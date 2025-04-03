## 📋 About

Web application for monitoring industrial components, allowing hierarchical visualization of locations, assets, and components, with information on status and sensors.

![Demonstração](demonstration.mp4)

## 🛠 Main Technologies

### Core

- **React** - JavaScript framework for building user interfaces
- **TypeScript** - JavaScript superset with static typing
- **Vite** -  Build tool and development server

### State Management

- **MobX** - State management library
- **MobX React** - React integrations for MobX

### Styling

- **Styled Components** - CSS-in-JS

### Testes

- **Vitest** - Unit testing framework
- **React Testing Library** -  React component testing
- **Playwright** - E2E testing

## 🏗 Project Structure

```
src/
├── @types/          # TypeScript type definitions  
├── components/      # Reusable React components  
│   ├── Header/
│   ├── Sidebar/
│   └── MainContent/
├── pages/          # Page components  
│   └── Dashboard/
├── stores/         # MobX stores  
│   └── CompanyStore/
├── styles/         # Global styles and theme  
├── utils/          # Utilities and helpers  
└── tests/         # Test configurations 
```

## 🧪 Tests

### Unit Tests

- Located in `__tests__` within each component
- Test isolated functionalities
- Use Vitest and React Testing Library
- Focus on:
  - Component rendering
  - User interactions
  - Business logic

### Integration Tests

- Test interactions between components
- Verify data flows
- Validate MobX store behavior

### E2E Tests

- Located in `test/`
- Use Playwright
- Simulate real user behavior
- Test complete flows such as:
  - Navigating through the component tree
  - Viewing details
  - Loading states
  - Search and filters

## 🚀 How to Run

```bash
# Install dependencies  
npm install  

# Run in development  
npm run dev  

# Build for production  
npm run build  

# Run unit tests  
npm run test  

# Run E2E tests  
npm run test:e2e  
```

## 🧪 Test Coverage

- Unit Tests: Individual components
- Integration Tests: Interactions between components
- E2E Tests: Complete user flows

### Main Test Cases

- Component rendering
- Navigation through the sidebar tree
- Component selection
- Detail display
- Themes
