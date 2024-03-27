export interface IProduct {
  _id: any;
  id?: number | string;
  name: string;
  price: number;
  image: string;
  description: string;
  discount: number;
  featured: boolean;
}
