import { Checkbox } from '@/components/ui';
import styles from './ChecklistItem.module.css';

interface ChecklistItemProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (id: string, checked: boolean) => void;
}

export function ChecklistItem({ id, label, checked, onChange }: ChecklistItemProps) {
  return (
    <div className={styles.item}>
      <Checkbox
        id={id}
        checked={checked}
        onChange={(e) => onChange(id, e.target.checked)}
      />
      <span className={`${styles.label}${checked ? ` ${styles.checked}` : ''}`}>
        {label}
      </span>
    </div>
  );
}
