import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Parallax-esque effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=2000" 
          alt="Malawian Streetwear Culture"
          className="w-full h-full object-cover opacity-60 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-[120px] md:text-[160px] font-black leading-[0.8] tracking-tighter mb-8 uppercase">
              DROP <br/>
              VOL 01
            </h1>
            <p className="text-brand-accent font-mono text-[11px] uppercase tracking-[0.3em] mb-12">
              Available for 48 Hours Only / Engineered in Malawi
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="flex flex-col md:flex-row md:items-end gap-10"
          >
            <div className="flex gap-4">
              <Link 
                to="/shop" 
                className="px-12 py-5 bg-brand-accent text-black font-bold uppercase tracking-widest text-[11px] hover:bg-white transition-colors"
              >
                Shop Now
              </Link>
              <Link 
                to="/about" 
                className="px-12 py-5 border border-white/20 hover:bg-white hover:text-black transition-all font-bold uppercase tracking-widest text-[11px]"
              >
                The Story
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-32 right-12 z-20 flex flex-col items-end">
        <span className="text-[10px] text-white/40 uppercase tracking-[0.4em] vertical-rl rotate-180 mb-6">MW/26 PREMIER</span>
        <div className="w-[1px] h-32 bg-brand-accent"></div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase opacity-40">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
