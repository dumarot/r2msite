import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, ExternalLink } from 'lucide-react';
import VistasLogo from './VistasLogo';
import CicloLogo from './CicloLogo';

const featuredProjects = [
  {
    id: 2,
    name: 'Vistas Joanópolis',
    location: 'Joanópolis, SP',
    status: 'Lançamento',
    description: 'Um endereço para respirar. Lotes exclusivos de 1.000 a 3.000 m² em harmonia com a natureza.',
    image: 'https://static.wixstatic.com/media/028729_46a7487bb5f04ac49b17283ca9e00674~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01/028729_46a7487bb5f04ac49b17283ca9e00674~mv2.jpg',
    website: 'https://www.vistasjoanopolis.com.br',
    logo: 'https://static.wixstatic.com/media/028729_2f550e2e9af64330a8d26a15e4c57c78~mv2.png',
    highlights: ['Clube Náutico', 'Heliponto', 'Spa & Wellness', 'Beach Tennis', 'Marina Privativa', 'Segurança 24h']
  },
  {
    id: 1,
    name: 'Esplanada Jaú',
    location: 'Jaú, SP',
    status: 'Em Obras',
    description: 'Espaços exclusivos pensados para você. Ambientes amplos e integrados com lazer completo.',
    image: '/RB2_Esplanada_Fachada_R02.jpg',
    website: 'https://www.esplanadajau.com.br',
    logo: 'https://www.esplanadajau.com.br/wp-content/themes/c4theme/img/banner/logo.webp',
    highlights: ['Coworking', 'Academia', 'Piscina', 'Churrasqueira', 'Quadra de Esportes', 'Elevador']
  },
  {
    id: 3,
    name: 'CICLO Viracopos',
    location: 'Campinas, SP',
    status: 'Entregue',
    description: 'Loteamento comercial, industrial e logístico com infraestrutura completa.',
    image: 'https://static.wixstatic.com/media/eb9c0e_a350a94f77fd4fbf95cd663fe3ed3ce1~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_90,enc_avif,quality_auto/DJI_0600_JPG.jpg',
    website: 'https://www.cicloviracopos.com.br',
    logo: 'https://static.wixstatic.com/media/c3ed2f_19ce0e81f3f745ea96f38bdfe0f81e09~mv2.png',
    highlights: ['Infraestrutura Completa', 'Área Verde', 'Tráfego Pesado', 'Rod. Bandeirantes']
  }
];

export default function FeaturedProjects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentProject = featuredProjects[currentSlide];

  return (
    <section className="relative h-screen min-h-[600px] bg-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={project.image}
              alt={`${project.name} - ${project.description}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-transparent"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="inline-block bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {currentProject.status}
            </div>

            {currentProject.id === 2 ? (
              <VistasLogo className="mb-6" variant="light" />
            ) : currentProject.id === 3 ? (
              <CicloLogo className="h-14 md:h-16 w-auto mb-6 object-contain drop-shadow-lg" variant="light" />
            ) : (
              <img
                src={currentProject.logo}
                alt={`${currentProject.name} Logo`}
                className="h-20 md:h-24 w-auto mb-6 object-contain drop-shadow-lg"
              />
            )}

            <div className="flex items-center space-x-2 text-slate-300 mb-6">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">{currentProject.location}</span>
            </div>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              {currentProject.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {currentProject.highlights.map((highlight, index) => (
                <span
                  key={index}
                  className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm border border-white/20"
                >
                  {highlight}
                </span>
              ))}
            </div>

            {currentProject.website && (
              <a
                href={currentProject.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                <span>Saiba Mais</span>
                <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {featuredProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 bg-emerald-500'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
