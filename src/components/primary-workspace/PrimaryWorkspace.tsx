import type { ReactNode } from 'react';
import { Card } from '@/components/ui';
import styles from './PrimaryWorkspace.module.css';

interface PrimaryWorkspaceProps {
  title?: string;
  description?: string;
  children?: ReactNode;
}

export function PrimaryWorkspace({ title, description, children }: PrimaryWorkspaceProps) {
  return (
    <div className={styles.workspace}>
      <Card>
        {title && <h3 className={styles.title}>{title}</h3>}
        {description && <p className={styles.content}>{description}</p>}
        {children}
      </Card>
    </div>
  );
}
