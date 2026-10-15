import React, { useState, useMemo } from 'react';
import { CountryInfo } from '../../types';
import { COUNTRIES, QUAD_PANORAMA, CITY_IMAGES } from '../../data/mockData';

interface CountriesScreenProps {
  onSelectCountry: (country: CountryInfo) => void;
  onOpenConsultationModal: (subject?: string) => void;
}

export const CountriesScreen: React.FC<CountriesScreenProps> = ({
  onSelectCountry,
  onOpenConsultationModal,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<'all' | 'north-america' | 'uk-ireland' | 'eu' | 'apac'>('all');
  const [sortCriteria, setSortCriteria] = useState<'fastest' | 'family' | 'business' | 'points'>('fastest');

  // Filtered and sorted countries
  const filteredCountries = useMemo(() => {
    return COUNTRIES.filter((c) => {
      const matchesRegion = selectedRegion === 'all' || c.region === selectedRegion;
      const matchesSearch =
        searchQuery === '' ||
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.keyPrograms.some((kp) => kp.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesRegion && matchesSearch;
    }).sort((a, b) => {
      if (sortCriteria === 'fastest') {
        return a.processingTime.localeCompare(b.processingTime);
      }
      return a.name.localeCompare(b.name);
    });
  }, [searchQuery, selectedRegion, sortCriteria]);

  return (
    <div className="flex flex-col w-full">
      {/* Editorial Header & Page Banner */}
      <section className="w-full bg-[#f1f3ff] py-12 md:py-16 border-b border-[#e8edff]">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-10">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#c7dffd] text-[#00152a] text-[11px] font-semibold uppercase tracking-widest">
                <span className="material-symbols-outlined text-[15px]">public</span>
                Global Jurisdictions & Pathways
              </div>
              <h1 className="font-display text-[34px] sm:text-[44px] text-[#00152a] font-bold tracking-tight leading-tight">
                Strategic Destinations for Relocation, Investment & Permanent Settlement
              </h1>
              <p className="text-[17px] text-[#43474d] leading-relaxed">
                In-depth statutory guidelines, quota allocations, labor market demands, and legal frameworks across key global migration hubs. Evaluated and managed under senior consular counsel.
              </p>
            </div>

            <div className="flex flex-wrap lg:flex-col items-start gap-3 w-full lg:w-auto">
              <a
                href="#matrix-view"
                className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-[#102a43] text-white text-[13px] font-semibold transition-all hover:bg-[#00152a] shadow-sm"
              >
                <span className="material-symbols-outlined mr-2 text-[18px]">table_chart</span>
                View Comparison Matrix
              </a>
              <button
                onClick={() => onOpenConsultationModal('Multi-Jurisdiction Assessment')}
                className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-white text-[#00152a] border border-[#e8edff] text-[13px] font-semibold transition-all hover:bg-[#e8edff] shadow-sm"
              >
                <span className="material-symbols-outlined mr-2 text-[18px]">support_agent</span>
                Inquire with Senior Desk
              </button>
            </div>
          </div>

          {/* Quick KPI Stats Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#e8edff]">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#e8edff] flex flex-col">
              <span className="text-[11px] text-[#4a607a] uppercase tracking-wider font-semibold">
                Sovereign Territories
              </span>
              <span className="font-display text-[32px] sm:text-[36px] text-[#00152a] font-bold mt-1">42</span>
              <span className="text-[12px] text-[#43474d] mt-1">Accredited Bilateral Desks</span>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#e8edff] flex flex-col">
              <span className="text-[11px] text-[#4a607a] uppercase tracking-wider font-semibold">
                Visa Frameworks
              </span>
              <span className="font-display text-[32px] sm:text-[36px] text-[#00152a] font-bold mt-1">120+</span>
              <span className="text-[12px] text-[#43474d] mt-1">Active Statutory Streams</span>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#e8edff] flex flex-col">
              <span className="text-[11px] text-[#4a607a] uppercase tracking-wider font-semibold">
                Compliance Reliability
              </span>
              <span className="font-display text-[32px] sm:text-[36px] text-[#00152a] font-bold mt-1">99.1%</span>
              <span className="text-[12px] text-[#43474d] mt-1">Consular Acceptance Rate</span>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#e8edff] flex flex-col">
              <span className="text-[11px] text-[#4a607a] uppercase tracking-wider font-semibold">
                Statutory SLA
              </span>
              <span className="font-display text-[32px] sm:text-[36px] text-[#00152a] font-bold mt-1">100%</span>
              <span className="text-[12px] text-[#43474d] mt-1">Fixed Legal Milestone Tracking</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Regional Filtering & Search Hub */}
      <section className="w-full bg-white py-6 shadow-sm border-b border-[#e8edff]">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12 space-y-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#4a607a] text-[20px]">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by country, language, or visa category (e.g. Canada Express Entry, UK Global Talent, EU Blue Card)..."
                className="w-full h-11 pl-11 pr-4 bg-[#f1f3ff] text-[#041b3c] rounded-lg text-[13px] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#102a43] border border-transparent focus:border-[#102a43] transition-colors"
              />
            </div>

            {/* Sorting Dropdown */}
            <div className="flex items-center gap-2 self-end lg:self-auto">
              <span className="text-[11px] text-[#4a607a] font-semibold uppercase whitespace-nowrap">Sort:</span>
              <div className="relative">
                <select
                  value={sortCriteria}
                  onChange={(e) => setSortCriteria(e.target.value as any)}
                  className="h-11 pl-4 pr-10 bg-[#f1f3ff] text-[#041b3c] font-semibold text-[13px] rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#102a43]"
                >
                  <option value="fastest">Fastest Processing Timelines</option>
                  <option value="family">Popular for Families & Minors</option>
                  <option value="business">Business & Direct Investment</option>
                  <option value="points">Points-Based Talent Streams</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#4a607a] text-[18px]">
                  expand_more
                </span>
              </div>
            </div>
          </div>

          {/* Regional Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {[
              { id: 'all', label: 'All Destinations' },
              { id: 'north-america', label: 'North America (Canada, USA)' },
              { id: 'uk-ireland', label: 'United Kingdom & Ireland' },
              { id: 'eu', label: 'European Union (Germany, Portugal, Spain)' },
              { id: 'apac', label: 'Oceania & Asia-Pacific (Australia)' },
            ].map((chip) => (
              <button
                key={chip.id}
                onClick={() => setSelectedRegion(chip.id as any)}
                className={`px-4 py-2 rounded-lg text-[13px] transition-all whitespace-nowrap font-medium ${
                  selectedRegion === chip.id
                    ? 'bg-[#102a43] text-white shadow-sm font-semibold'
                    : 'bg-[#f1f3ff] text-[#43474d] hover:text-[#00152a] hover:bg-[#e8edff]'
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Metropolitan Panorama (Image 5 Inspiration) */}
      <section className="w-full bg-[#f1f3ff] py-12">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] text-[#4a607a] font-semibold uppercase tracking-widest">
                Global Metropolises
              </span>
              <h2 className="font-display text-[26px] sm:text-[32px] text-[#00152a] font-bold mt-1">
                Tier-One Sovereign Capitals
              </h2>
            </div>
            <p className="text-[13px] text-[#43474d] max-w-md leading-relaxed">
              Continuous consular monitoring across pivotal financial jurisdictions: statutory quotas, active draw score thresholds, and processing queue velocity.
            </p>
          </div>

          {/* Hero Visual Panorama with Overlay Cards */}
          <div className="relative w-full rounded-2xl overflow-hidden bg-[#00152a] shadow-xl border border-[#4a607a]/30">
            <img
              alt="Panoramic view of London, Toronto, Sydney, and Frankfurt skylines"
              className="w-full h-[360px] md:h-[420px] object-cover opacity-85"
              src={QUAD_PANORAMA}
            />

            {/* Metropolitan Snapshot Overlay Strip */}
            <div className="absolute bottom-0 inset-x-0 p-4 md:p-6 bg-gradient-to-t from-[#00152a] via-[#00152a]/85 to-transparent">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {/* London */}
                <div className="bg-[#102a43]/90 backdrop-blur-md p-4 rounded-xl text-white border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-[15px] text-white">London</span>
                      <span className="px-2 py-0.5 rounded text-[10px] uppercase bg-white/15 text-[#ebc071] font-bold">
                        UK Hub
                      </span>
                    </div>
                    <p className="text-[12px] text-[#7a92b0]">Priority Tech & FinTech Stream</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-[#7a92b0]">
                    <span>Fast-Track</span>
                    <span className="text-white font-semibold">3–8 Weeks</span>
                  </div>
                </div>

                {/* Toronto */}
                <div className="bg-[#102a43]/90 backdrop-blur-md p-4 rounded-xl text-white border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-[15px] text-white">Toronto</span>
                      <span className="px-2 py-0.5 rounded text-[10px] uppercase bg-white/15 text-[#ebc071] font-bold">
                        CA Hub
                      </span>
                    </div>
                    <p className="text-[12px] text-[#7a92b0]">Direct Permanent Residency</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-[#7a92b0]">
                    <span>Express Entry</span>
                    <span className="text-white font-semibold">6–9 Months</span>
                  </div>
                </div>

                {/* Sydney */}
                <div className="bg-[#102a43]/90 backdrop-blur-md p-4 rounded-xl text-white border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-[15px] text-white">Sydney</span>
                      <span className="px-2 py-0.5 rounded text-[10px] uppercase bg-white/15 text-[#ebc071] font-bold">
                        AU Hub
                      </span>
                    </div>
                    <p className="text-[12px] text-[#7a92b0]">Subclass 189/190 Independent</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-[#7a92b0]">
                    <span>PR Allocation</span>
                    <span className="text-white font-semibold">Direct PR</span>
                  </div>
                </div>

                {/* Frankfurt */}
                <div className="bg-[#102a43]/90 backdrop-blur-md p-4 rounded-xl text-white border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-[15px] text-white">Frankfurt</span>
                      <span className="px-2 py-0.5 rounded text-[10px] uppercase bg-white/15 text-[#ebc071] font-bold">
                        EU Hub
                      </span>
                    </div>
                    <p className="text-[12px] text-[#7a92b0]">EU Blue Card & Chancenkarte</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-[#7a92b0]">
                    <span>Processing</span>
                    <span className="text-white font-semibold">8–12 Weeks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Country Cards Grid */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] text-[#4a607a] font-semibold uppercase tracking-widest">
                Sovereign Dossiers
              </span>
              <h2 className="font-display text-[30px] sm:text-[36px] text-[#00152a] font-bold mt-1">
                Detailed Jurisdiction Profiles
              </h2>
            </div>
            <p className="text-[14px] text-[#43474d] max-w-xl">
              Complete statutory guidelines, quota allocations, category requirements, and immediate direct pathways to permanent domiciliation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCountries.map((country) => (
              <article
                key={country.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-[#e8edff] transition-all flex flex-col"
              >
                <div className="relative h-48 w-full bg-[#102a43]">
                  <img
                    className="w-full h-full object-cover"
                    src={country.image}
                    alt={country.alt}
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded bg-white/95 backdrop-blur text-[12px] text-[#00152a] font-bold shadow-sm">
                      {country.flag} {country.name}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#c7dffd] text-[#00152a] text-[11px] font-semibold">
                      {country.regionLabel}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 rounded bg-white/95 backdrop-blur text-[#00152a] text-[11px] font-semibold flex items-center gap-1.5 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      {country.statusBadge}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-display text-[18px] font-bold text-[#00152a]">
                      {country.headline}
                    </h3>
                    <p className="text-[13px] text-[#43474d] leading-relaxed">
                      {country.summary}
                    </p>

                    {/* Flagship Programs */}
                    <div className="space-y-2">
                      <span className="text-[11px] text-[#4a607a] uppercase tracking-wider block font-semibold">
                        Key Statutory Programs
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {country.keyPrograms.map((kp, kidx) => (
                          <span
                            key={kidx}
                            className="px-2.5 py-1 rounded bg-[#f1f3ff] text-[#00152a] text-[11px] font-medium"
                          >
                            {kp}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics Strip */}
                    <div className="bg-[#f1f3ff] p-3.5 rounded-xl grid grid-cols-3 gap-2 text-center border border-[#e8edff]">
                      <div>
                        <span className="text-[10px] text-[#4a607a] uppercase font-semibold block">Processing</span>
                        <span className="text-[14px] font-bold text-[#00152a] block mt-0.5">{country.processingTime}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#4a607a] uppercase font-semibold block">Direct PR</span>
                        <span className="text-[14px] font-bold text-[#00152a] block mt-0.5 truncate">{country.directPr.split(' ')[0]}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#4a607a] uppercase font-semibold block">Capital</span>
                        <span className="text-[14px] font-bold text-[#00152a] block mt-0.5 truncate">{country.minInvestment.split(' ')[0]}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={() => onSelectCountry(country)}
                      className="flex-1 text-center py-2.5 px-4 rounded-lg bg-[#102a43] text-white font-semibold text-[13px] transition-all hover:bg-[#00152a] shadow-sm"
                    >
                      Explore {country.name} Guide
                    </button>
                    <button
                      onClick={() => onOpenConsultationModal(`${country.name} Relocation`)}
                      className="p-2.5 rounded-lg bg-[#f1f3ff] text-[#4a607a] hover:text-[#00152a] hover:bg-[#e8edff] transition-colors"
                      title={`Book Consultation for ${country.name}`}
                    >
                      <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sovereign Mobility Comparison Matrix */}
      <section className="w-full bg-[#f1f3ff] py-16" id="matrix-view">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] text-[#4a607a] font-semibold uppercase tracking-widest">
                Statutory Benchmark
              </span>
              <h2 className="font-display text-[30px] sm:text-[36px] text-[#00152a] font-bold mt-1">
                Sovereign Mobility Comparison Matrix
              </h2>
            </div>
            <p className="text-[13px] text-[#43474d] max-w-md">
              Direct legal analysis comparing key institutional parameters, family rights, citizenship obligations, and language requirements across tier-one jurisdictions.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-[#e8edff] overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-[#e8edff] text-[#00152a] text-[13px] font-semibold border-b border-[#d7e2ff]">
                  <th className="py-4 px-6">Statutory Parameters</th>
                  <th className="py-4 px-6">🇨🇦 Canada</th>
                  <th className="py-4 px-6">🇬🇧 United Kingdom</th>
                  <th className="py-4 px-6">🇦🇺 Australia</th>
                  <th className="py-4 px-6">🇩🇪 Germany</th>
                  <th className="py-4 px-6">🇺🇸 United States</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e8edff] text-[13px] text-[#041b3c]">
                <tr className="hover:bg-[#f9f9ff] transition-colors">
                  <td className="py-4 px-6 font-bold text-[#00152a]">Language Benchmark</td>
                  <td className="py-4 px-6">CLB 7–9 (IELTS / CELPIP / TEF)</td>
                  <td className="py-4 px-6">CEFR B1–B2 (SELT Test)</td>
                  <td className="py-4 px-6">Competent to Proficient (PTE / IELTS 7+)</td>
                  <td className="py-4 px-6">German A1–B1 or English B2</td>
                  <td className="py-4 px-6">No test for EB-1/EB-2 petitions</td>
                </tr>

                <tr className="hover:bg-[#f9f9ff] transition-colors bg-[#f1f3ff]/40">
                  <td className="py-4 px-6 font-bold text-[#00152a]">Spousal Employment Rights</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1 font-semibold text-[#00152a]">
                      <span className="material-symbols-outlined text-[16px] text-[#49607c]">check_circle</span>
                      Open Work Permit
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1 font-semibold text-[#00152a]">
                      <span className="material-symbols-outlined text-[16px] text-[#49607c]">check_circle</span>
                      Full Dependent Rights
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1 font-semibold text-[#00152a]">
                      <span className="material-symbols-outlined text-[16px] text-[#49607c]">check_circle</span>
                      Unrestricted Work
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1 font-semibold text-[#00152a]">
                      <span className="material-symbols-outlined text-[16px] text-[#49607c]">check_circle</span>
                      Automatic Full Rights
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1 font-semibold text-[#00152a]">
                      <span className="material-symbols-outlined text-[16px] text-[#49607c]">check_circle</span>
                      EAD / Derivative PR
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-[#f9f9ff] transition-colors">
                  <td className="py-4 px-6 font-bold text-[#00152a]">Public Healthcare & Schooling</td>
                  <td className="py-4 px-6">Universal Provincial Health + Public K-12 free</td>
                  <td className="py-4 px-6">NHS Coverage (via IHS) + State schooling free</td>
                  <td className="py-4 px-6">Full Medicare access + Public schooling access</td>
                  <td className="py-4 px-6">Statutory Health (GKV) + Tuition-free University</td>
                  <td className="py-4 px-6">Public K-12 free; Private employer health standard</td>
                </tr>

                <tr className="hover:bg-[#f9f9ff] transition-colors bg-[#f1f3ff]/40">
                  <td className="py-4 px-6 font-bold text-[#00152a]">PR & Naturalization Horizon</td>
                  <td className="py-4 px-6">PR immediate; Citizenship in 3 yrs physical stay</td>
                  <td className="py-4 px-6">ILR in 3–5 yrs; Citizenship 12 mos post-ILR</td>
                  <td className="py-4 px-6">PR direct; Citizenship after 4 yrs residence</td>
                  <td className="py-4 px-6">Settlement in 21–27 mos; Citizenship in 3–5 yrs</td>
                  <td className="py-4 px-6">Green Card directly; Citizenship in 5 yrs</td>
                </tr>

                <tr className="hover:bg-[#f9f9ff] transition-colors">
                  <td className="py-4 px-6 font-bold text-[#00152a]">Dual Nationality Stance</td>
                  <td className="py-4 px-6 font-semibold text-[#00152a]">Fully Recognized</td>
                  <td className="py-4 px-6 font-semibold text-[#00152a]">Fully Recognized</td>
                  <td className="py-4 px-6 font-semibold text-[#00152a]">Fully Recognized</td>
                  <td className="py-4 px-6 font-semibold text-[#00152a]">Recognized (2024 Law)</td>
                  <td className="py-4 px-6 font-semibold text-[#00152a]">Fully Recognized</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Procedural Architecture */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] text-[#4a607a] font-semibold uppercase tracking-widest">
              Procedural Governance
            </span>
            <h2 className="font-display text-[30px] sm:text-[36px] text-[#00152a] font-bold">
              How We Structure Multi-Jurisdiction Relocation
            </h2>
            <p className="text-[15px] text-[#43474d] leading-relaxed">
              A methodical four-phase advisory protocol engineered to insulate global families and corporate enterprises against bureaucratic delays and statutory refusals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#f1f3ff] p-6 rounded-2xl flex flex-col justify-between space-y-6 border border-[#e8edff]">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#00152a] text-white flex items-center justify-center font-display text-[22px] font-bold">
                  1
                </div>
                <h3 className="font-semibold text-[#00152a] text-[16px]">Jurisdiction & Tax Audit</h3>
                <p className="text-[13px] text-[#43474d] leading-relaxed">
                  In-depth comparative assessment of professional credentials, global wealth structuring, corporate treaties, and personal relocation prerequisites.
                </p>
              </div>
              <span className="text-[11px] text-[#4a607a] font-semibold uppercase tracking-wider">
                Phase I · 48-Hour Assessment
              </span>
            </div>

            <div className="bg-[#f1f3ff] p-6 rounded-2xl flex flex-col justify-between space-y-6 border border-[#e8edff]">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#102a43] text-white flex items-center justify-center font-display text-[22px] font-bold">
                  2
                </div>
                <h3 className="font-semibold text-[#00152a] text-[16px]">Program Matching & Strategy</h3>
                <p className="text-[13px] text-[#43474d] leading-relaxed">
                  Selection of primary and secondary fallback immigration streams. Drafting statutory arguments to optimize points totals or executive waiver conditions.
                </p>
              </div>
              <span className="text-[11px] text-[#4a607a] font-semibold uppercase tracking-wider">
                Phase II · Milestone Roadmap
              </span>
            </div>

            <div className="bg-[#f1f3ff] p-6 rounded-2xl flex flex-col justify-between space-y-6 border border-[#e8edff]">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#00152a] text-white flex items-center justify-center font-display text-[22px] font-bold">
                  3
                </div>
                <h3 className="font-semibold text-[#00152a] text-[16px]">Statutory Documentation</h3>
                <p className="text-[13px] text-[#43474d] leading-relaxed">
                  Comprehensive dossier preparation: certified legal translations, credential evaluations (ECA / ZAB), police clearances, and consular legal opinions.
                </p>
              </div>
              <span className="text-[11px] text-[#4a607a] font-semibold uppercase tracking-wider">
                Phase III · Legal Hardening
              </span>
            </div>

            <div className="bg-[#f1f3ff] p-6 rounded-2xl flex flex-col justify-between space-y-6 border border-[#e8edff]">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#102a43] text-white flex items-center justify-center font-display text-[22px] font-bold">
                  4
                </div>
                <h3 className="font-semibold text-[#00152a] text-[16px]">Consular Lodgement & Landing</h3>
                <p className="text-[13px] text-[#43474d] leading-relaxed">
                  Direct liaison with sovereign immigration ministries, biometric booking escort, visa grant receipt, and on-ground settlement domiciliation support.
                </p>
              </div>
              <span className="text-[11px] text-[#4a607a] font-semibold uppercase tracking-wider">
                Phase IV · Granted & Landed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Consultation CTA Banner */}
      <section className="w-full bg-[#102a43] text-white py-16 md:py-20" id="consultation-desk">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-[#00152a] rounded-3xl p-8 md:p-14 shadow-2xl border border-[#4a607a]/40 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#372500] text-[#ffdea6] text-[11px] font-semibold uppercase tracking-widest">
                <span className="material-symbols-outlined text-[16px]">verified_user</span>
                Confidential Multi-Country Strategy
              </div>
              <h2 className="font-display text-[28px] sm:text-[36px] text-white font-bold leading-tight">
                Unsure Which Sovereign Framework Fits Your Profile?
              </h2>
              <p className="text-[15px] text-[#7a92b0] leading-relaxed">
                Schedule a confidential destination assessment with our senior relocation counsel. Receive an objective multi-country viability matrix within 48 hours tailored to your timeline, assets, and dependents.
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2 text-[12px] text-[#7a92b0]">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#ebc071] text-[18px]">lock</span>
                  Strict Attorney-Client Privilege
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#ebc071] text-[18px]">av_timer</span>
                  Guaranteed 48-Hour Delivery
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#ebc071] text-[18px]">fact_check</span>
                  Zero Commercial Bias
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto min-w-[280px]">
              <button
                onClick={() => onOpenConsultationModal('Multi-Jurisdiction Strategy')}
                className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-[#ebc071] text-[#1d1200] font-bold text-[13px] tracking-wide transition-all hover:bg-[#ffdea6] text-center shadow-md"
              >
                Book Destination Strategy Consultation
              </button>
              <button
                onClick={() => alert('Downloading Aegis 2025 Global Mobility Index & Statutory Comparison (PDF)...')}
                className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[13px] font-semibold transition-all text-center border border-white/20"
              >
                <span className="material-symbols-outlined mr-2 text-[18px]">download</span>
                Download 2025 Mobility Index (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
