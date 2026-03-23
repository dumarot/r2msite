import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              {[
                { label: 'Início', id: 'hero' },
                { label: 'Empreendimentos', id: 'projects' },
                { label: 'Sobre', id: 'about' },
                { label: 'Atuações', id: 'services' },
                { label: 'Contato', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-slate-400">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:contato@r2m.com.br" className="hover:text-emerald-400 transition-colors">
                  contato@r2m.com.br
                </a>
              </li>
              <li className="flex items-start space-x-2 text-slate-400">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <a href="tel:+551932378344" className="hover:text-emerald-400 transition-colors">
                  +55 (19) 3237-8344
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Localização</h3>
            <div className="flex items-start space-x-2 text-slate-400">
              <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <p>
                Rua Rafael Andrade Duarte, 266<br />
                Nova Campinas<br />
                Campinas/SP
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>
            © {currentYear} R2M. Todos os Direitos Reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
