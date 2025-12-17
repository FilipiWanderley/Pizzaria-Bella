import { ShoppingBag, ClipboardList } from "lucide-react";
import { useState } from "react";
import { CartSheet } from "./CartSheet";
import { OrdersDialog } from "./OrdersDialog";
import { useCart } from "@/contexts/CartContext";

export function BottomNav() {
  const [cartOpen, setCartOpen] = useState(false);
  const [ordersOpen, setOrdersOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white pb-6 pt-2">
        <div className="container flex justify-around pb-2">
          <button 
            onClick={() => setCartOpen(true)}
            className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-pizzeria-red relative"
          >
            <div className="relative">
              <ShoppingBag className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-pizzeria-red text-[10px] font-bold text-white">
                  {itemCount}
                </span>
              )}
            </div>
            <span className="text-xs font-medium">Sacola</span>
          </button>
          <button 
            onClick={() => setOrdersOpen(true)}
            className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-pizzeria-red"
          >
            <ClipboardList className="h-6 w-6" />
            <span className="text-xs font-medium">Pedidos</span>
          </button>
        </div>
      </div>

      <CartSheet 
        open={cartOpen} 
        onOpenChange={setCartOpen} 
        onOpenOrders={() => setOrdersOpen(true)}
      />
      <OrdersDialog open={ordersOpen} onOpenChange={setOrdersOpen} />
    </>
  );
}
