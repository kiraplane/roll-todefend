import { CalendarDays } from 'lucide-react';

export function LastUpdated({ date }: { date: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-[#3A4F2D] bg-[#182215] px-3 py-2 font-medium text-[#DCE9D2] text-xs">
      <CalendarDays className="size-4 text-[#B7F44A]" />
      Last checked {date}
    </div>
  );
}
