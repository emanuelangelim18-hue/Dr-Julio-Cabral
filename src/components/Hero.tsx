import React from 'react';
import { DOCTOR_INFO } from '../data/cardiologistData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white pt-10 pb-16 lg:py-24 border-b border-slate-800">
      {/* Subtle background ambient lighting (no garish neon) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800/60 via-slate-900 to-slate-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Value Proposition & Doctor Credentials */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Clean unboxed metadata kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-300 mb-5">
              <span>Cardiologia Clínica</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span>Ecocardiografia</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span>{DOCTOR_INFO.crm}</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span>Jardim Paulista, SP</span>
            </div>

            {/* Display Headline with text-wrap: balance */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6 max-w-2xl [text-wrap:balance]">
              Cuidado cardiovascular individualizado, com tempo para ouvir o que seu coração precisa.
            </h1>

            {/* Subtitle with measure 65-75ch */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              Consultas aprofundadas de 60 minutos, exames diagnósticos realizados no próprio consultório pelo Dr. Júlio Cabral (InCor–FMUSP) e estratificação preventiva para quem busca longevidade com segurança e rigor científico.
            </p>

            {/* Primary & Secondary Action Block */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href={`https://wa.me/${DOCTOR_INFO.phoneClean}?text=${encodeURIComponent('Olá, Dr. Júlio e equipe! Gostaria de verificar horários disponíveis para uma consulta cardiológica no Jardim Paulista.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-rose-700 hover:bg-rose-600 rounded-lg transition-all duration-200 shadow-sm shadow-rose-950/30 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.97.53 1.769.814 2.796.814 3.183 0 5.769-2.587 5.769-5.767 0-3.181-2.586-5.765-5.769-5.769zm10.029 5.766c0 5.549-4.512 10.061-10.06 10.061-1.758 0-3.411-.458-4.85-1.258l-5.65 1.481 1.508-5.508c-.902-1.503-1.418-3.255-1.418-5.127 0-5.549 4.512-10.06 10.06-10.06 5.548 0 10.06 4.511 10.06 10.06z" />
                </svg>
                Agendar Consulta pelo WhatsApp
              </a>

              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700 hover:text-white rounded-lg transition-colors border border-slate-700/80 whitespace-nowrap"
              >
                Solicitar Horário Online
              </button>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-6 border-t border-slate-800/80 w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-400">
              <div>
                <div className="text-white font-semibold text-sm mb-0.5">Especialista SBC</div>
                <div>Sociedade Brasileira de Cardiologia</div>
              </div>
              <div>
                <div className="text-white font-semibold text-sm mb-0.5">Formação InCor</div>
                <div>Faculdade de Medicina da USP</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-white font-semibold text-sm mb-0.5">Corpo Clínico</div>
                <div>Sírio-Libanês e Einstein</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Doctor Portrait Container with Elegant Hairline Border */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl">
                <img
                  src="/src/assets/images/hero_cardiologist_1790689521374.jpg"
                  alt="Dr. Júlio Cabral em seu consultório de cardiologia em São Paulo"
                  referrerPolicy="no-referrer"
                  className="w-full h-[440px] sm:h-[480px] object-cover object-top"
                  onError={(e) => {
                    // Fallback container in case of any loading hitch
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                <div
                  style={{ display: 'none' }}
                  className="w-full h-[460px] bg-slate-800 items-center justify-center flex-col p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center text-rose-500 mb-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-serif text-white">{DOCTOR_INFO.name}</h3>
                  <p className="text-sm text-slate-400 mt-1">{DOCTOR_INFO.specialty}</p>
                </div>

                {/* Bottom Photo Scrim with Direct Doctor Identity */}
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-rose-400 font-semibold mb-0.5">Responsável Técnico</p>
                      <p className="text-lg font-bold text-white font-serif">{DOCTOR_INFO.name}</p>
                      <p className="text-xs text-slate-300">{DOCTOR_INFO.crm} · {DOCTOR_INFO.rqe}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-2.5 py-1 text-[11px] font-medium text-emerald-300 bg-emerald-950/80 border border-emerald-800/60 rounded">
                        Agenda Aberta
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-card: Reembolso & Particular */}
              <div className="mt-3 p-3.5 bg-slate-800/90 border border-slate-700/70 rounded-xl text-xs text-slate-300 flex items-center justify-between gap-3 backdrop-blur-xs">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Atendimento particular com relatório para reembolso</span>
                </div>
                <a
                  href="#diferenciais"
                  className="text-rose-400 hover:text-rose-300 font-medium underline underline-offset-2 whitespace-nowrap"
                >
                  Como funciona
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
