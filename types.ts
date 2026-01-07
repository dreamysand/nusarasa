
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  details: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  address: string;
  email: string;
  phone: string;
  vision: string;
  mission: string[];
}
