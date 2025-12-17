import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Minus, Plus, ShoppingBag, Trash2, ArrowLeft, CreditCard, Banknote, CheckCircle2, QrCode } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface CartSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenOrders?: () => void;
}

export function CartSheet({ open, onOpenChange, onOpenOrders }: CartSheetProps) {
  const { items, removeFromCart, updateQuantity, total, itemCount, clearCart } = useCart();
  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!open) {
      // Reset step when closed (with a slight delay for animation)
      const timer = setTimeout(() => {
        setStep('cart');
        setIsLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      setStep('success');
      clearCart();
    }, 2000);
  };

  const renderCart = () => (
    <>
      <SheetHeader className="border-b pb-4">
        <SheetTitle className="flex items-center gap-2 text-gray-900">
          <ShoppingBag className="h-5 w-5" />
          Sua Sacola ({itemCount})
        </SheetTitle>
      </SheetHeader>

      <ScrollArea className="flex-1 -mx-6 px-6">
        {items.length === 0 ? (
          <div className="flex h-[50vh] flex-col items-center justify-center gap-4 text-center">
            <ShoppingBag className="h-16 w-16 text-gray-200" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Sua sacola está vazia</h3>
              <p className="text-sm text-gray-500">Adicione itens deliciosos para começar seu pedido.</p>
            </div>
            <SheetClose asChild>
              <Button 
                className="mt-4 w-full bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 shadow-sm"
              >
                Voltar ao cardápio
              </Button>
            </SheetClose>
          </div>
        ) : (
          <div className="flex flex-col gap-6 py-6">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border border-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 line-clamp-1">{item.title}</h4>
                    <p className="text-sm font-medium text-pizzeria-green">{item.price}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 p-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-gray-600 shadow-sm hover:text-pizzeria-red"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="min-w-[1.5rem] text-center text-sm font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-gray-600 shadow-sm hover:text-pizzeria-green"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </ScrollArea>

      {items.length > 0 && (
        <div className="border-t pt-4">
          <div className="mb-4 flex items-center justify-between text-lg font-bold">
            <span>Total</span>
            <span>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(total)}
            </span>
          </div>
          <Button 
            onClick={() => setStep('checkout')}
            className="w-full bg-pizzeria-green hover:bg-pizzeria-green/90 text-white font-bold h-12 text-base"
          >
            Finalizar Pedido
          </Button>
        </div>
      )}
    </>
  );

  const renderCheckout = () => (
    <>
      <SheetHeader className="border-b pb-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setStep('cart')} className="-ml-2 h-8 w-8">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <SheetTitle className="text-gray-900">Finalizar Pedido</SheetTitle>
        </div>
      </SheetHeader>

      <ScrollArea className="flex-1 -mx-6 px-6">
        <form id="checkout-form" onSubmit={handleCheckout} className="flex flex-col gap-6 py-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Seus Dados</h3>
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-900">Nome Completo</Label>
              <Input 
                id="name" 
                placeholder="Digite seu nome" 
                required 
                className="bg-white text-gray-900 border-gray-300 placeholder:text-gray-400"
                onChange={(e) => {
                  e.target.value = e.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g, "");
                }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-900">Telefone</Label>
              <Input 
                id="phone" 
                placeholder="(00) 00000-0000" 
                required 
                className="bg-white text-gray-900 border-gray-300 placeholder:text-gray-400"
                type="tel"
                maxLength={15}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, "");
                  if (value.length > 11) value = value.slice(0, 11);
                  if (value.length > 2) value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
                  if (value.length > 9) value = `${value.slice(0, 9)}-${value.slice(9)}`;
                  e.target.value = value;
                }}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Endereço de Entrega</h3>
            <div className="space-y-2">
              <Label htmlFor="address" className="text-gray-900">Rua e Número</Label>
              <Input id="address" placeholder="Av. Principal, 1000" required className="bg-white text-gray-900 border-gray-300 placeholder:text-gray-400" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="complement" className="text-gray-900">Complemento</Label>
              <Input id="complement" placeholder="Apto 101" className="bg-white text-gray-900 border-gray-300 placeholder:text-gray-400" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Pagamento</h3>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid grid-cols-3 gap-2">
              <Label
                htmlFor="credit"
                className={`flex flex-col items-center justify-center gap-2 rounded-lg border p-4 hover:bg-gray-50 cursor-pointer ${
                  paymentMethod === "credit" ? "border-pizzeria-green bg-green-50" : "border-gray-200 bg-white"
                }`}
              >
                <RadioGroupItem value="credit" id="credit" className="sr-only" />
                <CreditCard className="h-6 w-6 text-gray-600" />
                <span className="text-xs font-medium text-gray-900">Crédito</span>
              </Label>
              <Label
                htmlFor="pix"
                className={`flex flex-col items-center justify-center gap-2 rounded-lg border p-4 hover:bg-gray-50 cursor-pointer ${
                  paymentMethod === "pix" ? "border-pizzeria-green bg-green-50" : "border-gray-200 bg-white"
                }`}
              >
                <RadioGroupItem value="pix" id="pix" className="sr-only" />
                <QrCode className="h-6 w-6 text-gray-600" />
                <span className="text-xs font-medium text-gray-900">PIX</span>
              </Label>
              <Label
                htmlFor="cash"
                className={`flex flex-col items-center justify-center gap-2 rounded-lg border p-4 hover:bg-gray-50 cursor-pointer ${
                  paymentMethod === "cash" ? "border-pizzeria-green bg-green-50" : "border-gray-200 bg-white"
                }`}
              >
                <RadioGroupItem value="cash" id="cash" className="sr-only" />
                <Banknote className="h-6 w-6 text-gray-600" />
                <span className="text-xs font-medium text-gray-900">Dinheiro</span>
              </Label>
            </RadioGroup>

            {paymentMethod === "credit" && (
               <div className="space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-4">
                 <div className="space-y-2">
                   <Label htmlFor="card-number" className="text-gray-900">Número do Cartão</Label>
                   <Input id="card-number" placeholder="0000 0000 0000 0000" required className="bg-white text-gray-900 border-gray-300 placeholder:text-gray-400" />
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <Label htmlFor="card-expiry" className="text-gray-900">Validade</Label>
                     <Input id="card-expiry" placeholder="MM/AA" required className="bg-white text-gray-900 border-gray-300 placeholder:text-gray-400" />
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="card-cvv" className="text-gray-900">CVV</Label>
                     <Input id="card-cvv" placeholder="123" required className="bg-white text-gray-900 border-gray-300 placeholder:text-gray-400" />
                   </div>
                 </div>
               </div>
            )}
          </div>
        </form>
      </ScrollArea>

      <div className="border-t pt-4">
        <div className="mb-4 flex items-center justify-between text-lg font-bold">
          <span>Total</span>
          <span>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(total)}
          </span>
        </div>
        <Button 
          type="submit" 
          form="checkout-form"
          disabled={isLoading}
          className="w-full bg-pizzeria-green hover:bg-pizzeria-green/90 text-white font-bold h-12 text-base"
        >
          {isLoading ? "Processando..." : "Confirmar Pagamento"}
        </Button>
      </div>
    </>
  );

  const renderSuccess = () => (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
        <CheckCircle2 className="h-10 w-10 text-green-600" />
      </div>
      <h2 className="mb-2 text-2xl font-bold text-gray-900">Pagamento Concluído!</h2>
      <p className="mb-8 max-w-[260px] text-gray-500">
        Seu pedido foi recebido e já está sendo preparado com muito carinho.
      </p>
      <div className="w-full space-y-3">
        <Button 
          onClick={() => {
            onOpenChange(false);
            onOpenOrders?.();
          }} 
          className="w-full bg-pizzeria-green hover:bg-pizzeria-green/90 text-white font-bold h-12"
        >
          Acompanhar Pedido
        </Button>
        <Button 
          onClick={() => onOpenChange(false)}
          className="w-full bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 shadow-sm"
        >
          Fechar
        </Button>
      </div>
    </div>
  );

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex w-full flex-col sm:max-w-md bg-white text-gray-900">
        {step === 'cart' && renderCart()}
        {step === 'checkout' && renderCheckout()}
        {step === 'success' && renderSuccess()}
      </SheetContent>
    </Sheet>
  );
}
