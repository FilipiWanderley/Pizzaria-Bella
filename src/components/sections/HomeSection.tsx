import { MapPin, Search } from "lucide-react";
import { useState } from "react";

interface HomeSectionProps {
  onNavigate: (section: string) => void;
}

export function HomeSection({ onNavigate }: HomeSectionProps) {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const categories = [
    { id: "tradicionais", label: "Tradicionais" },
    { id: "especiais", label: "Especiais" },
    { id: "bebidas", label: "Bebidas" },
  ];

  return (
    <section className="animate-fade-in space-y-4">
      {/* Hero Image */}
      <div className="relative h-48 w-full overflow-hidden rounded-xl shadow-sm md:h-64">
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&auto=format&fit=crop"
          alt="Pizza Banner"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
           <h1 className="text-2xl font-bold text-white">Os melhores sabores</h1>
        </div>
      </div>

      {/* Info Card - Location */}
      <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-100 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500">
          <MapPin className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs text-gray-500">No local</p>
          <p className="font-bold text-gray-900">Mesa 2</p>
        </div>
      </div>

      {/* Search / Category Filter Mock */}
      <div className="relative z-50">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <button 
          onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
          className="w-full rounded-xl bg-white py-3 pl-10 pr-4 text-left text-sm text-gray-900 shadow-sm border border-gray-200 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <span className="font-medium">Categorias</span>
          <span className={`text-gray-400 transition-transform duration-200 ${isCategoriesOpen ? "rotate-180" : ""}`}>▼</span>
        </button>

        {isCategoriesOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 rounded-xl bg-white shadow-xl border border-gray-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200 z-50">
            <div className="divide-y divide-gray-200">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    onNavigate(category.id);
                    setIsCategoriesOpen(false);
                  }}
                  className="w-full px-4 py-4 text-left text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors flex items-center justify-between group"
                >
                  <span>{category.label}</span>
                  <span className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
