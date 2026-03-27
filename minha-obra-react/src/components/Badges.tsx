import { Apple, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function AppStoreBadge({ className, ...props }: BadgeProps) {
  return (
    <button
      className={cn(
        "flex items-center gap-2 bg-[#1C1A17] text-white px-4 py-2 rounded-xl border border-[#3A2000] shadow-md hover:scale-[1.03] hover:shadow-lg transition-all duration-200 ease-out active:scale-95",
        className
      )}
      {...props}
    >
      <Apple className="w-6 h-6 fill-current" />
      <div className="flex flex-col items-start text-left">
        <span className="text-[10px] leading-none text-white/70 font-medium">Disponível na</span>
        <span className="text-sm font-bold leading-tight">App Store</span>
      </div>
    </button>
  );
}

export function PlayStoreBadge({ className, ...props }: BadgeProps) {
  return (
    <button
      className={cn(
        "flex items-center gap-2 bg-[#1C1A17] text-white px-4 py-2 rounded-xl border border-[#3A2000] shadow-md hover:scale-[1.03] hover:shadow-lg transition-all duration-200 ease-out active:scale-95",
        className
      )}
      {...props}
    >
      <Play className="w-6 h-6 fill-current" />
      <div className="flex flex-col items-start text-left">
        <span className="text-[10px] leading-none text-white/70 font-medium">Disponível no</span>
        <span className="text-sm font-bold leading-tight">Google Play</span>
      </div>
    </button>
  );
}
