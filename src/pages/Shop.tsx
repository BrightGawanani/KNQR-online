import { useState } from "react";
import ProductCard from "../components/ui/ProductCard";
import { PRODUCTS } from "../constants";
import { Filter, ChevronDown, SlidersHorizontal } from "lucide-react";
import { cn } from "../lib/utils";

export default function Shop() {
  const categories = ["All", "T-shirts", "Hoodies", "Caps", "Accessories"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <main className="pt-20">
      {/* Search/Header */}
      <section className="bg-brand-gray py-24 border-b border-white/10">
        <div className="container mx-auto px-6">
          <span className="text-brand-accent text-[11px] font-bold tracking-[0.6em] uppercase mb-6 block text-center">Collection 001 Archive</span>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase text-center mb-16 leading-[0.8]">THE<br/>ARCHIVE</h1>
          
          <div className="flex flex-wrap justify-center items-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-10 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all",
                  activeCategory === cat 
                    ? "bg-brand-accent text-black" 
                    : "border border-white/10 text-brand-muted hover:border-brand-accent hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12 py-4 border-b border-white/10 text-[10px] uppercase font-bold tracking-widest">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              <span>{filteredProducts.length} Results</span>
            </div>
            
            <div className="flex items-center gap-8">
              <button className="flex items-center gap-2 hover:text-brand-accent transition-colors">
                Sort By <ChevronDown className="w-3 h-3" />
              </button>
              <button className="flex items-center gap-2 hover:text-brand-accent transition-colors">
                Availability <ChevronDown className="w-3 h-3" />
              </button>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-40 text-center">
              <p className="text-brand-muted uppercase tracking-widest italic">No pieces found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Footer Scarcity */}
      <section className="py-20 bg-brand-accent text-brand-black overflow-hidden relative border-t border-black/10">
        <div className="flex whitespace-nowrap animate-marquee py-4">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="text-2xl font-display font-black uppercase tracking-tighter mx-8 italic">
              LIMITED QUANTITIES ONLY • DESIGNED IN MALAWI • WORLDWIDE SHIPPING • EST. 2026 • 
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
