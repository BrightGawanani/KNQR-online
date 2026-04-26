import { ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "../../types";
import { motion } from "motion/react";

export default function ProductCard({ product }: { product: Product; key?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-brand-gray">
        {product.isNew && (
          <span className="absolute top-4 left-4 z-10 bg-brand-accent px-2 py-1 text-[10px] font-bold uppercase tracking-widest">
            New
          </span>
        )}
        {product.isLimited && (
          <span className="absolute top-4 right-4 z-10 bg-red-600 px-2 py-1 text-[10px] font-bold uppercase tracking-widest">
            Limited
          </span>
        )}
        
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <button className="w-full py-4 bg-white text-brand-black font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-brand-accent hover:text-white transition-colors translate-y-4 group-hover:translate-y-0 duration-300">
            Quick Add +
          </button>
        </div>
      </Link>

      <div className="mt-6 flex justify-between items-start">
        <div>
          <p className="text-[9px] text-brand-muted uppercase tracking-[0.3em] font-bold mb-2">{product.category}</p>
          <Link to={`/product/${product.id}`}>
            <h3 className="text-[11px] font-black tracking-widest uppercase group-hover:text-brand-accent transition-colors">{product.name}</h3>
          </Link>
        </div>
        <p className="text-[11px] font-mono font-bold tracking-widest text-brand-accent">${product.price}.00</p>
      </div>
      
      <div className="mt-4 flex gap-2">
        {product.colors.map(color => (
          <span 
            key={color} 
            className="w-3 h-3 rounded-full border border-white/20"
            style={{ backgroundColor: color === "Onyx" ? "#1a1a1a" : color === "Ghost White" ? "#f8f8f8" : "#333" }}
            title={color}
          />
        ))}
      </div>
    </motion.div>
  );
}
