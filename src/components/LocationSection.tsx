import React, { useState } from 'react';
import { DOCTOR_INFO } from '../data/cardiologistData';

export const LocationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'metro' | 'carro' | 'app'>('carro');

  const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Av. Brigadeiro Luís Antônio, 3500, Jardim Paulista, São Paulo, SP')}`;
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent('Av. Brigadeiro Luís Antônio, 3500, São Paulo')}`;

  return (
    <section id="localizacao" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-wider text-rose-700 font-bold mb-3 block">
            Endereço & Acesso
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-4 [text-wrap:balance]">
            Localização estratégica e conveniência no Jardim Paulista.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A poucos minutos da Avenida Paulista e do Parque Ibirapuera, em uma das regiões médicas mais estruturadas e seguras da capital paulista.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Address, Hours, Quick Contacts */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">
              Consultório Dr. Júlio Cabral
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-rose-700 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <div className="font-semibold text-slate-900">{DOCTOR_INFO.address.street}</div>
                  <div className="text-slate-600">{DOCTOR_INFO.address.suite}</div>
                  <div className="text-slate-600">{DOCTOR_INFO.address.neighborhood} - {DOCTOR_INFO.address.city}/{DOCTOR_INFO.address.state} - CEP {DOCTOR_INFO.address.cep}</div>
                  <div className="text-xs text-rose-800 font-medium mt-1">Ref: {DOCTOR_INFO.address.reference}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <svg className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="font-semibold text-slate-900">Horários de Atendimento</div>
                  <div className="text-slate-600">{DOCTOR_INFO.hours.weekdays}</div>
                  <div className="text-slate-600">{DOCTOR_INFO.hours.saturday}</div>
                  <div className="text-xs text-slate-400 mt-0.5">Domingos e Feriados: Fechado</div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <div className="font-semibold text-slate-900">Contato & Concierge</div>
                  <div className="text-slate-700">WhatsApp: <strong className="text-slate-900">{DOCTOR_INFO.phoneFormatted}</strong></div>
                  <div className="text-slate-600">Telefone Fixo: {DOCTOR_INFO.landline}</div>
                  <div className="text-slate-600">E-mail: {DOCTOR_INFO.email}</div>
                </div>
              </div>
            </div>

            {/* Quick Action Navigation links */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap gap-2.5">
              <a
                href={gmapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>Abrir no Google Maps</span>
                <span aria-hidden="true">&rarr;</span>
              </a>

              <a
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>Abrir no Waze</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Directions Guide & Map View */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            {/* Directions Tabs */}
            <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50/50 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Como Chegar ao Consultório
              </span>

              <div className="flex items-center gap-1 bg-slate-200/80 p-1 rounded-lg">
                <button
                  type="button"
                  onClick={() => setActiveTab('carro')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                    activeTab === 'carro' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  De Carro
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('metro')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                    activeTab === 'metro' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  De Metrô
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('app')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                    activeTab === 'app' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Uber / 99
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'carro' && (
                <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <div className="font-semibold text-slate-900">Estacionamento com Manobrista no Edifício</div>
                  <p>
                    Acesso direto pela Av. Brigadeiro Luís Antônio, altura do número 3500. Entrada sinalizada com serviço de manobrista (valet) seguro terceirizado no subsolo do Medical Garden Tower.
                  </p>
                  <p>
                    Principais vias de acesso: Av. 23 de Maio (saída Pedro Álvares Cabral), Av. Paulista e Av. República do Líbano.
                  </p>
                </div>
              )}

              {activeTab === 'metro' && (
                <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <div className="font-semibold text-slate-900">Acesso por Transporte Público</div>
                  <p>
                    <strong>Estação Brigadeiro (Linha 2-Verde):</strong> localizada a aproximadamente 850 metros (10 minutos de caminhada tranquila ou 3 minutos via táxi/aplicativo).
                  </p>
                  <p>
                    Diversas linhas de ônibus municipais possuem paradas em frente ao edifício com acesso a corredores exclusivos.
                  </p>
                </div>
              )}

              {activeTab === 'app' && (
                <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <div className="font-semibold text-slate-900">Embarque & Desembarque Acessível</div>
                  <p>
                    Ao solicitar Uber ou 99, utilize o destino <strong>"Medical Garden Tower - Av. Brigadeiro Luís Antônio, 3500"</strong>. O condomínio conta com baia coberta exclusiva para parada rápida e rampa para cadeirantes.
                  </p>
                  <p>
                    A recepção central do edifício realiza identificação biométrica ágil com documento com foto.
                  </p>
                </div>
              )}
            </div>

            {/* Visual Photo of the Clinic Access */}
            <div className="relative border-t border-slate-200 bg-slate-100">
              <div className="relative h-44 sm:h-52 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7108115/pexels-photo-7108115.jpeg"
                  alt="Acesso e recepção do Edifício Medical Garden Tower no Jardim Paulista"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = '/src/assets/images/clinic_reception_lounge_1790689572883.jpg';
                  }}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <div>
                    <span className="font-semibold block text-sm">Entrada & Recepção do 14º Andar</span>
                    <span className="text-slate-300 text-[11px]">Acesso biométrico rápido e elevadores inteligentes</span>
                  </div>
                  <span className="px-2.5 py-1 bg-slate-900/80 rounded border border-slate-700 text-[10px] font-semibold text-rose-300">
                    Jardim Paulista
                  </span>
                </div>
              </div>
            </div>

            {/* Stylized Simulated Map Container */}
            <div className="h-64 sm:h-72 bg-slate-900 relative border-t border-slate-200 overflow-hidden flex items-center justify-center p-6 text-center">
              {/* Subtle map grid vector representation */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',
                  backgroundSize: '24px 24px'
                }}
              />

              <div className="relative z-10 max-w-sm bg-slate-950/90 border border-slate-700 p-5 rounded-2xl shadow-xl text-left">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500 animate-pulse" />
                  <span className="text-xs uppercase tracking-wider text-rose-400 font-semibold">
                    Consultório Médico
                  </span>
                </div>
                <div className="font-serif font-bold text-white text-base mb-1">
                  Dr. Júlio Cabral - Cardiologia
                </div>
                <p className="text-xs text-slate-300 mb-3">
                  Av. Brigadeiro Luís Antônio, 3500 · Cj. 142 · Jardim Paulista, São Paulo - SP
                </p>
                <div className="flex items-center gap-2">
                  <a
                    href={gmapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-[11px] font-semibold text-white bg-rose-700 hover:bg-rose-600 rounded transition-colors"
                  >
                    Ver Rota no Google Maps
                  </a>
                  <a
                    href={wazeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-[11px] font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded transition-colors"
                  >
                    Waze
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
