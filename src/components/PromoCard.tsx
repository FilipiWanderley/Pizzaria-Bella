import { LucideIcon } from "lucide-react";

interface PromoCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  iconBg?: string;
}

export function PromoCard({ icon: Icon, title, subtitle, iconBg = "bg-pizzeria-red/10" }: PromoCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white p-3 text-gray-900 shadow-sm border border-gray-100">
      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${iconBg}`}>
        <Icon className="h-6 w-6 text-pizzeria-red" />
      </div>
      <div>
        <p className="font-bold text-sm">{title}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}
