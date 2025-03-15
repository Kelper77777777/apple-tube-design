
import { cn } from "@/lib/utils";

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  className?: string;
}

export function CategoryTabs({ 
  categories, 
  activeCategory, 
  onCategoryChange,
  className 
}: CategoryTabsProps) {
  return (
    <div className={cn("overflow-x-auto scrollbar-none py-3", className)}>
      <div className="flex space-x-2 min-w-max px-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={cn(
              "whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              activeCategory === category
                ? "bg-white text-black"
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
