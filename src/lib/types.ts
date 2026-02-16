export interface AnalysisEntry {
  id: string;
  createdAt: string;
  company: string;
  role: string;
  jdText: string;
  extractedSkills: Record<string, string[]>;
  plan: { day: string; title: string; tasks: string[] }[];
  checklist: { round: string; items: string[] }[];
  questions: string[];
  readinessScore: number;
  baseReadinessScore: number;
  skillConfidenceMap?: Record<string, 'know' | 'practice'>;
  companyIntel?: {
    name: string;
    industry: string;
    sizeCategory: 'Startup' | 'Mid-size' | 'Enterprise';
    sizeLabel: string;
    hiringFocus: string;
  };
  roundMapping?: {
    round: string;
    focus: string;
    why: string;
    tips: string[];
  }[];
}
