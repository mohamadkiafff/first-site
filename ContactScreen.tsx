import React, { useState } from 'react';
import { CITY_IMAGES, FAQS } from '../../data/mockData';

export const ContactScreen: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [consultationMode, setConsultationMode] = useState<'virtual' | 'in-person'>('virtual');
  const [category, setCategory] = useState<'tech-talent' | 'investor' | 'corporate' | 'appeals'>('tech-talent');
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('11:00 AM');
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const [applicant, setApplicant] = useState({
    name: '',
    email: '',
    citizenship: '',
    residence: '',
    destination: 'United Kingdom',
    summary: '',
    consent: true,
  });

  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  const days = [
    { day: 'Thu', date: '24', slots: '3 Slots' },
    { day: 'Fri', date: '25', slots: '5 Slots' },
    { day: 'Mon', date: '28', slots: '4 Slots' },
    { day: 'Tue', date: '29', slots: '6 Slots' },
    { day: 'Wed', date: '30', slots: '2 Slots' },
  ];

  const timeSlots = ['09:30 AM', '11:00 AM', '02:15 PM', '04:30 PM'];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const names = Array.from(e.target.files).map((f) => f.name);
      setUploadedFiles((prev) => [...prev, ...names]);
    }
  };

  const handleSimulateDrop = () => {
    setUploadedFiles((prev) => [
      ...prev,
      'Curriculum_Vitae_Dr_Farhadi_2026.pdf',
      'Passport_Front_Bio_Page_Scan.pdf',
    ]);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col w-full">
      {/* Tonal Header Backing & Breadcrumbs */}
      <section className="w-full bg-[#f1f3ff] pt-8 pb-12 border-b border-[#e8edff]">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-4 text-[12px] text-[#4a607a]">
            <span>Home</span>
            <span>/</span>
            <span className="font-semibold text-[#00152a]">Contact & Counsel Booking</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#e8edff] text-[#4a607a] text-[11px] font-semibold uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Direct Sovereign Migration Advisory
              </div>
              <h1 className="font-display text-[32px] sm:text-[42px] text-[#00152a] font-bold tracking-tight">
                Schedule a Formal Legal Consultation
              </h1>
              <p className="text-[16px] text-[#43474d] mt-3 leading-relaxed">
                Engage with registered immigration solicitors, barristers, and sovereign mobility advisors. All initial intake reviews are protected under strict attorney-client confidentiality and handled within our Tier-1 compliance protocols.
              </p>
            </div>

            {/* Trust Badges Strip */}
            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white shadow-sm border border-[#e8edff]">
                <span className="material-symbols-outlined text-[18px] text-[#4a607a]">verified_user</span>
                <div className="flex flex-col">
                  <span className="text-[12px] text-[#00152a] font-semibold leading-tight">Regulated Bar Counsel</span>
                  <span className="text-[10px] text-[#4a607a] leading-none">UK, Law Society & SRA</span>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white shadow-sm border border-[#e8edff]">
                <span className="material-symbols-outlined text-[18px] text-[#4a607a]">lock</span>
                <div className="flex flex-col">
                  <span className="text-[12px] text-[#00152a] font-semibold leading-tight">Privilege Protected</span>
                  <span className="text-[10px] text-[#4a607a] leading-none">256-Bit TLS Intake</span>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white shadow-sm border border-[#e8edff]">
                <span className="material-symbols-outlined text-[18px] text-[#4a607a]">bolt</span>
                <div className="flex flex-col">
                  <span className="text-[12px] text-[#00152a] font-semibold leading-tight">&lt; 24h Response SLA</span>
                  <span className="text-[10px] text-[#4a607a] leading-none">Guaranteed Triage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Chambers Showcase Strip (Quad City Photo Grid) */}
      <section className="w-full bg-[#102a43] text-white py-8 border-b border-[#4a607a]/30">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <span className="text-[11px] text-[#7a92b0] uppercase tracking-widest font-semibold">
                Global Chambers Presence
              </span>
              <p className="font-semibold text-white text-[16px]">
                Immediate access to licensed advisors in key economic jurisdictions
              </p>
            </div>
            <span className="text-[12px] text-[#ebc071] hidden md:inline-flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#ebc071] animate-pulse" />
              All Chambers Active & Receiving Petitions
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="group relative h-48 rounded-xl overflow-hidden shadow-md flex flex-col justify-end p-4 border border-white/10">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="London Chancery skyline at twilight"
                src={CITY_IMAGES.london}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00152a] via-[#00152a]/50 to-transparent" />
              <div className="relative z-10">
                <span className="font-display text-[18px] text-white font-bold tracking-wider uppercase block">
                  London
                </span>
                <span className="text-[12px] text-[#d7e2ff]">Mayfair Chancery · GMT</span>
              </div>
            </div>

            <div className="group relative h-48 rounded-xl overflow-hidden shadow-md flex flex-col justify-end p-4 border border-white/10">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Toronto Bay Adelaide skyline at dusk"
                src={CITY_IMAGES.toronto}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00152a] via-[#00152a]/50 to-transparent" />
              <div className="relative z-10">
                <span className="font-display text-[18px] text-white font-bold tracking-wider uppercase block">
                  Toronto
                </span>
                <span className="text-[12px] text-[#d7e2ff]">Bay Adelaide Centre · EST</span>
              </div>
            </div>

            <div className="group relative h-48 rounded-xl overflow-hidden shadow-md flex flex-col justify-end p-4 border border-white/10">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Sydney Barangaroo Harbour at twilight"
                src={CITY_IMAGES.sydney}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00152a] via-[#00152a]/50 to-transparent" />
              <div className="relative z-10">
                <span className="font-display text-[18px] text-white font-bold tracking-wider uppercase block">
                  Sydney
                </span>
                <span className="text-[12px] text-[#d7e2ff]">Barangaroo Tower 1 · AEST</span>
              </div>
            </div>

            <div className="group relative h-48 rounded-xl overflow-hidden shadow-md flex flex-col justify-end p-4 border border-white/10">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Frankfurt OpernTurm financial center skyline"
                src={CITY_IMAGES.frankfurt}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00152a] via-[#00152a]/50 to-transparent" />
              <div className="relative z-10">
                <span className="font-display text-[18px] text-white font-bold tracking-wider uppercase block">
                  Frankfurt
                </span>
                <span className="text-[12px] text-[#d7e2ff]">OpernTurm Chancery · CET</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Booking Architecture: Split Layout */}
      <section className="w-full py-12 md:py-16 bg-[#f9f9ff]">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column (Cols 1-7): Multi-Step Booking Console */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Step Progression Navigator */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e8edff]">
                <div className="flex items-center justify-between relative">
                  <div className="absolute top-4 left-6 right-6 h-0.5 bg-[#e8edff] -z-0" />

                  <div className="flex flex-col items-center relative z-10">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold ring-4 ring-white shadow-sm transition-colors ${
                        currentStep >= 1 ? 'bg-[#00152a] text-white' : 'bg-[#f1f3ff] text-[#4a607a]'
                      }`}
                    >
                      1
                    </button>
                    <span className="text-[12px] font-semibold text-[#00152a] mt-2">Format & Path</span>
                  </div>

                  <div className="flex flex-col items-center relative z-10">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold ring-4 ring-white shadow-sm transition-colors ${
                        currentStep >= 2 ? 'bg-[#00152a] text-white' : 'bg-[#f1f3ff] text-[#4a607a]'
                      }`}
                    >
                      2
                    </button>
                    <span className="text-[12px] font-semibold text-[#00152a] mt-2">Chamber & Slot</span>
                  </div>

                  <div className="flex flex-col items-center relative z-10">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold ring-4 ring-white shadow-sm transition-colors ${
                        currentStep >= 3 ? 'bg-[#00152a] text-white' : 'bg-[#f1f3ff] text-[#4a607a]'
                      }`}
                    >
                      3
                    </button>
                    <span className="text-[12px] font-semibold text-[#00152a] mt-2">Dossier Intake</span>
                  </div>
                </div>
              </div>

              {bookingConfirmed ? (
                <div className="bg-white p-8 rounded-xl shadow-sm border border-emerald-200 text-center flex flex-col items-center gap-4">
                  <span className="material-symbols-outlined text-[54px] text-emerald-600">verified</span>
                  <h3 className="font-display text-[24px] font-bold text-[#00152a]">
                    Consultation Reserved Successfully
                  </h3>
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 max-w-lg text-[13px] text-[#041b3c] leading-relaxed">
                    <p>
                      Reference Number: <strong className="font-mono text-[14px]">#AGM-2026-LON-{Math.floor(1000 + Math.random() * 9000)}</strong>
                    </p>
                    <p className="mt-1">
                      Applicant: <strong>{applicant.name || 'Dr. Kian Farhadi'}</strong> · Target: <strong>{applicant.destination}</strong>
                    </p>
                    <p className="mt-1">
                      Slot: <strong>{days[selectedDayIndex].day} {days[selectedDayIndex].date} at {selectedTimeSlot} GMT+1</strong> ({consultationMode === 'virtual' ? 'Encrypted Zoom' : 'In-Person Chambers'})
                    </p>
                  </div>
                  <p className="text-[13px] text-[#4a607a] max-w-md">
                    A formal encrypted calendar invitation, Zoom room token, and retainer breakdown have been dispatched to your email.
                  </p>
                  <button
                    onClick={() => {
                      setBookingConfirmed(false);
                      setCurrentStep(1);
                    }}
                    className="px-6 py-2.5 rounded-lg bg-[#102a43] text-white font-semibold text-[13px] hover:bg-[#00152a]"
                  >
                    Modify / Book Another Appointment
                  </button>
                </div>
              ) : (
                /* Main Booking Form */
                <form onSubmit={handleFormSubmit} className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-[#e8edff] flex flex-col gap-8">
                  {/* Step 1: Mode & Category */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-[#00152a] text-[16px] flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#4a607a]" />
                        1. Consultation Mode & Setting
                      </h3>
                      <span className="text-[11px] font-semibold text-[#4a607a] bg-[#f1f3ff] px-2 py-0.5 rounded">
                        Required
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Virtual */}
                      <label
                        className={`p-4 rounded-xl cursor-pointer transition-all border flex flex-col justify-between ${
                          consultationMode === 'virtual'
                            ? 'bg-[#f1f3ff] border-[#102a43] shadow-sm'
                            : 'bg-white border-[#e8edff] hover:bg-[#f9f9ff]'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="material-symbols-outlined text-[20px] text-[#00152a]">videocam</span>
                              <span className="font-bold text-[#00152a] text-[14px]">Encrypted Virtual</span>
                            </div>
                            <input
                              type="radio"
                              name="consultation_mode"
                              value="virtual"
                              checked={consultationMode === 'virtual'}
                              onChange={() => setConsultationMode('virtual')}
                              className="accent-[#00152a]"
                            />
                          </div>
                          <p className="text-[12px] text-[#43474d] leading-relaxed">
                            Secure 45-minute video conference via bespoke end-to-end encrypted room. Ideal for international callers.
                          </p>
                        </div>
                        <div className="mt-3 pt-3 border-t border-[#e8edff] flex items-center justify-between text-[11px] text-[#4a607a]">
                          <span>Platform: Aegis Vault Video</span>
                          <span className="text-[#00152a] font-bold text-[13px]">Fee: £350</span>
                        </div>
                      </label>

                      {/* In-Person */}
                      <label
                        className={`p-4 rounded-xl cursor-pointer transition-all border flex flex-col justify-between ${
                          consultationMode === 'in-person'
                            ? 'bg-[#f1f3ff] border-[#102a43] shadow-sm'
                            : 'bg-white border-[#e8edff] hover:bg-[#f9f9ff]'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="material-symbols-outlined text-[20px] text-[#00152a]">domain</span>
                              <span className="font-bold text-[#00152a] text-[14px]">In-Chambers Private</span>
                            </div>
                            <input
                              type="radio"
                              name="consultation_mode"
                              value="in-person"
                              checked={consultationMode === 'in-person'}
                              onChange={() => setConsultationMode('in-person')}
                              className="accent-[#00152a]"
                            />
                          </div>
                          <p className="text-[12px] text-[#43474d] leading-relaxed">
                            In-person consultation in Mayfair London, Toronto Bay Adelaide, Sydney Barangaroo, or DIFC Dubai.
                          </p>
                        </div>
                        <div className="mt-3 pt-3 border-t border-[#e8edff] flex items-center justify-between text-[11px] text-[#4a607a]">
                          <span>Host: Partner / Counsel</span>
                          <span className="text-[#00152a] font-bold text-[13px]">Fee: £550</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Step 2: Legal Category of Interest */}
                  <div className="flex flex-col gap-4">
                    <h3 className="font-bold text-[#00152a] text-[16px] flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#4a607a]" />
                      2. Legal Category of Interest
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { id: 'tech-talent', icon: 'psychology', title: 'Tech Talent', sub: 'O-1 / EB-1 / GTI' },
                        { id: 'investor', icon: 'account_balance', title: 'Investor & RBI', sub: 'Golden Visas & HNWI' },
                        { id: 'corporate', icon: 'corporate_fare', title: 'Corporate', sub: 'ICT & Branch Setup' },
                        { id: 'appeals', icon: 'gavel', title: 'Appeals', sub: 'Refusals & Review' },
                      ].map((cat) => (
                        <label key={cat.id} className="cursor-pointer">
                          <input
                            type="radio"
                            name="category"
                            value={cat.id}
                            checked={category === cat.id}
                            onChange={() => setCategory(cat.id as any)}
                            className="peer sr-only"
                          />
                          <div className="flex flex-col items-center justify-center text-center p-3.5 rounded-xl border border-[#e8edff] bg-[#f1f3ff] peer-checked:bg-[#00152a] peer-checked:text-white transition-all shadow-sm">
                            <span className="material-symbols-outlined text-[24px] mb-1">{cat.icon}</span>
                            <span className="text-[13px] font-bold">{cat.title}</span>
                            <span className="text-[10px] opacity-80 mt-0.5">{cat.sub}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Date & Time Selection */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-[#00152a] text-[16px] flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#4a607a]" />
                        3. Select Date & Counsel Window
                      </h3>
                      <span className="text-[12px] text-[#4a607a]">Times shown in GMT +1</span>
                    </div>

                    {/* Day Picker */}
                    <div className="grid grid-cols-5 gap-2">
                      {days.map((d, didx) => (
                        <button
                          key={didx}
                          type="button"
                          onClick={() => setSelectedDayIndex(didx)}
                          className={`p-2.5 rounded-xl flex flex-col items-center transition-all ${
                            selectedDayIndex === didx
                              ? 'bg-[#00152a] text-white shadow-sm'
                              : 'bg-[#f1f3ff] hover:bg-[#e8edff] text-[#00152a]'
                          }`}
                        >
                          <span className="text-[11px] uppercase font-semibold opacity-80">{d.day}</span>
                          <span className="font-display text-[18px] font-bold">{d.date}</span>
                          <span className={`text-[10px] font-semibold mt-1 ${
                            selectedDayIndex === didx ? 'text-[#ebc071]' : 'text-[#4a607a]'
                          }`}>
                            {d.slots}
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Time Slots */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                      {timeSlots.map((ts) => (
                        <button
                          key={ts}
                          type="button"
                          onClick={() => setSelectedTimeSlot(ts)}
                          className={`py-2.5 px-3 rounded-lg text-[13px] font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                            selectedTimeSlot === ts
                              ? 'bg-[#00152a] text-white shadow-sm'
                              : 'bg-[#f1f3ff] hover:bg-[#e8edff] text-[#00152a]'
                          }`}
                        >
                          <span className="material-symbols-outlined text-[16px]">schedule</span>
                          <span>{ts}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 4: Confidential Applicant Details */}
                  <div className="flex flex-col gap-4">
                    <h3 className="font-bold text-[#00152a] text-[16px] flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#4a607a]" />
                      4. Confidential Applicant Details
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-semibold text-[#00152a]">Principal Applicant Name</label>
                        <input
                          required
                          type="text"
                          placeholder="Dr. Kian Farhadi"
                          value={applicant.name}
                          onChange={(e) => setApplicant({ ...applicant, name: e.target.value })}
                          className="h-11 px-3.5 rounded-lg bg-[#f1f3ff] text-[13px] text-[#00152a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#102a43]"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-semibold text-[#00152a]">Encrypted Direct Email</label>
                        <input
                          required
                          type="email"
                          placeholder="kian@example.com"
                          value={applicant.email}
                          onChange={(e) => setApplicant({ ...applicant, email: e.target.value })}
                          className="h-11 px-3.5 rounded-lg bg-[#f1f3ff] text-[13px] text-[#00152a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#102a43]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-semibold text-[#00152a]">Citizenship</label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. United Kingdom"
                          value={applicant.citizenship}
                          onChange={(e) => setApplicant({ ...applicant, citizenship: e.target.value })}
                          className="h-11 px-3.5 rounded-lg bg-[#f1f3ff] text-[13px] text-[#00152a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#102a43]"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-semibold text-[#00152a]">Current Residence</label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. UAE / London"
                          value={applicant.residence}
                          onChange={(e) => setApplicant({ ...applicant, residence: e.target.value })}
                          className="h-11 px-3.5 rounded-lg bg-[#f1f3ff] text-[13px] text-[#00152a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#102a43]"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-semibold text-[#00152a]">Target Destination</label>
                        <select
                          value={applicant.destination}
                          onChange={(e) => setApplicant({ ...applicant, destination: e.target.value })}
                          className="h-11 px-3.5 rounded-lg bg-[#f1f3ff] text-[13px] text-[#00152a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#102a43]"
                        >
                          <option>United Kingdom</option>
                          <option>Canada</option>
                          <option>Australia</option>
                          <option>Germany & EU</option>
                          <option>United States</option>
                          <option>Portugal (Golden Visa)</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-semibold text-[#00152a]">Brief Matter Summary or Refusal History</label>
                      <textarea
                        rows={3}
                        placeholder="Provide background on qualifications, business size, timeline requirements, or previous visa rejections..."
                        value={applicant.summary}
                        onChange={(e) => setApplicant({ ...applicant, summary: e.target.value })}
                        className="p-3.5 rounded-lg bg-[#f1f3ff] text-[13px] text-[#00152a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#102a43] resize-none"
                      />
                    </div>

                    {/* File Dropzone */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-semibold text-[#00152a] flex items-center justify-between">
                        <span>Supporting Dossier & Resume / Refusal Notices</span>
                        <span className="text-[11px] text-[#4a607a]">PDF, DOCX up to 25MB</span>
                      </label>
                      <div
                        onClick={handleSimulateDrop}
                        className="p-6 rounded-xl bg-[#f1f3ff] hover:bg-[#e8edff] transition-colors border-2 border-dashed border-[#49607c]/40 flex flex-col items-center justify-center text-center cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#4a607a] mb-2 shadow-sm">
                          <span className="material-symbols-outlined text-[22px]">cloud_upload</span>
                        </div>
                        <p className="font-semibold text-[#00152a] text-[13px]">
                          Click to select documents or drag & drop files
                        </p>
                        <p className="text-[11px] text-[#4a607a] mt-1">
                          Encrypted immediately with client-side SHA-256 and stored on Sovereign TLS
                        </p>
                      </div>

                      {uploadedFiles.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {uploadedFiles.map((fn, fidx) => (
                            <span
                              key={fidx}
                              className="px-2.5 py-1 rounded bg-[#e8edff] text-[#00152a] text-[11px] font-medium flex items-center gap-1.5"
                            >
                              <span className="material-symbols-outlined text-[14px] text-emerald-600">check</span>
                              <span>{fn}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Agreement & Submission */}
                  <div className="flex flex-col gap-4 pt-2 border-t border-[#e8edff]">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        required
                        type="checkbox"
                        checked={applicant.consent}
                        onChange={(e) => setApplicant({ ...applicant, consent: e.target.checked })}
                        className="mt-1 w-4 h-4 accent-[#00152a]"
                      />
                      <span className="text-[12px] text-[#43474d] leading-normal">
                        I understand that this consultation initiates formal legal review and that information provided is safeguarded under international Attorney-Client Privilege. Consultation charges are automatically 100% credited toward full retainer services upon agreement.
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="w-full h-12 rounded-lg bg-[#00152a] hover:bg-[#102a43] text-white font-semibold text-[13px] tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[20px]">lock_clock</span>
                      <span>Confirm Consultation Reservation · {consultationMode === 'virtual' ? '£350' : '£550'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column (Cols 8-12): Chambers Directory, Hotline & FAQ */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Chambers Directory Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e8edff] flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-[18px] font-bold text-[#00152a]">Chambers Directory</h2>
                  <span className="material-symbols-outlined text-[#4a607a] text-[20px]">public</span>
                </div>
                <p className="text-[13px] text-[#43474d] leading-relaxed">
                  Walk-in protocol requires registered security clearance. In-person attendees must confirm reception appointments with their appointed legal assistant.
                </p>

                <div className="flex flex-col gap-3">
                  <div className="p-3.5 rounded-lg bg-[#f1f3ff] flex flex-col gap-1.5 border border-[#e8edff]">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#00152a] text-[13px]">London Chancery (Global HQ)</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#e8edff] text-[#00152a]">GMT</span>
                    </div>
                    <p className="text-[12px] text-[#43474d]">1 Curzon Street, Mayfair, London W1J 5HD, UK</p>
                    <div className="flex items-center gap-4 text-[#4a607a] text-[11px] pt-1">
                      <span>Tel: +44 (0) 20 7946 0988</span>
                      <span>Hours: 08:30 – 19:00</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#f1f3ff] flex flex-col gap-1.5 border border-[#e8edff]">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#00152a] text-[13px]">Toronto Bay Chambers</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#e8edff] text-[#00152a]">EST</span>
                    </div>
                    <p className="text-[12px] text-[#43474d]">Bay Adelaide Centre, 333 Bay St, Suite 2400, Toronto</p>
                    <div className="flex items-center gap-4 text-[#4a607a] text-[11px] pt-1">
                      <span>Tel: +1 (416) 555-0192</span>
                      <span>Hours: 09:00 – 18:00</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#f1f3ff] flex flex-col gap-1.5 border border-[#e8edff]">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#00152a] text-[13px]">Sydney Barangaroo Chambers</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#e8edff] text-[#00152a]">AEST</span>
                    </div>
                    <p className="text-[12px] text-[#43474d]">Tower 1, 100 Barangaroo Avenue, Level 32, Sydney</p>
                    <div className="flex items-center gap-4 text-[#4a607a] text-[11px] pt-1">
                      <span>Tel: +61 2 9100 4820</span>
                      <span>Hours: 08:30 – 17:30</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#f1f3ff] flex flex-col gap-1.5 border border-[#e8edff]">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#00152a] text-[13px]">Frankfurt OpernTurm</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#e8edff] text-[#00152a]">CET</span>
                    </div>
                    <p className="text-[12px] text-[#43474d]">Bockenheimer Landstraße 2-4, 60306 Frankfurt am Main</p>
                    <div className="flex items-center gap-4 text-[#4a607a] text-[11px] pt-1">
                      <span>Tel: +49 69 9876 5430</span>
                      <span>Hours: 09:00 – 18:00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 24/7 Consular Escalation Hotline Banner */}
              <div className="bg-[#102a43] text-white p-6 rounded-xl shadow-md border border-[#4a607a]/40 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-ping" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#ffdad6]">
                    Priority Consular Emergency Hotline
                  </span>
                </div>
                <h3 className="font-display text-[17px] font-bold text-white">
                  Port-of-Entry Interrogation or Consular Refusal?
                </h3>
                <p className="text-[12px] text-[#7a92b0] leading-relaxed">
                  If an executive or family member is facing immediate port-of-entry interrogation or emergency deportation orders, contact our 24/7 consular triage dispatch.
                </p>
                <div className="mt-1 flex items-center justify-between p-3 rounded-lg bg-[#00152a] border border-white/10">
                  <span className="text-[13px] font-mono text-white font-bold tracking-wide">
                    +44 (0) 20 7946 9911
                  </span>
                  <span className="text-[10px] uppercase font-bold bg-[#ebc071] text-[#1d1200] px-2 py-0.5 rounded">
                    Immediate Dispatch
                  </span>
                </div>
              </div>

              {/* FAQ Accordion */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e8edff] flex flex-col gap-3">
                <h3 className="font-display text-[16px] font-bold text-[#00152a] mb-1">
                  Frequently Addressed Inquiries
                </h3>
                {FAQS.slice(0, 3).map((faq, fidx) => {
                  const isOpen = expandedFaqIndex === fidx;
                  return (
                    <div key={fidx} className="p-3.5 rounded-lg bg-[#f1f3ff] border border-[#e8edff]">
                      <button
                        onClick={() => setExpandedFaqIndex(isOpen ? null : fidx)}
                        className="w-full flex items-center justify-between text-left font-semibold text-[13px] text-[#00152a]"
                      >
                        <span>{faq.question}</span>
                        <span className={`material-symbols-outlined text-[18px] text-[#4a607a] transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}>
                          expand_more
                        </span>
                      </button>
                      {isOpen && (
                        <p className="text-[12px] text-[#43474d] mt-2 pt-2 border-t border-[#e8edff] leading-relaxed">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
