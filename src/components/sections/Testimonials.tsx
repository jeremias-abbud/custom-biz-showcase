import { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

// Depoimentos - PERSONALIZE AQUI
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marina Silva",
    company: "TechCorp Solutions",
    role: "CEO",
    content: "O trabalho foi excepcional! O logo ficou perfeito e reflete exatamente a personalidade da nossa empresa. A equipe foi muito profissional e atenciosa.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b6d7?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    company: "Verde Vida Restaurante",
    role: "Proprietário",
    content: "Superou todas as expectativas! O design transmite exatamente a mensagem que queríamos passar. Nossos clientes elogiaram muito a nova identidade visual.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Ana Beatriz",
    company: "Bella Casa Imóveis",
    role: "Diretora de Marketing",
    content: "Profissionalismo impecável! O processo foi muito tranquilo, com feedback constante. O resultado final elevou nossa marca a outro patamar.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Roberto Santos",
    company: "FitMax Academia",
    role: "Fundador",
    content: "Logo incrível que capturou perfeitamente a energia da nossa marca! A equipe entendeu nossa visão desde o primeiro contato. Recomendo 100%!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "Juliana Costa",
    company: "EduTech Cursos",
    role: "Co-fundadora",
    content: "Trabalho fantástico! O design é moderno, profissional e transmite confiança. A entrega foi rápida e o atendimento foi excepcional do início ao fim.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <span 
        key={i} 
        className={`material-icons md-18 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        star
      </span>
    ));
  };

  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            A satisfação dos nossos clientes é nossa maior recompensa. Veja o que eles dizem sobre nosso trabalho.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="card-glass p-8 md:p-12 text-center relative">
            
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-primary/20">
              <span className="material-icons" style={{ fontSize: '48px' }}>format_quote</span>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic">
                "{testimonials[currentIndex].content}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                />
                <div className="text-left">
                  <div className="font-bold text-foreground">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-primary font-medium">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="material-icons md-36">chevron_left</span>
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="material-icons md-36">chevron_right</span>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Pronto para ter a mesma experiência? Vamos criar algo incrível juntos!
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contato');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-hero"
          >
            <span className="material-icons md-18">rocket_launch</span>
            Começar Meu Projeto
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;