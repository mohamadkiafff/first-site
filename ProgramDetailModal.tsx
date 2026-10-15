import React from 'react';
import { ProgramInfo } from '../../types';

interface ProgramDetailModalProps {
  program: ProgramInfo | null;
  onClose: () => void;
  onBookConsultation: (programName: string) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  onClose,
  onBookConsultation,
}) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00152a]/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-white rounded-2xl shadow-2xl border border-[#e8edff] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Banner with Program Image */}
        <div className="relative h-56 sm:h-64 w-full bg-[#102a43]">
          <img
            src={program.image}
            alt={program.alt}
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
              <span>{program.flag}</span>
              <span>{program.jurisdiction}</span>
            </span>
            <span className="px-2.5 py-1 rounded-md bg-[#ffdea6] text-[#271900] text-[12px] font-bold tracking-wide uppercase">
              {program.badge}
            </span>
          </div>

          {/* Bottom Title */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#ebc071]">
              Statutory Immigration Dossier
            </span>
            <h2 className="font-display text-[24px] sm:text-[28px] font-bold text-white leading-tight mt-0.5">
              {program.name}
            </h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 flex flex-col gap-6 max-h-[calc(85vh-200px)] overflow-y-auto">
          {/* Authority and Overview */}
          <div className="p-4 rounded-xl bg-[#f1f3ff] border border-[#e8edff] flex items-center justify-between gap-4">
            <div>
              <span className="text-[11px] text-[#4a607a] font-semibold uppercase block">Adjudicating Authority:</span>
              <span className="text-[14px] font-bold text-[#00152a]">{program.authority}</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-[#4a607a] font-semibold uppercase block">Processing Horizon:</span>
              <span className="text-[14px] font-bold text-[#49607c]">{program.processingTime}</span>
            </div>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold text-[#4a607a] uppercase tracking-wider mb-2">
              Program Scope & Profile Intent
            </h4>
            <p className="text-[15px] text-[#43474d] leading-relaxed">
              {program.description}
            </p>
          </div>

          {/* Key Evidentiary Benchmarks */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-[#f1f3ff] flex flex-col">
              <span className="text-[11px] font-medium text-[#4a607a] uppercase">Benchmark Requirement</span>
              <span className="text-[14px] font-bold text-[#00152a] mt-0.5">{program.benchmarkScore}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#f1f3ff] flex flex-col">
              <span className="text-[11px] font-medium text-[#4a607a] uppercase">Language Standard</span>
              <span className="text-[14px] font-bold text-[#00152a] mt-0.5">{program.languageBenchmark}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#f1f3ff] flex flex-col">
              <span className="text-[11px] font-medium text-[#4a607a] uppercase">Citizenship Timeline</span>
              <span className="text-[14px] font-bold text-[#00152a] mt-0.5">{program.citizenshipTimeline}</span>
            </div>
          </div>

          {/* Core Entitlements */}
          <div>
            <h4 className="text-[12px] font-semibold text-[#4a607a] uppercase tracking-wider mb-3">
              Statutory Entitlements & Counsel Guarantees
            </h4>
            <div className="flex flex-col gap-2.5">
              {program.keyBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-[#f9f9ff] border border-[#e8edff]">
                  <span className="material-symbols-outlined text-[18px] text-[#49607c] mt-0.5 flex-shrink-0">
                    verified
                  </span>
                  <span className="text-[14px] text-[#041b3c] leading-relaxed font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Milestone Escrow Schedule */}
          <div className="p-4 rounded-xl bg-[#102a43] text-white flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-semibold tracking-wider uppercase text-[#ebc071]">
                Aegis Retainer Security Protocol
              </span>
              <span className="text-[11px] text-[#d1e4ff]">Fixed-Fee Guarantee</span>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center pt-1">
              <div className="p-2.5 rounded-lg bg-white/10">
                <span className="text-[10px] text-[#7a92b0] block uppercase">Stage 1</span>
                <span className="text-[12px] font-bold text-white block mt-0.5">Dossier Audit & Pre-Screen</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/10">
                <span className="text-[10px] text-[#7a92b0] block uppercase">Stage 2</span>
                <span className="text-[12px] font-bold text-white block mt-0.5">Petitions & Evidentiary Brief</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/10">
                <span className="text-[10px] text-[#7a92b0] block uppercase">Stage 3</span>
                <span className="text-[12px] font-bold text-[#ebc071] block mt-0.5">Government Filing & Grant</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-4 sm:p-6 bg-[#f1f3ff] border-t border-[#e8edff] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[12px] text-[#4a607a]">
            <span className="material-symbols-outlined text-[16px]">shield</span>
            <span>Representation bound by Law Society Fiduciary Rules</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-white border border-[#c3c6ce] text-[#041b3c] font-semibold text-[13px] hover:bg-gray-50 transition-colors"
            >
              Back to Catalog
            </button>
            <button
              onClick={() => {
                onClose();
                onBookConsultation(program.name);
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#102a43] hover:bg-[#00152a] text-white font-semibold text-[13px] flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">draw</span>
              <span>Engage Counsel for Stream</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
