# 📸 Instruções para Adicionar Imagens dos Projetos

## 📁 Estrutura de Pastas

As imagens devem ser colocadas na pasta: `public/images/projetos/`

### Organização Recomendada

```
public/
└── images/
    └── projetos/
        ├── unyleya/
        │   ├── dashboard-1.png
        │   ├── dashboard-2.png
        │   ├── interface-1.png
        │   └── resultados.png
        └── ecosys/
            ├── dashboard-usabilidade-1.png
            ├── dashboard-usabilidade-2.png
            ├── interface-gestao.png
            └── metricas.png
```

## 🖼️ Formatos Suportados

- ✅ PNG (recomendado para dashboards)
- ✅ JPG/JPEG
- ✅ WebP (melhor performance)
- ✅ SVG

## 📏 Tamanhos Recomendados

### Screenshots de Dashboards
- **Largura**: 1920px ou 1600px
- **Altura**: Variável (geralmente 1080px)
- **Formato**: PNG para melhor qualidade

### Screenshots de Interfaces
- **Largura**: 1440px ou 1600px
- **Altura**: Variável
- **Formato**: PNG

### Gráficos e Métricas
- **Largura**: 800px - 1200px
- **Formato**: PNG com fundo transparente (se possível)

## 🎨 Dicas de Captura

### Para Power BI Dashboards
1. Use a função de exportar do Power BI
2. Ou use uma ferramenta de screenshot como:
   - Windows: Win + Shift + S
   - Snipping Tool
   - ShareX (mais avançado)

### Para Interfaces Web
1. Use o modo de captura do navegador:
   - Firefox: Screenshot completo da página
   - Chrome: DevTools > Cmd/Ctrl + Shift + P > "Capture full size screenshot"

### Dicas de Qualidade
- ✅ Capture em resolução alta
- ✅ Remova informações sensíveis (dados de clientes, senhas, etc.)
- ✅ Use tema claro para melhor legibilidade
- ✅ Inclua legendas quando necessário

## 🔧 Como Adicionar ao Projeto

### 1. Adicione as Imagens na Pasta Correta

Exemplo para Unyleya:
```
public/images/projetos/unyleya/
├── bi-cursos-1.png
├── bi-cursos-2.png
└── interface-similaridade.png
```

### 2. Atualize o Componente CaseStudies.tsx

As imagens já estão configuradas no código! Basta adicionar os arquivos com os nomes corretos:

#### Unyleya
```typescript
images: [
  "/images/projetos/unyleya/bi-cursos-1.png",
  "/images/projetos/unyleya/bi-cursos-2.png",
  "/images/projetos/unyleya/interface-similaridade.png",
]
```

#### ecosys AUTO
```typescript
images: [
  "/images/projetos/ecosys/dashboard-engajamento-1.png",
  "/images/projetos/ecosys/dashboard-engajamento-2.png",
  "/images/projetos/ecosys/interface-gestao.png",
  "/images/projetos/ecosys/metricas-churn.png",
]
```

### 3. Nomes de Arquivo Sugeridos

#### Projeto Unyleya
- `bi-cursos-1.png` - Dashboard principal de cursos
- `bi-cursos-2.png` - Dashboard de segmentos/análise
- `interface-similaridade.png` - Interface de similaridade de cursos
- `resultados.png` - Gráfico de resultados/métricas

#### Projeto ecosys AUTO
- `dashboard-engajamento-1.png` - Dashboard principal de engajamento
- `dashboard-engajamento-2.png` - Dashboard detalhado
- `interface-gestao.png` - Interface de gestão de clientes
- `metricas-churn.png` - Métricas de churn/growth

## 🎯 Imagens Placeholder

Se você não tiver as imagens ainda, pode criar placeholders temporários com:

### Opção 1: Usar um serviço online
- https://placeholder.com/
- https://via.placeholder.com/1920x1080.png?text=Dashboard+Unyleya

### Opção 2: Criar manualmente
1. Abra qualquer editor de imagens (Paint, Photoshop, Figma)
2. Crie uma imagem com as dimensões recomendadas
3. Adicione texto: "Screenshot do Projeto - Em breve"
4. Salve com o nome correto

## ✅ Checklist

- [ ] Capturei screenshots de qualidade dos projetos
- [ ] Removi informações sensíveis
- [ ] Organizei em pastas (unyleya/ e ecosys/)
- [ ] Nomeei os arquivos corretamente
- [ ] Coloquei na pasta `public/images/projetos/`
- [ ] Testei no navegador clicando em "Ver Imagens"

## 🚀 Após Adicionar as Imagens

1. O servidor Vite detectará automaticamente as novas imagens
2. Clique em "Ver Imagens" nos estudos de caso
3. As imagens abrirão em um lightbox bonito
4. Navegue com as setas ou clique fora para fechar

## 💡 Dica Profissional

Para um portfólio ainda mais impressionante:
- Adicione legendas descritivas em cada imagem
- Mostre antes/depois quando aplicável
- Destaque métricas importantes nos screenshots
- Use anotações/setas para guiar o olhar

---

**Pronto!** Agora é só adicionar suas imagens e ver seu portfólio ganhar vida! 🎨✨
