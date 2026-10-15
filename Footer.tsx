import React from 'react';
import { ScreenType } from '../types';
import { LOGO_URL } from '../data/mockData';

interface FooterProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenPrivacyModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#102a43] text-[#f9f9ff] pt-16 pb-8 border-t border-[#4a607a]/30">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Col 1: Brand & Philosophy */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                alt="Aegis Global Mobility Logo"
                className="h-7 w-auto object-contain brightness-200"
                src={LOGO_URL}
              />
              <span className="font-display text-[22px] font-bold text-white tracking-tight">
                AEGIS
              </span>
            </div>
            <p className="text-[13px] text-[#7a92b0] leading-relaxed">
              Providing discrete, tier-one international counsel for high-net-worth investors, multinational corporations, and global talent across sovereign borders.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#00152a] text-[#d1e4ff] text-[11px] font-medium tracking-wide">
                ISO 27001 Certified
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#00152a] text-[#d1e4ff] text-[11px] font-medium tracking-wide">
                GDPR & Swiss Privacy Compliant
              </span>
            </div>
            <div className="flex items-center gap-2 pt-2 text-[#7a92b0]">
              <span className="p-1.5 rounded-lg bg-[#00152a]/60 text-[#d1e4ff]">
                <span className="material-symbols-outlined text-[18px]">verified</span>
              </span>
              <span className="text-[12px] text-[#7a92b0]">Regulated Bar Representation</span>
            </div>
          </div>

          {/* Col 2: Immigration Programs */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-white text-[15px] tracking-wide">
              Immigration Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="text-[13px] text-[#7a92b0] hover:text-white transition-colors text-left"
                >
                  Skilled Migration & Express Entry
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="text-[13px] text-[#7a92b0] hover:text-white transition-colors text-left"
                >
                  Business & Investor Visas (Golden Visa)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="text-[13px] text-[#7a92b0] hover:text-white transition-colors text-left"
                >
                  Intra-Company Work Permits (ICT/L-1)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="text-[13px] text-[#7a92b0] hover:text-white transition-colors text-left"
                >
                  UK Global Talent & Tech Nation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="text-[13px] text-[#7a92b0] hover:text-white transition-colors text-left"
                >
                  Permanent Residency & Passport Retainers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-[13px] text-[#7a92b0] hover:text-white transition-colors text-left"
                >
                  Judicial Review & Refusal Appeals
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Supported Destinations */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-white text-[15px] tracking-wide">
              Global Destinations
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <button
                  onClick={() => onNavigate('countries')}
                  className="text-[13px] text-[#7a92b0] hover:text-white transition-colors text-left"
                >
                  Canada (Federal FSW & Provincial PNP)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('countries')}
                  className="text-[13px] text-[#7a92b0] hover:text-white transition-colors text-left"
                >
                  Australia (Subclass 189/190/GTI)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('countries')}
                  className="text-[13px] text-[#7a92b0] hover:text-white transition-colors text-left"
                >
                  United Kingdom (Skilled & Innovator)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('countries')}
                  className="text-[13px] text-[#7a92b0] hover:text-white transition-colors text-left"
                >
                  Germany (EU Blue Card & Opportunity)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('countries')}
                  className="text-[13px] text-[#7a92b0] hover:text-white transition-colors text-left"
                >
                  United States (EB-1, EB-2 NIW, L-1)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('countries')}
                  className="text-[13px] text-[#7a92b0] hover:text-white transition-colors text-left"
                >
                  Schengen Area Golden Visa Programs
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Headquarters & Chambers */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-white text-[15px] tracking-wide">
              Headquarters & Chambers
            </h4>
            <div className="flex flex-col gap-3 text-[13px] text-[#7a92b0]">
              <p>
                <strong className="text-white block font-medium">London Chancery:</strong>
                1 Curzon Street, Mayfair, London W1J 5HD
              </p>
              <p>
                <strong className="text-white block font-medium">Toronto Office:</strong>
                Bay Adelaide Centre, 333 Bay St, Toronto, ON
              </p>
              <p>
                <strong className="text-white block font-medium">Dubai DIFC:</strong>
                Gate Precinct 4, Level 5, DIFC, UAE
              </p>
              <div className="pt-2 flex flex-col gap-1.5 border-t border-[#4a607a]/30">
                <p className="flex items-center gap-1.5 text-white">
                  <span className="material-symbols-outlined text-[16px] text-[#ebc071]">call</span>
                  <span>+44 (0) 20 7946 0988</span>
                </p>
                <p className="flex items-center gap-1.5 text-[#7a92b0]">
                  <span className="material-symbols-outlined text-[16px] text-[#ebc071]">lock</span>
                  <span>inquiries@aegismobility.com (Encrypted)</span>
                </p>
                <p className="flex items-center gap-1.5 text-[#7a92b0] text-[12px]">
                  <span className="material-symbols-outlined text-[16px] text-[#ebc071]">schedule</span>
                  <span>Mon – Fri: 08:00 – 19:00 GMT</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Legal */}
        <div className="pt-8 mt-4 border-t border-[#4a607a]/20 flex flex-col lg:flex-row items-center justify-between gap-4 text-[12px] text-[#7a92b0]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="text-[#d1e4ff]">© {new Date().getFullYear()} Aegis Global Mobility Chambers LLP</span>
            <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
              Chambers Charter
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
              Client Privilege Policy
            </button>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Retainer</span>
            <span className="hover:text-white cursor-pointer transition-colors">Security Architecture</span>
          </div>

          <p className="text-center lg:text-right max-w-2xl text-[#7a92b0]/90">
            Aegis Global Mobility provides professional legal & advisory counsel. Final immigration and visa determinations are exclusively made by sovereign government authorities.
          </p>
        </div>
      </div>
    </footer>
  );
};
