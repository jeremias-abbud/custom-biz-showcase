import { siteConfig, generateWhatsAppURL } from "@/config/siteConfig";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/30" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-accent-glow/30 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Main Headline */}
          <h1 className="text-hero text-white font-bold leading-tight animate-fade-in">
            {siteConfig.slogan}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {siteConfig.description}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a 
              href={generateWhatsAppURL()}
              className="btn-whatsapp text-lg px-8 py-4 w-full sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-icons md-24">whatsapp</span>
              Solicitar Orçamento
            </a>
            
            <button 
              onClick={() => scrollToSection('contato')}
              className="btn-outline-hero text-lg w-full sm:w-auto"
            >
              <span className="material-icons md-18">mail</span>
              Fale Conosco
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-12 text-white/70 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2">
              <span className="material-icons md-24 text-accent">verified</span>
              <span>Design Exclusivo</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-icons md-24 text-accent">schedule</span>
              <span>Entrega Rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-icons md-24 text-accent">thumb_up</span>
              <span>Satisfação Garantida</span>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="text-white/70 hover:text-white transition-colors"
          >
            <span className="material-icons md-36">keyboard_arrow_down</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;