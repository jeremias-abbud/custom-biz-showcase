import { siteConfig, generateWhatsAppURL, generateMailtoURL } from "@/config/siteConfig";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={siteConfig.logo} 
                alt={`${siteConfig.companyName} Logo`}
                className="h-10 w-auto object-contain"
              />
              <span className="text-2xl font-bold text-gradient">
                {siteConfig.companyName}
              </span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              {siteConfig.description}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-card-hover border border-card-border rounded-xl transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <span className="material-icons md-20 text-primary">camera_alt</span>
              </a>
              <a 
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-card-hover border border-card-border rounded-xl transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <span className="material-icons md-20 text-primary">facebook</span>
              </a>
              <a 
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-card-hover border border-card-border rounded-xl transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <span className="material-icons md-20 text-primary">business</span>
              </a>
              <a 
                href={siteConfig.social.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-card-hover border border-card-border rounded-xl transition-all duration-300 hover:scale-110"
                aria-label="Behance"
              >
                <span className="material-icons md-20 text-primary">palette</span>
              </a>
              <a 
                href={siteConfig.social.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-card-hover border border-card-border rounded-xl transition-all duration-300 hover:scale-110"
                aria-label="Dribbble"
              >
                <span className="material-icons md-20 text-primary">brush</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Navegação</h3>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Portfólio
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Contato
              </button>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="material-icons md-18 text-primary">phone</span>
                <span className="text-muted-foreground">{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-icons md-18 text-primary">mail</span>
                <a 
                  href={generateMailtoURL()}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="pt-4">
              <a 
                href={generateWhatsAppURL()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm px-4 py-2"
              >
                <span className="material-icons md-16">whatsapp</span>
                Falar no WhatsApp
              </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} {siteConfig.companyName}. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Criado com ❤️ para sua marca</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;