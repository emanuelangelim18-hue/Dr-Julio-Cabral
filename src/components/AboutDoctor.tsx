import React from 'react';
import { DOCTOR_INFO } from '../data/cardiologistData';

interface AboutDoctorProps {
  onOpenBooking: () => void;
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ onOpenBooking }) => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column: Office & Clinical Environment */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100">
                <img
                  src="/src/assets/images/clinic_consulting_room_1790689540756.jpg"
                  alt="Consultório médico do Dr. Júlio Cabral em São Paulo"
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Informative Floating Card */}
              <div className="mt-4 p-5 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-serif text-slate-900 font-bold text-base mb-1">
                  Atendimento sem pressa
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  "A medicina cardiovascular moderna exige alta tecnologia diagnóstica, mas nenhuma máquina substitui uma hora inteira dedicada a entender o histórico, o sono, as pressões e os anseios de cada paciente."
                </p>
                <div className="mt-3 flex items-center justify-between pt-3 border-t border-slate-200/80 text-xs text-slate-500">
                  <span className="font-semibold text-slate-900">{DOCTOR_INFO.name}</span>
                  <span>{DOCTOR_INFO.experienceYears} anos de dedicação médica</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <span className="text-xs uppercase tracking-wider text-rose-700 font-bold mb-3">
              Sobre o Especialista
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-6 [text-wrap:balance]">
              Ciência de vanguarda e escuta atenta para proteger o seu coração ao longo da vida.
            </h2>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                O <strong className="text-slate-900 font-semibold">{DOCTOR_INFO.name}</strong> é médico cardiologista graduado com residência médica em Cardiologia Clínica e especialização em Ecocardiografia no <strong className="text-slate-900 font-semibold">InCor – HCFMUSP</strong> (Instituto do Coração da Faculdade de Medicina da Universidade de São Paulo), um dos centros de maior prestígio cardiológico da América Latina.
              </p>
              <p>
                Com mais de {DOCTOR_INFO.experienceYears} anos de prática médica diária, construiu seu modelo de atendimento com base na constatação de que a prevenção cardiovascular efetiva não acontece em consultas corridas de 15 minutos. Cada consulta no Jardim Paulista é estruturada com tempo para exame físico rigoroso, análise de hábitos e discussão aberta de cada exame realizado.
              </p>
              <p>
                O Dr. Júlio também integra o corpo clínico de referências hospitalares como o <strong className="text-slate-900 font-semibold">Hospital Sírio-Libanês</strong> e o <strong className="text-slate-900 font-semibold">Hospital Israelita Albert Einstein</strong>, garantindo suporte completo caso haja necessidade de internações eletivas ou procedimentos intervencionistas.
              </p>
            </div>

            {/* Editorial Highlight Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/60">
                <div className="font-semibold text-slate-900 text-sm mb-1">
                  01. Diagnóstico Integrado
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  O ecocardiograma e o eletrocardiograma são realizados pelo próprio cardiologista durante a avaliação, evitando desencontros entre imagem e conduta clínica.
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/60">
                <div className="font-semibold text-slate-900 text-sm mb-1">
                  02. Medicina Baseada em Evidências
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  Prescrições farmacológicas e orientações de rotina alinhadas às diretrizes da Sociedade Brasileira de Cardiologia, AHA e Sociedade Europeia (ESC).
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-xs"
              >
                Conhecer a Consulta Cardiológica
              </button>

              <a
                href="#servicos"
                className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
              >
                Ver Exames Realizados &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
