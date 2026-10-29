import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Hero } from './components/Hero';
import { CategoryCarousel } from './components/CategoryCarousel';
import { PartQuoteForm } from './components/PartQuoteForm';
import { AboutUs } from './components/AboutUs';
import { LocationHours } from './components/LocationHours';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 flex flex-col font-sans selection:bg-brand-accent selection:text-white">
      {/* Barra de navegación superior y menú móvil */}
      <Navbar
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Contenido principal simplificado y directo a la conversión */}
      <main className="flex-1">
        <Hero />
        <CategoryCarousel />
        <PartQuoteForm />
        <AboutUs />
        <LocationHours />
        <FinalCTA />
      </main>

      {/* Pie de página con créditos de Kiur Code */}
      <Footer />

      {/* Acceso flotante permanente a WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
