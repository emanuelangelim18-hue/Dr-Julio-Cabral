import React from 'react';
import { TESTIMONIALS } from '../data/cardiologistData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-wider text-rose-700 font-bold mb-3 block">
            Experiência do Paciente
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-4 [text-wrap:balance]">
            A confiança de quem escolheu um acompanhamento cardiológico próximo e dedicado.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Relatos espontâneos de pacientes que encontraram no Dr. Júlio Cabral precisão técnica, escuta atenta e tranquilidade para suas decisões de saúde.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50/70 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between"
            >
              <div>
                {/* Situation context kicker */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4 pb-3 border-b border-slate-200/80">
                  <span className="font-medium text-slate-800">{item.situation}</span>
                  <span>{item.timeframe}</span>
                </div>

                {/* Patient Quote */}
                <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 italic">
                  "{item.quote}"
                </blockquote>
              </div>

              {/* Attribution */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200/80 text-xs">
                <div>
                  <div className="font-serif font-bold text-slate-900 text-sm">
                    {item.patientName}, {item.age} anos
                  </div>
                  <div className="text-slate-500">
                    {item.profession} · {item.neighborhood}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-emerald-700 font-medium">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Consulta Verificada</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-slate-500 max-w-xl mx-auto">
          *Declarações em conformidade com as resoluções éticas do Conselho Federal de Medicina (CFM), refletindo a experiência pessoal dos pacientes. Os resultados de saúde variam para cada indivíduo.
        </div>
      </div>
    </section>
  );
};
