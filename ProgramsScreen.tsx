import React, { useState } from 'react';
import { ProgramInfo } from '../../types';
import { PROGRAMS, COUNSEL_BRIEFING_IMG } from '../../data/mockData';

interface ProgramsScreenProps {
  onSelectProgram: (program: ProgramInfo) => void;
  onOpenConsultationModal: (subject?: string) => void;
}

export const ProgramsScreen: React.FC<ProgramsScreenProps> = ({
  onSelectProgram,
  onOpenConsultationModal,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'skilled' | 'corporate' | 'investor' | 'pr' | 'family'>('all');

  // Interactive Self-Assessment Calculator
  const [calcForm, setCalcForm] = useState({
    citizenship: 'United States / Canada',
    destination: 'United Kingdom',
    category: 'Senior Executive / Director',
    horizon: 'Immediate (1 – 3 months)',
  });
  const [calcResult, setCalcResult] = useState<{
    show: boolean;
    headline: string;
    details: string;
  } | null>(null);

  const filteredPrograms = PROGRAMS.filter((p) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'skilled') return p.category === 'skilled';
    if (selectedFilter === 'corporate') return p.category === 'corporate';
    if (selectedFilter === 'investor') return p.category === 'investor';
    if (selectedFilter === 'pr') return p.badgeType === 'pr' || p.badgeType === 'greencard';
    if (selectedFilter === 'family') return p.category === 'family' || p.name.includes('Skilled') || p.name.includes('Express');
    return true;
  });

  const handleRunAssessment = (e: React.FormEvent) => {
    e.preventDefault();
    setCalcResult({
      show: true,
      headline: `3 Viable Pathways Matched for ${calcForm.destination}`,
      details: `Based on your profile as a ${calcForm.category} holding ${calcForm.citizenship} targeting ${calcForm.destination} within ${calcForm.horizon}: Recommended routes include priority points endorsement, intra-company mobility, and fast-track residency streams. Legal pre-clearance is favorable.`,
    });
  };

  return (
    <div className="flex flex-col w-full">
      {/* Immersive Editorial Banner */}
      <section className="relative w-full bg-[#102a43] text-white pt-24 pb-16 overflow-hidden">
        {/* Fine-line grid pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="64" height="64" patternUnits="userSpaceOnUse">
                <path d="M 64 0 L 0 0 0 64" fill="none" stroke="currentColor" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center gap-2 mb-4 text-[#7a92b0] text-[13px]">
            <span className="text-[#ebc071] font-semibold tracking-wide uppercase">Services & Programs</span>
            <span>·</span>
            <span>Regulated Consular Dossiers</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#ebc071] w-fit text-[12px] font-semibold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px]">verified_user</span>
                Tier-1 Sovereign Relocation Counsel
              </div>
              <h1 className="font-display text-[34px] sm:text-[44px] lg:text-[50px] text-white font-bold tracking-tight leading-tight max-w-3xl">
                Specialized Immigration Pathways & Legal Counsel
              </h1>
              <p className="text-[16px] text-[#d7e2ff] max-w-2xl leading-relaxed">
                Strategic, end-to-end representation for enterprise executives, distinguished technological innovators, sovereign capital investors, and international academic leaders across 24 regulated jurisdictions.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-between gap-4 border border-white/15">
                <div className="flex flex-col">
                  <span className="text-[11px] text-[#7a92b0] font-semibold uppercase">Program Success Rate</span>
                  <span className="font-display text-[28px] text-white font-bold">99.4%</span>
                </div>
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-[#ebc071]">
                  <span className="material-symbols-outlined text-[24px]">gavel</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-between gap-4 border border-white/15">
                <div className="flex flex-col">
                  <span className="text-[11px] text-[#7a92b0] font-semibold uppercase">Retained Consular Portfolios</span>
                  <span className="font-display text-[28px] text-[#ebc071] font-bold">4,800+</span>
                </div>
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-[24px]">public</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Sticky Program Filter Strip */}
      <section className="sticky top-20 z-40 w-full bg-white shadow-[0_2px_12px_rgba(16,42,67,0.06)] border-b border-[#e8edff]">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12 py-3">
          <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2">
              {[
                { id: 'all', label: 'All Programs' },
                { id: 'skilled', label: 'Skilled & Tech Talent' },
                { id: 'corporate', label: 'Corporate & Intra-Company' },
                { id: 'investor', label: 'HNW Investors & Founders' },
                { id: 'pr', label: 'Permanent Residency & Passport' },
                { id: 'family', label: 'Family Reunification' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id as any)}
                  className={`px-4 py-2 rounded-lg text-[13px] font-semibold whitespace-nowrap transition-all ${
                    selectedFilter === tab.id
                      ? 'bg-[#102a43] text-white shadow-sm'
                      : 'bg-[#f1f3ff] hover:bg-[#e8edff] text-[#43474d] hover:text-[#00152a]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="hidden xl:flex items-center gap-2 pl-4 flex-shrink-0 text-[12px]">
              <span className="text-[#4a607a] font-semibold uppercase">Jurisdictions:</span>
              <span className="px-2 py-0.5 rounded bg-[#e8edff] text-[#00152a] font-bold">UK</span>
              <span className="px-2 py-0.5 rounded bg-[#e8edff] text-[#00152a] font-bold">CAN</span>
              <span className="px-2 py-0.5 rounded bg-[#e8edff] text-[#00152a] font-bold">USA</span>
              <span className="px-2 py-0.5 rounded bg-[#e8edff] text-[#00152a] font-bold">AUS</span>
              <span className="px-2 py-0.5 rounded bg-[#e8edff] text-[#00152a] font-bold">EU</span>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Catalog Grid */}
      <section className="w-full py-16 bg-[#f9f9ff]">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#4a607a] block mb-1">
                Curated Consular Dossiers
              </span>
              <h2 className="font-display text-[30px] sm:text-[36px] text-[#00152a] font-bold tracking-tight">
                Regulated Immigration Streams
              </h2>
            </div>
            <p className="text-[14px] text-[#43474d] max-w-md">
              Every program is structured in full conformity with sovereign statutory immigration acts, overseen by solicitors registered with respective law societies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((prog) => (
              <article
                key={prog.id}
                className="bg-white rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md border border-[#e8edff] transition-all group"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-[#c7dffd] text-[#00152a] text-[11px] font-bold tracking-wide uppercase">
                      {prog.badge}
                    </span>
                    <span className="flex items-center gap-1 text-[12px] text-[#4a607a] font-medium">
                      <span className="material-symbols-outlined text-[15px]">schedule</span>
                      {prog.processingTime}
                    </span>
                  </div>

                  <div className="relative w-full h-40 rounded-lg overflow-hidden bg-[#102a43]">
                    <img
                      src={prog.image}
                      alt={prog.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-[#102a43]/90 backdrop-blur text-white text-[11px] font-semibold flex items-center gap-1.5 shadow-sm">
                      <span>{prog.flag}</span>
                      <span>{prog.jurisdiction}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-[17px] font-bold text-[#00152a] group-hover:text-[#49607c] transition-colors leading-snug">
                      {prog.name}
                    </h3>
                    <p className="text-[13px] text-[#43474d] mt-2 leading-relaxed">
                      {prog.description}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#f1f3ff] flex flex-col gap-1.5 border border-[#e8edff]">
                    <div className="flex items-center justify-between text-[12px]">
                      <span className="text-[#4a607a]">Benchmark Target:</span>
                      <span className="font-bold text-[#00152a] truncate max-w-[160px]">{prog.benchmarkScore}</span>
                    </div>
                    <div className="flex items-center justify-between text-[12px]">
                      <span className="text-[#4a607a]">Language Req:</span>
                      <span className="font-bold text-[#00152a] truncate max-w-[160px]">{prog.languageBenchmark}</span>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2 text-[13px] text-[#43474d]">
                    {prog.keyBenefits.map((b, bidx) => (
                      <li key={bidx} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[16px] text-[#49607c] flex-shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span className="line-clamp-2">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#e8edff] flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectProgram(prog)}
                    className="w-full inline-flex items-center justify-center gap-2 h-11 px-4 rounded-lg bg-[#102a43] text-white hover:bg-[#00152a] text-[13px] font-semibold transition-all shadow-sm"
                  >
                    <span>View Dossier Criteria</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparative Cross-Analysis Matrix Table */}
      <section className="w-full py-16 bg-[#f1f3ff] border-y border-[#e8edff]">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#4a607a] block mb-1">
                Comparative Framework
              </span>
              <h2 className="font-display text-[28px] sm:text-[34px] text-[#00152a] font-bold tracking-tight">
                Immigration Stream Cross-Analysis
              </h2>
            </div>
            <p className="text-[14px] text-[#43474d] max-w-md">
              Evaluate legal processing periods, sovereign capital commitments, and subsequent citizenship eligibility timelines across top-choice global destinations.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl bg-white shadow-sm border border-[#e8edff]">
            <table className="w-full text-left border-collapse min-w-[780px]">
              <thead>
                <tr className="bg-[#e8edff] text-[#00152a] text-[13px] font-semibold border-b border-[#d7e2ff]">
                  <th className="py-4 px-6">Program / Jurisdiction</th>
                  <th className="py-4 px-6">Primary Target</th>
                  <th className="py-4 px-6">Investment / Score</th>
                  <th className="py-4 px-6">Processing Timeline</th>
                  <th className="py-4 px-6">Work Entitlement</th>
                  <th className="py-4 px-6">Citizenship Horizon</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e8edff] text-[13px] text-[#041b3c]">
                <tr className="hover:bg-[#f9f9ff] transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-[#e8edff] flex items-center justify-center font-bold text-[#00152a] text-[12px]">CA</div>
                      <div>
                        <span className="font-bold block text-[#00152a]">Canada Express Entry</span>
                        <span className="text-[#4a607a] text-[11px]">FSW / CEC / PNP Streams</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-[#43474d]">Skilled Specialists & Managers</td>
                  <td className="py-4 px-6 font-semibold text-[#00152a]">Points: ~485+ CRS</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#c7dffd] text-[#00152a] text-[11px] font-bold">4 – 6 Months</span>
                  </td>
                  <td className="py-4 px-6 text-[#43474d]">Full Federal Open PR</td>
                  <td className="py-4 px-6 font-bold text-[#00152a]">3 Years (1,095 days)</td>
                </tr>

                <tr className="hover:bg-[#f9f9ff] transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-[#e8edff] flex items-center justify-center font-bold text-[#00152a] text-[12px]">UK</div>
                      <div>
                        <span className="font-bold block text-[#00152a]">UK Global Talent</span>
                        <span className="text-[#4a607a] text-[11px]">Tech Nation Endorsement</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-[#43474d]">Founders, Engineers, AI Leaders</td>
                  <td className="py-4 px-6 font-semibold text-[#00152a]">Endorsement Only (£0)</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#ffdea6] text-[#271900] text-[11px] font-bold">3 – 8 Weeks</span>
                  </td>
                  <td className="py-4 px-6 text-[#43474d]">100% Sponsor-Free</td>
                  <td className="py-4 px-6 font-bold text-[#00152a]">5 Years (ILR in 3 yrs)</td>
                </tr>

                <tr className="hover:bg-[#f9f9ff] transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-[#e8edff] flex items-center justify-center font-bold text-[#00152a] text-[12px]">US</div>
                      <div>
                        <span className="font-bold block text-[#00152a]">US EB-1A & EB-2 NIW</span>
                        <span className="text-[#4a607a] text-[11px]">Self-Petition Green Card</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-[#43474d]">Proven Domain Authorities</td>
                  <td className="py-4 px-6 font-semibold text-[#00152a]">Dhanasar 3-Prong Criteria</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#c7dffd] text-[#00152a] text-[11px] font-bold">15d – 8 Mos</span>
                  </td>
                  <td className="py-4 px-6 text-[#43474d]">Permanent Resident Alien</td>
                  <td className="py-4 px-6 font-bold text-[#00152a]">5 Years (US Passport)</td>
                </tr>

                <tr className="hover:bg-[#f9f9ff] transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-[#e8edff] flex items-center justify-center font-bold text-[#00152a] text-[12px]">PT</div>
                      <div>
                        <span className="font-bold block text-[#00152a]">European Golden Visa</span>
                        <span className="text-[#4a607a] text-[11px]">Regulated Fund Route</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-[#43474d]">High-Net-Worth Investors</td>
                  <td className="py-4 px-6 font-semibold text-[#00152a]">€500,000 Capital Allocation</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#e0e8ff] text-[#00152a] text-[11px] font-bold">5 – 8 Months</span>
                  </td>
                  <td className="py-4 px-6 text-[#43474d]">Full Schengen Mobility</td>
                  <td className="py-4 px-6 font-bold text-[#00152a]">5 Years (Portuguese Pass)</td>
                </tr>

                <tr className="hover:bg-[#f9f9ff] transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-[#e8edff] flex items-center justify-center font-bold text-[#00152a] text-[12px]">AU</div>
                      <div>
                        <span className="font-bold block text-[#00152a]">Australia Subclass 189/190</span>
                        <span className="text-[#4a607a] text-[11px]">Global Talent Independent</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-[#43474d]">C-Suite & Senior Researchers</td>
                  <td className="py-4 px-6 font-semibold text-[#00152a]">AUD $175,000+ Record</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#c7dffd] text-[#00152a] text-[11px] font-bold">3 – 6 Months</span>
                  </td>
                  <td className="py-4 px-6 text-[#43474d]">Immediate Permanent Resident</td>
                  <td className="py-4 px-6 font-bold text-[#00152a]">4 Years (Australian Pass)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Legal Retainer & Compliance Protocol Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 flex flex-col gap-5">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#4a607a]">
                Institutional Governance
              </span>
              <h2 className="font-display text-[30px] sm:text-[36px] text-[#00152a] font-bold tracking-tight">
                Milestone-Based Fee Transparency
              </h2>
              <p className="text-[15px] text-[#43474d] leading-relaxed">
                Unlike transactional volume consultancies, Aegis operates strictly under regulated Bar and Immigration Chamber retainer protocols. No undisclosed disbursements or speculative petition filings.
              </p>
              <div className="flex flex-col gap-3 mt-2">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#f1f3ff]">
                  <span className="material-symbols-outlined text-[20px] text-[#102a43] flex-shrink-0 mt-0.5">account_balance</span>
                  <div>
                    <h4 className="font-semibold text-[#00152a] text-[14px]">Escrow-Protected Retainers</h4>
                    <p className="text-[12px] text-[#43474d]">Fees are released exclusively upon verifiable milestones (Dossier Signoff, Submission, Approval).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#f1f3ff]">
                  <span className="material-symbols-outlined text-[20px] text-[#102a43] flex-shrink-0 mt-0.5">policy</span>
                  <div>
                    <h4 className="font-semibold text-[#00152a] text-[14px]">Licensed Bar Standing</h4>
                    <p className="text-[12px] text-[#43474d]">Our legal team holds active credentials with SRA (UK), Law Society of Ontario (CAN), and California Bar (US).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#f1f3ff]">
                  <span className="material-symbols-outlined text-[20px] text-[#102a43] flex-shrink-0 mt-0.5">encrypted</span>
                  <div>
                    <h4 className="font-semibold text-[#00152a] text-[14px]">256-Bit Cryptographic Vaults</h4>
                    <p className="text-[12px] text-[#43474d]">Applicant biometric identities and proprietary financial balances are protected under Swiss SOC2 protocols.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-[#102a43] text-white rounded-2xl p-8 lg:p-10 relative overflow-hidden shadow-xl border border-[#4a607a]/30">
                <div className="flex items-center justify-between border-b border-[#4a607a]/40 pb-6 mb-6">
                  <div>
                    <span className="text-[11px] font-semibold text-[#ebc071] uppercase tracking-wider">
                      Aegis Retainer Schedule
                    </span>
                    <h3 className="font-display text-[22px] font-bold text-white mt-1">
                      Direct Case Ingestion Flow
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-[11px] font-semibold text-white">
                    ISO 27001 Protocol
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-full bg-[#ebc071] text-[#1d1200] font-bold text-[14px] flex items-center justify-center mb-3">1</div>
                      <h4 className="font-semibold text-white text-[15px]">Pre-Assessment</h4>
                      <p className="text-[12px] text-[#7a92b0] mt-1">48-hour exhaustive statutory review before formal retainer execution.</p>
                    </div>
                    <span className="text-[11px] text-[#d7e2ff] font-semibold mt-4">Zero Commitment</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-full bg-white/20 text-white font-bold text-[14px] flex items-center justify-center mb-3">2</div>
                      <h4 className="font-semibold text-white text-[15px]">Dossier Build</h4>
                      <p className="text-[12px] text-[#7a92b0] mt-1">Affidavit preparation, statutory petitions, sworn translation, and verification.</p>
                    </div>
                    <span className="text-[11px] text-[#d7e2ff] font-semibold mt-4">Stage 1 Escrow Release</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-full bg-white/20 text-white font-bold text-[14px] flex items-center justify-center mb-3">3</div>
                      <h4 className="font-semibold text-white text-[15px]">Consular Grant</h4>
                      <p className="text-[12px] text-[#7a92b0] mt-1">Representation through biometrics, consular interview, and physical visa dispatch.</p>
                    </div>
                    <span className="text-[11px] text-[#ebc071] font-semibold mt-4">Stage 2 Completion</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#4a607a]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[20px] text-[#ebc071]">verified</span>
                    <span className="text-[12px] text-white">All cases handled directly by named Partners, not junior paralegals.</span>
                  </div>
                  <button
                    onClick={() => onOpenConsultationModal('Retainer Protocol Inquiry')}
                    className="px-5 py-2.5 rounded-lg bg-[#ebc071] text-[#1d1200] font-bold text-[13px] hover:bg-[#ffdea6] transition-colors whitespace-nowrap"
                  >
                    Review Sample Retainer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Self-Assessment Calculator & Direct Booking */}
      <section className="w-full py-16 bg-[#f1f3ff]">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#e8edff] grid grid-cols-1 lg:grid-cols-12">
            {/* Left assessment form */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded bg-[#c7dffd] text-[#00152a] text-[11px] font-bold uppercase">
                    Immediate Assessment
                  </span>
                  <span className="text-[12px] text-[#4a607a]">Takes under 2 minutes</span>
                </div>
                <h3 className="font-display text-[26px] sm:text-[32px] text-[#00152a] font-bold tracking-tight">
                  Evaluate Your Sovereign Immigration Eligibility
                </h3>
                <p className="text-[14px] text-[#43474d] mt-2 mb-8">
                  Select your target profile parameters to view actionable pathways and receive an attorney evaluation memo within one business day.
                </p>

                <form onSubmit={handleRunAssessment} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-semibold text-[#00152a]">Primary Citizenship</label>
                    <select
                      value={calcForm.citizenship}
                      onChange={(e) => setCalcForm({ ...calcForm, citizenship: e.target.value })}
                      className="h-11 px-3.5 rounded-lg bg-[#f1f3ff] text-[#00152a] text-[13px] outline-none focus:ring-2 focus:ring-[#102a43]"
                    >
                      <option>United States / Canada</option>
                      <option>United Kingdom / Ireland</option>
                      <option>European Union Member</option>
                      <option>India / South Asia</option>
                      <option>UAE / GCC Region</option>
                      <option>Iran / MENA</option>
                      <option>China / East Asia</option>
                      <option>Other Sovereign Nation</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-semibold text-[#00152a]">Target Destination</label>
                    <select
                      value={calcForm.destination}
                      onChange={(e) => setCalcForm({ ...calcForm, destination: e.target.value })}
                      className="h-11 px-3.5 rounded-lg bg-[#f1f3ff] text-[#00152a] text-[13px] outline-none focus:ring-2 focus:ring-[#102a43]"
                    >
                      <option>United Kingdom</option>
                      <option>Canada</option>
                      <option>United States</option>
                      <option>Germany & European Union</option>
                      <option>Australia / New Zealand</option>
                      <option>Portugal (Golden Visa)</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-semibold text-[#00152a]">Primary Profile Category</label>
                    <select
                      value={calcForm.category}
                      onChange={(e) => setCalcForm({ ...calcForm, category: e.target.value })}
                      className="h-11 px-3.5 rounded-lg bg-[#f1f3ff] text-[#00152a] text-[13px] outline-none focus:ring-2 focus:ring-[#102a43]"
                    >
                      <option>Senior Executive / Director</option>
                      <option>Technology Founder / Innovator</option>
                      <option>HNW Investor / Capital Allocator</option>
                      <option>Academic / Medical Specialist</option>
                      <option>Corporate Transferee</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-semibold text-[#00152a]">Relocation Horizon</label>
                    <select
                      value={calcForm.horizon}
                      onChange={(e) => setCalcForm({ ...calcForm, horizon: e.target.value })}
                      className="h-11 px-3.5 rounded-lg bg-[#f1f3ff] text-[#00152a] text-[13px] outline-none focus:ring-2 focus:ring-[#102a43]"
                    >
                      <option>Immediate (1 – 3 months)</option>
                      <option>Medium-Term (3 – 6 months)</option>
                      <option>Next Calendar Year</option>
                      <option>Strategic Plan (12+ months)</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2 pt-2">
                    <button
                      type="submit"
                      className="w-full h-11 px-6 rounded-lg bg-[#102a43] hover:bg-[#00152a] text-white text-[13px] font-semibold tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[18px]">calculate</span>
                      <span>Calculate Eligible Streams & Match Counsel</span>
                    </button>
                  </div>
                </form>

                {calcResult && (
                  <div className="mt-6 p-4 rounded-xl bg-[#c7dffd]/30 border border-[#4a607a]/30 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#00152a] text-[15px]">{calcResult.headline}</span>
                      <span className="px-2 py-0.5 rounded bg-[#ffdea6] text-[#271900] text-[11px] font-bold">
                        Pre-Screen Verified
                      </span>
                    </div>
                    <p className="text-[13px] text-[#43474d] leading-relaxed">
                      {calcResult.details}
                    </p>
                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={() => onOpenConsultationModal(calcResult.headline)}
                        className="px-4 py-1.5 rounded-lg bg-[#102a43] text-white text-[12px] font-semibold hover:bg-[#00152a]"
                      >
                        Book Partner Consult for this Result
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-[#e8edff] flex items-center gap-4 text-[#4a607a] text-[12px]">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">lock</span>
                  Encrypted Client Intake
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                  Zero Commercial Bias
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  24h Counsel SLA
                </span>
              </div>
            </div>

            {/* Right image & direct booking module */}
            <div className="lg:col-span-5 bg-[#00152a] p-6 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden border-l border-[#4a607a]/30">
              <div
                className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30"
                style={{ backgroundImage: `url(${COUNSEL_BRIEFING_IMG})` }}
              />

              <div className="relative z-10">
                <span className="text-[11px] text-[#ebc071] uppercase font-semibold tracking-wider">
                  Private Advisory Session
                </span>
                <h3 className="font-display text-[24px] sm:text-[28px] font-bold text-white mt-2 leading-tight">
                  Speak Directly with Senior Immigration Counsel
                </h3>
                <p className="text-[13px] text-[#d7e2ff] mt-3 leading-relaxed">
                  Book a discrete, 45-minute tele-briefing or chambers appointment at our London Mayfair, Toronto Bay Adelaide, or Dubai DIFC offices.
                </p>

                <div className="my-6 p-4 rounded-xl bg-white/10 backdrop-blur-md flex flex-col gap-3 border border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[20px] text-[#ebc071]">calendar_today</span>
                    <span className="text-[13px] text-white">Same-week priority slots reserved for executives</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[20px] text-[#ebc071]">draw</span>
                    <span className="text-[13px] text-white">Formal written legal opinion included post-session</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex flex-col gap-3">
                <button
                  onClick={() => onOpenConsultationModal('Private Advisory Session')}
                  className="w-full h-11 px-5 rounded-lg bg-white text-[#00152a] hover:bg-[#f1f3ff] text-[13px] font-bold tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">event_available</span>
                  <span>Reserve Counsel Briefing</span>
                </button>
                <span className="text-center text-[12px] text-[#7a92b0]">
                  Or call private desk: +44 (0) 20 7946 0988
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
