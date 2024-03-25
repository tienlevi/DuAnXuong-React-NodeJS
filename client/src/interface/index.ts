export interface IProduct {
  _id: any;
  id?: number | string;
  name: string;
  price: number;
  img: string;
  description: string;
  discount: number;
  featured: boolean;
}
