import { Product } from "../../../models/product";
import { HttpResponse } from "../../protocols";


export interface IGetAllProductsController {
    handle():  Promise<HttpResponse<Product[]>>;
}

export interface IGetAllProductsRepository {
    getProducts(): Promise<Product[]>;
}