import { Product } from "../../../models/product";
import { HttpResponse, HttpRequest } from "../../protocols";

export interface UpdateProductParams {
    name?: string;
    description?: string;
    color?: string;
    weight?: number;
    type?: string;
    price?: number;
}

export interface IUpdateProductController {
    handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Product>>;
}


export interface IUpdateProductRepository {
  updateProduct(id: string, params: UpdateProductParams ): Promise<Product>;
}
