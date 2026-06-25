import { CalendarDays } from 'lucide-react';

export function LastUpdated({ date }: { date: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-[#3B3128] bg-[#14100D] px-3 py-2 font-medium text-[#D8CDBA] text-xs">
      <CalendarDays className="size-4 text-[#63E6DD]" />
      Last checked {date}
    </div>
  );
}
