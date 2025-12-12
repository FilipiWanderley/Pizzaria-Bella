interface MenuCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  variant?: "standard" | "round-dark";
}

export function MenuCard({ image, title, description, price, variant = "standard" }: MenuCardProps) {
  if (variant === "round-dark") {
    return (
      <div className="group rounded-2xl border border-white/10 bg-[#151515] p-6 text-white shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated">
        <div className="flex flex-col items-center">
          <div className="relative mb-4 h-28 w-28 overflow-hidden rounded-full ring-2 ring-amber-400 shadow-md">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <h3 className="mb-1 text-base font-bold tracking-wide">{title}</h3>
          <p className="mb-4 text-sm text-white/70 text-center">{description}</p>
          <span className="inline-flex items-center rounded-full bg-amber-500 px-3 py-1 text-sm font-bold text-black shadow">
            {price}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated">
      <div className="h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-1 font-bold text-foreground">{title}</h3>
        <p className="mb-3 text-sm text-muted-foreground">{description}</p>
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-gradient-to-r from-muted to-card px-3 py-2 font-bold text-pizzeria-chocolate">
          {price}
        </span>
      </div>
    </div>
  );
}
