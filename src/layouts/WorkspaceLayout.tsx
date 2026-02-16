import type { ReactNode } from 'react';
import styles from './WorkspaceLayout.module.css';

interface WorkspaceLayoutProps {
  primary: ReactNode;
  secondary: ReactNode;
}

export function WorkspaceLayout({ primary, secondary }: WorkspaceLayoutProps) {
  return (
    <div className={styles.workspace}>
      {primary}
      {secondary}
    </div>
  );
}
