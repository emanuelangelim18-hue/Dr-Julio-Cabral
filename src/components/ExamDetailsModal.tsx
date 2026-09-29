import React from 'react';
import { ServiceItem } from '../types';
import { DOCTOR_INFO } from '../data/cardiologistData';

interface ExamDetailsModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookExam: (serviceTitle: string) => void;
}

export const ExamDetailsModal: React.FC<ExamDetailsModalProps> = ({
  service,
  onClose,
  onBookExam,
}) => {
  if (!service) return null;

  const whatsappUrl = `https://wa.me/${DOCTOR_INFO.phoneClean}?text=${encodeURIComponent(
    `Olá! Gostaria de agendar o exame: ${service.title} com o Dr. Júlio Cabral.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 mb-1">
              <span>{service.number}</span>
              <span aria-hidden="true">·</span>
              <span>{service.category}</span>
              <span aria-hidden="true">·</span>
              <span>Duração: {service.duration}</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold">
              {service.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
            aria-label="Fechar modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto text-slate-700 text-xs sm:text-sm">
          {/* Detailed description */}
          <div>
            <h4 className="font-semibold text-slate-900 uppercase tracking-wider text-xs mb-2">
              Sobre o Procedimento
            </h4>
            <p className="leading-relaxed text-slate-600">
              {service.fullDescription}
            </p>
          </div>

          {/* Indications */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h4 className="font-semibold text-slate-900 uppercase tracking-wider text-xs mb-3">
              Indicações Clínicas Comuns
            </h4>
            <ul className="space-y-1.5 text-slate-600">
              {service.indications.map((ind, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold shrink-0">✓</span>
                  <span>{ind}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Preparation steps */}
          <div>
            <h4 className="font-semibold text-slate-900 uppercase tracking-wider text-xs mb-3">
              Orientações de Preparo para o Exame
            </h4>
            <div className="space-y-2">
              {service.preparation.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-rose-50/50 border border-rose-100 rounded-lg">
                  <span className="w-5 h-5 rounded-full bg-rose-900 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment details */}
          {service.equipmentInfo && (
            <div className="p-4 bg-slate-100/70 border border-slate-200 rounded-xl">
              <span className="text-xs font-semibold text-slate-900 block mb-1">
                Tecnologia & Precisão:
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                {service.equipmentInfo}
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Fechar detalhes
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookExam(service.title);
              }}
              className="px-4 py-2.5 text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap"
            >
              Preencher Formulário
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-rose-700 hover:bg-rose-600 rounded-lg transition-colors shadow-xs whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.97.53 1.769.814 2.796.814 3.183 0 5.769-2.587 5.769-5.767 0-3.181-2.586-5.765-5.769-5.769zm10.029 5.766c0 5.549-4.512 10.061-10.06 10.061-1.758 0-3.411-.458-4.85-1.258l-5.65 1.481 1.508-5.508c-.902-1.503-1.418-3.255-1.418-5.127 0-5.549 4.512-10.06 10.06-10.06 5.548 0 10.06 4.511 10.06 10.06z" />
              </svg>
              Agendar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
