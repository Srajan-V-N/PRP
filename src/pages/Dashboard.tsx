import { Card } from '@/components/ui';

export function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
      <Card className="mt-6">
        <p className="text-gray-600">
          Welcome to your Placement Prep dashboard. Track your progress and
          start practicing.
        </p>
      </Card>
    </div>
  );
}
