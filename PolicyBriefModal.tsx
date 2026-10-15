import React from 'react';
import { PolicyBrief } from '../../types';

interface PolicyBriefModalProps {
  brief: PolicyBrief | null;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const PolicyBriefModal: React.FC<PolicyBriefModalProps> = ({
  brief,
  onClose,
  onBookConsultation,
}) => {
  if (!brief) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00152a]/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl my-8 bg-white rounded-2xl shadow-2xl border border-[#e8edff] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header Ribbon */}
        <div className="bg-[#102a43] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ebc071]" />
            <span className="text-[13px] font-semibold tracking-wider uppercase text-[#d1e4ff]">
              Chambers Policy Intelligence Briefing
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 flex flex-col gap-6 max-h-[calc(85vh-150px)] overflow-y-auto">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2.5 py-0.5 rounded bg-[#e8edff] text-[#4a607a] font-semibold text-[11px] uppercase tracking-wide">
                {brief.tag}
              </span>
              <span className="text-[12px] text-[#74777e]">{brief.readTime}</span>
              <span className="text-[12px] text-[#74777e]">· Published {brief.date}</span>
            </div>
            <h2 className="font-display text-[22px] sm:text-[26px] font-bold text-[#00152a] leading-tight">
              {brief.title}
            </h2>
          </div>

          <div className="p-4 rounded-xl bg-[#f1f3ff] border-l-2 border-[#49607c] text-[14px] text-[#43474d] font-medium leading-relaxed">
            {brief.summary}
          </div>

          <div className="flex flex-col gap-4 text-[15px] text-[#43474d] leading-relaxed">
            {brief.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[#f9f9ff] border border-[#e8edff] flex items-center justify-between">
            <div>
              <span className="text-[12px] font-bold text-[#00152a] block">Statutory Impact Analysis</span>
              <span className="text-[12px] text-[#4a607a]">Prepared by Aegis Chambers Research Desk</span>
            </div>
            <span className="material-symbols-outlined text-[24px] text-[#49607c]">verified</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#f1f3ff] border-t border-[#e8edff] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white border border-[#c3c6ce] text-[#041b3c] font-semibold text-[13px] hover:bg-gray-50 transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onBookConsultation();
            }}
            className="px-5 py-2.5 rounded-lg bg-[#102a43] hover:bg-[#00152a] text-white font-semibold text-[13px] flex items-center gap-2 shadow-sm transition-colors"
          >
            <span>Consult on This Policy</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
