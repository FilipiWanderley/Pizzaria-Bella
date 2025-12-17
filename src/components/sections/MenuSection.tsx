import { MenuCard } from "../MenuCard";

interface MenuItem {
  image: string;
  title: string;
  description: string;
  price: string;
}

interface MenuSectionProps {
  title: string;
  description?: string;
  items: MenuItem[];
  variant?: "standard" | "round-dark";
}

export function MenuSection({ title, description, items }: MenuSectionProps) {
  return (
    <section className="animate-fade-in py-4">
      <h2 className="mb-4 text-xl font-bold text-gray-900 px-1">{title}</h2>
      {description && (
        <p className="mb-6 text-sm text-gray-500 px-1">{description}</p>
      )}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {items.map((item) => (
          <MenuCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
