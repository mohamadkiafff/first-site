import React from 'react';
import { PARTNERS, CHAMBERS } from '../../data/mockData';

interface AboutScreenProps {
  onOpenConsultationModal: (subject?: string) => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onOpenConsultationModal }) => {
  return (
    <div className="flex flex-col w-full">
      {/* Immersive Editorial Top Scrim */}
      <section className="relative w-full overflow-hidden bg-[#00152a] text-white pt-24 pb-20 lg:pb-28">
        <div
          className="absolute inset-0 z-0 opacity-25 bg-cover bg-center mix-blend-luminosity scale-105"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD1s65LeKcPVw5jj1PUegtEreoqMlRFGztyqtDSOehM_Xb17gzI1vgLeoAvWiP8Hn9ha2BiVBnbeZq_XOkxfGCO_2qtl0rvK8HhCVgpUMOMd9gBQObPVEOxpkMJKb8A3fgbqi4uYIMVJlDNPivI5gtHXbarpmKzwIUdiIdNsKukEudawajIrfUf16PfErsKbb5Jf4pM_5Wr-DV_OU3ndDxspNCPEa53O2dQt78S4mP9PPaM5BrHbpcsAQ')`,
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#00152a] via-[#00152a]/80 to-[#00152a]/50" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12">
          {/* Breadcrumb & Tag */}
          <div className="flex flex-wrap items-center gap-2 mb-6 text-[12px] uppercase tracking-widest text-[#d1e4ff]">
            <span>Institutional Profile</span>
            <span className="material-symbols-outlined text-[14px] opacity-60">chevron_right</span>
            <span className="text-[#ebc071]">Chambers & Governance</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md self-start text-[#ebc071] text-[12px] font-semibold">
                <span className="material-symbols-outlined text-[16px]">verified_user</span>
                <span>Regulated International Legal Advisory</span>
              </div>
              <h1 className="font-display text-[36px] sm:text-[46px] lg:text-[54px] text-white font-bold tracking-tight leading-tight max-w-4xl">
                Our Chambers & Legal Governance
              </h1>
              <p className="text-[17px] text-[#d7e2ff] max-w-2xl leading-relaxed">
                Navigating complex sovereign immigration law with absolute fiduciary integrity, cross-border jurisdictional mastery, and private-client discretion.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md text-white max-w-xs border border-white/15 shadow-sm">
                <div className="flex items-center gap-2 text-[#ebc071] text-[12px] font-semibold uppercase tracking-wider mb-1">
                  <span className="material-symbols-outlined text-[16px]">gavel</span>
                  Consular Standing
                </div>
                <p className="text-[13px] text-[#d7e2ff] leading-relaxed">
                  Accredited counsel retained directly by sovereign wealth officers, executive boards, and international family offices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Institutional Metrics Strip (Overlapping Bento Ribbon) */}
      <section className="relative z-20 max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12 -mt-10 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 lg:p-6 rounded-2xl bg-white shadow-xl border border-[#e8edff]">
          <div className="p-4 rounded-xl bg-[#f1f3ff] flex flex-col justify-between">
            <span className="material-symbols-outlined text-[#4a607a] text-[28px] mb-2">history_edu</span>
            <div>
              <div className="font-display text-[28px] sm:text-[34px] text-[#00152a] font-bold tracking-tight">14+ Years</div>
              <p className="text-[13px] text-[#43474d] font-semibold mt-1">Cross-Border Practice</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#f1f3ff] flex flex-col justify-between">
            <span className="material-symbols-outlined text-[#4a607a] text-[28px] mb-2">travel_explore</span>
            <div>
              <div className="font-display text-[28px] sm:text-[34px] text-[#00152a] font-bold tracking-tight">42</div>
              <p className="text-[13px] text-[#43474d] font-semibold mt-1">Sovereign Frameworks</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#f1f3ff] flex flex-col justify-between">
            <span className="material-symbols-outlined text-[#4a607a] text-[28px] mb-2">verified</span>
            <div>
              <div className="font-display text-[28px] sm:text-[34px] text-[#00152a] font-bold tracking-tight">99.1%</div>
              <p className="text-[13px] text-[#43474d] font-semibold mt-1">Lodging Accuracy Rate</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#102a43] text-white flex flex-col justify-between shadow-sm">
            <span className="material-symbols-outlined text-[#ebc071] text-[28px] mb-2">apartment</span>
            <div>
              <div className="font-display text-[28px] sm:text-[34px] text-white font-bold tracking-tight">4 Chambers</div>
              <p className="text-[13px] text-[#d7e2ff] font-semibold mt-1">London · Toronto · Dubai · Frankfurt</p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Mission & Jurisprudential Philosophy */}
      <section className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#4a607a] uppercase tracking-widest">
              <span className="w-5 h-[2px] bg-[#4a607a]" />
              Jurisprudential Philosophy
            </div>
            <h2 className="font-display text-[30px] sm:text-[36px] text-[#00152a] font-bold tracking-tight leading-tight">
              Where Sovereign Law Meets Fiduciary Stewardship
            </h2>
            <p className="text-[15px] text-[#43474d] leading-relaxed">
              Unlike volume-driven processing agencies, Aegis operates as an integrated international legal partnership. We treat cross-border status as an enduring asset class: shielding our clients against volatile statutory shifts, regulatory sanctions, and inter-jurisdictional tax friction.
            </p>
            <p className="text-[15px] text-[#43474d] leading-relaxed">
              From diplomatic escalations to complex corporate transfer litigation, our chambers manage every dossier under strict solicitor-client privilege, utilizing sovereign appellate channels directly.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <div className="flex items-center gap-2 text-[#00152a] font-semibold text-[14px]">
                <span className="material-symbols-outlined text-[#49607c]">encrypted</span>
                Privileged Counsel
              </div>
              <span className="text-[#c3c6ce]">·</span>
              <div className="flex items-center gap-2 text-[#00152a] font-semibold text-[14px]">
                <span className="material-symbols-outlined text-[#49607c]">balance</span>
                Zero Third-Party Brokers
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white shadow-sm border border-[#e8edff] flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#f1f3ff] flex items-center justify-center text-[#00152a]">
                <span className="material-symbols-outlined text-[24px]">account_balance</span>
              </div>
              <h3 className="font-semibold text-[#00152a] text-[16px]">Sovereign Precedent Review</h3>
              <p className="text-[13px] text-[#43474d] leading-relaxed">
                Every submission undergoes multi-tiered scrutiny by dual-qualified barristers before transmission to ministerial consular desks.
              </p>
              <div className="mt-auto pt-2 text-[#49607c] font-semibold text-[12px] flex items-center gap-1">
                <span>Ministerial Protocol</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-sm border border-[#e8edff] flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#f1f3ff] flex items-center justify-center text-[#00152a]">
                <span className="material-symbols-outlined text-[24px]">policy</span>
              </div>
              <h3 className="font-semibold text-[#00152a] text-[16px]">Statutory Volatility Hedging</h3>
              <p className="text-[13px] text-[#43474d] leading-relaxed">
                We actively monitor parliamentary gazettes and executive orders in real time to grandfather applications prior to legislative changes.
              </p>
              <div className="mt-auto pt-2 text-[#49607c] font-semibold text-[12px] flex items-center gap-1">
                <span>Legislative Tracking</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-sm border border-[#e8edff] flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#f1f3ff] flex items-center justify-center text-[#00152a]">
                <span className="material-symbols-outlined text-[24px]">security</span>
              </div>
              <h3 className="font-semibold text-[#00152a] text-[16px]">Full Fiduciary Confidentiality</h3>
              <p className="text-[13px] text-[#43474d] leading-relaxed">
                Client identity data and asset balance sheets are secured within air-gapped chambers under Swiss and UK data retention standards.
              </p>
              <div className="mt-auto pt-2 text-[#49607c] font-semibold text-[12px] flex items-center gap-1">
                <span>AES-256 Protocol</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#102a43] text-white flex flex-col gap-3 shadow-md border border-[#4a607a]/30">
              <div className="w-10 h-10 rounded-lg bg-[#00152a] flex items-center justify-center text-[#ebc071]">
                <span className="material-symbols-outlined text-[24px]">quick_reference</span>
              </div>
              <h3 className="font-semibold text-white text-[16px]">Priority Concierge Escalation</h3>
              <p className="text-[13px] text-[#7a92b0] leading-relaxed">
                Direct institutional channels for fast-tracked diplomatic filings, emergency evacuation, and time-critical C-Suite relocation.
              </p>
              <div className="mt-auto pt-2 text-[#ebc071] font-semibold text-[12px] flex items-center gap-1">
                <span>Direct Partner Line</span>
                <span className="material-symbols-outlined text-[15px]">north_east</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Senior Counsel Profiles */}
      <section className="w-full bg-[#f1f3ff] py-20 border-y border-[#e8edff]">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[11px] font-semibold text-[#4a607a] uppercase tracking-widest block mb-2">
                Senior Bench
              </span>
              <h2 className="font-display text-[30px] sm:text-[36px] text-[#00152a] font-bold tracking-tight">
                Partners & Regulatory Bench
              </h2>
            </div>
            <p className="text-[14px] text-[#43474d] max-w-md">
              Every file is directly stewarded by partner-level counsel admitted to sovereign bar associations across our core active jurisdictions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARTNERS.map((partner) => (
              <div
                key={partner.id}
                className="group rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md border border-[#e8edff] transition-all flex flex-col"
              >
                <div className="relative h-72 w-full overflow-hidden bg-[#102a43]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={partner.image}
                    alt={partner.alt}
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#00152a]/80 backdrop-blur-md text-white text-[11px] font-semibold">
                    {partner.location}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-[#00152a] text-[16px]">{partner.name}</h3>
                      <span className="material-symbols-outlined text-[#49607c] text-[20px]" title="Senior Partner">
                        verified
                      </span>
                    </div>
                    <p className="text-[12px] text-[#4a607a] font-semibold mt-0.5">{partner.title}</p>

                    <div className="mt-4 flex flex-col gap-2 bg-[#f1f3ff] p-3 rounded-lg border border-[#e8edff]">
                      <div className="text-[11px] text-[#43474d] flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[15px] text-[#4a607a]">gavel</span>
                        <span><strong>Admitted:</strong> {partner.admittedBar}</span>
                      </div>
                      <div className="text-[11px] text-[#43474d] flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[15px] text-[#4a607a]">domain</span>
                        <span className="truncate"><strong>Focus:</strong> {partner.practiceFocus}</span>
                      </div>
                      <div className="text-[11px] text-[#43474d] flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[15px] text-[#4a607a]">translate</span>
                        <span><strong>Languages:</strong> {partner.languages.join(', ')}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenConsultationModal(`Briefing with ${partner.name}`)}
                    className="inline-flex items-center justify-between text-[#00152a] hover:text-[#49607c] font-semibold text-[13px] pt-1 transition-colors w-full text-left"
                  >
                    <span>Request Partner Session</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Firm Principles & Governance Pillars */}
      <section className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12 py-20 w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] text-[#4a607a] font-semibold uppercase tracking-widest block mb-2">
            Our Operating Code
          </span>
          <h2 className="font-display text-[30px] sm:text-[36px] text-[#00152a] font-bold tracking-tight">
            Governance & Fiduciary Pillars
          </h2>
          <p className="text-[15px] text-[#43474d] mt-3 leading-relaxed">
            Engineered for utmost transparency, legal integrity, and strict confidentiality across all multinational engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-[#e8edff] flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-[#f1f3ff] flex items-center justify-center text-[#00152a] mb-6">
              <span className="material-symbols-outlined text-[26px]">receipt_long</span>
            </div>
            <h3 className="font-semibold text-[#00152a] text-[16px] mb-2">Transparent Retainer</h3>
            <p className="text-[13px] text-[#43474d] leading-relaxed mb-6 flex-grow">
              All client representation is bound by fixed-fee statutory mandates. Zero hidden disbursement markups, opaque contingency stakes, or surprise billable hours.
            </p>
            <div className="bg-[#f1f3ff] p-3 rounded-lg flex items-center gap-2 text-[#00152a] text-[12px] font-semibold">
              <span className="material-symbols-outlined text-[#49607c] text-[18px]">verified</span>
              <span>Fixed Escrow Protocols</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow-sm border border-[#e8edff] flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-[#f1f3ff] flex items-center justify-center text-[#00152a] mb-6">
              <span className="material-symbols-outlined text-[26px]">badge</span>
            </div>
            <h3 className="font-semibold text-[#00152a] text-[16px] mb-2">Direct Counsel Access</h3>
            <p className="text-[13px] text-[#43474d] leading-relaxed mb-6 flex-grow">
              Applicants deal directly with licensed barristers and solicitors, never delegated to administrative processors or non-credentialed sales clerks.
            </p>
            <div className="bg-[#f1f3ff] p-3 rounded-lg flex items-center gap-2 text-[#00152a] text-[12px] font-semibold">
              <span className="material-symbols-outlined text-[#49607c] text-[18px]">person_check</span>
              <span>Solicitor Privilege Guaranteed</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow-sm border border-[#e8edff] flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-[#f1f3ff] flex items-center justify-center text-[#00152a] mb-6">
              <span className="material-symbols-outlined text-[26px]">lock</span>
            </div>
            <h3 className="font-semibold text-[#00152a] text-[16px] mb-2">Bank-Grade Vaults</h3>
            <p className="text-[13px] text-[#43474d] leading-relaxed mb-6 flex-grow">
              Biometric scans, financial proof of funds, and legal contracts are encrypted at rest with hardware-level AES-256 and stored on sovereign Swiss servers.
            </p>
            <div className="bg-[#f1f3ff] p-3 rounded-lg flex items-center gap-2 text-[#00152a] text-[12px] font-semibold">
              <span className="material-symbols-outlined text-[#49607c] text-[18px]">vpn_key</span>
              <span>ISO/IEC 27001 Certified</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow-sm border border-[#e8edff] flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-[#f1f3ff] flex items-center justify-center text-[#00152a] mb-6">
              <span className="material-symbols-outlined text-[26px]">filter_alt</span>
            </div>
            <h3 className="font-semibold text-[#00152a] text-[16px] mb-2">Conflict Screening</h3>
            <p className="text-[13px] text-[#43474d] leading-relaxed mb-6 flex-grow">
              Every incoming petition undergoes an immediate algorithmic and board-level conflict check to ensure alignment with domestic sanctions and international registries.
            </p>
            <div className="bg-[#f1f3ff] p-3 rounded-lg flex items-center gap-2 text-[#00152a] text-[12px] font-semibold">
              <span className="material-symbols-outlined text-[#49607c] text-[18px]">rule</span>
              <span>Dual KYC / AML Clearance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Worldwide Chambers & Diplomatic Desks */}
      <section className="w-full bg-[#f1f3ff] py-20 border-y border-[#e8edff]">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[11px] font-semibold text-[#4a607a] uppercase tracking-widest block mb-2">
                Worldwide Presence
              </span>
              <h2 className="font-display text-[30px] sm:text-[36px] text-[#00152a] font-bold tracking-tight">
                Our Chambers & Diplomatic Desks
              </h2>
            </div>
            <p className="text-[14px] text-[#43474d] max-w-lg leading-relaxed">
              Physical offices operating across Greenwich Mean Time, Eastern Time, Central European Time, and Gulf Standard Time to ensure 24/7 continuity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CHAMBERS.map((ch) => (
              <div
                key={ch.id}
                className="p-8 rounded-2xl bg-white shadow-sm border border-[#e8edff] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#f1f3ff] text-[#00152a] text-[11px] font-semibold tracking-wide uppercase">
                      {ch.title}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[#4a607a] text-[12px] font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      {ch.timezone}
                    </span>
                  </div>
                  <h3 className="font-display text-[20px] font-bold text-[#00152a]">{ch.city} Chambers</h3>
                  <p className="text-[14px] text-[#43474d] mt-2 leading-relaxed">{ch.address}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 bg-[#f1f3ff] p-4 rounded-xl border border-[#e8edff]">
                    <div>
                      <span className="text-[11px] text-[#4a607a] uppercase tracking-wider block font-semibold">
                        Consular Liaison
                      </span>
                      <p className="text-[13px] text-[#00152a] font-medium mt-1">{ch.consularLiaison}</p>
                    </div>
                    <div>
                      <span className="text-[11px] text-[#4a607a] uppercase tracking-wider block font-semibold">
                        Secured Telephone
                      </span>
                      <p className="text-[13px] text-[#00152a] font-medium mt-1">{ch.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#e8edff] flex items-center justify-between">
                  <span className="text-[12px] text-[#4a607a]">{ch.license}</span>
                  <button
                    onClick={() => onOpenConsultationModal(`Appointment at ${ch.city} Chambers`)}
                    className="inline-flex items-center gap-1 text-[#00152a] hover:text-[#49607c] font-semibold text-[13px] transition-colors"
                  >
                    <span>Schedule Visit</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Chambers Network Map Visualizer */}
      <section className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12 py-16 w-full">
        <div className="p-8 lg:p-12 rounded-3xl bg-[#102a43] text-white relative overflow-hidden shadow-2xl border border-[#4a607a]/40">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-[11px] text-[#ebc071] uppercase tracking-widest font-semibold">
                Active Diplomatic Network
              </span>
              <h3 className="font-display text-[26px] sm:text-[32px] text-white font-bold leading-tight">
                Seamless Legal Coverage Across Four Financial Continents
              </h3>
              <p className="text-[14px] text-[#d7e2ff] leading-relaxed">
                From the City of London to the DIFC corridor, our barristers hold active credentials to file petitions simultaneously across multiple sovereign courts.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-lg bg-white/10 text-white text-[12px] font-medium">
                  Bilateral Treaty Audits
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/10 text-white text-[12px] font-medium">
                  Extradition Shielding
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/10 text-white text-[12px] font-medium">
                  Cross-Border Tax Conduits
                </span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="w-full h-80 rounded-2xl bg-[#00152a] overflow-hidden shadow-inner relative flex items-center justify-center border border-white/10 p-4">
                {/* Network SVG */}
                <svg className="w-full h-full max-h-72 text-[#ebc071]" fill="none" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
                  {/* Nodes */}
                  <circle cx="160" cy="110" r="7" fill="#ebc071" />
                  <text x="140" y="95" fill="#ffffff" fontFamily="Inter" fontSize="12" fontWeight="600">Toronto</text>

                  <circle cx="280" cy="90" r="9" fill="#ebc071" />
                  <text x="250" y="75" fill="#ffffff" fontFamily="Inter" fontSize="12" fontWeight="700">London Chancery (HQ)</text>

                  <circle cx="330" cy="105" r="7" fill="#ebc071" />
                  <text x="335" y="105" fill="#ffffff" fontFamily="Inter" fontSize="12" fontWeight="600">Frankfurt</text>

                  <circle cx="390" cy="150" r="8" fill="#ebc071" />
                  <text x="400" y="155" fill="#ffffff" fontFamily="Inter" fontSize="12" fontWeight="600">Dubai DIFC</text>

                  <circle cx="500" cy="220" r="7" fill="#ebc071" />
                  <text x="510" y="225" fill="#ffffff" fontFamily="Inter" fontSize="12" fontWeight="600">Sydney</text>

                  {/* Arcs */}
                  <path d="M160 110 Q 220 80 280 90" stroke="currentColor" strokeWidth="1.8" strokeDasharray="4 3" opacity="0.8" />
                  <path d="M280 90 L 330 105" stroke="currentColor" strokeWidth="1.8" strokeDasharray="4 3" opacity="0.8" />
                  <path d="M330 105 Q 360 120 390 150" stroke="currentColor" strokeWidth="1.8" strokeDasharray="4 3" opacity="0.8" />
                  <path d="M390 150 Q 450 180 500 220" stroke="currentColor" strokeWidth="1.8" strokeDasharray="4 3" opacity="0.8" />
                  <path d="M280 90 Q 380 120 500 220" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-Camera Briefing Callout */}
      <section className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12 pb-20 w-full">
        <div className="p-8 lg:p-12 rounded-3xl bg-[#f1f3ff] flex flex-col md:flex-row items-center justify-between gap-8 border border-[#e8edff] shadow-sm">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="flex items-center gap-2 text-[#4a607a] text-[13px] font-semibold">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
              <span>Statutory Accreditation & Bar Oversight</span>
            </div>
            <h3 className="font-display text-[24px] sm:text-[28px] text-[#00152a] font-bold">
              Arrange an In-Camera Partner Briefing
            </h3>
            <p className="text-[14px] text-[#43474d] leading-relaxed">
              Initial consultations are conducted under solicitor-client privilege. Our senior counsel reviews your nationality profile, corporate shareholding, and immediate relocation timelines before formal engagement.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <button
              onClick={() => onOpenConsultationModal('In-Camera Partner Briefing')}
              className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 rounded-lg bg-[#00152a] hover:bg-[#102a43] text-white text-[13px] font-semibold tracking-wide transition-all shadow-sm"
            >
              <span>Book Confidential Session</span>
              <span className="material-symbols-outlined ml-2 text-[18px]">calendar_today</span>
            </button>
            <button
              onClick={() => alert('Downloading Aegis Chambers Governance & Compliance Charter (PDF)...')}
              className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 rounded-lg bg-white hover:bg-[#e8edff] text-[#00152a] border border-[#c3c6ce] text-[13px] font-semibold tracking-wide transition-all shadow-sm"
            >
              <span>Governance Charter</span>
              <span className="material-symbols-outlined ml-2 text-[18px]">download</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
