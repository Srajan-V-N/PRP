import { useState } from 'react';
import { Input } from '@/components/ui';
import { Button } from '@/components/ui';
import styles from './ProofInput.module.css';

interface ProofInputProps {
  onSubmit: (proof: string) => void;
  placeholder?: string;
}

export function ProofInput({ onSubmit, placeholder = 'Add proof link or note...' }: ProofInputProps) {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    if (value.trim()) {
      onSubmit(value.trim());
      setValue('');
    }
  };

  return (
    <div className={styles.wrapper}>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
      />
      <Button variant="secondary" onClick={handleSubmit}>
        Add
      </Button>
    </div>
  );
}
