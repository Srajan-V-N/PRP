import { Card } from '@/components/ui';

export function Assessments() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900">Assessments</h2>
      <Card className="mt-6">
        <p className="text-gray-600">
          Take mock tests and timed assessments to evaluate your placement
          readiness.
        </p>
      </Card>
    </div>
  );
}
