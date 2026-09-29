import React, { useState } from 'react';
import { CLINIC_SPACES, DOCTOR_INFO } from '../data/cardiologistData';
import { ClinicSpace } from '../types';

export const ClinicGallery: React.FC = () => {
  const [selectedSpaceIndex, setSelectedSpaceIndex] = useState<number>(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const currentSpace = CLINIC_SPACES[selectedSpaceIndex];

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
    fallbackSrc?: string
  ) => {
    const target = e.currentTarget;
    if (fallbackSrc && target.src !== fallbackSrc) {
      target.src = fallbackSrc;
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % CLINIC_SPACES.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + CLINIC_SPACES.length) % CLINIC_SPACES.length);
    }
  };

  return (
    <section id="estrutura" className="py-20 lg:py-28 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-wider text-rose-400 font-bold mb-3 block">
              Instalações & Infraestrutura
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-4 [text-wrap:balance]">
              Conheça as instalações e a tecnologia do nosso consultório em São Paulo.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Ambiente planejado no 14º andar do Edifício Medical Garden Tower, combinando privacidade acústica, conforto, equipamentos diagnósticos de ponta e rigor sanitário.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href={`https://wa.me/${DOCTOR_INFO.phoneClean}?text=${encodeURIComponent('Olá! Gostaria de agendar uma consulta para conhecer o consultório do Dr. Júlio Cabral.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-rose-700 hover:bg-rose-600 rounded-lg transition-colors whitespace-nowrap"
            >
              Agendar Visita / Consulta
            </a>
          </div>
        </div>

        {/* Space Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {CLINIC_SPACES.map((space, idx) => (
            <button
              key={space.title}
              type="button"
              onClick={() => setSelectedSpaceIndex(idx)}
              className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 ${
                selectedSpaceIndex === idx
                  ? 'bg-white text-slate-900 shadow-md font-bold'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/60'
              }`}
            >
              <span className="text-rose-600 mr-1.5">{idx + 1}.</span>
              {space.title}
            </button>
          ))}
        </div>

        {/* Active Space Featured Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-slate-800 mb-12 shadow-2xl">
          {/* Main Visual with Lightbox Trigger */}
          <div className="lg:col-span-7">
            <div
              onClick={() => openLightbox(selectedSpaceIndex)}
              className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-800 shadow-xl relative aspect-16/10 cursor-pointer group"
            >
              <img
                src={currentSpace.imagePath}
                alt={currentSpace.title}
                referrerPolicy="no-referrer"
                onError={(e) => handleImageError(e, currentSpace.fallbackImagePath)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover overlay with zoom hint */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-slate-900/90 text-white text-xs font-semibold rounded-lg backdrop-blur-sm border border-slate-700">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  Ver foto em tela cheia
                </span>
              </div>

              {/* Tag pill */}
              {currentSpace.tag && (
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-slate-900/85 backdrop-blur-sm text-rose-300 border border-slate-700/80 text-[11px] font-semibold rounded-md">
                    {currentSpace.tag}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider">
                {currentSpace.subtitle}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
              {currentSpace.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              {currentSpace.description}
            </p>

            <div className="space-y-2.5 pt-4 border-t border-slate-800">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                Destaques do ambiente:
              </div>
              {currentSpace.highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <div>
                <span className="text-white font-medium">Edifício Medical Garden Tower</span>
                <span className="block text-slate-400">Jardim Paulista · 14º Andar</span>
              </div>

              <button
                type="button"
                onClick={() => openLightbox(selectedSpaceIndex)}
                className="inline-flex items-center gap-1.5 text-rose-400 hover:text-rose-300 font-medium underline underline-offset-2"
              >
                Expandir imagem &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Grid: All Clinic Spaces at a glance */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Galeria Completa do Consultório
            </h3>
            <span className="text-xs text-slate-400">
              {CLINIC_SPACES.length} fotos do espaço
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLINIC_SPACES.map((space, index) => (
              <div
                key={space.title}
                onClick={() => {
                  setSelectedSpaceIndex(index);
                  openLightbox(index);
                }}
                className={`group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-200 bg-slate-950/60 ${
                  selectedSpaceIndex === index
                    ? 'border-rose-500/80 ring-1 ring-rose-500/50'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="relative aspect-16/10 overflow-hidden bg-slate-800">
                  <img
                    src={space.imagePath}
                    alt={space.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => handleImageError(e, space.fallbackImagePath)}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {space.tag && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 bg-slate-900/80 backdrop-blur-sm text-rose-300 border border-slate-700 text-[10px] font-semibold rounded">
                        {space.tag}
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="p-1.5 rounded-md bg-slate-900/90 text-white text-xs inline-flex items-center justify-center">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="text-[11px] font-semibold text-rose-400 mb-1">
                    0{index + 1} · {space.subtitle}
                  </div>
                  <h4 className="font-serif text-base font-bold text-white mb-2 group-hover:text-rose-200 transition-colors">
                    {space.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {space.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header */}
            <div className="px-5 py-4 bg-slate-950 flex items-center justify-between border-b border-slate-800">
              <div>
                <span className="text-xs text-rose-400 font-semibold block">
                  {CLINIC_SPACES[lightboxIndex].tag} · Foto {lightboxIndex + 1} de {CLINIC_SPACES.length}
                </span>
                <h4 className="font-serif text-lg font-bold text-white">
                  {CLINIC_SPACES[lightboxIndex].title}
                </h4>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevLightbox}
                  className="p-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  aria-label="Foto anterior"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={nextLightbox}
                  className="p-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  aria-label="Próxima foto"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="p-2 text-slate-400 hover:text-white rounded-lg transition-colors"
                  aria-label="Fechar tela cheia"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Lightbox Image View */}
            <div className="relative bg-black flex items-center justify-center max-h-[60vh] overflow-hidden">
              <img
                src={CLINIC_SPACES[lightboxIndex].imagePath}
                alt={CLINIC_SPACES[lightboxIndex].title}
                referrerPolicy="no-referrer"
                onError={(e) => handleImageError(e, CLINIC_SPACES[lightboxIndex].fallbackImagePath)}
                className="max-h-[60vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Lightbox Footer Caption */}
            <div className="p-5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-300">
              <p className="max-w-2xl text-slate-300 leading-relaxed">
                {CLINIC_SPACES[lightboxIndex].description}
              </p>
              <div className="shrink-0 flex items-center gap-3">
                <a
                  href={`https://wa.me/${DOCTOR_INFO.phoneClean}?text=${encodeURIComponent(`Olá! Vi as fotos do consultório (${CLINIC_SPACES[lightboxIndex].title}) e gostaria de agendar uma consulta.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-white bg-rose-700 hover:bg-rose-600 rounded-lg transition-colors whitespace-nowrap"
                >
                  Agendar Consulta
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
