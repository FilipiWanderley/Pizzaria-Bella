import { ShoppingBag, ClipboardList } from "lucide-react";

export function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white pb-6 pt-2">
      <div className="container flex justify-around pb-2">
        <button className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-pizzeria-red">
          <ShoppingBag className="h-6 w-6" />
          <span className="text-xs font-medium">Sacola</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-pizzeria-red">
          <ClipboardList className="h-6 w-6" />
          <span className="text-xs font-medium">Pedidos</span>
        </button>
      </div>
    </div>
  );
}
