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
}
