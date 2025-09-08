import { useState } from "react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

// Dados do portfólio - PERSONALIZE AQUI
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "LogoCorp Tecnologia",
    category: "Tecnologia",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
    description: "Identidade visual moderna para empresa de tecnologia"
  },
  {
    id: 2,
    title: "Verde Vida Restaurante",
    category: "Alimentação",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&h=400&fit=crop&crop=center",
    description: "Logo orgânico para rede de restaurantes saudáveis"
  },
  {
    id: 3,
    title: "FitMax Academia",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1611095973362-56a0c123e1d7?w=600&h=400&fit=crop&crop=center",
    description: "Branding energético para cadeia de academias"
  },
  {
    id: 4,
    title: "Bella Casa Imóveis",
    category: "Imobiliário",
    image: "https://images.unsplash.com/photo-1609149012659-2bf96e4b6e39?w=600&h=400&fit=crop&crop=center",
    description: "Identidade elegante para corretora de imóveis"
  },
  {
    id: 5,
    title: "EduTech Cursos",
    category: "Educação",
    image: "https://images.unsplash.com/photo-1611095796786-0204ceea7cdd?w=600&h=400&fit=crop&crop=center",
    description: "Logo inovador para plataforma de ensino online"
  },
  {
    id: 6,
    title: "Moda Style Boutique",
    category: "Moda",
    image: "https://images.unsplash.com/photo-1611095973032-6090c8803619?w=600&h=400&fit=crop&crop=center",
    description: "Branding sofisticado para boutique de moda feminina"
  }
];

const categories = ["Todos", "Tecnologia", "Alimentação", "Fitness", "Imobiliário", "Educação", "Moda"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredItems = activeCategory === "Todos" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Nosso Portfólio
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Conheça alguns dos projetos que desenvolvemos. Cada logo conta uma história única 
            e reflete a personalidade da marca.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-primary text-primary-foreground shadow-glow'
                  : 'bg-card hover:bg-card-hover text-card-foreground border border-card-border hover:border-primary/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="card-portfolio group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <div className="text-white">
                    <span className="inline-block px-3 py-1 bg-accent rounded-full text-sm font-medium mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/90 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Gostou do nosso trabalho? Vamos criar algo incrível para sua marca!
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contato');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-hero"
          >
            <span className="material-icons md-18">design_services</span>
            Criar Meu Logo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;