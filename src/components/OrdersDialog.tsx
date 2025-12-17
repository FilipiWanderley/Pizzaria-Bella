import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ClipboardList, Clock, CheckCircle2 } from "lucide-react";

interface OrdersDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Mock orders data
const mockOrders = [
  {
    id: "#1234",
    status: "Em preparação",
    items: ["Pizza Margherita (M)", "Coca-Cola 2L"],
    total: "R$ 54,90",
    time: "10 min atrás",
    active: true,
  },
  {
    id: "#1230",
    status: "Entregue",
    items: ["Pizza Calabresa (G)"],
    total: "R$ 45,90",
    time: "Ontem, 20:30",
    active: false,
  },
];

export function OrdersDialog({ open, onOpenChange }: OrdersDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5" />
            Meus Pedidos
          </DialogTitle>
          <DialogDescription>
            Acompanhe o status dos seus pedidos recentes.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-4">
            {mockOrders.map((order) => (
              <div
                key={order.id}
                className={`rounded-lg border p-4 ${
                  order.active
                    ? "border-pizzeria-red/20 bg-pizzeria-red/5"
                    : "border-gray-100 bg-gray-50"
                }`}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-bold text-gray-900">{order.id}</span>
                  <span
                    className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                      order.active
                        ? "bg-amber-100 text-amber-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {order.active ? (
                      <Clock className="h-3 w-3" />
                    ) : (
                      <CheckCircle2 className="h-3 w-3" />
                    )}
                    {order.status}
                  </span>
                </div>
                
                <div className="mb-3 text-sm text-gray-600">
                  {order.items.join(", ")}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{order.time}</span>
                  <span className="font-bold text-gray-900">{order.total}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
