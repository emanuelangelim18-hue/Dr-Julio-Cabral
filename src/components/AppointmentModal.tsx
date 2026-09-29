import React, { useState } from 'react';
import { DOCTOR_INFO, CLINIC_SERVICES } from '../data/cardiologistData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [reason, setReason] = useState(preselectedService || 'Check-up Cardiológico Preventivo');
  const [preferredTime, setPreferredTime] = useState('Manhã (08h às 12h)');
  const [modality, setModality] = useState('Presencial em São Paulo (Jardim Paulista)');
  const [paymentType, setPaymentType] = useState('Particular (com recibo para reembolso)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getEncodedWhatsAppUrl = () => {
    const message = `Olá, Dr. Júlio e equipe! Gostaria de solicitar um agendamento de consulta:
- *Nome*: ${name || 'Paciente'}
- *Telefone*: ${phone || 'A informar'}
- *Motivo/Exame*: ${reason}
- *Período de preferência*: ${preferredTime}
- *Modalidade*: ${modality}
- *Atendimento*: ${paymentType}
${notes ? `- *Observações*: ${notes}` : ''}

Por favor, poderiam me informar as próximas datas disponíveis?`;

    return `https://wa.me/${DOCTOR_INFO.phoneClean}?text=${encodeURIComponent(message)}`;
  };

  const handleCopy = () => {
    const rawText = `Olá, Dr. Júlio e equipe! Gostaria de agendar: ${reason} para ${name || 'Paciente'} (${preferredTime}, ${modality}).`;
    navigator.clipboard?.writeText(rawText);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header */}
        <div className="px-6 py-5 bg-slate-900 text-white flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider text-rose-400 font-semibold block mb-0.5">
              Agendamento de Consulta
            </span>
            <h3 className="font-serif text-xl font-bold">
              {DOCTOR_INFO.name}
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

        {/* Content */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-1.5">
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Mariana Silva"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-1.5">
                  WhatsApp com DDD *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ex: (11) 98765-4321"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-1.5">
                    Motivo da Consulta
                  </label>
                  <select
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  >
                    <option value="Check-up Cardiológico Preventivo">Check-up Preventivo</option>
                    <option value="Ecocardiograma Transtorácico com Doppler">Ecocardiograma</option>
                    <option value="Teste Ergométrico Computadorizado">Teste Ergométrico</option>
                    <option value="Holter Digital de 24 Horas">Holter 24h</option>
                    <option value="M.A.P.A. 24 Horas (Pressão Arterial)">M.A.P.A. 24h</option>
                    <option value="Avaliação de Risco Cirúrgico">Risco Cirúrgico</option>
                    <option value="Investigação de Sintomas / Palpitações">Investigação de Sintomas</option>
                    <option value="Segunda Opinião Cardiológica">Segunda Opinião</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-1.5">
                    Preferência de Horário
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  >
                    <option value="Manhã (08h às 12h)">Manhã (08h às 12h)</option>
                    <option value="Tarde (13h às 19h)">Tarde (13h às 19h)</option>
                    <option value="Sábado pela manhã">Sábado pela manhã</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-1.5">
                  Modalidade do Atendimento
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setModality('Presencial em São Paulo (Jardim Paulista)')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-colors ${
                      modality.includes('Presencial')
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    Presencial (SP)
                  </button>
                  <button
                    type="button"
                    onClick={() => setModality('Telemedicina / Online')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-colors ${
                      modality.includes('Telemedicina')
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    Telemedicina
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-1.5">
                  Observações ou Queixa Específica (Opcional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex: Tenho exames de sangue recentes; sinto taquicardia ao subir escadas..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-sm font-semibold text-white bg-rose-700 hover:bg-rose-600 rounded-lg transition-colors shadow-sm"
                >
                  Continuar para Envio no WhatsApp &rarr;
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center">
                Seus dados serão tratados com sigilo médico ético absoluto.
              </p>
            </form>
          ) : (
            <div className="text-center py-4 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h4 className="font-serif text-xl font-bold text-slate-900">
                Solicitação Preparada!
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Clique no botão abaixo para abrir diretamente o WhatsApp da nossa recepção com todos os seus dados já preenchidos.
              </p>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs space-y-1 text-slate-700">
                <div><strong>Paciente:</strong> {name}</div>
                <div><strong>WhatsApp:</strong> {phone}</div>
                <div><strong>Serviço:</strong> {reason}</div>
                <div><strong>Período:</strong> {preferredTime}</div>
                <div><strong>Modalidade:</strong> {modality}</div>
              </div>

              <div className="flex flex-col gap-2.5 pt-2">
                <a
                  href={getEncodedWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-lg transition-colors shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.97.53 1.769.814 2.796.814 3.183 0 5.769-2.587 5.769-5.767 0-3.181-2.586-5.765-5.769-5.769zm10.029 5.766c0 5.549-4.512 10.061-10.06 10.061-1.758 0-3.411-.458-4.85-1.258l-5.65 1.481 1.508-5.508c-.902-1.503-1.418-3.255-1.418-5.127 0-5.549 4.512-10.06 10.06-10.06 5.548 0 10.06 4.511 10.06 10.06z" />
                  </svg>
                  Abrir Conversa no WhatsApp
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-700 hover:text-slate-900 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Copiar resumo para área de transferência
                </button>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-slate-500 hover:text-slate-800 underline mt-1"
                >
                  Editar informações
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
