import type { SelectHTMLAttributes } from 'react';
import styles from './Select.module.css';

export function Select({ className, children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={`${styles.select}${className ? ` ${className}` : ''}`}
      {...props}
    >
      {children}
    </select>
  );
}
