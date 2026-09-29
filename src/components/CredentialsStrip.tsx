import React from 'react';
import { DOCTOR_INFO } from '../data/cardiologistData';

export const CredentialsStrip: React.FC = () => {
  return (
    <section className="bg-slate-950 border-b border-slate-800/80 py-7 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="shrink-0">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
              Atuação Hospitalar & Títulos Acadêmicos
            </span>
            <span className="text-sm text-slate-300 font-medium">
              Corpo clínico atuante nos centros de excelência médica de São Paulo
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-slate-300">
            {DOCTOR_INFO.hospitals.map((hospital, index) => (
              <div key={hospital} className="flex items-center gap-2">
                {index > 0 && <span aria-hidden="true" className="text-slate-600 hidden sm:inline">·</span>}
                <span className="hover:text-white transition-colors">{hospital}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
