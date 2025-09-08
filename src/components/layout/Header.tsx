import { useState, useEffect } from "react";
import { siteConfig, generateWhatsAppURL } from "@/config/siteConfig";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-md border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={siteConfig.logo} 
              alt={`${siteConfig.companyName} Logo`}
              className="h-8 lg:h-10 w-auto object-contain"
            />
            <span className="text-xl lg:text-2xl font-bold text-gradient">
              {siteConfig.companyName}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Portfólio
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a 
              href={generateWhatsAppURL()}
              className="btn-hero inline-flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-icons md-18">chat</span>
              Solicitar Orçamento
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:text-primary transition-colors"
          >
            <span className="material-icons md-24">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Portfólio
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
              <div className="pt-4 border-t border-border">
                <a 
                  href={generateWhatsAppURL()}
                  className="btn-hero inline-flex items-center gap-2 w-full justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-icons md-18">chat</span>
                  Solicitar Orçamento
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;