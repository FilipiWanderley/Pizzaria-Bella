import { MapPin, Search } from "lucide-react";

interface HomeSectionProps {
  onNavigate: (section: string) => void;
}

export function HomeSection({ onNavigate }: HomeSectionProps) {
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
      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <button className="w-full rounded-xl bg-white py-3 pl-10 pr-4 text-left text-sm text-gray-500 shadow-sm border border-gray-100 flex items-center justify-between">
          <span>Categorias</span>
          <span className="text-gray-400">▼</span>
        </button>
      </div>
    </section>
  );
}
