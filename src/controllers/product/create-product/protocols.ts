import { Product } from "../../../models/product";

export interface CreateProductParams {
  name: string;
  description: string;
  color: string;
  weight: number;
  type: string;
  price: number;
}

export interface ICreateProductRepository {
  createProduct(params: CreateProductParams): Promise<Product>;
}
