import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { HomeSection } from "@/components/sections/HomeSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { BottomNav } from "@/components/BottomNav";
import { pizzasTradicionais, pizzasEspeciais, bebidas } from "@/data/menuData";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(section);
    if (element) {
      // Offset for header height
      const headerOffset = 140;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      // Adjusted offset for more natural detection point (middle of viewport approx)
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      const sections = [
        { id: "home", offset: 0 },
        { id: "tradicionais", offset: (document.getElementById("tradicionais")?.offsetTop || 0) - 140 },
        { id: "especiais", offset: (document.getElementById("especiais")?.offsetTop || 0) - 140 },
        { id: "bebidas", offset: (document.getElementById("bebidas")?.offsetTop || 0) - 140 },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offset) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="container py-4 space-y-8">
        <div id="home">
          <HomeSection onNavigate={handleNavigate} />
        </div>
        
        <div id="tradicionais" className="scroll-mt-32">
          <MenuSection 
            title="Pizzas Tradicionais" 
            description="Pizzas com massa caseira especial, assadas em forno a lenha. Experimente!"
            items={pizzasTradicionais} 
          />
        </div>

        <div id="especiais" className="scroll-mt-32">
          <MenuSection 
            title="Pizzas Especiais" 
            description="Sabores únicos e ingredientes premium para paladares exigentes."
            items={pizzasEspeciais} 
          />
        </div>

        <div id="bebidas" className="scroll-mt-32">
          <MenuSection 
            title="Bebidas" 
            description="Refrigerantes, sucos e cervejas geladas para acompanhar."
            items={bebidas} 
          />
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;
