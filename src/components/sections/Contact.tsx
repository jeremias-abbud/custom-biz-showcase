import { useState } from "react";
import { siteConfig, generateWhatsAppURL, generateMailtoURL } from "@/config/siteConfig";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Criar o corpo do e-mail
    const emailBody = `Nome: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMensagem:%0D%0A${formData.message}`;
    const mailtoURL = `mailto:${siteConfig.contact.email}?subject=Contato - ${siteConfig.companyName}&body=${emailBody}`;
    
    // Abrir cliente de e-mail
    window.location.href = mailtoURL;
    
    // Reset form
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contato" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Pronto para dar vida à sua marca? Entre em contato conosco e vamos criar algo incrível juntos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <div className="card-glass p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="material-icons md-24 text-primary">mail</span>
              Envie sua Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-input-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-input-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-input border border-input-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Conte-nos sobre seu projeto, suas necessidades e expectativas..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-hero disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="material-icons md-18">send</span>
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-8">
            
            {/* Contact Methods */}
            <div className="card-glass p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="material-icons md-24 text-primary">contact_phone</span>
                Contato Direto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-500 rounded-xl">
                    <span className="material-icons md-24 text-white">whatsapp</span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">WhatsApp</div>
                    <div className="text-muted-foreground">{siteConfig.contact.phone}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-primary rounded-xl">
                    <span className="material-icons md-24 text-primary-foreground">mail</span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">E-mail</div>
                    <div className="text-muted-foreground">{siteConfig.contact.email}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <a 
                href={generateWhatsAppURL("Olá! Gostaria de solicitar um orçamento para criação de logotipo.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center text-lg py-4"
              >
                <span className="material-icons md-24">whatsapp</span>
                Orçamento via WhatsApp
              </a>
              
              <a 
                href={generateMailtoURL("Solicitação de Orçamento")}
                className="btn-outline-hero w-full justify-center text-lg py-4"
              >
                <span className="material-icons md-18">mail</span>
                Orçamento por E-mail
              </a>
            </div>

            {/* Process Info */}
            <div className="card-glass p-6">
              <h4 className="font-bold text-foreground mb-4">Como Funciona?</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center text-xs text-primary-foreground font-bold">1</span>
                  <span className="text-muted-foreground">Briefing completo sobre sua marca</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center text-xs text-primary-foreground font-bold">2</span>
                  <span className="text-muted-foreground">Apresentação de propostas criativas</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center text-xs text-primary-foreground font-bold">3</span>
                  <span className="text-muted-foreground">Refinamentos e ajustes</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center text-xs text-primary-foreground font-bold">4</span>
                  <span className="text-muted-foreground">Entrega dos arquivos finais</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;