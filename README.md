# 🚀 Portfólio Profissional - Analista de Dados & Desenvolvedor

Portfólio moderno e impactante desenvolvido com React, TypeScript e Tailwind CSS, seguindo uma vibe futurista e minimalista.

## 🎨 Design

### Paleta de Cores
- **Danube** (#6488ce) - Cor primária impactante
- **Gull Gray** (#a1b4b9) - Cor secundária
- **Foggy Gray** (#cfcfbc) - Elementos muted
- **Abbey** (#52535b) - Texto principal

### Vibe
- ✨ Moderno
- 🚀 Futurista  
- 💎 Impactante
- 🎯 Minimalista

## 📦 Tech Stack

- **Vite** - Build tool
- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - Componentes UI
- **Lucide React** - Ícones

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── ui/                    # Componentes shadcn/ui
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── tabs.tsx
│   │   └── badge.tsx
│   ├── theme-provider.tsx     # Provider de tema dark/light
│   ├── Header.tsx             # Navegação e toggle de tema
│   ├── Hero.tsx               # Seção "Sobre Mim"
│   ├── CaseStudies.tsx        # Estudos de Caso
│   ├── GithubProjects.tsx     # Projetos do GitHub
│   ├── DashboardsAndInterfaces.tsx  # Tabs com dashboards
│   └── Footer.tsx             # Footer com links sociais
├── lib/
│   └── utils.ts               # Utilitários (cn function)
├── App.tsx                    # Aplicação principal
├── App.css                    # Estilos customizados
└── index.css                  # Configuração Tailwind
```

## 🎯 Módulos

### 1. Hero (Sobre Mim)
Seção introdutória impactante apresentando:
- Título profissional com foco em IA
- Pitch pessoal e profissional
- CTAs para projetos e contato

### 2. Case Studies (Estudos de Caso)
Resolução de problemas reais:
- **Unyleya**: Automação e BI para análise de cursos
- **ecosys AUTO**: Sistema de análise de churn e engajamento

### 3. GitHub Projects
Projetos open source com links diretos:
- **NPI-backend**: API FastAPI com integração Pipefy
- **ecosysMS-Back**: API RESTful multi-database

### 4. Dashboards & Interfaces
Módulo com tabs exibindo:
- Dashboards Power BI desenvolvidos
- Interfaces web com IA e React

### 5. Footer
Links para redes sociais e informações de contato

## 🚀 Começando

### Instalação

```bash
# Clone o repositório
git clone <seu-repositorio>

# Entre na pasta
cd Portifólio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`

## 🎨 Personalização

### Cores
Edite o arquivo `tailwind.config.js` para ajustar a paleta de cores:

```javascript
colors: {
  primary: {
    DEFAULT: "#6488ce", // Danube
    foreground: "#ffffff",
  },
  // ...
}
```

### Conteúdo
Edite os componentes individuais para personalizar:
- Links do LinkedIn, GitHub e email no `Footer.tsx`
- Informações pessoais no `Hero.tsx`
- Estudos de caso no `CaseStudies.tsx`
- Projetos no `GithubProjects.tsx`

## ✨ Features

- ✅ Design responsivo (mobile-first)
- ✅ Dark mode / Light mode
- ✅ Animações suaves (fade-in, slide-up)
- ✅ Navegação com scroll suave
- ✅ Componentes modulares e reutilizáveis
- ✅ TypeScript para type safety
- ✅ Performance otimizada com Vite

## 📄 Licença

Este projeto é de código aberto e está disponível para uso pessoal.

---

**Desenvolvido com** ❤️ **usando React, TypeScript, Tailwind CSS e shadcn/ui**

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
