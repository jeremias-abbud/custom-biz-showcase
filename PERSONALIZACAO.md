# 🎨 Guia de Personalização - Design Studio Pro

Este site foi desenvolvido para ser **100% personalizável** para qualquer empresa. Siga este guia para adaptar o site à sua marca.

## 📋 Configuração Principal

### 1. Arquivo de Configuração (`src/config/siteConfig.ts`)

**PERSONALIZE AQUI** todas as informações da sua empresa:

```typescript
export const siteConfig = {
  // INFORMAÇÕES DA EMPRESA
  companyName: "SEU NOME DA EMPRESA",
  slogan: "Seu slogan impactante aqui",
  description: "Descrição dos seus serviços...",
  
  // CONTATO
  contact: {
    whatsapp: "5511999999999", // Formato: 55 + DDD + número
    email: "seuemail@empresa.com",
    phone: "(11) 99999-9999",
  },
  
  // LOGO
  logo: "URL_DO_SEU_LOGO",
  
  // REDES SOCIAIS
  social: {
    instagram: "https://instagram.com/suaempresa",
    facebook: "https://facebook.com/suaempresa",
    // ... outras redes
  }
};
```

## 🎯 Personalizações Específicas

### 2. Portfólio (`src/components/sections/Portfolio.tsx`)

Substitua os projetos de exemplo pelos seus trabalhos reais:

```typescript
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Nome do Projeto",
    category: "Categoria",
    image: "URL_DA_IMAGEM",
    description: "Descrição do projeto"
  },
  // ... adicione seus projetos
];
```

### 3. Depoimentos (`src/components/sections/Testimonials.tsx`)

Adicione depoimentos reais dos seus clientes:

```typescript
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Nome do Cliente",
    company: "Empresa do Cliente",
    role: "Cargo",
    content: "Depoimento...",
    rating: 5,
    avatar: "URL_DO_AVATAR"
  },
  // ... adicione mais depoimentos
];
```

### 4. Seção Sobre (`src/components/sections/About.tsx`)

Personalize as estatísticas e informações sobre sua empresa:
- Número de projetos concluídos
- Porcentagem de clientes satisfeitos
- Anos de experiência
- Tempo de entrega

## 🎨 Personalização Visual

### 5. Cores da Marca (`src/index.css`)

Para adaptar as cores à sua identidade visual, modifique as variáveis CSS:

```css
:root {
  /* Cores Primárias - PERSONALIZE */
  --primary: 250 84% 54%;        /* Cor principal da marca */
  --primary-glow: 250 100% 67%;  /* Versão mais clara */
  --accent: 310 100% 69%;        /* Cor de destaque */
  
  /* Gradientes - Automáticos baseados nas cores acima */
  --gradient-hero: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%);
}
```

**Dica:** Use [HSL Color Picker](https://hslpicker.com/) para encontrar as cores perfeitas.

### 6. Logotipo

1. Faça upload do seu logo para um serviço como [Unsplash](https://unsplash.com/) ou [Imgur](https://imgur.com/)
2. Copie a URL da imagem
3. Cole no campo `logo` do arquivo `siteConfig.ts`

## 📱 WhatsApp Integration

### 7. Configurar Links do WhatsApp

O sistema gera automaticamente os links do WhatsApp. Você só precisa:

1. Configurar o número no formato correto: `5511999999999`
2. As mensagens são personalizadas automaticamente

### 8. Formulário de Contato

O formulário usa `mailto:` para abrir o cliente de e-mail. Configure o e-mail no `siteConfig.ts`.

## 🔧 Funcionalidades Avançadas

### 9. SEO

- Todas as meta tags são configuradas automaticamente
- Títulos e descrições vêm do `siteConfig.ts`
- Estrutura HTML semântica implementada

### 10. Responsividade

- Design mobile-first
- Testado em todos os dispositivos
- Navegação otimizada para touch

## 🚀 Deploy e Domínio

1. **Deploy**: Use o botão "Publish" no Lovable
2. **Domínio Personalizado**: Configure em Project > Settings > Domains

## 💡 Dicas de Conversão

### Para Maximizar Resultados:

1. **Imagens de Qualidade**: Use fotos profissionais dos seus trabalhos
2. **Depoimentos Reais**: Sempre use feedback genuíno de clientes
3. **Call-to-Actions Claros**: Mantenha os botões de WhatsApp bem visíveis
4. **Conteúdo Relevante**: Adapte os textos ao seu público-alvo
5. **Atualizações Regulares**: Mantenha o portfólio sempre atualizado

## 🎯 Checklist de Personalização

- [ ] Configurar informações da empresa no `siteConfig.ts`
- [ ] Substituir logo pela identidade da sua marca
- [ ] Adicionar projetos reais no portfólio
- [ ] Incluir depoimentos genuínos de clientes
- [ ] Personalizar cores da marca no `index.css`
- [ ] Configurar número do WhatsApp
- [ ] Testar todos os links e formulários
- [ ] Verificar responsividade em dispositivos móveis

---

**🎉 Pronto!** Seu site profissional está configurado e otimizado para alta conversão.

Para dúvidas ou suporte, consulte a [documentação do Lovable](https://docs.lovable.dev/).