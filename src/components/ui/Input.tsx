import type { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={`${styles.input}${className ? ` ${className}` : ''}`}
      {...props}
    />
  );
}
