import { cn } from "@/lib/utils";

type ProgressProps = React.HTMLAttributes<HTMLDivElement> & {
  value: number;
};

export function Progress({ value, className, ...props }: ProgressProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className={cn("w-full overflow-hidden rounded-full bg-slate-200", className)} {...props}>
      <div
        className="h-full rounded-full bg-emerald-500 transition-all"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
