import { Lightbulb, FileText, Hammer, Key } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    title: 'Idealização',
    description: 'Estudos de viabilidade e definição do melhor produto',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: FileText,
    title: 'Desenvolvimento',
    description: 'Projetos, aprovações, licenciamentos e registros',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: Hammer,
    title: 'Execução',
    description: 'Obras de engenharia com eficiência e qualidade',
    color: 'from-amber-500 to-amber-600'
  },
  {
    icon: Key,
    title: 'Entrega',
    description: 'Vistorias, Habite-se e Alvarás',
    color: 'from-slate-500 to-slate-600'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Nosso Processo
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Metodologia especializada para garantir o sucesso do seu empreendimento
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 via-amber-500 to-slate-500 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 border-2 border-slate-100 hover:border-emerald-200">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-10 w-10 text-white" />
                  </div>

                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-slate-50 rounded-xl p-8 max-w-3xl">
            <p className="text-lg text-slate-700 leading-relaxed">
              Com nossa metodologia integrada, acompanhamos cada etapa do seu projeto, garantindo qualidade, transparência e eficiência em todas as fases do desenvolvimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
