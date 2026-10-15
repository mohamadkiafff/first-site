import React, { useState } from 'react';

interface QuickConsultationModalProps {
  initialSubject?: string;
  onClose: () => void;
  onSuccess: (bookingDetails: { name: string; destination: string; format: string }) => void;
}

export const QuickConsultationModal: React.FC<QuickConsultationModalProps> = ({
  initialSubject = 'General Strategic Immigration Advisory',
  onClose,
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    citizenship: '',
    destination: 'Canada',
    format: 'Virtual Video (Zoom)',
    goals: initialSubject ? `Inquiring regarding ${initialSubject}` : '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess({
      name: formData.name,
      destination: formData.destination,
      format: formData.format,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00152a]/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl my-8 bg-white rounded-2xl shadow-2xl border border-[#e8edff] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header Ribbon */}
        <div className="bg-[#102a43] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ebc071]" />
            <h3 className="font-display text-[18px] font-bold text-white">
              Schedule Strategic Mobility Consultation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 flex flex-col gap-4">
          <p className="text-[13px] text-[#43474d] leading-relaxed">
            Please enter your parameters below. Our legal desk will audit your qualifications and dispatch calendar coordinates for your designated partner.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-semibold text-[#00152a]">Full Legal Name</label>
              <input
                required
                type="text"
                placeholder="Dr. Kian Farhadi"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-10 px-3 rounded-lg bg-[#f1f3ff] text-[13px] text-[#00152a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#102a43]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-semibold text-[#00152a]">Email Address</label>
              <input
                required
                type="email"
                placeholder="kian@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-10 px-3 rounded-lg bg-[#f1f3ff] text-[13px] text-[#00152a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#102a43]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-semibold text-[#00152a]">Phone Number</label>
              <input
                required
                type="tel"
                placeholder="+44 20 7946 0988"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-10 px-3 rounded-lg bg-[#f1f3ff] text-[13px] text-[#00152a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#102a43]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-semibold text-[#00152a]">Current Passport / Citizenship</label>
              <input
                required
                type="text"
                placeholder="e.g. United Kingdom / Iran"
                value={formData.citizenship}
                onChange={(e) => setFormData({ ...formData, citizenship: e.target.value })}
                className="h-10 px-3 rounded-lg bg-[#f1f3ff] text-[13px] text-[#00152a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#102a43]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-semibold text-[#00152a]">Target Destination</label>
              <select
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                className="h-10 px-3 rounded-lg bg-[#f1f3ff] text-[13px] text-[#00152a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#102a43]"
              >
                <option value="Canada">Canada (Federal & PNP)</option>
                <option value="United Kingdom">United Kingdom (Skilled & Talent)</option>
                <option value="Australia">Australia (Subclass 189/190/GTI)</option>
                <option value="Germany">Germany & EU (Blue Card)</option>
                <option value="United States">United States (EB-1/EB-2 NIW)</option>
                <option value="Portugal">Portugal (Golden Visa & D8)</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-semibold text-[#00152a]">Preferred Format</label>
              <select
                value={formData.format}
                onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                className="h-10 px-3 rounded-lg bg-[#f1f3ff] text-[13px] text-[#00152a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#102a43]"
              >
                <option value="Virtual Video (Zoom)">Virtual Video (Zoom) · £350</option>
                <option value="In-Person Mayfair Chambers">In-Person London Chambers · £550</option>
                <option value="In-Person Toronto Bay St">In-Person Toronto Chambers · £550</option>
                <option value="In-Person Dubai DIFC">In-Person Dubai DIFC Chambers · £550</option>
                <option value="Written Strategic Audit">Written Formal Opinion Audit · £450</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-semibold text-[#00152a]">Summary of Immigration Objective</label>
            <textarea
              rows={3}
              value={formData.goals}
              onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
              className="p-3 rounded-lg bg-[#f1f3ff] text-[13px] text-[#00152a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#102a43] resize-none"
              placeholder="Outline current seniority, target dates, and whether accompanying dependents are involved..."
            />
          </div>

          <div className="p-3 rounded-lg bg-[#f1f3ff] text-[11px] text-[#4a607a] leading-relaxed flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-[#49607c]">lock</span>
            <span>100% of the consultation fee is credited towards your full retainer balance upon agreement within 30 days.</span>
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-white border border-[#c3c6ce] text-[#041b3c] font-semibold text-[13px] hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg bg-[#102a43] hover:bg-[#00152a] text-white font-semibold text-[13px] shadow-sm transition-colors"
            >
              Confirm Appointment Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
