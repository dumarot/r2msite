import { Building, Hammer, ClipboardCheck, Home, Warehouse, TrendingUp, Droplets, Zap, Network } from 'lucide-react';

const serviceCategories = [
  {
    title: 'Empreendimentos',
    icon: Building,
    items: [
      'Condomínios de casas',
      'Edifícios Residenciais',
      'Condomínio de lotes',
      'Condomínio logístico',
      'Prédios comerciais',
      'Sobrados',
      'Unidades sobrepostas'
    ]
  },
  {
    title: 'Infraestrutura',
    icon: Hammer,
    items: [
      'Terraplenagem',
      'Pavimentação',
      'Drenagem',
      'Energia Elétrica',
      'Rede de Água',
      'Rede de Esgoto',
      'Reservatório de Água',
      'Estação de Tratamento (ETE)',
      'Sinalização Viária',
      'Acessibilidade'
    ]
  },
  {
    title: 'Gestão',
    icon: ClipboardCheck,
    items: [
      'Aprovação e Legalização',
      'Acompanhamento Técnico',
      'Acompanhamento Jurídico',
      'Acompanhamento Financeiro',
      'Cotação e Compras',
      'Gestão de Contratos',
      'Medições',
      'Órgãos Públicos',
      'Fiscalização',
      'Entrega'
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Nossas Atuações
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Expertise completa para desenvolver seu empreendimento do início ao fim
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-emerald-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <category.icon className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-slate-600"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-3"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
