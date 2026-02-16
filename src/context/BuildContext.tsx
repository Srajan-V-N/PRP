import { createContext, useContext, useReducer } from 'react';
import type { ReactNode } from 'react';
import type { BuildState } from '@/types';
import type { BuildAction, BuildContextValue } from './types';
import { createInitialState } from './types';
import { STEPS, PROOF_ITEMS, PROJECT_NAME } from '@/utils/constants';

function buildReducer(state: BuildState, action: BuildAction): BuildState {
  switch (action.type) {
    case 'SET_STATUS':
      return { ...state, status: action.payload };

    case 'SET_STEP':
      return {
        ...state,
        currentStep: action.payload,
        steps: state.steps.map((s, i) => ({
          ...s,
          status: i < action.payload ? 'complete' : i === action.payload ? 'active' : 'pending',
        })),
      };

    case 'COMPLETE_STEP':
      return {
        ...state,
        steps: state.steps.map((s) =>
          s.id === action.payload ? { ...s, status: 'complete' as const } : s,
        ),
      };

    case 'TOGGLE_PROOF':
      return {
        ...state,
        proofItems: state.proofItems.map((p) =>
          p.id === action.payload.id ? { ...p, checked: action.payload.checked } : p,
        ),
      };

    case 'ADD_PROOF': {
      const uncheckedIndex = state.proofItems.findIndex((p) => !p.proof);
      if (uncheckedIndex === -1) return state;
      return {
        ...state,
        proofItems: state.proofItems.map((p, i) =>
          i === uncheckedIndex ? { ...p, proof: action.payload } : p,
        ),
      };
    }

    case 'SET_PROMPT':
      return { ...state, promptText: action.payload };

    default:
      return state;
  }
}

const BuildContext = createContext<BuildContextValue | null>(null);

export function BuildProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(
    buildReducer,
    createInitialState(PROJECT_NAME, [...STEPS], [...PROOF_ITEMS]),
  );

  return (
    <BuildContext.Provider value={{ state, dispatch }}>
      {children}
    </BuildContext.Provider>
  );
}

export function useBuild(): BuildContextValue {
  const ctx = useContext(BuildContext);
  if (!ctx) {
    throw new Error('useBuild must be used within a BuildProvider');
  }
  return ctx;
}
