import React, { useState } from 'react';
import { DOCTOR_INFO } from '../data/cardiologistData';

interface FloatingWhatsAppProps {
  onOpenBooking: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Quick concierge menu popover */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xs">
                JC
              </div>
              <div>
                <div className="text-xs font-semibold">Concierge Dr. Júlio Cabral</div>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Atendimento Online em SP
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 text-sm"
              aria-label="Fechar popover"
            >
              ✕
            </button>
          </div>

          <div className="p-4 space-y-2.5 bg-slate-50 text-xs">
            <p className="text-slate-600 leading-relaxed">
              Olá! Como podemos cuidar da sua saúde cardiovascular hoje?
            </p>

            <a
              href={`https://wa.me/${DOCTOR_INFO.phoneClean}?text=${encodeURIComponent('Olá! Gostaria de falar com a recepção do Dr. Júlio Cabral sobre consulta particular.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-2.5 bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 rounded-xl text-slate-800 font-medium transition-colors"
            >
              <span>1. Agendar Primeira Consulta</span>
              <span className="text-emerald-600 font-bold">&rarr;</span>
            </a>

            <a
              href={`https://wa.me/${DOCTOR_INFO.phoneClean}?text=${encodeURIComponent('Olá! Gostaria de agendar exames cardiológicos (Ecocardiograma / Holter / MAPA) com o Dr. Júlio.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-2.5 bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 rounded-xl text-slate-800 font-medium transition-colors"
            >
              <span>2. Agendar Exames (Ecocardiograma/Holter)</span>
              <span className="text-emerald-600 font-bold">&rarr;</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="w-full text-left p-2.5 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl text-slate-700 font-medium transition-colors"
            >
              3. Formulário de Pré-Agendamento
            </button>
          </div>

          <div className="p-3 bg-white border-t border-slate-100 text-center text-[10px] text-slate-400">
            Jardim Paulista · São Paulo - SP · {DOCTOR_INFO.crm}
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
        aria-label="Abrir opções de contato via WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>

        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.97.53 1.769.814 2.796.814 3.183 0 5.769-2.587 5.769-5.767 0-3.181-2.586-5.765-5.769-5.769zm10.029 5.766c0 5.549-4.512 10.061-10.06 10.061-1.758 0-3.411-.458-4.85-1.258l-5.65 1.481 1.508-5.508c-.902-1.503-1.418-3.255-1.418-5.127 0-5.549 4.512-10.06 10.06-10.06 5.548 0 10.06 4.511 10.06 10.06z" />
        </svg>

        <span className="text-xs font-semibold whitespace-nowrap hidden sm:inline">
          WhatsApp Recepção
        </span>
      </button>
    </div>
  );
};
