import { Product } from "../../../models/product";
import { HttpResponse, HttpRequest } from "../../protocols";

export interface IGetProductController {
    handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Product>>;
}

export interface IGetProductRepository {
  getProduct(id: string): Promise<Product>;
}



