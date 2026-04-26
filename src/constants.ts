import { Product } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "knqr-t8-001",
    name: "CYBERPUNK OVERSIZE TEE",
    price: 45,
    category: "T-shirts",
    description: "Heavyweight 240GSM cotton with reflective 'KNQR' chest logo. Engineered for the Lilongwe urban landscape.",
    images: [
      "https://images.unsplash.com/photo-1530133530444-4e1adad9969c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=1000"
    ],
    colors: ["Onyx", "Ghost White"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    stock: 12
  },
  {
    id: "knqr-hd-002",
    name: "NEO-NOMAD HOODIE",
    price: 95,
    category: "Hoodies",
    description: "Ultra-soft polar fleece lining with architectural hood structure. Features the signature KNQR monogram on the sleeve and back.",
    images: [
      "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?auto=format&fit=crop&q=80&w=1000"
    ],
    colors: ["Slate Grey", "Midnight"],
    sizes: ["M", "L", "XL"],
    isLimited: true,
    stock: 5
  },
  {
    id: "knqr-cp-003",
    name: "DISTRICT BEANIE",
    price: 30,
    category: "Accessories",
    description: "Double-layered knit with woven heritage label. Thermal regulation tech.",
    images: [
      "https://images.unsplash.com/photo-1576878477583-02db4434220b?auto=format&fit=crop&q=80&w=1000"
    ],
    colors: ["Black", "Orange Blaze"],
    sizes: ["One Size"],
    stock: 45
  },
  {
    id: "knqr-ts-004",
    name: "CORE LOGO TEE",
    price: 40,
    category: "T-shirts",
    description: "The foundation of the KNQR uniform. Premium Malawian combed cotton with high-density KNQR logo print.",
    images: [
      "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?auto=format&fit=crop&q=80&w=1000"
    ],
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    stock: 100
  }
];
