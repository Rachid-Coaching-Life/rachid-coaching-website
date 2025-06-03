import React, { useState } from 'react';

// Icônes réseaux sociaux
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Button = ({ children, variant = 'default', size = 'default', className = '', asChild = false, ...props }: any) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background';
  
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
  };
  
  const sizes = {
    default: 'h-10 py-2 px-4',
    lg: 'h-11 px-8 rounded-md',
  };
  
  if (asChild) {
    return React.cloneElement(children, {
      className: `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
    });
  }
  
  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default function RachidCoachingLife() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans antialiased text-gray-800">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img 
                  alt="Rachid Coaching Life" 
                  className="h-12 w-auto mr-3" 
                  src="/rachid-logo.png" 
                />
                <span className="text-teal-600 font-bold text-xl">Rachid Coaching Life</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
              <a href="#accueil" className="text-teal-600 hover:text-teal-800 px-3 py-2 font-medium">Accueil</a>
              <a href="#services" className="text-gray-700 hover:text-teal-600 px-3 py-2 font-medium">Services</a>
              <a href="#apropos" className="text-gray-700 hover:text-teal-600 px-3 py-2 font-medium">À propos</a>
              <a href="#temoignages" className="text-gray-700 hover:text-teal-600 px-3 py-2 font-medium">Témoignages</a>
              <a href="#contact" className="text-gray-700 hover:text-teal-600 px-3 py-2 font-medium">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button 
                type="button" 
                className="text-gray-500 hover:text-teal-600 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#accueil" className="block px-3 py-2 text-base font-medium text-teal-600 hover:text-teal-800">Accueil</a>
              <a href="#services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">Services</a>
              <a href="#apropos" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">À propos</a>
              <a href="#temoignages" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">Témoignages</a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="bg-gradient-to-br from-cyan-500 via-teal-600 to-emerald-700 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="relative z-10 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Transformez votre vie{' '}
                <span className="text-yellow-300">gratuitement</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Coaching personnel et professionnel 100% gratuit pour vous aider à atteindre vos objectifs.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-teal-50">
                  <a href="#contact">Commencez maintenant</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-teal-700 font-medium">
                  <a href="#services">Découvrir les services</a>
                </Button>
              </div>
              <div className="mt-8 flex space-x-4">
                <a href="https://instagram.com/rachid_coaching_life" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">
                  <InstagramIcon className="w-8 h-8" />
                </a>
                <a href="https://www.facebook.com/rachid.coachinglife/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">
                  <FacebookIcon className="w-8 h-8" />
                </a>
                <a href="https://tiktok.com/@rachid_coaching_life" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">
                  <TikTokIcon className="w-8 h-8" />
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                alt="Rachid Coaching Life" 
                className="rounded-full h-64 w-64 md:h-80 md:w-80 object-cover border-4 border-white shadow-xl bg-white p-2" 
                src="/rachid-logo.png" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Free Services Banner */}
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-lime-400 py-2 text-center">
        <p className="text-lg font-bold text-gray-900">
          🎁 TOUS NOS SERVICES SONT 100% GRATUITS - AUCUN ABONNEMENT NI PRESTATION PAYANTE
        </p>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Services Gratuits</h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment Rachid peut vous aider à transformer votre vie sans aucun coût.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Développement Personnel",
                description: "Apprenez à mieux vous connaître, à gérer vos émotions et à développer une confiance en soi inébranlable.",
                features: ["Confiance en soi", "Gestion du stress", "Équilibre vie pro/perso"]
              },
              {
                title: "Coaching Professionnel", 
                description: "Boostez votre carrière, améliorez vos compétences en leadership et atteignez vos objectifs professionnels.",
                features: ["Préparation aux entretiens", "Gestion de carrière", "Compétences en leadership"]
              },
              {
                title: "Relations & Bien-être",
                description: "Améliorez vos relations personnelles et développez une mentalité positive pour une vie plus épanouie.",
                features: ["Communication efficace", "Gestion des conflits", "Pleine conscience"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-teal-100 p-3 rounded-full mr-4">
                      <div className="text-teal-600 w-6 h-6">💪</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-teal-600 mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6">
              Tous ces services sont disponibles gratuitement via nos plateformes sociales ou nos sessions en ligne.
            </p>
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
              <a href="#contact">
                💬 Nous contacter
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <img 
                alt="Rachid Coaching - Salon de coaching" 
                className="rounded-lg shadow-xl w-full" 
                src="/salon-coaching.png" 
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Qui est Rachid ?</h2>
              <div className="w-20 h-1 bg-teal-600 mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                Je suis une personne modeste et terre-à-terre, animée par une passion profonde : aider les gens et les guider vers la bonne voie. 
                Cela me peine de voir des individus errer dans l'ignorance, inconscients de leur véritable potentiel.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Je trouve un grand plaisir à partager la lumière et le savoir, car nous avons tous été dotés de capacités extraordinaires, 
                mais beaucoup ne parviennent pas à les exploiter pleinement. C'est pourquoi j'ai créé ce site web et que je me consacre 
                activement aux réseaux sociaux, partageant sans relâche cette lumière - toujours gratuitement.
              </p>
              <div className="bg-teal-50 p-6 rounded-lg mb-6">
                <p className="text-teal-800 font-medium italic">
                  "Mon unique but est d'illuminer les cœurs égarés. Nous possédons tous un superpuissance secrète : 
                  le pouvoir de dire NON, le pouvoir de prendre des décisions et la force de persévérer. 
                  Avec altruisme, je me consacre à libérer la lumière cachée en chacun de nous."
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-gradient-to-r from-teal-600 to-pink-600 text-white">
                  <a href="https://instagram.com/rachid_coaching_life" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <InstagramIcon className="w-5 h-5 mr-2" />
                    Instagram
                  </a>
                </Button>
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                  <a href="https://www.facebook.com/rachid.coachinglife/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <FacebookIcon className="w-5 h-5 mr-2" />
                    Facebook
                  </a>
                </Button>
                <Button asChild className="bg-gray-800 hover:bg-gray-900 text-white">
                  <a href="https://tiktok.com/@rachid_coaching_life" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <TikTokIcon className="w-5 h-5 mr-2" />
                    TikTok
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prêt à transformer votre vie ? Contactez-nous pour commencer votre parcours.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-teal-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                📅
              </div>
              <h3 className="text-xl font-bold mb-2">Calendly</h3>
              <a href="https://calendly.com/rachid-coaching-life" target="_blank" className="text-teal-600 hover:text-teal-800">
                Réserver une session
              </a>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                📱
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <a href="https://wa.me/33659525636" target="_blank" className="text-teal-600 hover:text-teal-800">
                +33 6 59 52 56 36
              </a>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                ✉️
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a href="mailto:rachidcoachinglife@outlook.com" className="text-teal-600 hover:text-teal-800">
                rachidcoachinglife@outlook.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <img 
                alt="Rachid Coaching Life" 
                className="h-12 w-auto mr-3" 
                src="/rachid-logo.png" 
              />
              <h3 className="text-2xl font-bold">Rachid Coaching Life</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Coaching personnel et professionnel 100% gratuit pour transformer votre vie.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://instagram.com/rachid_coaching_life" target="_blank" className="text-gray-400 hover:text-white">
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/rachid.coachinglife/" target="_blank" className="text-gray-400 hover:text-white">
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a href="https://tiktok.com/@rachid_coaching_life" target="_blank" className="text-gray-400 hover:text-white">
                <TikTokIcon className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400">© 2025 Rachid Coaching Life. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
