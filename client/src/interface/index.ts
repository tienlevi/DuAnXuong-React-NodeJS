export interface IProduct {
  id?: number | string;
  name: string;
  price: number;
  img: string;
  description: string;
  discount: number;
  featured: boolean;
}
