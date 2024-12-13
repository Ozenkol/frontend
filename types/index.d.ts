// ./types/index.d.ts

export { Product, CartItem };

declare global {
  interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    discount_percentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }

  interface CartItem {
    product: Product;
    quantity: number;
  }
}
