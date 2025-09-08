import { useState, useEffect } from "react";
import { generateWhatsAppURL } from "@/config/siteConfig";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar o botão após rolar 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={generateWhatsAppURL("Olá! Gostaria de mais informações sobre seus serviços.")}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group ${
          isHovered ? 'pr-6' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="material-icons md-24 animate-pulse">whatsapp</span>
        
        {/* Texto que aparece no hover */}
        <span 
          className={`font-medium whitespace-nowrap transition-all duration-300 overflow-hidden ${
            isHovered 
              ? 'max-w-xs opacity-100 ml-0' 
              : 'max-w-0 opacity-0 ml-0'
          }`}
        >
          Fale conosco!
        </span>
        
        {/* Indicador de notificação */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
      </a>
    </div>
  );
};

export default WhatsAppButton;