export type BuildStatus = 'idle' | 'in-progress' | 'review' | 'complete';

export interface ProofItem {
  id: string;
  label: string;
  checked: boolean;
  proof: string;
}

export interface Step {
  id: number;
  label: string;
  status: 'pending' | 'active' | 'complete';
}

export interface BuildState {
  projectName: string;
  status: BuildStatus;
  currentStep: number;
  steps: Step[];
  proofItems: ProofItem[];
  promptText: string;
}
