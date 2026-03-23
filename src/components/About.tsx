import { Target, Heart, Shield, Leaf } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Sobre a R2M
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Incorporadora especializada em desenvolvimento urbano e construção de empreendimentos imobiliários. Fundada em valores sólidos como eficiência, comprometimento e transparência.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              A todo momento buscamos transformar o sonho de nossos clientes em uma realidade concreta.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-semibold">
              Nossos empreendimentos são elaborados de maneira inteligente, com o objetivo principal de garantir o bem-estar humano em harmonia com o meio ambiente.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Entendemos que o ambiente urbano é muito melhor quando planejado, por isso nos empenhamos na busca pelas melhores soluções para ocupação da cidade no desenvolvimento de nossos projetos.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: 'Eficiência',
                description: 'Processos otimizados e resultados superiores'
              },
              {
                icon: Heart,
                title: 'Comprometimento',
                description: 'Dedicação total em cada projeto'
              },
              {
                icon: Shield,
                title: 'Transparência',
                description: 'Relações claras e honestas'
              },
              {
                icon: Leaf,
                title: 'Sustentabilidade',
                description: 'Harmonia com o meio ambiente'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 hover:bg-emerald-50 transition-all duration-300 hover:shadow-lg group"
              >
                <value.icon className="h-10 w-10 text-emerald-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
