import React from 'react';
import { DOCTOR_INFO } from '../data/cardiologistData';

interface FinalCtaProps {
  onOpenBooking: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative ambient subtle circle */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-rose-950/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="text-xs uppercase tracking-wider text-rose-400 font-bold mb-3 block">
          Agendamento Direto & Sem Burocracia
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 max-w-3xl mx-auto leading-tight [text-wrap:balance]">
          Agende sua consulta cardiológica e dê ao seu coração a atenção que ele merece.
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Nossa equipe de concierge médica está à disposição pelo WhatsApp para verificar datas convenientes, esclarecer dúvidas sobre exames e fornecer todas as instruções de acesso ao Jardim Paulista.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href={`https://wa.me/${DOCTOR_INFO.phoneClean}?text=${encodeURIComponent('Olá! Gostaria de agendar uma consulta cardiológica com o Dr. Júlio Cabral.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-rose-700 hover:bg-rose-600 rounded-lg transition-colors shadow-md whitespace-nowrap"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.97.53 1.769.814 2.796.814 3.183 0 5.769-2.587 5.769-5.767 0-3.181-2.586-5.765-5.769-5.769zm10.029 5.766c0 5.549-4.512 10.061-10.06 10.061-1.758 0-3.411-.458-4.85-1.258l-5.65 1.481 1.508-5.508c-.902-1.503-1.418-3.255-1.418-5.127 0-5.549 4.512-10.06 10.06-10.06 5.548 0 10.06 4.511 10.06 10.06z" />
            </svg>
            Agendar pelo WhatsApp
          </a>

          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-lg transition-colors border border-slate-700 whitespace-nowrap"
          >
            Preencher Solicitação de Horário
          </button>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
          <span>{DOCTOR_INFO.crm}</span>
          <span aria-hidden="true">·</span>
          <span>{DOCTOR_INFO.rqe}</span>
          <span aria-hidden="true">·</span>
          <span>Jardim Paulista, São Paulo - SP</span>
        </div>
      </div>
    </section>
  );
};
