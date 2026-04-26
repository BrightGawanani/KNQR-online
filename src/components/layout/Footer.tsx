import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-brand-black pt-32 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-8">
              <h1 className="text-3xl font-bold tracking-[0.2em] italic">KNQR</h1>
            </Link>
            <p className="text-brand-muted text-sm font-light leading-relaxed max-w-xs">
              Defining the interface between streetwear and luxury. Elevating culture through intentional design and Malawian technical craftsmanship.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Collection</h4>
            <nav className="flex flex-col gap-4 text-sm text-brand-muted uppercase tracking-widest font-medium">
              <Link to="/shop" className="hover:text-white transition-colors">Shop All</Link>
              <Link to="/shop?cat=hoodies" className="hover:text-white transition-colors">Hoodies</Link>
              <Link to="/shop?cat=tees" className="hover:text-white transition-colors">Tees</Link>
              <Link to="/shop?cat=accessories" className="hover:text-white transition-colors">Accessories</Link>
            </nav>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Service</h4>
            <nav className="flex flex-col gap-4 text-sm text-brand-muted uppercase tracking-widest font-medium">
              <Link to="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link>
              <Link to="/care" className="hover:text-white transition-colors">Product Care</Link>
              <Link to="/size-guide" className="hover:text-white transition-colors">Size Guide</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
            </nav>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Legal</h4>
            <nav className="flex flex-col gap-4 text-sm text-brand-muted uppercase tracking-widest font-medium">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="h-14 bg-brand-accent text-black overflow-hidden flex items-center border-y border-black/10">
        <div className="flex whitespace-nowrap text-[11px] font-black uppercase tracking-[0.2em]">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mr-24 italic">Next Drop in 03:24:55 / Join the Syndicate</span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] text-brand-muted uppercase tracking-[0.4em] font-bold">
            © 2026 KNQR BY HYZE ENGOLA. PROJECT MALAWI ARCHIVE VOL 01.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[10px] text-brand-muted uppercase tracking-widest font-black hover:text-brand-accent transition-colors">Instagram</a>
            <a href="#" className="text-[10px] text-brand-muted uppercase tracking-widest font-black hover:text-brand-accent transition-colors">TikTok</a>
            <a href="#" className="text-[10px] text-brand-muted uppercase tracking-widest font-black hover:text-brand-accent transition-colors">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
