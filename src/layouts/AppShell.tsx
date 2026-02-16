import type { ReactNode } from 'react';
import styles from './AppShell.module.css';

interface AppShellProps {
  topBar: ReactNode;
  contextHeader: ReactNode;
  children: ReactNode;
  footer: ReactNode;
}

export function AppShell({ topBar, contextHeader, children, footer }: AppShellProps) {
  return (
    <div className={styles.shell}>
      {topBar}
      {contextHeader}
      <main className={styles.main}>
        {children}
      </main>
      {footer}
    </div>
  );
}
