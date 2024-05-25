import { Product } from "../../../models/product";
import { HttpReponse, HttpRequest } from "../../protocols";

export interface ICreateProductController {
  handle(httpRequest: HttpRequest<CreateProductParams>): Promise<HttpReponse<Product>>;
}

export interface CreateProductParams {
  name: string;
  description: string;
  color: string;
  weight: number;
  type: string;
  price: number;
  created_at: Date;
}

export interface ICreateProductRepository {
  createProduct(params: CreateProductParams): Promise<Product>;
}
