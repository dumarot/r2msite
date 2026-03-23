import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => scrollToSection('hero')}>
            <img src="https://r2m.com.br/wp-content/themes/r2m/img/logo.png" alt="R2M" className="h-10 w-auto" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Início', id: 'hero' },
              { label: 'Empreendimentos', id: 'projects' },
              { label: 'Sobre', id: 'about' },
              { label: 'Atuações', id: 'services' },
              { label: 'Processo', id: 'process' },
              { label: 'Contato', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-700 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-slate-700" />
            ) : (
              <Menu className="h-6 w-6 text-slate-700" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            {[
              { label: 'Início', id: 'hero' },
              { label: 'Empreendimentos', id: 'projects' },
              { label: 'Sobre', id: 'about' },
              { label: 'Atuações', id: 'services' },
              { label: 'Processo', id: 'process' },
              { label: 'Contato', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-slate-600 hover:text-slate-900 font-medium py-2 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
