import React, { useState } from 'react';
import { CLINIC_SERVICES, DOCTOR_INFO } from '../data/cardiologistData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos os Serviços' },
    { id: 'diagnostico', label: 'Exames & Imagem' },
    { id: 'prevencao', label: 'Check-up & Prevenção' },
    { id: 'clinico', label: 'Acompanhamento Clínico' },
  ];

  const filteredServices = CLINIC_SERVICES.filter((item) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'diagnostico') {
      return item.id.includes('ecocardiograma') || item.id.includes('holter') || item.id.includes('mapa') || item.id.includes('teste');
    }
    if (activeCategory === 'prevencao') {
      return item.id.includes('checkup') || item.id.includes('risco');
    }
    if (activeCategory === 'clinico') {
      return item.id.includes('hipertensao') || item.id.includes('arritmias');
    }
    return true;
  });

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-wider text-rose-700 font-bold mb-3 block">
            Serviços & Procedimentos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-4 [text-wrap:balance]">
            Diagnóstico de alta precisão e cuidado clínico integral em um único endereço.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Consulte a lista completa de exames gráficos, ultrassonografia cardiovascular e acompanhamento preventivo realizados no Jardim Paulista com equipamentos próprios e laudo ágil.
          </p>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/70 rounded-xl max-w-xl mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 ${
                activeCategory === cat.id
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Clean unboxed metadata header */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="font-mono text-slate-400 font-medium">{service.number}</span>
                  <div className="flex items-center gap-2">
                    <span>{service.category}</span>
                    {service.popular && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-rose-700 font-semibold">Mais Procurado</span>
                      </>
                    )}
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-slate-950 mb-3 group-hover:text-rose-900 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {service.shortDescription}
                </p>

                {/* Key Indications list */}
                <div className="border-t border-slate-100 pt-4 mb-6">
                  <div className="text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2">
                    Principais Indicações:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {service.indications.slice(0, 3).map((ind, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-rose-600 font-bold shrink-0">✓</span>
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => onSelectService(service)}
                  className="text-xs font-semibold text-slate-800 hover:text-slate-950 underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-800 rounded"
                >
                  Ver preparo & detalhes
                </button>

                <a
                  href={`https://wa.me/${DOCTOR_INFO.phoneClean}?text=${encodeURIComponent(`Olá! Gostaria de informações para agendar: ${service.title} com o Dr. Júlio Cabral.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-800 bg-rose-50 hover:bg-rose-100 rounded-md transition-colors"
                >
                  Agendar
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-slate-900 rounded-2xl text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="font-serif text-lg sm:text-xl font-bold mb-2">
              Dúvidas sobre qual exame é o mais indicado para o seu caso?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Durante a primeira consulta, o Dr. Júlio Cabral avalia sua história clínica e histórico familiar para solicitar estritamente os exames necessários, evitando gastos e procedimentos desnecessários.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-5 py-3 text-xs sm:text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap"
            >
              Falar com Concierge Médica
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
