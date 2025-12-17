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
    <header className="sticky top-0 z-20 w-full bg-pizzeria-red shadow-md">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
            <Pizza className="h-6 w-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Pizzaria Bella
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="text-sm font-semibold text-white hover:text-white/80">
            ENTRAR
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation / Categories Bar */}
      <div className="scrollbar-hide overflow-x-auto bg-white border-b border-gray-100 py-2">
        <div className="container flex gap-4 min-w-max">
           {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-sm font-medium transition-colors whitespace-nowrap px-2 py-1 ${
                activeSection === item.id
                  ? "text-pizzeria-red border-b-2 border-pizzeria-red"
                  : "text-gray-500 hover:text-pizzeria-red"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
