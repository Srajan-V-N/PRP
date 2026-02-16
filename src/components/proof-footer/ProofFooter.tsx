import type { ProofItem } from '@/types';
import { ChecklistItem } from './ChecklistItem';
import { ProofInput } from './ProofInput';
import styles from './ProofFooter.module.css';

interface ProofFooterProps {
  items: ProofItem[];
  onToggle: (id: string, checked: boolean) => void;
  onAddProof: (proof: string) => void;
}

export function ProofFooter({ items, onToggle, onAddProof }: ProofFooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {items.map((item) => (
          <ChecklistItem
            key={item.id}
            id={item.id}
            label={item.label}
            checked={item.checked}
            onChange={onToggle}
          />
        ))}
        <ProofInput onSubmit={onAddProof} />
      </div>
    </footer>
  );
}
