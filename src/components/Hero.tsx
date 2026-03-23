import { ArrowRight, Award, Building2, Users } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <img
          src="https://static.wixstatic.com/media/028729_46a7487bb5f04ac49b17283ca9e00674~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01/028729_46a7487bb5f04ac49b17283ca9e00674~mv2.jpg"
          alt="Vistas Joanópolis"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transformando
            <span className="block text-emerald-400">Sonhos em Realidade</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Incorporadora especializada em desenvolvimento urbano e construção de empreendimentos imobiliários com excelência e sustentabilidade.
          </p>
          <button
            onClick={scrollToProjects}
            className="group inline-flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>Conheça nossos empreendimentos</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {[
            { icon: Building2, label: 'Empreendimentos', value: '20+' },
            { icon: Users, label: 'Clientes Satisfeitos', value: '1000+' },
            { icon: Award, label: 'Anos de Experiência', value: '15+' }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <stat.icon className="h-10 w-10 text-emerald-400 mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
