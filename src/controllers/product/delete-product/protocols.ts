import { Product } from "../../../models/product";
import { HttpRequest, HttpResponse } from "../../protocols";

export interface IDeleteProductRepository {
    deleteProduct: (id: string) => Promise<Product>
}

export interface IDeleteProductController {
    handle: (httpRequest: HttpRequest<any>) => Promise<HttpResponse<Product>>
}
