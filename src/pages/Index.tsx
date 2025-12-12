import { useState } from "react";
import { Header } from "@/components/Header";
import { HomeSection } from "@/components/sections/HomeSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { pizzasTradicionais, pizzasEspeciais, bebidas } from "@/data/menuData";

const Index = () => {
  const [activeSection, setActiveSection] = useState("tradicionais");

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="container py-6">
        {activeSection === "home" && (
          <HomeSection onNavigate={handleNavigate} />
        )}
        
        {activeSection === "tradicionais" && (
          <MenuSection title="Pizzas Tradicionais" items={pizzasTradicionais} variant="round-dark" />
        )}
        
        {activeSection === "especiais" && (
          <MenuSection title="Pizzas Especiais" items={pizzasEspeciais} variant="round-dark" />
        )}
        
        {activeSection === "bebidas" && (
          <MenuSection title="Bebidas" items={bebidas} variant="round-dark" />
        )}
      </main>

      <footer className="container pb-6 pt-8 text-center text-sm text-muted-foreground">
        © 2024 Pizzaria Bella — Todos os direitos reservados
      </footer>
    </div>
  );
};

export default Index;
