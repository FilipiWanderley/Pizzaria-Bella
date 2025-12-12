interface CategoryTileProps {
  image: string;
  title: string;
  onClick: () => void;
}

export function CategoryTile({ image, title, onClick }: CategoryTileProps) {
  return (
    <button
      onClick={onClick}
      className="group rounded-2xl bg-[#151515] p-6 text-center text-white shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated"
    >
      <div className="mx-auto mb-3 h-24 w-24 overflow-hidden rounded-full ring-2 ring-amber-400">
        <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="font-bold">{title}</div>
    </button>
  );
}
