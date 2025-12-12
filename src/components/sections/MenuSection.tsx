import { MenuCard } from "../MenuCard";

interface MenuItem {
  image: string;
  title: string;
  description: string;
  price: string;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  variant?: "standard" | "round-dark";
}

export function MenuSection({ title, items, variant = "round-dark" }: MenuSectionProps) {
  const isDark = variant === "round-dark";
  return (
    <section
      className={
        isDark
          ? "animate-fade-in rounded-3xl bg-gradient-to-br from-[#0f0f0f] via-[#171717] to-[#0f0f0f] p-6 text-white"
          : "animate-fade-in"
      }
    >
      <h2 className={isDark ? "mb-5 text-2xl font-bold text-white" : "mb-5 text-2xl font-bold text-primary"}>{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <MenuCard key={item.title} variant={variant} {...item} />
        ))}
      </div>
    </section>
  );
}
