import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button 
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 -ml-2 hover:bg-white/5 rounded-full transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/shop" className="text-[11px] uppercase tracking-[0.2em] font-medium text-brand-accent">The Drop</Link>
            <Link to="/collections" className="text-[11px] uppercase tracking-[0.2em] font-medium hover:text-brand-accent transition-colors">Archive</Link>
            <Link to="/about" className="text-[11px] uppercase tracking-[0.2em] font-medium hover:text-brand-accent transition-colors">Story</Link>
          </nav>
        </div>

        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-2xl font-black tracking-tighter">KNQR <span className="text-brand-accent">.</span></h1>
        </Link>

        <div className="flex items-center gap-6 text-[11px] uppercase tracking-widest font-bold">
          <button className="hidden md:flex items-center justify-center w-6 h-6 border border-white/40 rounded-full text-[10px] hover:border-brand-accent transition-colors">
            S
          </button>
          <Link to="/cart" className="flex items-center gap-2 hover:text-brand-accent transition-colors relative">
            <span>Bag</span>
            <span className="bg-brand-accent text-black w-4 h-4 rounded-full flex items-center justify-center font-bold text-[9px]">0</span>
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[80vw] max-w-sm bg-brand-black border-r border-white/10 z-50 p-8 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-xl font-black tracking-tighter">KNQR <span className="text-brand-accent">.</span></span>
                <button onClick={() => setIsOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-8">
                <Link to="/shop" onClick={() => setIsOpen(false)} className="text-3xl font-black uppercase tracking-tighter hover:text-brand-accent transition-colors">The Drop</Link>
                <Link to="/collections" onClick={() => setIsOpen(false)} className="text-3xl font-black uppercase tracking-tighter hover:text-brand-accent transition-colors">Archive</Link>
                <Link to="/about" onClick={() => setIsOpen(false)} className="text-3xl font-black uppercase tracking-tighter hover:text-brand-accent transition-colors">Story</Link>
              </nav>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="h-px bg-white/10 mb-8" />
                <p className="text-xs text-brand-muted uppercase tracking-widest">Connect</p>
                <div className="flex gap-4 mt-4">
                  <a href="#" className="text-sm hover:text-brand-accent">Instagram</a>
                  <a href="#" className="text-sm hover:text-brand-accent">TikTok</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
