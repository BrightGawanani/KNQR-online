export interface Product {
  id: string;
  name: string;
  price: number;
  category: "T-shirts" | "Hoodies" | "Caps" | "Accessories";
  description: string;
  images: string[];
  colors: string[];
  sizes: string[];
  isNew?: boolean;
  isLimited?: boolean;
  stock: number;
}

export interface CartItem extends Product {
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}
