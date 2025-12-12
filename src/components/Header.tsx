import { Pizza } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: "home", label: "Home" },
  { id: "tradicionais", label: "Tradicionais" },
  { id: "especiais", label: "Especiais" },
  { id: "bebidas", label: "Bebidas" },
];

export function Header({ activeSection, onNavigate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-[#0f0f0f] shadow-elevated">
      <div className="container flex items-center justify-between py-3.5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 shadow-md">
            <Pizza className="h-5 w-5 text-black" />
          </div>
          <span className="text-lg font-bold tracking-wide text-white">
            Pizzaria Bella
          </span>
        </div>
        <nav className="flex flex-wrap gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`rounded-full px-3 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 ${
                activeSection === item.id
                  ? "bg-amber-500 text-black font-bold"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
