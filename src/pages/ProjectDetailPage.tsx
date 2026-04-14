import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { MapPin, ArrowLeft, ExternalLink, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import VistasLogo from '../components/VistasLogo';
import CicloLogo from '../components/CicloLogo';
import EsplanadaLogo from '../components/EsplanadaLogo';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find(p => p.slug === slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Projeto não encontrado</h1>
          <Link to="/" className="text-emerald-600 hover:text-emerald-700 font-semibold">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <>
      <SEO
        title={`${project.name} - R2M Incorporadora | ${project.category}`}
        description={project.longDescription}
        keywords={`${project.name}, ${project.category}, ${project.location}, incorporadora, imóveis, ${project.features.join(', ')}`}
        ogImage={project.mainImage}
        canonical={`https://r2m.com.br/projeto/${project.slug}`}
      />
      <StructuredData
        type="project"
        projectData={{
          name: project.name,
          description: project.longDescription,
          image: project.mainImage,
          location: project.location,
          category: project.category,
        }}
      />
      <div className="min-h-screen bg-white">
        <div className="relative h-[70vh] min-h-[500px] bg-slate-900">
          <img
            src={project.mainImage}
            alt={`${project.name} - ${project.description} - Empreendimento em ${project.location}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

          <Link
            to="/"
            className="absolute top-4 left-4 md:top-8 md:left-8 bg-white/10 backdrop-blur-sm hover:bg-white/20 active:bg-white/30 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 border border-white/20 touch-manipulation"
          >
            <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
            <span className="text-sm md:text-base">Voltar</span>
          </Link>

          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 lg:p-12">
            <div className="max-w-7xl mx-auto">
              <div className="inline-block bg-emerald-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
                {project.status}
              </div>
              {project.id === 2 ? (
                <VistasLogo className="mb-3 md:mb-4 h-16 md:h-auto" variant="light" />
              ) : project.id === 1 ? (
                <EsplanadaLogo className="h-16 md:h-24 lg:h-32 w-auto mb-3 md:mb-4 object-contain" variant="light" />
              ) : project.id === 3 ? (
                <CicloLogo className="h-14 md:h-20 lg:h-24 w-auto mb-3 md:mb-4 object-contain" variant="light" />
              ) : project.logo ? (
                <img
                  src={project.logo}
                  alt={`${project.name} Logo`}
                  className="h-16 md:h-24 lg:h-32 w-auto mb-3 md:mb-4 object-contain"
                />
              ) : (
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
                  {project.name}
                </h1>
              )}
              <div className="flex items-center space-x-2 text-slate-200 mb-2 md:mb-4">
                <MapPin className="h-4 w-4 md:h-6 md:w-6" />
                <span className="text-base md:text-xl">{project.location}</span>
              </div>
              <p className="text-sm md:text-xl text-slate-200 max-w-3xl">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 md:mb-6">Sobre o Empreendimento</h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                {project.longDescription}
              </p>
            </section>

            {project.gallery.length > 1 && (
              <section className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 md:mb-6">Galeria de Imagens</h2>
                <div className="relative">
                  <div className="relative h-64 md:h-96 rounded-xl overflow-hidden bg-slate-100">
                    <img
                      src={project.gallery[currentImageIndex]}
                      alt={`${project.name} - Galeria de fotos imagem ${currentImageIndex + 1} de ${project.gallery.length}`}
                      className="w-full h-full object-cover"
                    />

                    {project.gallery.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white active:bg-white text-slate-900 p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 touch-manipulation"
                        >
                          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white active:bg-white text-slate-900 p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 touch-manipulation"
                        >
                          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                        </button>
                      </>
                    )}
                  </div>

                  <div className="flex gap-2 mt-4 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                    {project.gallery.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all touch-manipulation ${
                          index === currentImageIndex
                            ? 'border-emerald-500 scale-105'
                            : 'border-slate-200 hover:border-slate-300 active:border-slate-400'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${project.name} miniatura ${index + 1} de ${project.gallery.length}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {project.highlights && project.highlights.length > 0 && (
              <section className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 md:mb-6">Destaques</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {project.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="bg-slate-50 rounded-xl p-4 md:p-6 border border-slate-200"
                    >
                      <div className="flex items-start space-x-3 md:space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="text-base md:text-lg font-bold text-slate-900 mb-1 md:mb-2">
                            {highlight.title}
                          </h3>
                          <p className="text-sm md:text-base text-slate-600">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-8">
              <div className="bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-200 mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6">Informações</h3>

                <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                  <div>
                    <span className="text-xs md:text-sm text-slate-600">Status</span>
                    <p className="text-base md:text-lg font-semibold text-slate-900">{project.status}</p>
                  </div>
                  <div>
                    <span className="text-xs md:text-sm text-slate-600">Localização</span>
                    <p className="text-base md:text-lg font-semibold text-slate-900">{project.location}</p>
                  </div>
                  <div>
                    <span className="text-xs md:text-sm text-slate-600">Categoria</span>
                    <p className="text-base md:text-lg font-semibold text-slate-900">{project.category}</p>
                  </div>
                </div>

                {project.specifications && project.specifications.length > 0 && (
                  <>
                    <hr className="my-4 md:my-6 border-slate-200" />
                    <h4 className="font-bold text-slate-900 mb-3 md:mb-4 text-sm md:text-base">Especificações</h4>
                    <div className="space-y-2 md:space-y-3">
                      {project.specifications.map((spec, index) => (
                        <div key={index} className="flex justify-between text-sm md:text-base">
                          <span className="text-slate-600">{spec.label}</span>
                          <span className="font-semibold text-slate-900">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 md:mt-6 w-full inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white px-6 py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-100 shadow-lg touch-manipulation text-sm md:text-base"
                  >
                    <span>Visite o Site</span>
                    <ExternalLink className="h-4 w-4 md:h-5 md:w-5" />
                  </a>
                )}
              </div>

              {project.features && project.features.length > 0 && (
                <div className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4">Características</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-slate-100 text-slate-700 px-3 py-2 rounded-lg text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
