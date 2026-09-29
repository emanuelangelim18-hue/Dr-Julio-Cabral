import React from 'react';
import { DIFFERENTIALS } from '../data/cardiologistData';

export const DifferentialsSection: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider text-rose-700 font-bold mb-3 block">
                Por que nos escolher
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-6 [text-wrap:balance]">
                Um padrão de consulta cardiológica que resgata a atenção que a sua saúde merece.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                Em tempos de operadoras com consultas cronometradas de poucos minutos, nosso compromisso é oferecer um refúgio de precisão médica, pontualidade britânica e acolhimento humano no coração de São Paulo.
              </p>
            </div>

            {/* Quote block */}
            <div className="p-6 bg-slate-50 border-l-2 border-rose-700 rounded-r-xl">
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                "Não tratamos apenas números de exames laboratoriais; cuidamos de pessoas com rotinas intensas que desejam viver mais e melhor com tranquilidade."
              </p>
              <div className="mt-3 text-xs font-semibold text-slate-900">
                Dr. Júlio Cabral · Cardiologia & Prevenção
              </div>
            </div>
          </div>

          {/* Right Column: 6 Clear Differentials */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {DIFFERENTIALS.map((item, idx) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 transition-colors"
              >
                <div className="text-xs font-mono text-slate-400 mb-2">
                  0{idx + 1}.
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                  {item.description}
                </p>
                <div className="text-xs text-rose-900/90 font-medium pt-2 border-t border-slate-200/60">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
