import Link from "next/link";
import { CheckCircle, Circle } from "lucide-react";
import { Progress } from "./ui/progress";

type ProfileTask = {
  label: string;
  completed: boolean;
};

export type ProfileCompletionProps = {
  actionHref?: string;
  completion?: number;
  tasks?: ProfileTask[];
};

const DEFAULT_TASKS: ProfileTask[] = [
  { label: "Informations personnelles", completed: true },
  { label: "Documents d'identité", completed: true },
  { label: "Photo de profil récente", completed: false },
];

export function ProfileCompletion({
  tasks = DEFAULT_TASKS,
  completion,
  actionHref = "#",
}: ProfileCompletionProps) {
  const completedCount = tasks.filter((task) => task.completed).length;
  const derivedCompletion = Math.round((completedCount / tasks.length) * 100);
  const progress = completion ?? derivedCompletion;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Complétion du profil
      </h3>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Profil complété à</span>
          <span className="text-lg font-bold text-green-600">{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <div className="space-y-3 mb-4">
        {tasks.map((task, index) => (
          <div key={index} className="flex items-center gap-3">
            {task.completed ? (
              <CheckCircle className="w-5 h-5 text-green-600" />
            ) : (
              <Circle className="w-5 h-5 text-gray-300" />
            )}
            <span
              className={`text-sm ${
                task.completed ? "text-gray-700" : "text-gray-500"
              }`}
            >
              {task.label}
            </span>
          </div>
        ))}
      </div>

      <Link
        href={actionHref}
        className="w-full inline-flex items-center justify-center rounded-lg border border-blue-600 px-4 py-2 text-center text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
      >
        Compléter mon profil
      </Link>
    </div>
  );
}
