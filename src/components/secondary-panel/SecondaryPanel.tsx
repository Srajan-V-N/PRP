import { PromptBox } from './PromptBox';
import { ActionButtons } from './ActionButtons';
import { Card } from '@/components/ui';
import styles from './SecondaryPanel.module.css';

interface SecondaryPanelProps {
  explanation: string;
  promptText: string;
  onPrev?: () => void;
  onNext?: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
  nextLabel?: string;
}

export function SecondaryPanel({
  explanation,
  promptText,
  onPrev,
  onNext,
  prevDisabled,
  nextDisabled,
  nextLabel,
}: SecondaryPanelProps) {
  return (
    <div className={styles.panel}>
      <Card>
        <p className={styles.explanation}>{explanation}</p>
      </Card>
      {promptText && <PromptBox text={promptText} />}
      <ActionButtons
        onPrev={onPrev}
        onNext={onNext}
        prevDisabled={prevDisabled}
        nextDisabled={nextDisabled}
        nextLabel={nextLabel}
      />
    </div>
  );
}
