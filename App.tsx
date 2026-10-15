import React, { useState } from 'react';
import { ScreenType, CountryInfo, ProgramInfo, PolicyBrief } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeScreen } from './components/screens/HomeScreen';
import { ProgramsScreen } from './components/screens/ProgramsScreen';
import { CountriesScreen } from './components/screens/CountriesScreen';
import { AboutScreen } from './components/screens/AboutScreen';
import { ContactScreen } from './components/screens/ContactScreen';
import { CountryDetailModal } from './components/modals/CountryDetailModal';
import { ProgramDetailModal } from './components/modals/ProgramDetailModal';
import { PolicyBriefModal } from './components/modals/PolicyBriefModal';
import { ClientPortalModal } from './components/modals/ClientPortalModal';
import { QuickConsultationModal } from './components/modals/QuickConsultationModal';
import { COUNTRIES, PROGRAMS } from './data/mockData';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [selectedCountry, setSelectedCountry] = useState<CountryInfo | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<ProgramInfo | null>(null);
  const [selectedPolicyBrief, setSelectedPolicyBrief] = useState<PolicyBrief | null>(null);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [consultationModal, setConsultationModal] = useState<{ open: boolean; subject?: string }>({
    open: false,
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleSelectProgramByName = (progIdOrName: string) => {
    const found =
      PROGRAMS.find((p) => p.id === progIdOrName) ||
      PROGRAMS.find((p) => p.name.toLowerCase().includes(progIdOrName.toLowerCase())) ||
      PROGRAMS[0];
    setSelectedProgram(found);
  };

  const handleOpenConsultation = (subject?: string) => {
    setConsultationModal({
      open: true,
      subject: subject || 'General Strategic Mobility Consultation',
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9ff] text-[#041b3c]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#00152a] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#ebc071] flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <span className="material-symbols-outlined text-[#ebc071] text-[20px]">check_circle</span>
          <span className="text-[13px] font-medium">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="ml-2 text-[#7a92b0] hover:text-white"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>
      )}

      {/* Main Navigation Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={(screen) => setCurrentScreen(screen)}
        onOpenPortal={() => setIsPortalOpen(true)}
        onOpenConsultationModal={() => handleOpenConsultation()}
      />

      {/* Main View Router */}
      <main className="flex-1 w-full pt-20">
        {currentScreen === 'home' && (
          <HomeScreen
            onNavigate={(screen) => setCurrentScreen(screen)}
            onSelectCountry={(c) => setSelectedCountry(c)}
            onSelectProgram={(pName) => handleSelectProgramByName(pName)}
            onSelectPolicyBrief={(b) => setSelectedPolicyBrief(b)}
            onOpenConsultationModal={(sub) => handleOpenConsultation(sub)}
          />
        )}

        {(currentScreen === 'programs' || currentScreen === 'services') && (
          <ProgramsScreen
            onSelectProgram={(p) => setSelectedProgram(p)}
            onOpenConsultationModal={(sub) => handleOpenConsultation(sub)}
          />
        )}

        {currentScreen === 'countries' && (
          <CountriesScreen
            onSelectCountry={(c) => setSelectedCountry(c)}
            onOpenConsultationModal={(sub) => handleOpenConsultation(sub)}
          />
        )}

        {currentScreen === 'about' && (
          <AboutScreen onOpenConsultationModal={(sub) => handleOpenConsultation(sub)} />
        )}

        {currentScreen === 'contact' && <ContactScreen />}
      </main>

      {/* Footer */}
      <Footer onNavigate={(screen) => setCurrentScreen(screen)} />

      {/* Modals */}
      {selectedCountry && (
        <CountryDetailModal
          country={selectedCountry}
          onClose={() => setSelectedCountry(null)}
          onBookConsultation={(cName) => handleOpenConsultation(`Relocation to ${cName}`)}
        />
      )}

      {selectedProgram && (
        <ProgramDetailModal
          program={selectedProgram}
          onClose={() => setSelectedProgram(null)}
          onBookConsultation={(pName) => handleOpenConsultation(`Application for ${pName}`)}
        />
      )}

      {selectedPolicyBrief && (
        <PolicyBriefModal
          brief={selectedPolicyBrief}
          onClose={() => setSelectedPolicyBrief(null)}
          onBookConsultation={() => handleOpenConsultation(`Briefing: ${selectedPolicyBrief.title}`)}
        />
      )}

      {isPortalOpen && (
        <ClientPortalModal onClose={() => setIsPortalOpen(false)} />
      )}

      {consultationModal.open && (
        <QuickConsultationModal
          initialSubject={consultationModal.subject}
          onClose={() => setConsultationModal({ open: false })}
          onSuccess={(details) => {
            showToast(`Consultation request confirmed for ${details.name} (${details.destination}). Confirmation sent.`);
          }}
        />
      )}
    </div>
  );
}
