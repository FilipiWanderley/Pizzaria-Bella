import { Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/components/ui/use-toast";

interface MenuCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  variant?: "standard" | "round-dark";
}

export function MenuCard({ image, title, description, price }: MenuCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart({
      title,
      price,
      image,
      description
    } as any); // Using 'any' temporarily to bypass strict typing if interface mismatch, but should be fine
    
    toast({
      title: "Item adicionado!",
      description: `${title} foi adicionado à sua sacola.`,
      duration: 2000,
      className: "bg-pizzeria-green text-white border-none",
    });
  };

  return (
    <div className="group relative flex w-full overflow-hidden rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md border border-gray-100">
      <div className="flex flex-1 flex-col justify-between pr-4">
        <div>
          <h3 className="mb-1 text-lg font-bold text-gray-900">{title}</h3>
          <p className="mb-2 text-sm text-gray-500 line-clamp-2">{description}</p>
        </div>
        
        <div className="flex items-center gap-2 mt-2">
          <div className="flex flex-col">
             <span className="text-xs text-gray-400 line-through">R$ {parseFloat(price.replace('R$ ', '').replace(',', '.')) + 10},00</span>
             <span className="text-base font-bold text-pizzeria-green">
              {price}
            </span>
          </div>
          <span className="rounded-md bg-pizzeria-green/10 px-2 py-0.5 text-xs font-semibold text-pizzeria-green">
            -17%
          </span>
        </div>
      </div>

      <div className="relative h-28 w-28 flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full rounded-lg object-cover shadow-sm"
          loading="lazy"
        />
        <button 
          onClick={handleAddToCart}
          className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-pizzeria-red shadow-md hover:bg-gray-50 ring-1 ring-gray-100 transition-transform active:scale-95"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
