import { useBuild } from '@/context/BuildContext';

export function useStepProgress() {
  const { state, dispatch } = useBuild();

  const goToStep = (step: number) => {
    if (step >= 0 && step < state.steps.length) {
      dispatch({ type: 'SET_STEP', payload: step });
    }
  };

  const nextStep = () => {
    dispatch({ type: 'COMPLETE_STEP', payload: state.currentStep });
    goToStep(state.currentStep + 1);
  };

  const prevStep = () => {
    goToStep(state.currentStep - 1);
  };

  return {
    currentStep: state.currentStep,
    steps: state.steps,
    totalSteps: state.steps.length,
    isFirstStep: state.currentStep === 0,
    isLastStep: state.currentStep === state.steps.length - 1,
    goToStep,
    nextStep,
    prevStep,
  };
}
