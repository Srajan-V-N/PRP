import type { BuildState, ProofItem, Step } from '@/types';

export type BuildAction =
  | { type: 'SET_STATUS'; payload: BuildState['status'] }
  | { type: 'SET_STEP'; payload: number }
  | { type: 'COMPLETE_STEP'; payload: number }
  | { type: 'TOGGLE_PROOF'; payload: { id: string; checked: boolean } }
  | { type: 'ADD_PROOF'; payload: string }
  | { type: 'SET_PROMPT'; payload: string };

export interface BuildContextValue {
  state: BuildState;
  dispatch: React.Dispatch<BuildAction>;
}

export function createInitialState(
  projectName: string,
  steps: string[],
  proofLabels: string[],
): BuildState {
  return {
    projectName,
    status: 'idle',
    currentStep: 0,
    steps: steps.map((label, i): Step => ({
      id: i,
      label,
      status: i === 0 ? 'active' : 'pending',
    })),
    proofItems: proofLabels.map((label, i): ProofItem => ({
      id: `proof-${i}`,
      label,
      checked: false,
      proof: '',
    })),
    promptText: '',
  };
}
