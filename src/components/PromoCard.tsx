import { LucideIcon } from "lucide-react";

interface PromoCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  iconBg?: string;
}

export function PromoCard({ icon: Icon, title, subtitle, iconBg = "bg-amber-500/20" }: PromoCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-[#151515] p-3 text-white shadow-card">
      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${iconBg}`}>
        <Icon className="h-7 w-7 text-amber-500" />
      </div>
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-sm text-white/70">{subtitle}</p>
      </div>
    </div>
  );
}
