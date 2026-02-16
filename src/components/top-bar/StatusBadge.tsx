import type { BuildStatus } from '@/types';
import { Badge } from '@/components/ui';

const statusConfig: Record<BuildStatus, { label: string; variant: 'default' | 'accent' | 'warning' | 'success' }> = {
  'idle': { label: 'Idle', variant: 'default' },
  'in-progress': { label: 'In Progress', variant: 'accent' },
  'review': { label: 'Review', variant: 'warning' },
  'complete': { label: 'Complete', variant: 'success' },
};

interface StatusBadgeProps {
  status: BuildStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];
  return <Badge variant={config.variant}>{config.label}</Badge>;
}
