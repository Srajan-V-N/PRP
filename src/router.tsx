import { createBrowserRouter } from 'react-router';
import { AppShell } from '@/layouts/AppShell';
import { WorkspaceLayout } from '@/layouts/WorkspaceLayout';
import { TopBar } from '@/components/top-bar/TopBar';
import { ContextHeader } from '@/components/context-header/ContextHeader';
import { PrimaryWorkspace } from '@/components/primary-workspace/PrimaryWorkspace';
import { SecondaryPanel } from '@/components/secondary-panel/SecondaryPanel';
import { ProofFooter } from '@/components/proof-footer/ProofFooter';
import { useBuild } from '@/context/BuildContext';
import { useStepProgress } from '@/hooks/useStepProgress';
import { useProofChecklist } from '@/hooks/useProofChecklist';

function DashboardPage() {
  const { state } = useBuild();
  const { steps, currentStep, nextStep, prevStep, isFirstStep, isLastStep } = useStepProgress();
  const { items, toggleItem, addProof } = useProofChecklist();

  const currentStepData = steps[currentStep];

  return (
    <AppShell
      topBar={
        <TopBar
          projectName={state.projectName}
          steps={steps}
          currentStep={currentStep}
          status={state.status}
        />
      }
      contextHeader={
        <ContextHeader
          headline={currentStepData?.label ?? 'Getting Started'}
          subtext="Complete each step to build your premium product experience."
        />
      }
      footer={
        <ProofFooter items={items} onToggle={toggleItem} onAddProof={addProof} />
      }
    >
      <WorkspaceLayout
        primary={
          <PrimaryWorkspace
            title={currentStepData?.label}
            description="This is your primary workspace. Content for each step will appear here as you progress through the build."
          />
        }
        secondary={
          <SecondaryPanel
            explanation="Follow the guided steps to complete your build. Use the prompt box to copy instructions for each phase."
            promptText={state.promptText || 'No prompt available for this step.'}
            onPrev={prevStep}
            onNext={nextStep}
            prevDisabled={isFirstStep}
            nextDisabled={isLastStep}
            nextLabel={isLastStep ? 'Complete' : 'Next Step'}
          />
        }
      />
    </AppShell>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardPage />,
  },
]);
