import Hero from "../components/sections/Hero";
import ProductCard from "../components/ui/ProductCard";
import { PRODUCTS } from "../constants";
import { motion } from "motion/react";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <main>
      <Hero />

      {/* Featured Section */}
      <section className="py-32 bg-brand-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Seasonal Edit</span>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
                LATEST <br />
                <span className="text-stroke">ARRIVALS</span>
              </h2>
            </div>
            <a href="/shop" className="group flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest pb-2 border-b border-white/20 hover:border-brand-accent transition-colors">
              Explore All Gear
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Vision Section */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523438885200-e633abb3a49e?auto=format&fit=crop&q=80&w=2000" 
            alt="Lilongwe Streets"
            className="w-full h-full object-cover opacity-30 grayscale"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8 leading-tight">
                MORE THAN CLOTHING.<br/>
                <span className="text-brand-accent">A MALAWI PRIDE.</span>
              </h2>
              <p className="text-brand-muted text-lg font-light leading-relaxed mb-12 max-w-lg">
                KNQR isn't just about the fabric. It's about the resolve. Each piece is a testament to Malawian craftsmanship in the urban landscape. We design for the quiet warriors, the late-night thinkers, and the culture shapers of the warm heart of Africa.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <Zap className="w-8 h-8 text-brand-accent" />
                  <h4 className="font-bold tracking-widest text-xs uppercase">Malawi Pride</h4>
                  <p className="text-xs text-brand-muted leading-relaxed">Technical fabrics engineered for longevity and comfort in the African sun.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <Globe className="w-8 h-8 text-brand-accent" />
                  <h4 className="font-bold tracking-widest text-xs uppercase">Local Roots</h4>
                  <p className="text-xs text-brand-muted leading-relaxed">Sourced from the best Malawian cotton, inspired by our local street trends.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-video lg:aspect-square"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 border border-brand-accent/30 animate-pulse hidden md:block" />
              <img 
                src="https://images.unsplash.com/photo-1522512115668-c09775d6f424?auto=format&fit=crop&q=80&w=1000" 
                alt="KNQR Authentic Model"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
              <div className="absolute inset-0 border border-white/10 m-4" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter / Scarcity Triggers */}
      <section className="py-32 bg-brand-gray border-t border-white/5">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <span className="text-brand-accent text-[11px] font-bold tracking-[0.4em] uppercase mb-6 block">Join the Syndicate</span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-8 leading-[0.85]">DON'T MISS THE <br/>NEXT DROP</h2>
          <p className="text-brand-muted mb-12 font-light text-sm uppercase tracking-widest leading-relaxed">Be the first to know about secret releases, exclusive collaborations, and limited edition inventory updates.</p>
          
          <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              className="flex-1 bg-transparent border border-white/10 px-8 py-5 text-[11px] font-bold tracking-[0.2em] focus:border-brand-accent outline-none transition-colors"
            />
            <button className="px-12 py-5 bg-brand-accent text-black font-bold uppercase tracking-widest text-[11px] hover:bg-white transition-colors whitespace-nowrap">
              Access Syndicate
            </button>
          </form>
          
          <div className="mt-12 flex justify-center items-center gap-8 opacity-40 grayscale">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Nike_Logo_White.png" alt="Inspiration" className="h-4 object-contain" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" alt="Inspiration" className="h-6 object-contain filter invert" />
            <span className="text-[10px] font-black tracking-widest italic">VIRTUAL CULTURE</span>
          </div>
        </div>
      </section>
    </main>
  );
}
