import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const whatsappNumber = '5519997180567';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Estamos prontos para atender você
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-10 text-white">
            <h3 className="text-2xl font-bold mb-10">Informações de Contato</h3>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-lg shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">E-mail</h4>
                  <a href="mailto:contato@r2m.com.br" className="text-slate-300 hover:text-emerald-400 transition-colors">
                    contato@r2m.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-lg shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Telefone</h4>
                  <a href="tel:+551932378344" className="text-slate-300 hover:text-emerald-400 transition-colors">
                    +55 (19) 3237-8344
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#25D366]/20 p-3 rounded-lg shrink-0">
                  <MessageCircle className="h-6 w-6 text-[#25D366]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">WhatsApp</h4>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-[#25D366] transition-colors"
                  >
                    +55 (19) 9.9718-0567
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-lg shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Endereço</h4>
                  <p className="text-slate-300">
                    Rua Rafael Andrade Duarte, 266<br />
                    Nova Campinas – Campinas/SP
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <h4 className="font-semibold mb-2">Horário de Atendimento</h4>
                <p className="text-slate-300">
                  Segunda a Sexta: 8h às 18h<br />
                  Sábado: 9h às 13h
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Falar pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
