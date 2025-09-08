import { siteConfig } from "@/config/siteConfig";

const About = () => {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Sobre Nós
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Transformamos ideias em identidades visuais marcantes que conectam marcas aos seus clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="card-glass p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
                  <span className="material-icons md-24 text-primary-foreground">lightbulb</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Nossa Missão</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Criar identidades visuais únicas e memoráveis que elevam marcas e geram resultados reais. 
                    Acreditamos que um bom design não é apenas bonito, mas estratégico e funcional.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-glass p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-accent to-accent-glow rounded-xl shadow-accent-glow">
                  <span className="material-icons md-24 text-accent-foreground">emoji_objects</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Nossa Abordagem</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cada projeto começa com uma pesquisa profunda sobre sua marca, público-alvo e mercado. 
                    Desenvolvemos soluções personalizadas que refletem a essência da sua empresa.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-glass p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
                  <span className="material-icons md-24 text-primary-foreground">verified</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Nosso Compromisso</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Garantimos satisfação total em cada projeto. Trabalhamos até que você esteja 100% satisfeito 
                    com o resultado final. Sua marca merece o melhor.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats & Features */}
          <div className="space-y-8">
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center card-glass p-6">
                <div className="text-4xl font-bold text-gradient mb-2">500+</div>
                <p className="text-muted-foreground">Projetos Concluídos</p>
              </div>
              <div className="text-center card-glass p-6">
                <div className="text-4xl font-bold text-gradient mb-2">98%</div>
                <p className="text-muted-foreground">Clientes Satisfeitos</p>
              </div>
              <div className="text-center card-glass p-6">
                <div className="text-4xl font-bold text-gradient mb-2">5+</div>
                <p className="text-muted-foreground">Anos de Experiência</p>
              </div>
              <div className="text-center card-glass p-6">
                <div className="text-4xl font-bold text-gradient mb-2">24h</div>
                <p className="text-muted-foreground">Entrega Express</p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 card-glass">
                <span className="material-icons md-24 text-primary">design_services</span>
                <span className="text-foreground font-medium">Design 100% Personalizado</span>
              </div>
              <div className="flex items-center gap-4 p-4 card-glass">
                <span className="material-icons md-24 text-primary">all_inclusive</span>
                <span className="text-foreground font-medium">Revisões Ilimitadas</span>
              </div>
              <div className="flex items-center gap-4 p-4 card-glass">
                <span className="material-icons md-24 text-primary">file_download</span>
                <span className="text-foreground font-medium">Arquivos em Alta Resolução</span>
              </div>
              <div className="flex items-center gap-4 p-4 card-glass">
                <span className="material-icons md-24 text-primary">support_agent</span>
                <span className="text-foreground font-medium">Suporte Dedicado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;