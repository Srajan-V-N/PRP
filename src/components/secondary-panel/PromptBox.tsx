import { Copy, Check } from 'lucide-react';
import { useClipboard } from '@/hooks/useClipboard';
import { Button } from '@/components/ui';
import { Card } from '@/components/ui';
import styles from './PromptBox.module.css';

interface PromptBoxProps {
  text: string;
}

export function PromptBox({ text }: PromptBoxProps) {
  const { copied, copy } = useClipboard();

  return (
    <Card>
      <div className={styles.box}>
        <pre className={styles.pre}>{text}</pre>
        <Button
          variant="ghost"
          className={styles.copyBtn}
          onClick={() => copy(text)}
          aria-label="Copy to clipboard"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </Button>
      </div>
    </Card>
  );
}
