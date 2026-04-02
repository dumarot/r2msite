import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, CheckCircle } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const projects = [
  // TEMPORARIAMENTE REMOVIDO - Vistas Joanópolis
  // Para reativar, descomentar o bloco abaixo
  /*
  {
    id: 2,
    name: 'Vistas Joanópolis',
    status: 'Lançamento',
    location: 'Joanópolis, SP',
    image: 'https://static.wixstatic.com/media/028729_46a7487bb5f04ac49b17283ca9e00674~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01/028729_46a7487bb5f04ac49b17283ca9e00674~mv2.jpg',
    category: 'Condomínio de Lotes',
    description: 'Lotes de 1.000 a 3.000 m² em harmonia com a natureza'
  },
  */
  {
    id: 1,
    name: 'Esplanada Jaú',
    status: 'Em Obras',
    location: 'Jaú, SP',
    image: '/RB2_Esplanada_Fachada_R02.jpg?v=1',
    category: 'Residencial',
    description: 'Ambientes amplos e integrados com lazer completo'
  },
  {
    id: 3,
    name: 'Centro Logístico Viracopos',
    status: 'Entregue',
    location: 'Campinas, SP',
    image: 'https://static.wixstatic.com/media/eb9c0e_a350a94f77fd4fbf95cd663fe3ed3ce1~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_90,enc_avif,quality_auto/DJI_0600_JPG.jpg',
    category: 'Logístico',
    description: 'Empreendimento logístico estratégico'
  },
  {
    id: 4,
    name: 'Residencial Viverdi',
    status: 'Entregue',
    location: 'Campinas, SP',
    image: 'https://r2m.com.br/wp-content/themes/r2m/img/viverdi.jpg',
    category: 'Residencial',
    description: 'Condomínio residencial entregue com sucesso'
  },
  {
    id: 5,
    name: 'Residência Alphaville',
    status: 'Entregue',
    location: 'Campinas, SP',
    image: 'https://r2m.com.br/wp-content/themes/r2m/img/card_cap/IMG_2659.JPG',
    category: 'Residencial',
    description: 'Residência de alto padrão'
  },
  {
    id: 6,
    name: 'Loteamento Santa Joana',
    status: 'Entregue',
    location: 'Campinas, SP',
    image: 'https://r2m.com.br/wp-content/themes/r2m/img/card_cap/IMG_2549.JPG',
    category: 'Loteamento',
    description: 'Loteamento urbano planejado'
  },
  {
    id: 7,
    name: 'Loteamento São Fernando',
    status: 'Entregue',
    location: 'Campinas, SP',
    image: 'https://r2m.com.br/wp-content/themes/r2m/img/card_cap/saofernando.jpg',
    category: 'Loteamento',
    description: 'Infraestrutura completa e planejada'
  },
  {
    id: 8,
    name: 'C.E.I. Profª Gessy G. de Camargo',
    status: 'Entregue',
    location: 'Campinas, SP',
    image: 'https://r2m.com.br/wp-content/themes/r2m/img/gessy/2.jpg',
    category: 'Público',
    description: 'Centro de educação infantil'
  },
  {
    id: 9,
    name: 'Parque Ecológico',
    status: 'Entregue',
    location: 'Campinas, SP',
    image: 'https://r2m.com.br/wp-content/themes/r2m/img/card_cap/parqueecologico.JPG',
    category: 'Público',
    description: 'Área de preservação e lazer'
  },
  {
    id: 10,
    name: 'Edifício Bela Aliança',
    status: 'Entregue',
    location: 'Campinas, SP',
    image: 'https://r2m.com.br/wp-content/themes/r2m/img/card_cap/bellaalianca.jpg',
    category: 'Residencial',
    description: 'Edifício residencial moderno'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('Todos');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = filter === 'Todos'
    ? projects
    : projects.filter(p => p.status === filter);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 9);

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Nossos Empreendimentos
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Projetos desenvolvidos com excelência, do planejamento à entrega
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['Todos', 'Lançamento', 'Em Obras', 'Entregue'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === status
                  ? 'bg-emerald-600 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 shadow'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedProjects.map((project) => {
            const projectDetail = projectsData.find(p => p.id === project.id);
            return (
              <Link
                key={project.id}
                to={`/projeto/${projectDetail?.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl active:shadow-xl transition-all duration-300 transform hover:-translate-y-2 active:translate-y-0 touch-manipulation"
              >
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.name} - ${project.description} em ${project.location}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1 ${
                      project.status === 'Lançamento'
                        ? 'bg-blue-500 text-white'
                        : project.status === 'Em Obras'
                        ? 'bg-amber-500 text-white'
                        : 'bg-emerald-500 text-white'
                    }`}>
                      {project.status === 'Lançamento' ? (
                        <Clock className="h-4 w-4" />
                      ) : project.status === 'Em Obras' ? (
                        <Clock className="h-4 w-4" />
                      ) : (
                        <CheckCircle className="h-4 w-4" />
                      )}
                      <span>{project.status}</span>
                    </span>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center text-slate-600 mb-2">
                    <MapPin className="h-3.5 w-3.5 md:h-4 md:w-4 mr-1" />
                    <span className="text-xs md:text-sm">{project.location}</span>
                  </div>
                  <p className="text-slate-600 text-xs md:text-sm mb-3">{project.description}</p>
                  <div className="inline-block px-2.5 py-1 md:px-3 bg-slate-100 text-slate-700 text-xs md:text-sm rounded-full">
                    {project.category}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {filteredProjects.length > 9 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {showAll ? 'Ver Menos' : `Ver Todos (${filteredProjects.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
