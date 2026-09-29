import React from 'react';
import { DOCTOR_INFO } from '../data/cardiologistData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Specialty */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-rose-500">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <span className="font-serif text-lg font-bold text-white tracking-tight">
                {DOCTOR_INFO.name}
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              Cardiologia clínica, ecocardiografia e prevenção cardiovascular avançada com atendimento humanizado no Jardim Paulista, São Paulo - SP.
            </p>
            <div className="pt-2 text-slate-300 font-medium space-y-1">
              <div>{DOCTOR_INFO.crm}</div>
              <div>{DOCTOR_INFO.rqe}</div>
              <div>Membro Titular da Sociedade Brasileira de Cardiologia</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-xs mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre o Dr. Júlio Cabral
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Serviços & Procedimentos
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">
                  Diferenciais do Atendimento
                </a>
              </li>
              <li>
                <a href="#calculadora-risco" className="hover:text-white transition-colors">
                  Autoavaliação de Risco
                </a>
              </li>
              <li>
                <a href="#estrutura" className="hover:text-white transition-colors">
                  Consultório & Equipamentos
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">
                  Como Chegar ao Consultório
                </a>
              </li>
            </ul>
          </div>

          {/* Principal Services */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-xs mb-4">
              Exames no Consultório
            </h4>
            <ul className="space-y-2.5">
              <li>Check-up Cardiológico Preventivo</li>
              <li>Ecocardiograma Transtorácico com Doppler</li>
              <li>Teste Ergométrico Computadorizado</li>
              <li>Holter Digital 24 horas</li>
              <li>M.A.P.A. 24 horas (Pressão Arterial)</li>
              <li>Risco Cirúrgico Pré-Operatório</li>
              <li>Tratamento de Hipertensão e Colesterol</li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-xs mb-4">
              Localização & Contato
            </h4>
            <div className="space-y-2 text-slate-400">
              <p className="text-white font-medium">{DOCTOR_INFO.address.street}</p>
              <p>{DOCTOR_INFO.address.suite}</p>
              <p>{DOCTOR_INFO.address.neighborhood} - {DOCTOR_INFO.address.city}/{DOCTOR_INFO.address.state}</p>
              <p>CEP: {DOCTOR_INFO.address.cep}</p>
              <div className="pt-2">
                <p className="text-white font-medium">Horários:</p>
                <p>{DOCTOR_INFO.hours.weekdays}</p>
                <p>{DOCTOR_INFO.hours.saturday}</p>
              </div>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${DOCTOR_INFO.phoneClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1.5"
                >
                  WhatsApp: {DOCTOR_INFO.phoneFormatted}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Disclaimer & CFM Ethics Notice */}
        <div className="pt-8 border-t border-slate-800/80 space-y-4">
          <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-slate-400 text-[11px] leading-relaxed">
            <strong className="text-rose-400 font-semibold block mb-1">
              Aviso de Emergência Cardiovascular:
            </strong>
            Em situações de emergência com suspeita de infarto (dor opressiva no peito de início súbito, falta de ar aguda, perda de consciência ou sudorese fria), dirija-se imediatamente ao pronto-socorro cardiológico mais próximo ou acione o SAMU pelo telefone 192. O consultório atende exclusivamente consultas e exames eletivos previamente agendados.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-300 pt-4">
            <div>
              © {new Date().getFullYear()} Dr. Júlio Cabral · Todos os direitos reservados. Responsável Técnico: Dr. Júlio Cabral (CRM-SP 158.420 / RQE 84.190).
            </div>
            <div>
              Consultório Médico no Jardim Paulista, São Paulo - SP
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
