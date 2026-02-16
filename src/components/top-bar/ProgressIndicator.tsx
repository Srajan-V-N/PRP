import type { Step } from '@/types';
import styles from './ProgressIndicator.module.css';

interface ProgressIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export function ProgressIndicator({ steps, currentStep }: ProgressIndicatorProps) {
  return (
    <div className={styles.progress}>
      <span>Step {currentStep + 1}/{steps.length}</span>
      <div className={styles.bar}>
        {steps.map((step, i) => (
          <div
            key={step.id}
            className={`${styles.segment}${i === currentStep ? ` ${styles.active}` : ''}${step.status === 'complete' ? ` ${styles.complete}` : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
