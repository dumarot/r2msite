import { ExternalLink, Users, Handshake } from 'lucide-react';
import { useEffect, useRef } from 'react';

const clientLogos = [
  '/projects/clientes/1.jpg',
  '/projects/clientes/2.jpg',
  '/projects/clientes/3.jpg',
  '/projects/clientes/4.jpg',
  '/projects/clientes/5.jpg',
  '/projects/clientes/6.JPG',
  '/projects/clientes/7.JPG',
  '/projects/clientes/8.JPG',
  '/projects/clientes/9.JPG',
  '/projects/clientes/10.jpg',
  '/projects/clientes/11.JPG',
  '/projects/clientes/12.JPG',
  '/projects/clientes/13.png',
  '/projects/clientes/14.JPG',
  '/projects/clientes/15.jpg',
  '/projects/clientes/16.JPG',
  '/projects/clientes/17.JPG',
];

const partners = [
  {
    name: 'Rittner & Marot',
    description: 'Empresa campineira fundada em 2003, focada no desenvolvimento de empreendimentos imobiliários. Oferece soluções completas desde loteamentos até grandes empreendimentos corporativos, realizando estudos de viabilidade técnico-legal, aprovações, registros e regularizações fundiárias com ética profissional e comprometimento.',
    link: 'https://www.marot.com.br/',
    image: 'https://marot.com.br/wp-content/uploads/2024/08/young-man-using-technology-digital-tablet-in-corporate-business-office.jpg'
  },
  {
    name: 'Plana Ambiental',
    description: 'Consultoria ambiental completa especializada em licenciamento ambiental para empreendimentos imobiliários, obras de infraestrutura e atividades industriais. Realiza aprovação de loteamentos e condomínios, estudos de impacto, compensações ambientais, reflorestamentos e projetos técnicos diversos, garantindo sustentabilidade e conformidade legal.',
    link: 'https://www.planambiental.com.br/',
    image: 'https://planambiental.com.br/wp-content/uploads/2021/10/autorizacao-corte-e-poda.jpg'
  }
];

export default function ClientsPartners() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const scrollContent = scroller.querySelector('.scroll-content') as HTMLElement;
    if (!scrollContent) return;

    const clone = scrollContent.cloneNode(true) as HTMLElement;
    scroller.appendChild(clone);

    let scrollPosition = 0;
    const scroll = () => {
      scrollPosition += 0.5;
      if (scrollPosition >= scrollContent.scrollWidth) {
        scrollPosition = 0;
      }
      scroller.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-4">
            <Users className="h-5 w-5" />
            <span className="font-semibold">Confiança e Parceria</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Clientes e Parceiros
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Construímos relacionamentos duradouros baseados em confiança e excelência
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 overflow-hidden">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Quem Confia em Nosso Trabalho
            </h3>
            <p className="text-lg text-slate-600">
              Empresas e clientes que já escolheram a excelência da R2M
            </p>
          </div>

          <div
            ref={scrollerRef}
            className="overflow-hidden relative flex"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
          >
            <div className="scroll-content flex gap-8 items-center whitespace-nowrap">
              {clientLogos.map((logo, index) => (
                <div
                  key={index}
                  className="inline-flex flex-shrink-0 w-48 h-32 bg-white rounded-lg border border-slate-200 items-center justify-center p-4 hover:shadow-lg transition-shadow"
                >
                  <img
                    src={logo}
                    alt={`Cliente ${index + 1}`}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
              <Handshake className="h-5 w-5" />
              <span className="font-semibold">Parceiros Estratégicos</span>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Nossos Parceiros
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">
                    {partner.name}
                  </h4>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {partner.description}
                  </p>
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-semibold group/link"
                  >
                    <span>Acesse e conheça</span>
                    <ExternalLink className="h-5 w-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
