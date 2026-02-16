import { Card } from '@/components/ui';
import type { AnalysisEntry } from '@/lib/types';

function ScoreGauge({ score }: { score: number }) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color =
    score >= 75 ? '#22c55e' : score >= 50 ? '#eab308' : '#ef4444';

  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="12"
        />
        <circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 70 70)"
          style={{ transition: 'stroke-dashoffset 0.6s ease' }}
        />
        <text
          x="70"
          y="70"
          textAnchor="middle"
          dominantBaseline="central"
          className="text-2xl font-bold"
          fill={color}
          fontSize="28"
        >
          {score}
        </text>
      </svg>
      <span className="text-sm font-medium text-gray-600">
        Readiness Score
      </span>
    </div>
  );
}

export function AnalysisResults({ entry }: { entry: AnalysisEntry }) {
  return (
    <div className="mt-6 space-y-6">
      {/* Score + Company Info */}
      <Card className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-8">
        <ScoreGauge score={entry.readinessScore} />
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-lg font-semibold text-gray-900">
            {entry.role || 'Role'}{' '}
            {entry.company && (
              <span className="text-gray-500">@ {entry.company}</span>
            )}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Analyzed on{' '}
            {new Date(entry.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </Card>

      {/* Extracted Skills */}
      <Card>
        <h3 className="mb-4 text-lg font-semibold text-gray-900">
          Key Skills Identified
        </h3>
        <div className="space-y-3">
          {Object.entries(entry.extractedSkills).map(([category, skills]) => (
            <div key={category}>
              <span className="text-sm font-medium text-gray-700">
                {category}
              </span>
              <div className="mt-1 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-primary-light px-3 py-1 text-xs font-medium text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Round-wise Checklist */}
      <Card>
        <h3 className="mb-4 text-lg font-semibold text-gray-900">
          Interview Preparation Checklist
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {entry.checklist.map(({ round, items }) => (
            <div
              key={round}
              className="rounded-lg border border-gray-200 p-4"
            >
              <h4 className="mb-2 text-sm font-semibold text-primary">
                {round}
              </h4>
              <ul className="space-y-1.5">
                {items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <span className="mt-0.5 text-primary">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      {/* 7-Day Plan */}
      <Card>
        <h3 className="mb-4 text-lg font-semibold text-gray-900">
          7-Day Preparation Plan
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {entry.plan.map(({ day, title, tasks }) => (
            <div
              key={day}
              className="rounded-lg border border-gray-200 p-4"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded bg-primary px-2 py-0.5 text-xs font-bold text-white">
                  {day}
                </span>
                <span className="text-sm font-semibold text-gray-800">
                  {title}
                </span>
              </div>
              <ul className="space-y-1">
                {tasks.map((task, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-600"
                  >
                    {i + 1}. {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      {/* Interview Questions */}
      <Card>
        <h3 className="mb-4 text-lg font-semibold text-gray-900">
          Practice Interview Questions
        </h3>
        <ol className="space-y-3">
          {entry.questions.map((q, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-lg border border-gray-100 bg-gray-50 p-3 text-sm text-gray-700"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                {i + 1}
              </span>
              {q}
            </li>
          ))}
        </ol>
      </Card>
    </div>
  );
}
