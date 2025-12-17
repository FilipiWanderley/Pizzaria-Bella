interface CategoryTileProps {
  image: string;
  title: string;
  onClick: () => void;
}

export function CategoryTile({ image, title, onClick }: CategoryTileProps) {
  return (
    <button
      onClick={onClick}
      className="group rounded-xl bg-white p-4 text-center text-gray-900 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md border border-gray-100"
    >
      <div className="mx-auto mb-3 h-20 w-20 overflow-hidden rounded-full ring-2 ring-pizzeria-red/20 group-hover:ring-pizzeria-red">
        <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="font-bold text-sm">{title}</div>
    </button>
  );
}
