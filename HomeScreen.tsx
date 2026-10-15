import React, { useState } from 'react';
import { CountryInfo, ProgramInfo, PolicyBrief, ScreenType } from '../../types';
import {
  HERO_CITYSCAPE,
  COUNTRIES,
  POLICY_BRIEFS,
  TESTIMONIALS,
  FAQS,
} from '../../data/mockData';

interface HomeScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onSelectCountry: (country: CountryInfo) => void;
  onSelectProgram: (programName: string) => void;
  onSelectPolicyBrief: (brief: PolicyBrief) => void;
  onOpenConsultationModal: (subject?: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onSelectCountry,
  onSelectProgram,
  onSelectPolicyBrief,
  onOpenConsultationModal,
}) => {
  // Destination filter tabs
  const [destRegionFilter, setDestRegionFilter] = useState<'all' | 'na' | 'uk' | 'eu' | 'oceania'>('all');

  // Interactive Eligibility Tool State
  const [userCitizen, setUserCitizen] = useState('Iran');
  const [userResidence, setUserResidence] = useState('UAE');
  const [userDestination, setUserDestination] = useState('Canada');
  const [userObjective, setUserObjective] = useState('Skilled');
  const [userTimeline, setUserTimeline] = useState('6-12');
  const [eligibilityResult, setEligibilityResult] = useState<{
    heading: string;
    details: string;
    programs: string[];
    isCalculated: boolean;
  }>({
    heading: 'Preliminary Match: 3 Viable Programs Identified',
    details: 'Based on your parameters for Canada via Skilled Employment: Federal Skilled Worker (Express Entry), Provincial Nominee Program (Tech Draw priority), and Intra-Company Senior Transfer appear favorable.',
    programs: ['Federal Skilled Worker (Express Entry)', 'Provincial Nominee Program (PNP)', 'Global Skills Strategy'],
    isCalculated: false,
  });

  // FAQ Accordion State
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  // In-page Consultation Form State
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [inPageBooking, setInPageBooking] = useState({
    format: 'virtual',
    name: '',
    email: '',
    phone: '',
    citizenship: '',
    summary: '',
    consent: false,
  });

  // Calculate Eligibility handler
  const handleCalculateEligibility = (e: React.FormEvent) => {
    e.preventDefault();
    let progs: string[] = [];

    if (userDestination === 'Canada') {
      if (userObjective === 'Skilled') progs = ['Federal Skilled Worker (Express Entry)', 'Provincial Nominee Program (Tech Draw priority)', 'Global Skills Strategy'];
      else if (userObjective === 'Investment') progs = ['Canada Startup Visa (SUV)', 'Intra-Company Transfer (C11/C12)', 'Self-Employed Persons'];
      else if (userObjective === 'Studies') progs = ['Study Permit + PGWP Transition', 'Student Direct Stream (SDS)'];
      else progs = ['Family Class Sponsorship', 'Spousal Open Work Permit'];
    } else if (userDestination === 'UK') {
      if (userObjective === 'Skilled') progs = ['Skilled Worker Visa (Points-Based)', 'Global Talent Visa (Tech Nation)', 'High Potential Individual (HPI)'];
      else if (userObjective === 'Investment') progs = ['Innovator Founder Visa', 'UK Expansion Worker Visa'];
      else if (userObjective === 'Studies') progs = ['UK Student Visa (Tier 4)', 'Graduate Route Visa'];
      else progs = ['UK Family Visa (Spouse/Partner)', 'Indefinite Leave to Remain'];
    } else if (userDestination === 'Australia') {
      if (userObjective === 'Skilled') progs = ['Subclass 189 Skilled Independent', 'Subclass 190 State Nominated', 'Global Talent Visa (GTI)'];
      else if (userObjective === 'Investment') progs = ['Business Innovation Subclass 188', 'Significant Investor Route'];
      else if (userObjective === 'Studies') progs = ['Subclass 500 Student Visa', 'Subclass 485 Temporary Graduate'];
      else progs = ['Partner Subclass 820/801', 'Child & Parent Settlement'];
    } else if (userDestination === 'Germany') {
      if (userObjective === 'Skilled') progs = ['EU Blue Card (§ 18g)', 'Opportunity Card (Chancenkarte)', 'Fast-Track Specialist Procedure'];
      else if (userObjective === 'Investment') progs = ['Self-Employment Visa (§ 21 AufenthG)', 'Sovereign Golden Visa Programs'];
      else if (userObjective === 'Studies') progs = ['German University Student Residence', '18-Month Jobseeker Residence'];
      else progs = ['Family Reunification (§ 28-36 AufenthG)', 'Permanent Settlement Permit'];
    } else {
      progs = ['EB-1 Extraordinary Ability', 'EB-2 National Interest Waiver (NIW)', 'L-1 Intracompany Transferee'];
    }

    setEligibilityResult({
      heading: `Preliminary Match: ${progs.length} Viable Programs for ${userDestination}`,
      details: `Based on your passport (${userCitizen}) residing in ${userResidence} targeting ${userDestination} under ${userObjective}: Primary routes include ${progs.join(', ')}. Case evaluation indicates strong alignment with standard consular criteria under ${userTimeline} months timeline.`,
      programs: progs,
      isCalculated: true,
    });
  };

  const handleResetEligibility = () => {
    setUserCitizen('Iran');
    setUserResidence('UAE');
    setUserDestination('Canada');
    setUserObjective('Skilled');
    setUserTimeline('6-12');
    setEligibilityResult({
      heading: 'Preliminary Match: 3 Viable Programs Identified',
      details: 'Based on your parameters for Canada via Skilled Employment: Federal Skilled Worker (Express Entry), Provincial Nominee Program (Tech Draw priority), and Intra-Company Senior Transfer appear favorable.',
      programs: ['Federal Skilled Worker (Express Entry)', 'Provincial Nominee Program (PNP)', 'Global Skills Strategy'],
      isCalculated: false,
    });
  };

  // Filter countries for the showcase
  const filteredCountries = COUNTRIES.filter((c) => {
    if (destRegionFilter === 'all') return true;
    if (destRegionFilter === 'na') return c.region === 'north-america';
    if (destRegionFilter === 'uk') return c.id === 'uk';
    if (destRegionFilter === 'eu') return c.region === 'eu';
    if (destRegionFilter === 'oceania') return c.region === 'apac';
    return true;
  });

  const handleInPageBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full bg-[#f1f3ff] overflow-hidden">
        {/* Architectural Grid Watermark */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path
              d="M0,0 L100,100 M20,0 L100,80 M0,20 L80,100 M0,50 L100,50 M50,0 L50,100"
              stroke="currentColor"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-6 flex flex-col items-start space-y-6">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-[#e8edff]">
                <span className="w-2 h-2 rounded-full bg-[#ebc071]" />
                <span className="text-[11px] uppercase tracking-widest text-[#4a607a] font-semibold">
                  Your Journey, Our Expertise
                </span>
              </div>

              {/* Confident H1 */}
              <h1 className="font-display text-[42px] sm:text-[50px] lg:text-[56px] text-[#00152a] font-bold tracking-tight leading-[1.12]">
                Your Global Future Starts Here.
              </h1>

              {/* Lead Paragraph */}
              <p className="text-[17px] text-[#43474d] max-w-xl leading-relaxed">
                Navigating international relocation, skilled migration, and residency programs with uncompromised transparency, tailored legal counsel, and end-to-end procedural clarity.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
                <a
                  href="#eligibility-tool"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#49607c] hover:bg-[#324861] text-white font-semibold text-[13px] transition-all shadow-sm"
                >
                  <span>Explore Immigration Options</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
                <button
                  onClick={() => onOpenConsultationModal()}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white hover:bg-[#e8edff] text-[#00152a] font-semibold text-[13px] transition-all shadow-sm border border-[#e8edff]"
                >
                  Book a Consultation
                </button>
              </div>

              {/* Trust Verification Row */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-[#43474d] text-[12px]">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="material-symbols-outlined text-[18px] text-[#49607c]">check_circle</span>
                  Regulated Legal Advisors
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="material-symbols-outlined text-[18px] text-[#49607c]">check_circle</span>
                  98.4% Document Accuracy
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="material-symbols-outlined text-[18px] text-[#49607c]">check_circle</span>
                  End-to-End Case Security
                </span>
              </div>
            </div>

            {/* Right Column: Editorial Visual + High-Level Glass Cards */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-white aspect-[4/3] lg:aspect-[14/11] border border-[#e8edff]">
                <img
                  className="w-full h-full object-cover"
                  alt="Modern metropolitan cityscape at golden sunset with soaring glass skyscrapers in London financial district"
                  src={HERO_CITYSCAPE}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00152a]/45 via-transparent to-transparent pointer-events-none" />

                {/* Floating Top Glass Card */}
                <div className="absolute top-5 right-5 max-w-[270px] bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-white/60 transition-transform hover:-translate-y-0.5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide uppercase bg-[#ffdea6] text-[#271900]">
                      Active Program
                    </span>
                    <span className="text-[12px] font-semibold text-[#00152a]">Fast-Track</span>
                  </div>
                  <p className="text-[12px] text-[#43474d] leading-normal">
                    Global Talent & Express Entry eligibility assessment verified.
                  </p>
                </div>

                {/* Floating Bottom Glass Card */}
                <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/60">
                  <div className="flex items-center gap-3">
                    <div className="relative flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#e0e8ff] flex items-center justify-center text-[#00152a] font-bold font-display text-sm">
                        AG
                      </div>
                      <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[13px] font-semibold text-[#00152a]">Dedicated Mobility Counsel</span>
                      <span className="text-[11px] text-[#4a607a]">Live Advisor Session Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST & CREDIBILITY BAR */}
      <section className="w-full bg-white py-8 shadow-sm border-y border-[#e8edff]">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-4 p-2">
              <div className="w-11 h-11 rounded-lg bg-[#f1f3ff] flex items-center justify-center text-[#00152a] flex-shrink-0">
                <span className="material-symbols-outlined text-[22px]">policy</span>
              </div>
              <div className="flex flex-col">
                <h4 className="font-semibold text-[#00152a] text-[15px]">Transparent Application Guidance</h4>
                <p className="text-[13px] text-[#43474d] mt-1">Zero hidden fees, clear roadmap from initial review to visa issuance.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-2">
              <div className="w-11 h-11 rounded-lg bg-[#f1f3ff] flex items-center justify-center text-[#00152a] flex-shrink-0">
                <span className="material-symbols-outlined text-[22px]">psychology</span>
              </div>
              <div className="flex flex-col">
                <h4 className="font-semibold text-[#00152a] text-[15px]">Personalized Strategic Counsel</h4>
                <p className="text-[13px] text-[#43474d] mt-1">Case strategy tailored precisely to your career, investments, and family.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-2">
              <div className="w-11 h-11 rounded-lg bg-[#f1f3ff] flex items-center justify-center text-[#00152a] flex-shrink-0">
                <span className="material-symbols-outlined text-[22px]">translate</span>
              </div>
              <div className="flex flex-col">
                <h4 className="font-semibold text-[#00152a] text-[15px]">Multilingual Relocation Support</h4>
                <p className="text-[13px] text-[#43474d] mt-1">Fluent advisory in English, Persian (Farsi), French, and German.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-2">
              <div className="w-11 h-11 rounded-lg bg-[#f1f3ff] flex items-center justify-center text-[#00152a] flex-shrink-0">
                <span className="material-symbols-outlined text-[22px]">fact_check</span>
              </div>
              <div className="flex flex-col">
                <h4 className="font-semibold text-[#00152a] text-[15px]">Step-by-Step Documentation Review</h4>
                <p className="text-[13px] text-[#43474d] mt-1">Rigorous pre-filing compliance minimizing request-for-evidence delays.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMMIGRATION SERVICES GRID */}
      <section className="w-full bg-[#f9f9ff] py-16 lg:py-24">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col max-w-2xl mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#4a607a]">
              Comprehensive Immigration Services
            </span>
            <h2 className="font-display text-[32px] sm:text-[38px] text-[#00152a] font-bold mt-2">
              Expert Pathways for Professionals, Investors & Families
            </h2>
            <p className="text-[15px] text-[#43474d] mt-3 leading-relaxed">
              From points-tested federal pools to bespoke executive transfers, we architect robust legal filings designed to withstand rigorous consular scrutiny.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                icon: 'trending_up',
                title: 'Skilled Migration',
                desc: 'Express Entry pools, Points-Based Systems (PBS), and Global Talent pathways for high-tier technologists and researchers.',
                progId: 'fsw-canada',
              },
              {
                icon: 'badge',
                title: 'Work Permits & ICT',
                desc: 'Intra-company transfers, LMIA exemptions, senior executive mobility, and specialized knowledge worker authorizations.',
                progId: 'intra-company-ict',
              },
              {
                icon: 'account_balance',
                title: 'Business & Investor',
                desc: 'Golden Visa programs, Startup Visa incubator support, and sovereign capital investments for founders and family offices.',
                progId: 'golden-visa-funds',
              },
              {
                icon: 'home_pin',
                title: 'Permanent Residency',
                desc: 'Comprehensive strategies for permanent settlement, Indefinite Leave to Remain (ILR), and PR card retention renewals.',
                progId: 'fsw-canada',
              },
              {
                icon: 'school',
                title: 'Higher Education Visas',
                desc: 'Admission visa compliance, post-graduation work rights (PGWP), and strategic conversion to permanent economic migration.',
                progId: 'uk-global-talent',
              },
              {
                icon: 'diversity_1',
                title: 'Family Sponsorship',
                desc: 'Spousal, civil partner, dependent child, and parent reunification petitions prepared with bulletproof evidentiary portfolios.',
                progId: 'fsw-canada',
              },
              {
                icon: 'flight_takeoff',
                title: 'Executive Business Visitors',
                desc: 'Fast-track multi-entry consular visas, diplomatic clearances, and cross-border consulting compliance for board members.',
                progId: 'intra-company-ict',
              },
              {
                icon: 'military_tech',
                title: 'Citizenship & Naturalization',
                desc: 'Sovereign passport acquisition, physical presence tracking, language certifications, and oath readiness roadmaps.',
                progId: 'golden-visa-funds',
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-[#e8edff] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#102a43] text-white flex items-center justify-center mb-5 group-hover:bg-[#00152a] transition-colors">
                    <span className="material-symbols-outlined text-[24px]">{service.icon}</span>
                  </div>
                  <h3 className="font-semibold text-[17px] text-[#00152a] group-hover:text-[#49607c] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[13px] text-[#43474d] mt-2.5 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => onSelectProgram(service.progId)}
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#49607c] hover:text-[#00152a] transition-colors"
                  >
                    <span>Explore Service</span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTRIES & DESTINATIONS SHOWCASE */}
      <section className="w-full bg-[#f1f3ff] py-16 lg:py-24">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#4a607a]">
                Supported Destinations
              </span>
              <h2 className="font-display text-[32px] sm:text-[38px] text-[#00152a] font-bold mt-2">
                Global Mobility Programs by Country
              </h2>
            </div>

            {/* Region Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-white rounded-lg shadow-sm border border-[#e8edff] overflow-x-auto">
              {[
                { id: 'all', label: 'All Regions' },
                { id: 'na', label: 'North America' },
                { id: 'uk', label: 'United Kingdom' },
                { id: 'eu', label: 'Europe' },
                { id: 'oceania', label: 'Oceania' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setDestRegionFilter(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-md text-[13px] transition-colors whitespace-nowrap ${
                    destRegionFilter === tab.id
                      ? 'bg-[#00152a] text-white font-semibold'
                      : 'text-[#43474d] hover:text-[#00152a]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Country Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCountries.slice(0, 4).map((country) => (
              <div
                key={country.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-[#e8edff] transition-all flex flex-col justify-between"
              >
                <div className="relative h-44 w-full bg-[#102a43]">
                  <img
                    className="w-full h-full object-cover"
                    src={country.image}
                    alt={country.alt}
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded text-[#00152a] text-[12px] font-semibold flex items-center gap-1">
                    <span>{country.flag}</span>
                    <span>{country.name}</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-[#c7dffd] text-[#4c637d] px-2 py-0.5 rounded text-[11px] font-medium">
                    {country.processingTime} Processing
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-[18px] font-bold text-[#00152a]">
                      {country.name} Immigrate
                    </h3>
                    <p className="text-[13px] text-[#43474d] mt-2 line-clamp-2">
                      {country.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {country.keyPrograms.slice(0, 3).map((kp, kidx) => (
                        <span
                          key={kidx}
                          className="px-2 py-0.5 rounded bg-[#e8edff] text-[#4a607a] text-[11px] font-medium"
                        >
                          {kp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectCountry(country)}
                    className="mt-6 pt-4 border-t border-[#e8edff] flex items-center justify-between text-[#49607c] hover:text-[#00152a] text-[13px] font-semibold transition-colors w-full text-left"
                  >
                    <span>Explore Country Guide</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('countries')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-white border border-[#c3c6ce] text-[#00152a] font-semibold text-[13px] hover:bg-[#e8edff] transition-colors"
            >
              <span>View All 42 Supported Destinations</span>
              <span className="material-symbols-outlined text-[16px]">travel_explore</span>
            </button>
          </div>
        </div>
      </section>

      {/* INTERACTIVE VISA ELIGIBILITY FINDER COMPONENT */}
      <section className="w-full bg-[#f9f9ff] py-16 lg:py-24" id="eligibility-tool">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#e8edff]">
            {/* Header Ribbon */}
            <div className="bg-[#102a43] px-6 lg:px-10 py-5 text-white flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#ebc071]" />
                <span className="font-display text-[20px] font-bold text-white">
                  Interactive Visa Discovery Tool
                </span>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#49607c] text-white text-[12px] font-semibold tracking-wide">
                Profile Calibrator
              </span>
            </div>

            <div className="p-6 lg:p-10">
              <p className="text-[15px] text-[#43474d] max-w-3xl mb-8 leading-relaxed">
                Complete your high-level biographical parameters below to calibrate viable sovereign programs, projected processing intervals, and initial statutory prerequisites.
              </p>

              <form onSubmit={handleCalculateEligibility} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Citizenship */}
                <div className="flex flex-col space-y-2">
                  <label className="text-[13px] font-semibold text-[#00152a]">Your Citizenship / Passport</label>
                  <select
                    value={userCitizen}
                    onChange={(e) => setUserCitizen(e.target.value)}
                    className="w-full h-11 px-3.5 bg-[#f1f3ff] rounded-lg text-[13px] text-[#041b3c] focus:outline-none focus:ring-2 focus:ring-[#49607c] focus:bg-white transition-colors"
                  >
                    <option value="Iran">Iran</option>
                    <option value="India">India</option>
                    <option value="Turkey">Turkey</option>
                    <option value="UAE">United Arab Emirates</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Brazil">Brazil</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Other">Other Passport</option>
                  </select>
                </div>

                {/* Country of Residence */}
                <div className="flex flex-col space-y-2">
                  <label className="text-[13px] font-semibold text-[#00152a]">Current Country of Residence</label>
                  <select
                    value={userResidence}
                    onChange={(e) => setUserResidence(e.target.value)}
                    className="w-full h-11 px-3.5 bg-[#f1f3ff] rounded-lg text-[13px] text-[#041b3c] focus:outline-none focus:ring-2 focus:ring-[#49607c] focus:bg-white transition-colors"
                  >
                    <option value="UAE">United Arab Emirates</option>
                    <option value="Iran">Iran</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Qatar">Qatar</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Other">Other Residence</option>
                  </select>
                </div>

                {/* Destination */}
                <div className="flex flex-col space-y-2">
                  <label className="text-[13px] font-semibold text-[#00152a]">Target Destination</label>
                  <select
                    value={userDestination}
                    onChange={(e) => setUserDestination(e.target.value)}
                    className="w-full h-11 px-3.5 bg-[#f1f3ff] rounded-lg text-[13px] text-[#041b3c] focus:outline-none focus:ring-2 focus:ring-[#49607c] focus:bg-white transition-colors"
                  >
                    <option value="Canada">Canada (Federal & PNP)</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany & EU</option>
                    <option value="USA">United States</option>
                  </select>
                </div>

                {/* Objective */}
                <div className="flex flex-col space-y-2">
                  <label className="text-[13px] font-semibold text-[#00152a]">Primary Relocation Objective</label>
                  <select
                    value={userObjective}
                    onChange={(e) => setUserObjective(e.target.value)}
                    className="w-full h-11 px-3.5 bg-[#f1f3ff] rounded-lg text-[13px] text-[#041b3c] focus:outline-none focus:ring-2 focus:ring-[#49607c] focus:bg-white transition-colors"
                  >
                    <option value="Skilled">Skilled Employment / Professional</option>
                    <option value="Investment">Tech Investment / Business Founder</option>
                    <option value="Studies">Higher Education & Post-Study</option>
                    <option value="Family">Family Relocation & Settlement</option>
                  </select>
                </div>

                {/* Timeline */}
                <div className="flex flex-col space-y-2">
                  <label className="text-[13px] font-semibold text-[#00152a]">Target Move Timeline</label>
                  <select
                    value={userTimeline}
                    onChange={(e) => setUserTimeline(e.target.value)}
                    className="w-full h-11 px-3.5 bg-[#f1f3ff] rounded-lg text-[13px] text-[#041b3c] focus:outline-none focus:ring-2 focus:ring-[#49607c] focus:bg-white transition-colors"
                  >
                    <option value="3-6">Within 3–6 Months (Urgent / Fast-track)</option>
                    <option value="6-12">6–12 Months (Standard Process)</option>
                    <option value="12+">12+ Months (Strategic Preparation)</option>
                  </select>
                </div>

                {/* Actions Block */}
                <div className="flex items-end gap-3">
                  <button
                    type="submit"
                    className="flex-1 h-11 px-5 rounded-lg bg-[#49607c] hover:bg-[#324861] text-white font-semibold text-[13px] transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>Check Matching Pathways</span>
                    <span className="material-symbols-outlined text-[18px]">bolt</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleResetEligibility}
                    className="h-11 px-4 rounded-lg bg-[#f1f3ff] hover:bg-[#e8edff] text-[#041b3c] font-semibold text-[13px] transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </form>

              {/* Dynamic Output Box */}
              <div
                className={`mt-8 p-5 rounded-xl border transition-all ${
                  eligibilityResult.isCalculated
                    ? 'bg-[#c7dffd]/30 border-[#4a607a]/30'
                    : 'bg-[#f1f3ff] border-[#e8edff]'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#49607c] text-[24px]">verified</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#00152a] text-[16px]">
                      {eligibilityResult.heading}
                    </h4>
                    <p className="text-[14px] text-[#43474d] mt-1 leading-relaxed">
                      {eligibilityResult.details}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {eligibilityResult.programs.map((p, pidx) => (
                        <span
                          key={pidx}
                          className="px-2.5 py-1 rounded bg-white border border-[#c3c6ce] text-[#00152a] text-[12px] font-semibold"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#e8edff] flex flex-wrap items-center justify-between gap-3">
                      <p className="text-[11px] text-[#4a607a]">
                        Disclaimer: Informational legal estimate based on preliminary parameters. Sovereign immigration authorities retain exclusive statutory authority for visa issuance.
                      </p>
                      <button
                        onClick={() => onOpenConsultationModal(eligibilityResult.heading)}
                        className="px-4 py-1.5 rounded-lg bg-[#102a43] hover:bg-[#00152a] text-white text-[12px] font-semibold transition-colors"
                      >
                        Book Assessment for these Pathways
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (4-STAGE ADVISORY PROTOCOL) */}
      <section className="w-full bg-[#f1f3ff] py-16 lg:py-24">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#4a607a]">
              Standard Operating Procedure
            </span>
            <h2 className="font-display text-[32px] sm:text-[38px] text-[#00152a] font-bold mt-2">
              The Aegis Four-Stage Advisory Protocol
            </h2>
            <p className="text-[15px] text-[#43474d] mt-3 leading-relaxed">
              We eliminate ambiguity at every juncture, providing transparent legal oversight from exploratory consultation through post-arrival residency compliance.
            </p>
          </div>

          <div className="relative">
            {/* Desktop Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-[#d7e2ff] -translate-y-6 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  step: '01',
                  label: 'Stage One',
                  title: 'Initial Confidential Consultation',
                  desc: 'Detailed background evaluation with a licensed mobility advisor to audit qualification points and consular risk factors.',
                },
                {
                  step: '02',
                  label: 'Stage Two',
                  title: 'Eligibility & Strategy Blueprint',
                  desc: 'Custom legal roadmap selecting the highest-probability visa category, target milestones, and timeline contingencies.',
                },
                {
                  step: '03',
                  label: 'Stage Three',
                  title: 'Document Audit & Assembly',
                  desc: 'Comprehensive legal brief preparation, certified sworn translations, apostilles, and compliance verification checks.',
                },
                {
                  step: '04',
                  label: 'Stage Four',
                  title: 'Submission & Lifecycle Tracking',
                  desc: 'Formal governmental lodging with active portal updates, consular interview preparation, and expeditious RFE responses.',
                },
              ].map((st, sidx) => (
                <div
                  key={sidx}
                  className="bg-white p-6 rounded-xl shadow-sm border border-[#e8edff] flex flex-col items-start"
                >
                  <div className="w-12 h-12 rounded-full bg-[#102a43] text-white flex items-center justify-center font-display text-[20px] font-bold mb-4 shadow-sm">
                    {st.step}
                  </div>
                  <span className="text-[11px] text-[#4a607a] uppercase tracking-wider font-semibold">
                    {st.label}
                  </span>
                  <h3 className="font-semibold text-[#00152a] text-[16px] mt-1">
                    {st.title}
                  </h3>
                  <p className="text-[13px] text-[#43474d] mt-2.5 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE AEGIS GLOBAL (SPLIT LAYOUT) */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Strategic Differentiators */}
            <div className="lg:col-span-7 flex flex-col space-y-8">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#4a607a]">
                  Why Choose Aegis
                </span>
                <h2 className="font-display text-[32px] sm:text-[38px] text-[#00152a] font-bold mt-2">
                  Institutional Integrity in Cross-Border Mobility
                </h2>
                <p className="text-[15px] text-[#43474d] mt-3 leading-relaxed">
                  We reject transactional agency practices. Our counsel operates under strict fiduciary standards, delivering discrete, tier-one representation to individuals and corporations alike.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#e0e8ff] flex items-center justify-center text-[#00152a] flex-shrink-0">
                    <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#00152a] text-[15px]">Transparent Retainer Model</h4>
                    <p className="text-[13px] text-[#43474d] mt-1">Fixed professional fees with milestone-based schedules. Zero surprise billing adjustments.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#e0e8ff] flex items-center justify-center text-[#00152a] flex-shrink-0">
                    <span className="material-symbols-outlined text-[20px]">gavel</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#00152a] text-[15px]">Direct Access to Attorneys</h4>
                    <p className="text-[13px] text-[#43474d] mt-1">Work directly with qualified mobility lawyers and regulated practitioners, not sales clerks.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#e0e8ff] flex items-center justify-center text-[#00152a] flex-shrink-0">
                    <span className="material-symbols-outlined text-[20px]">enhanced_encryption</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#00152a] text-[15px]">Encrypted Document Vault</h4>
                    <p className="text-[13px] text-[#43474d] mt-1">Bank-grade AES-256 cloud repository safeguarding delicate biometric and personal archives.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#e0e8ff] flex items-center justify-center text-[#00152a] flex-shrink-0">
                    <span className="material-symbols-outlined text-[20px]">forum</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#00152a] text-[15px]">Bilingual Advisory Desks</h4>
                    <p className="text-[13px] text-[#43474d] mt-1">Native Persian (Farsi), French, and German legal desks for cultural fluency and ease.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Statistics & Credibility Panel */}
            <div className="lg:col-span-5 bg-[#102a43] text-white p-8 sm:p-10 rounded-2xl shadow-xl flex flex-col justify-between border border-[#4a607a]/30">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00152a] text-[#ebc071] text-[11px] font-semibold tracking-wide uppercase mb-6">
                  Track Record Metrics
                </div>
                <h3 className="font-display text-[24px] sm:text-[28px] font-bold text-white">
                  Excellence in Sovereign Filings
                </h3>
                <p className="text-[13px] text-[#7a92b0] mt-2 leading-relaxed">
                  Our systematic verification protocols consistently outperform industry benchmark approval timelines.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 my-8">
                <div className="flex flex-col">
                  <span className="font-display text-[44px] leading-tight text-[#ebc071] font-bold">14+</span>
                  <span className="text-[13px] font-semibold text-[#d7e2ff] mt-1">Years Practice</span>
                  <span className="text-[11px] text-[#7a92b0]">Cross-border legal focus</span>
                </div>

                <div className="flex flex-col">
                  <span className="font-display text-[44px] leading-tight text-[#ebc071] font-bold">42</span>
                  <span className="text-[13px] font-semibold text-[#d7e2ff] mt-1">Destinations</span>
                  <span className="text-[11px] text-[#7a92b0]">Active bilateral frameworks</span>
                </div>

                <div className="flex flex-col">
                  <span className="font-display text-[44px] leading-tight text-[#ebc071] font-bold">99.1%</span>
                  <span className="text-[13px] font-semibold text-[#d7e2ff] mt-1">On-Time Lodging</span>
                  <span className="text-[11px] text-[#7a92b0]">Zero procedural missed dates</span>
                </div>

                <div className="flex flex-col">
                  <span className="font-display text-[44px] leading-tight text-[#ebc071] font-bold">&lt;24h</span>
                  <span className="text-[13px] font-semibold text-[#d7e2ff] mt-1">Response SLA</span>
                  <span className="text-[11px] text-[#7a92b0]">Direct counsel inquiry turn</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#4a607a]/40 flex items-center justify-between text-[#7a92b0] text-[12px]">
                <span>Regulated by Sovereign Bar & Law Societies</span>
                <span className="material-symbols-outlined text-[18px]">verified_user</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTATION BOOKING SECTION */}
      <section className="w-full bg-[#f1f3ff] py-16 lg:py-24" id="consultation-booking">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-[#e8edff]">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#4a607a]">
                Priority Advisory Intake
              </span>
              <h2 className="font-display text-[32px] sm:text-[38px] text-[#00152a] font-bold mt-2">
                Schedule a Strategic Consultation
              </h2>
              <p className="text-[14px] text-[#43474d] mt-2">
                Select your meeting preferences and provide preliminary context so our legal desk can pre-screen your file.
              </p>
            </div>

            {bookingSubmitted ? (
              <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center flex flex-col items-center gap-3">
                <span className="material-symbols-outlined text-[44px] text-emerald-600">verified</span>
                <h3 className="font-bold text-[#00152a] text-[20px]">Consultation Request Logged</h3>
                <p className="text-[14px] text-[#43474d] max-w-md">
                  Thank you, <strong>{inPageBooking.name || 'Valued Applicant'}</strong>. Your file has been queued with our senior mobility desk. An encrypted calendar invite and preliminary intake checklist will be transmitted within 4 business hours.
                </p>
                <button
                  onClick={() => setBookingSubmitted(false)}
                  className="mt-3 px-5 py-2 rounded-lg bg-[#102a43] text-white text-[13px] font-semibold"
                >
                  Submit Another Intake
                </button>
              </div>
            ) : (
              <form onSubmit={handleInPageBookingSubmit} className="flex flex-col space-y-6">
                {/* Consultation Format */}
                <div className="flex flex-col space-y-2">
                  <label className="text-[13px] font-semibold text-[#00152a]">Consultation Format</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <label className={`flex items-center gap-3 p-3.5 rounded-lg cursor-pointer transition-colors border ${
                      inPageBooking.format === 'virtual' ? 'bg-[#e8edff] border-[#102a43]' : 'bg-[#f1f3ff] border-transparent hover:bg-[#e8edff]'
                    }`}>
                      <input
                        type="radio"
                        name="format"
                        value="virtual"
                        checked={inPageBooking.format === 'virtual'}
                        onChange={(e) => setInPageBooking({ ...inPageBooking, format: e.target.value })}
                        className="w-4 h-4 text-[#00152a]"
                      />
                      <span className="text-[13px] text-[#041b3c] font-medium">Virtual Video (Zoom)</span>
                    </label>

                    <label className={`flex items-center gap-3 p-3.5 rounded-lg cursor-pointer transition-colors border ${
                      inPageBooking.format === 'chambers' ? 'bg-[#e8edff] border-[#102a43]' : 'bg-[#f1f3ff] border-transparent hover:bg-[#e8edff]'
                    }`}>
                      <input
                        type="radio"
                        name="format"
                        value="chambers"
                        checked={inPageBooking.format === 'chambers'}
                        onChange={(e) => setInPageBooking({ ...inPageBooking, format: e.target.value })}
                        className="w-4 h-4 text-[#00152a]"
                      />
                      <span className="text-[13px] text-[#041b3c] font-medium">In-Person Chambers</span>
                    </label>

                    <label className={`flex items-center gap-3 p-3.5 rounded-lg cursor-pointer transition-colors border ${
                      inPageBooking.format === 'audit' ? 'bg-[#e8edff] border-[#102a43]' : 'bg-[#f1f3ff] border-transparent hover:bg-[#e8edff]'
                    }`}>
                      <input
                        type="radio"
                        name="format"
                        value="audit"
                        checked={inPageBooking.format === 'audit'}
                        onChange={(e) => setInPageBooking({ ...inPageBooking, format: e.target.value })}
                        className="w-4 h-4 text-[#00152a]"
                      />
                      <span className="text-[13px] text-[#041b3c] font-medium">Written Legal Audit</span>
                    </label>
                  </div>
                </div>

                {/* 2-Column Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col space-y-2">
                    <label className="text-[13px] font-semibold text-[#00152a]">Full Legal Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Dr. Kian Farhadi"
                      value={inPageBooking.name}
                      onChange={(e) => setInPageBooking({ ...inPageBooking, name: e.target.value })}
                      className="w-full h-11 px-3.5 bg-[#f1f3ff] rounded-lg text-[13px] text-[#041b3c] focus:outline-none focus:ring-2 focus:ring-[#49607c] focus:bg-white"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className="text-[13px] font-semibold text-[#00152a]">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="kian.farhadi@example.com"
                      value={inPageBooking.email}
                      onChange={(e) => setInPageBooking({ ...inPageBooking, email: e.target.value })}
                      className="w-full h-11 px-3.5 bg-[#f1f3ff] rounded-lg text-[13px] text-[#041b3c] focus:outline-none focus:ring-2 focus:ring-[#49607c] focus:bg-white"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className="text-[13px] font-semibold text-[#00152a]">Phone Number (with Country Code)</label>
                    <input
                      required
                      type="tel"
                      placeholder="+971 50 123 4567"
                      value={inPageBooking.phone}
                      onChange={(e) => setInPageBooking({ ...inPageBooking, phone: e.target.value })}
                      className="w-full h-11 px-3.5 bg-[#f1f3ff] rounded-lg text-[13px] text-[#041b3c] focus:outline-none focus:ring-2 focus:ring-[#49607c] focus:bg-white"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className="text-[13px] font-semibold text-[#00152a]">Current Citizenship</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Iranian / British"
                      value={inPageBooking.citizenship}
                      onChange={(e) => setInPageBooking({ ...inPageBooking, citizenship: e.target.value })}
                      className="w-full h-11 px-3.5 bg-[#f1f3ff] rounded-lg text-[13px] text-[#041b3c] focus:outline-none focus:ring-2 focus:ring-[#49607c] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="text-[13px] font-semibold text-[#00152a]">Brief Summary of Immigration Goals</label>
                  <textarea
                    rows={3}
                    placeholder="Please outline current work profile, target country, timeline, and whether you are relocating with immediate dependents..."
                    value={inPageBooking.summary}
                    onChange={(e) => setInPageBooking({ ...inPageBooking, summary: e.target.value })}
                    className="w-full p-3.5 bg-[#f1f3ff] rounded-lg text-[13px] text-[#041b3c] focus:outline-none focus:ring-2 focus:ring-[#49607c] focus:bg-white resize-none"
                  />
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3 pt-2">
                  <input
                    required
                    type="checkbox"
                    id="homeConsent"
                    checked={inPageBooking.consent}
                    onChange={(e) => setInPageBooking({ ...inPageBooking, consent: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded text-[#00152a]"
                  />
                  <label htmlFor="homeConsent" className="text-[13px] text-[#43474d] cursor-pointer leading-normal">
                    I agree to the confidential processing of my details under GDPR and global privacy guidelines. All communications are protected under professional legal discretion.
                  </label>
                </div>

                {/* Submit button */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto h-12 px-8 rounded-lg bg-[#00152a] hover:bg-[#102a43] text-white font-semibold text-[13px] tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Submit Consultation Request</span>
                    <span className="material-symbols-outlined text-[18px]">lock</span>
                  </button>
                  <span className="text-[12px] text-[#4a607a]">
                    Requests reviewed by senior intake counsel within 1 business day.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CLIENT EXPERIENCES & TESTIMONIALS */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col max-w-2xl mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#4a607a]">
              Verified Client Dossiers
            </span>
            <h2 className="font-display text-[32px] sm:text-[38px] text-[#00152a] font-bold mt-2">
              Endorsed by Executives, Founders & Families
            </h2>
            <p className="text-[15px] text-[#43474d] mt-2">
              Discreet testimonials reflecting our meticulous approach to complex immigration hurdles across key jurisdictions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-md border border-[#e8edff] transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#ebc071] mb-4">
                    {[...Array(5)].map((_, sidx) => (
                      <span key={sidx} className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                    ))}
                  </div>
                  <p className="text-[14px] text-[#041b3c] leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#e8edff] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#102a43] text-white font-semibold flex items-center justify-center font-display text-sm">
                    {t.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-[#00152a] text-[14px]">{t.clientName}</span>
                    <span className="text-[11px] text-[#4a607a]">{t.clientRole} · {t.program}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      <section className="w-full bg-[#f1f3ff] py-16 lg:py-24">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#4a607a]">
              Transparency First
            </span>
            <h2 className="font-display text-[32px] sm:text-[38px] text-[#00152a] font-bold mt-2">
              Frequently Addressed Inquiries
            </h2>
            <p className="text-[15px] text-[#43474d] mt-2">
              Clear answers to statutory distinctions, fee arrangements, and governmental parameters.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, fidx) => {
              const isOpen = expandedFaqIndex === fidx;
              return (
                <div
                  key={fidx}
                  className="bg-white rounded-xl shadow-sm border border-[#e8edff] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedFaqIndex(isOpen ? null : fidx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-[15px] text-[#00152a]">{faq.question}</span>
                    <span
                      className={`material-symbols-outlined text-[#4a607a] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-[#43474d] text-[13px] leading-relaxed border-t border-[#f1f3ff]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BLOG & IMMIGRATION RESOURCES */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#4a607a]">
                Chambers Intelligence
              </span>
              <h2 className="font-display text-[32px] sm:text-[38px] text-[#00152a] font-bold mt-2">
                Latest Immigration Analyses & Policy Briefs
              </h2>
            </div>
            <button
              onClick={() => onSelectPolicyBrief(POLICY_BRIEFS[0])}
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#49607c] hover:text-[#00152a] transition-colors"
            >
              <span>View All Policy Briefs</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {POLICY_BRIEFS.map((brief) => (
              <div
                key={brief.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-[#e8edff] transition-shadow flex flex-col justify-between"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded bg-[#e8edff] text-[#4a607a] text-[11px] font-semibold">
                      {brief.tag}
                    </span>
                    <span className="text-[11px] text-[#74777e]">· {brief.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-[16px] text-[#00152a] hover:text-[#49607c] transition-colors leading-snug">
                    <button
                      onClick={() => onSelectPolicyBrief(brief)}
                      className="text-left"
                    >
                      {brief.title}
                    </button>
                  </h3>
                  <p className="text-[13px] text-[#43474d] mt-2.5 leading-relaxed">
                    {brief.summary}
                  </p>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => onSelectPolicyBrief(brief)}
                    className="inline-flex items-center gap-1 text-[13px] text-[#49607c] hover:text-[#00152a] font-semibold"
                  >
                    <span>Read Briefing</span>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL-TO-ACTION SECTION */}
      <section className="w-full bg-[#102a43] text-white py-20 relative overflow-hidden">
        {/* Subtle Wave Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 400">
            <path
              d="M0,200 C300,100 600,300 900,150 C1050,75 1150,225 1200,200 L1200,400 L0,400 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12 relative z-10 text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#00152a] flex items-center justify-center text-[#ebc071] mb-6">
              <span className="material-symbols-outlined text-[24px]">public</span>
            </div>
            <h2 className="font-display text-[34px] md:text-[44px] leading-tight text-white font-bold">
              Begin Your Global Journey with Total Clarity.
            </h2>
            <p className="text-[16px] text-[#7a92b0] mt-4 leading-relaxed">
              Speak with our senior immigration counsel today and receive a structured, confidential assessment of your global relocation options.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8 w-full sm:w-auto">
              <button
                onClick={() => onOpenConsultationModal()}
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#ebc071] text-[#1d1200] font-bold text-[13px] tracking-wide hover:bg-[#ffdea6] transition-all shadow-md"
              >
                Talk to an Advisor
              </button>
              <button
                onClick={() => onNavigate('programs')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-transparent hover:bg-white/10 text-white font-semibold text-[13px] border border-white/30 transition-all"
              >
                Explore All Visa Categories
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
