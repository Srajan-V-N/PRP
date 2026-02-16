import type { Step, BuildStatus } from '@/types';
import { ProgressIndicator } from './ProgressIndicator';
import { StatusBadge } from './StatusBadge';
import styles from './TopBar.module.css';

interface TopBarProps {
  projectName: string;
  steps: Step[];
  currentStep: number;
  status: BuildStatus;
}

export function TopBar({ projectName, steps, currentStep, status }: TopBarProps) {
  return (
    <header className={styles.topBar}>
      <div className={styles.left}>
        <span className={styles.projectName}>{projectName}</span>
      </div>
      <div className={styles.right}>
        <ProgressIndicator steps={steps} currentStep={currentStep} />
        <StatusBadge status={status} />
      </div>
    </header>
  );
}
