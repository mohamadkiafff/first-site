export type ScreenType = 'home' | 'programs' | 'countries' | 'services' | 'about' | 'contact';

export interface CountryInfo {
  id: string;
  name: string;
  flag: string;
  region: 'north-america' | 'uk-ireland' | 'eu' | 'apac';
  regionLabel: string;
  processingTime: string;
  directPr: string;
  minInvestment: string;
  statusBadge: string;
  image: string;
  alt: string;
  headline: string;
  summary: string;
  keyPrograms: string[];
  healthcare: string;
  citizenshipHorizon: string;
  languageRequirement: string;
  spousalRights: string;
  dualNationality: string;
}

export interface ProgramInfo {
  id: string;
  name: string;
  category: 'skilled' | 'corporate' | 'investor' | 'pr' | 'family';
  jurisdiction: string;
  flag: string;
  authority: string;
  badge: string;
  badgeType: 'pr' | 'endorsement' | 'greencard' | 'corporate' | 'capital' | 'priority';
  processingTime: string;
  image: string;
  alt: string;
  description: string;
  targetProfile: string;
  benchmarkScore: string;
  languageBenchmark: string;
  investmentOrFee: string;
  keyBenefits: string[];
  citizenshipTimeline: string;
}

export interface PartnerProfile {
  id: string;
  name: string;
  title: string;
  location: string;
  image: string;
  alt: string;
  admittedBar: string;
  practiceFocus: string;
  languages: string[];
  bio: string;
}

export interface ChamberLocation {
  id: string;
  city: string;
  title: string;
  timezone: string;
  address: string;
  consularLiaison: string;
  phone: string;
  hours: string;
  license: string;
}

export interface PolicyBrief {
  id: string;
  tag: string;
  readTime: string;
  title: string;
  summary: string;
  date: string;
  content: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientRole: string;
  program: string;
  initials: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
