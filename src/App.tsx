/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CredentialsStrip } from './components/CredentialsStrip';
import { AboutDoctor } from './components/AboutDoctor';
import { ServicesSection } from './components/ServicesSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { RiskAssessmentCalculator } from './components/RiskAssessmentCalculator';
import { ClinicGallery } from './components/ClinicGallery';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { ExamDetailsModal } from './components/ExamDetailsModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ServiceItem } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedExam, setSelectedExam] = useState<ServiceItem | null>(null);
  const [preselectedServiceTitle, setPreselectedServiceTitle] = useState<string | undefined>();

  const handleOpenBooking = (serviceTitle?: string) => {
    setPreselectedServiceTitle(serviceTitle);
    setIsBookingOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedExam(service);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-rose-900 selection:text-white flex flex-col">
      {/* 1. Top Bar Navigation Contract */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      <main className="grow">
        {/* 2. Hero Section with Value Proposition and Doctor Identity */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Hospital Affiliations & Credentials Strip */}
        <CredentialsStrip />

        {/* 4. Apresentação do Dr. Júlio Cabral & Filosofia Clínica */}
        <AboutDoctor onOpenBooking={() => handleOpenBooking()} />

        {/* 5. Serviços Principais & Exames Diagnósticos */}
        <ServicesSection
          onSelectService={handleSelectService}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 6. Diferenciais do Consultório */}
        <DifferentialsSection />

        {/* 7. Ferramenta Interativa: Autoavaliação de Perfil Cardiovascular */}
        <RiskAssessmentCalculator />

        {/* 8. Galeria & Espaço Visual do Consultório */}
        <ClinicGallery />

        {/* 9. Depoimentos dos Pacientes */}
        <TestimonialsSection />

        {/* 10. Endereço, Como Chegar e Contato no Jardim Paulista */}
        <LocationSection />

        {/* 11. Perguntas Frequentes (FAQ) */}
        <FaqSection />

        {/* 12. Chamada para Ação Final para WhatsApp */}
        <FinalCta onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 13. Rodapé Completo com Disclaimers CFM */}
      <Footer />

      {/* Interactive Modals & Floating Concierge */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={preselectedServiceTitle}
      />

      <ExamDetailsModal
        service={selectedExam}
        onClose={() => setSelectedExam(null)}
        onBookExam={(serviceTitle) => handleOpenBooking(serviceTitle)}
      />

      <FloatingWhatsApp onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
