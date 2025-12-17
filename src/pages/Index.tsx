import { useState } from "react";
import { Header } from "@/components/Header";
import { HomeSection } from "@/components/sections/HomeSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { BottomNav } from "@/components/BottomNav";
import { pizzasTradicionais, pizzasEspeciais, bebidas } from "@/data/menuData";

const Index = () => {
  const [activeSection, setActiveSection] = useState("tradicionais");

  const handleNavigate = (section: string) => {
    setActiveSection(section === "home" ? "tradicionais" : section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSectionData = () => {
    switch (activeSection) {
      case "especiais":
        return { 
          title: "Pizzas Especiais", 
          description: "Sabores únicos e ingredientes premium para paladares exigentes.",
          items: pizzasEspeciais 
        };
      case "bebidas":
        return { 
          title: "Bebidas", 
          description: "Refrigerantes, sucos e cervejas geladas para acompanhar.",
          items: bebidas 
        };
      case "tradicionais":
      default:
        return { 
          title: "Pizzas Tradicionais", 
          description: "Pizzas com massa caseira especial, assadas em forno a lenha. Experimente!",
          items: pizzasTradicionais 
        };
    }
  };

  const { title, description, items } = getSectionData();

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="container py-4 space-y-6">
        <HomeSection onNavigate={handleNavigate} />
        
        <MenuSection title={title} description={description} items={items} />
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;
