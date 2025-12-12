import { Clock, Truck, Gift, Percent, Beer } from "lucide-react";
import { PromoCard } from "../PromoCard";
import { MenuCard } from "../MenuCard";
import { CategoryTile } from "../CategoryTile";

interface HomeSectionProps {
  onNavigate: (section: string) => void;
}

const highlights = [
  {
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&auto=format&fit=crop",
    title: "Pizza Margherita",
    description: "A clássica italiana com molho de tomate e manjericão",
    price: "R$ 39,90",
  },
  {
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&auto=format&fit=crop",
    title: "Pizza Pepperoni",
    description: "Fatias generosas de pepperoni artesanal",
    price: "R$ 47,90",
  },
  {
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop",
    title: "Quatro Queijos",
    description: "Mozzarella, gorgonzola, parmesão e provolone",
    price: "R$ 49,90",
  },
];

export function HomeSection({ onNavigate }: HomeSectionProps) {
  return (
    <section className="animate-fade-in space-y-8">
      <div className="grid gap-6 md:grid-cols-2 md:items-center">
        <div className="space-y-4 rounded-2xl bg-[#151515] p-6 text-white shadow-card">
          <h1 className="text-3xl font-bold md:text-4xl">Sabores que inspiram</h1>
          <p className="leading-relaxed text-white/70">
            Explore nossa seleção de pizzas artesanais feitas com ingredientes frescos e receitas tradicionais italianas.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold">Ingredientes selecionados</span>
            <span className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold">Entrega rápida</span>
            <span className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold">Preços justos</span>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold">
              <Clock className="h-4 w-4" /> 30–45 min
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold">
              <Truck className="h-4 w-4" /> Frete grátis +R$80
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold">Aberto: 18h–23h</span>
          </div>
          <button
            onClick={() => onNavigate("tradicionais")}
            className="mt-2 inline-block rounded-full bg-amber-500 px-5 py-2.5 font-bold text-black transition-transform hover:scale-105"
          >
            Ver Cardápio
          </button>
        </div>
        <div className="h-56 overflow-hidden rounded-2xl bg-[#151515] shadow-card md:h-72">
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&auto=format&fit=crop"
            alt="Pizza artesanal"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <PromoCard icon={Gift} title="Pizza 2 por 1" subtitle="Seg–Qui, sabores selecionados" iconBg="bg-amber-500/20" />
        <PromoCard icon={Percent} title="Combo Família -15%" subtitle="2 pizzas grandes + refrigerante" iconBg="bg-red-500/20" />
        <PromoCard icon={Beer} title="Happy Hour -20%" subtitle="Bebidas 18h–20h" iconBg="bg-amber-300/20" />
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-bold text-white">Destaques</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <MenuCard key={item.title} variant="round-dark" {...item} />
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <CategoryTile
          image="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&auto=format&fit=crop"
          title="Pizzas Tradicionais"
          onClick={() => onNavigate("tradicionais")}
        />
        <CategoryTile
          image="https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&auto=format&fit=crop"
          title="Pizzas Especiais"
          onClick={() => onNavigate("especiais")}
        />
        <CategoryTile
          image="https://images.unsplash.com/photo-1546171753-97d7676e4602?w=800&auto=format&fit=crop"
          title="Bebidas"
          onClick={() => onNavigate("bebidas")}
        />
      </div>
    </section>
  );
}
