import React, { useState } from 'react';
import { DOCTOR_INFO } from '../data/cardiologistData';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Especialidades', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Avaliação de Risco', href: '#calculadora-risco' },
    { label: 'Consultório', href: '#estrutura' },
    { label: 'Localização', href: '#localizacao' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Brand title, single line text element */}
          <a
            href="#"
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-800 rounded-sm"
          >
            <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white transition-transform group-hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-rose-500"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-slate-800 transition-colors">
              {DOCTOR_INFO.name}
            </span>
          </a>

          {/* Zone 2: Clean 4-6 text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-slate-950 transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-900 rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${DOCTOR_INFO.phoneClean}?text=${encodeURIComponent('Olá! Gostaria de informações sobre agendamento de consulta com o Dr. Júlio Cabral.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors border border-emerald-200/80 whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.97.53 1.769.814 2.796.814 3.183 0 5.769-2.587 5.769-5.767 0-3.181-2.586-5.765-5.769-5.769zm10.029 5.766c0 5.549-4.512 10.061-10.06 10.061-1.758 0-3.411-.458-4.85-1.258l-5.65 1.481 1.508-5.508c-.902-1.503-1.418-3.255-1.418-5.127 0-5.549 4.512-10.06 10.06-10.06 5.548 0 10.06 4.511 10.06 10.06z" />
              </svg>
              WhatsApp Direto
            </a>

            <button
              type="button"
              onClick={onOpenBooking}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-xs whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
            >
              Agendar Consulta
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded-lg whitespace-nowrap"
            >
              Agendar
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-950 focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`https://wa.me/${DOCTOR_INFO.phoneClean}?text=${encodeURIComponent('Olá! Gostaria de agendar uma consulta com o Dr. Júlio Cabral.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-emerald-800 bg-emerald-50 rounded-lg border border-emerald-200"
            >
              Atendimento WhatsApp ({DOCTOR_INFO.phoneFormatted})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
