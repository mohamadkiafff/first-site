import React, { useState } from 'react';
import { ScreenType } from '../types';
import { LOGO_URL, COUNSEL_AVATAR } from '../data/mockData';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onOpenPortal: () => void;
  onOpenConsultationModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  onOpenPortal,
  onOpenConsultationModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');

  const languages = [
    { code: 'EN', label: 'English (UK / US)' },
    { code: 'FA', label: 'فارسی (Persian)' },
    { code: 'FR', label: 'Français (French)' },
    { code: 'DE', label: 'Deutsch (German)' },
  ];

  const handleNavClick = (screen: ScreenType) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff]/95 backdrop-blur-md shadow-[0_1px_8px_rgba(16,42,67,0.04)] border-b border-[#e8edff]">
      <div className="h-20 max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Lockup */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
            aria-label="Aegis Global Mobility Home"
          >
            <img
              alt="Aegis Global Mobility Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src={LOGO_URL}
            />
            <div className="flex flex-col">
              <span className="font-display text-[22px] font-bold text-[#00152a] tracking-tight leading-none">
                AEGIS
              </span>
              <span className="text-[11px] font-semibold text-[#4a607a] tracking-widest uppercase mt-0.5">
                Global Mobility
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 pl-4" aria-label="Main Navigation">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 text-[14px] font-medium transition-colors rounded-md ${
                currentScreen === 'home'
                  ? 'text-[#00152a] font-semibold bg-[#f1f3ff]'
                  : 'text-[#43474d] hover:text-[#00152a] hover:bg-[#f9f9ff]'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('programs')}
              className={`px-3 py-2 text-[14px] font-medium transition-colors rounded-md flex items-center gap-1 ${
                currentScreen === 'programs'
                  ? 'text-[#00152a] font-semibold bg-[#f1f3ff]'
                  : 'text-[#43474d] hover:text-[#00152a] hover:bg-[#f9f9ff]'
              }`}
            >
              <span>Immigration Programs</span>
            </button>

            <button
              onClick={() => handleNavClick('countries')}
              className={`px-3 py-2 text-[14px] font-medium transition-colors rounded-md flex items-center gap-1 ${
                currentScreen === 'countries'
                  ? 'text-[#00152a] font-semibold bg-[#f1f3ff]'
                  : 'text-[#43474d] hover:text-[#00152a] hover:bg-[#f9f9ff]'
              }`}
            >
              <span>Countries & Dest</span>
            </button>

            <button
              onClick={() => handleNavClick('services')}
              className={`px-3 py-2 text-[14px] font-medium transition-colors rounded-md ${
                currentScreen === 'services'
                  ? 'text-[#00152a] font-semibold bg-[#f1f3ff]'
                  : 'text-[#43474d] hover:text-[#00152a] hover:bg-[#f9f9ff]'
              }`}
            >
              Services
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`px-3 py-2 text-[14px] font-medium transition-colors rounded-md ${
                currentScreen === 'about'
                  ? 'text-[#00152a] font-semibold bg-[#f1f3ff]'
                  : 'text-[#43474d] hover:text-[#00152a] hover:bg-[#f9f9ff]'
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-2 text-[14px] font-medium transition-colors rounded-md ${
                currentScreen === 'contact'
                  ? 'text-[#00152a] font-semibold bg-[#f1f3ff]'
                  : 'text-[#43474d] hover:text-[#00152a] hover:bg-[#f9f9ff]'
              }`}
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Right Utility Zone */}
        <div className="flex items-center gap-3">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#f1f3ff] hover:bg-[#e8edff] text-[#041b3c] transition-colors text-[13px] font-medium"
              type="button"
              aria-expanded={langMenuOpen}
              aria-label="Select Language"
            >
              <span className="material-symbols-outlined text-[17px] text-[#4a607a]">language</span>
              <span>{currentLang}</span>
              <span className="material-symbols-outlined text-[14px] text-[#4a607a]">arrow_drop_down</span>
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-[#e8edff] py-1 z-50">
                <div className="px-3 py-1.5 text-[11px] font-semibold text-[#4a607a] uppercase tracking-wider border-b border-[#e8edff]">
                  Select Language Desk
                </div>
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setCurrentLang(l.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full px-3 py-2 text-left text-[13px] flex items-center justify-between hover:bg-[#f1f3ff] transition-colors ${
                      currentLang === l.code ? 'font-bold text-[#00152a] bg-[#f1f3ff]' : 'text-[#43474d]'
                    }`}
                  >
                    <span>{l.label}</span>
                    {currentLang === l.code && (
                      <span className="material-symbols-outlined text-[16px] text-[#49607c]">check</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Client Portal Button */}
          <button
            onClick={onOpenPortal}
            className="hidden md:inline-flex items-center gap-1.5 text-[13px] font-medium text-[#4a607a] hover:text-[#00152a] hover:bg-[#f1f3ff] px-3 py-2 rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">verified_user</span>
            <span>Client Portal</span>
          </button>

          {/* Book a Consultation Primary CTA */}
          <button
            onClick={onOpenConsultationModal}
            className="hidden sm:inline-flex items-center justify-center h-10 px-4 rounded-lg bg-[#102a43] hover:bg-[#00152a] text-white text-[13px] font-semibold tracking-wide transition-all shadow-[0_1px_3px_rgba(16,42,67,0.12)] hover:shadow-md"
          >
            <span>Book a Consultation</span>
          </button>

          {/* Advisory Desk Counselor Status Profile */}
          <div className="flex items-center gap-2 pl-1 border-l border-[#e8edff]">
            <div className="relative">
              <img
                alt="Senior Mobility Counsel"
                className="w-9 h-9 rounded-full object-cover ring-2 ring-[#d7e2ff]"
                src={COUNSEL_AVATAR}
              />
              <span
                className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white"
                title="Senior Mobility Counsel Active"
              />
            </div>
            <div className="hidden 2xl:flex flex-col text-left">
              <span className="text-[12px] font-semibold text-[#041b3c] leading-tight">Advisory Desk</span>
              <span className="text-[11px] text-[#4a607a] leading-tight">Senior Counsel</span>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#041b3c] hover:bg-[#f1f3ff] rounded-lg focus:outline-none"
            aria-label="Open mobile menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-[#e8edff] px-6 py-5 shadow-2xl flex flex-col gap-3">
          <button
            onClick={() => handleNavClick('home')}
            className={`text-left py-2.5 text-[15px] font-medium border-b border-[#f1f3ff] flex items-center justify-between ${
              currentScreen === 'home' ? 'text-[#00152a] font-bold' : 'text-[#43474d]'
            }`}
          >
            <span>Home</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>

          <button
            onClick={() => handleNavClick('programs')}
            className={`text-left py-2.5 text-[15px] font-medium border-b border-[#f1f3ff] flex items-center justify-between ${
              currentScreen === 'programs' ? 'text-[#00152a] font-bold' : 'text-[#43474d]'
            }`}
          >
            <span>Immigration Programs</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>

          <button
            onClick={() => handleNavClick('countries')}
            className={`text-left py-2.5 text-[15px] font-medium border-b border-[#f1f3ff] flex items-center justify-between ${
              currentScreen === 'countries' ? 'text-[#00152a] font-bold' : 'text-[#43474d]'
            }`}
          >
            <span>Supported Countries & Destinations</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>

          <button
            onClick={() => handleNavClick('services')}
            className={`text-left py-2.5 text-[15px] font-medium border-b border-[#f1f3ff] flex items-center justify-between ${
              currentScreen === 'services' ? 'text-[#00152a] font-bold' : 'text-[#43474d]'
            }`}
          >
            <span>Corporate & Individual Services</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className={`text-left py-2.5 text-[15px] font-medium border-b border-[#f1f3ff] flex items-center justify-between ${
              currentScreen === 'about' ? 'text-[#00152a] font-bold' : 'text-[#43474d]'
            }`}
          >
            <span>About Us & Chambers</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`text-left py-2.5 text-[15px] font-medium border-b border-[#f1f3ff] flex items-center justify-between ${
              currentScreen === 'contact' ? 'text-[#00152a] font-bold' : 'text-[#43474d]'
            }`}
          >
            <span>Contact & Counsel Booking</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal();
              }}
              className="w-full h-11 rounded-lg bg-[#f1f3ff] text-[#00152a] font-semibold text-[14px] flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
              <span>Client Vault Portal</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultationModal();
              }}
              className="w-full h-11 rounded-lg bg-[#102a43] text-white font-semibold text-[14px] flex items-center justify-center gap-2 shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              <span>Book Strategic Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
