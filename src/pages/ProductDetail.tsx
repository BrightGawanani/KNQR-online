import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { PRODUCTS } from "../constants";
import { ChevronRight, Minus, Plus, ShoppingBag, Truck, RotateCcw, ShieldCheck, Zap } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0]);
      setSelectedColor(product.colors[0]);
      setActiveImage(0);
    }
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">PRODUCT NOT FOUND</h2>
          <Link to="/shop" className="text-brand-accent underline underline-offset-4 font-bold">RETURN TO SHOP</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-20 pb-32">
      <div className="container mx-auto px-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 py-8 text-[10px] uppercase tracking-widest text-brand-muted">
          <Link to="/" className="hover:text-white">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-white">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Gallery - 7 Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.images.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "aspect-[3/4] bg-brand-gray overflow-hidden",
                  idx === 0 && "md:col-span-2"
                )}
              >
                <img 
                  src={img} 
                  alt={`${product.name} vision ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </motion.div>
            ))}
          </div>

          {/* Info - 5 Columns */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <div className="mb-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-accent">{product.category}</span>
                {product.isLimited && (
                  <span className="flex items-center gap-1 bg-brand-accent text-black px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest">
                    <Zap className="w-3 h-3 fill-current" /> Limited Series
                  </span>
                )}
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-[0.85]">{product.name}</h1>
              <div className="flex items-baseline gap-4 mb-8">
                <p className="text-3xl font-mono font-bold tracking-widest text-brand-accent">${product.price}.00</p>
                <p className="text-[10px] uppercase tracking-widest text-brand-muted font-bold">In Stock / Ready to Ship</p>
              </div>
            </div>

            <p className="text-brand-muted font-light leading-relaxed mb-10 text-sm border-l border-brand-accent pl-6 py-2">
              {product.description}
            </p>

            {/* Selectors */}
            <div className="space-y-8 mb-12">
              <div>
                <div className="flex justify-between items-center mb-4 text-[10px] uppercase tracking-widest font-bold">
                  <span>Color: <span className="text-brand-muted font-normal">{selectedColor}</span></span>
                </div>
                <div className="flex gap-3">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        "w-10 h-10 rounded-full border-2 transition-all p-1",
                        selectedColor === color ? "border-brand-accent" : "border-transparent"
                      )}
                    >
                      <div 
                        className="w-full h-full rounded-full border border-white/10"
                        style={{ backgroundColor: color === "Onyx" ? "#1a1a1a" : color === "Ghost White" ? "#f8f8f8" : "#333" }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4 text-[10px] uppercase tracking-widest font-bold">
                  <span>Size: <span className="text-brand-muted font-normal">{selectedSize}</span></span>
                  <button className="text-brand-accent hover:underline decoration-brand-accent transition-all underline-offset-4">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "min-w-16 h-12 flex items-center justify-center font-bold text-xs tracking-widest transition-all border",
                        selectedSize === size 
                          ? "bg-white text-brand-black border-white" 
                          : "border-white/10 hover:border-white/40"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold mb-4">Quantity</p>
                <div className="inline-flex items-center border border-white/10 h-14">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-14 h-full flex items-center justify-center hover:bg-white/5 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-14 text-center font-bold tracking-widest text-sm">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-14 h-full flex items-center justify-center hover:bg-white/5 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-4 mb-12">
              <button 
                className={cn(
                  "w-full py-6 font-bold uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98]",
                  product.stock > 0 ? "bg-white text-brand-black" : "bg-brand-gray text-brand-muted cursor-not-allowed"
                )}
              >
                <ShoppingBag className="w-5 h-5" />
                {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
              </button>
              
              {product.stock > 0 && product.stock < 20 && (
                <p className="text-center text-[10px] font-bold text-red-500 uppercase tracking-widest animate-pulse">
                  🔥 Only {product.stock} pieces remaining in current drop
                </p>
              )}
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-10">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-brand-muted">
                <Truck className="w-5 h-5 text-brand-accent shrink-0" />
                <span>Express Shipping <br/><span className="font-normal lowercase opacity-60">Global delivery</span></span>
              </div>
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-brand-muted">
                <RotateCcw className="w-5 h-5 text-brand-accent shrink-0" />
                <span>30 Day Returns <br/><span className="font-normal lowercase opacity-60">Hassle-free swap</span></span>
              </div>
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-brand-muted">
                <ShieldCheck className="w-5 h-5 text-brand-accent shrink-0" />
                <span>Secure Checkout <br/><span className="font-normal lowercase opacity-60">AES-256 Encryption</span></span>
              </div>
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-brand-muted">
                <Zap className="w-5 h-5 text-brand-accent shrink-0" />
                <span>Impact Neutral <br/><span className="font-normal lowercase opacity-60">1% for the Planet</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
