import { useBuild } from '@/context/BuildContext';

export function useProofChecklist() {
  const { state, dispatch } = useBuild();

  const toggleItem = (id: string, checked: boolean) => {
    dispatch({ type: 'TOGGLE_PROOF', payload: { id, checked } });
  };

  const addProof = (proof: string) => {
    dispatch({ type: 'ADD_PROOF', payload: proof });
  };

  const completedCount = state.proofItems.filter((p) => p.checked).length;
  const totalCount = state.proofItems.length;
  const allComplete = completedCount === totalCount;

  return {
    items: state.proofItems,
    toggleItem,
    addProof,
    completedCount,
    totalCount,
    allComplete,
  };
}
