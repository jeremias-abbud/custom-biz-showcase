// Site Configuration - Personalize aqui as informações da empresa
export const siteConfig = {
  // INFORMAÇÕES DA EMPRESA - PERSONALIZE AQUI
  companyName: "Design Studio Pro",
  slogan: "Logotipos únicos que elevam sua marca ao próximo nível",
  description: "Criamos identidades visuais marcantes e logotipos profissionais que fazem sua empresa se destacar no mercado. Design exclusivo, entrega rápida e resultados garantidos.",
  
  // CONTATO - SUBSTITUA PELOS DADOS REAIS
  contact: {
    whatsapp: "5531986752884", // Formato: 55 + DDD + número (apenas números)
    email: "jeremias.abbud@gmail.com",
    phone: "(31) 98675-2884", // Para exibição
  },
  
  // LOGO - SUBSTITUA PELA URL DO SEU LOGO
  logo: "/logo.jpg",
  
  // REDES SOCIAIS - ADICIONE SEUS LINKS
  social: {
    instagram: "https://instagram.com/designstudio",
    facebook: "https://facebook.com/designstudio", 
    linkedin: "https://linkedin.com/company/designstudio",
    behance: "https://behance.net/designstudio",
    dribbble: "https://dribbble.com/designstudio",
  },
  
  // SEO
  seo: {
    title: "Design Studio Pro - Logotipos Únicos e Identidade Visual",
    description: "Criamos logotipos únicos e identidades visuais marcantes que elevam sua marca. Design profissional, entrega rápida e resultados garantidos.",
    keywords: "logotipo, identidade visual, design gráfico, marca, branding, logo profissional",
    author: "Design Studio Pro",
  },
};

// URLs geradas automaticamente
export const generateWhatsAppURL = (message?: string) => {
  const defaultMessage = `Olá! Gostaria de um orçamento com a ${siteConfig.companyName}`;
  const finalMessage = message || defaultMessage;
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(finalMessage)}`;
};

export const generateMailtoURL = (subject?: string) => {
  const defaultSubject = `Contato - ${siteConfig.companyName}`;
  const finalSubject = subject || defaultSubject;
  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(finalSubject)}`;
};