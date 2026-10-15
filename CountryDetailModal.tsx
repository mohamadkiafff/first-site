import React from 'react';
import { CountryInfo } from '../../types';

interface CountryDetailModalProps {
  country: CountryInfo | null;
  onClose: () => void;
  onBookConsultation: (countryName: string) => void;
}

export const CountryDetailModal: React.FC<CountryDetailModalProps> = ({
  country,
  onClose,
  onBookConsultation,
}) => {
  if (!country) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00152a]/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-white rounded-2xl shadow-2xl border border-[#e8edff] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header Image with Overlay */}
        <div className="relative h-56 sm:h-64 w-full bg-[#102a43]">
          <img
            src={country.image}
            alt={country.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00152a] via-[#00152a]/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-md transition-colors"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          {/* Top badges */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded-md bg-white/90 backdrop-blur text-[#00152a] font-bold text-[13px] flex items-center gap-1.5 shadow-sm">
              <span>{country.flag}</span>
              <span>{country.name}</span>
            </span>
            <span className="px-2.5 py-1 rounded-md bg-[#102a43]/90 text-[#d1e4ff] text-[12px] font-medium backdrop-blur">
              {country.regionLabel}
            </span>
          </div>

          {/* Bottom Title */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#ebc071]">
              Sovereign Jurisdiction Dossier
            </span>
            <h2 className="font-display text-[26px] font-bold text-white leading-tight mt-0.5">
              {country.headline}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 flex flex-col gap-6 max-h-[calc(85vh-200px)] overflow-y-auto">
          {/* Executive Summary */}
          <div>
            <h4 className="text-[12px] font-semibold text-[#4a607a] uppercase tracking-wider mb-2">
              Statutory Overview & Viability
            </h4>
            <p className="text-[15px] text-[#43474d] leading-relaxed">
              {country.summary}
            </p>
          </div>

          {/* 4-Item Quick Benchmark Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-[#f1f3ff] flex flex-col">
              <span className="text-[11px] font-medium text-[#4a607a] uppercase">Processing SLA</span>
              <span className="text-[16px] font-bold text-[#00152a] mt-0.5">{country.processingTime}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#f1f3ff] flex flex-col">
              <span className="text-[11px] font-medium text-[#4a607a] uppercase">PR Status</span>
              <span className="text-[16px] font-bold text-[#00152a] mt-0.5">{country.directPr}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#f1f3ff] flex flex-col">
              <span className="text-[11px] font-medium text-[#4a607a] uppercase">Min Capital</span>
              <span className="text-[15px] font-bold text-[#00152a] mt-0.5 truncate">{country.minInvestment}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#c7dffd]/40 flex flex-col">
              <span className="text-[11px] font-medium text-[#4c637d] uppercase">Dual Nationality</span>
              <span className="text-[15px] font-bold text-[#00152a] mt-0.5">{country.dualNationality}</span>
            </div>
          </div>

          {/* Key Programs */}
          <div>
            <h4 className="text-[12px] font-semibold text-[#4a607a] uppercase tracking-wider mb-3">
              Primary Statutory Immigration Streams
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {country.keyPrograms.map((prog, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[#f1f3ff] border border-[#e8edff] flex items-center gap-2.5 text-[14px] text-[#041b3c] font-medium"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#49607c]">check_circle</span>
                  <span>{prog}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rights & Settlement Parameters */}
          <div className="bg-[#f9f9ff] p-4 rounded-xl border border-[#e8edff] flex flex-col gap-3">
            <h4 className="text-[12px] font-semibold text-[#4a607a] uppercase tracking-wider">
              Settlement & Dependent Protections
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px]">
              <div>
                <span className="font-semibold text-[#00152a] block">Spousal Employment:</span>
                <span className="text-[#43474d]">{country.spousalRights}</span>
              </div>
              <div>
                <span className="font-semibold text-[#00152a] block">Healthcare & Schooling:</span>
                <span className="text-[#43474d]">{country.healthcare}</span>
              </div>
              <div>
                <span className="font-semibold text-[#00152a] block">Language Prerequisites:</span>
                <span className="text-[#43474d]">{country.languageRequirement}</span>
              </div>
              <div>
                <span className="font-semibold text-[#00152a] block">Naturalization Horizon:</span>
                <span className="text-[#43474d]">{country.citizenshipHorizon}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#f1f3ff] border-t border-[#e8edff] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[12px] text-[#4a607a]">
            <span className="material-symbols-outlined text-[16px]">lock</span>
            <span>Reviewed by Senior Sovereign Mobility Counsel</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-white border border-[#c3c6ce] text-[#041b3c] font-semibold text-[13px] hover:bg-gray-50 transition-colors"
            >
              Close Dossier
            </button>
            <button
              onClick={() => {
                onClose();
                onBookConsultation(country.name);
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#102a43] hover:bg-[#00152a] text-white font-semibold text-[13px] flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">support_agent</span>
              <span>Inquire for {country.name}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
