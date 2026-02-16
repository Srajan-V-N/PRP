import { Button } from '@/components/ui';
import styles from './ActionButtons.module.css';

interface ActionButtonsProps {
  onPrev?: () => void;
  onNext?: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
  nextLabel?: string;
}

export function ActionButtons({
  onPrev,
  onNext,
  prevDisabled = false,
  nextDisabled = false,
  nextLabel = 'Next Step',
}: ActionButtonsProps) {
  return (
    <div className={styles.actions}>
      <Button variant="secondary" onClick={onPrev} disabled={prevDisabled}>
        Previous
      </Button>
      <Button variant="primary" onClick={onNext} disabled={nextDisabled}>
        {nextLabel}
      </Button>
    </div>
  );
}
