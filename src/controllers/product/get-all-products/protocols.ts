import { Product } from "../../../models/product";
import { HttpReponse } from "../../protocols";


export interface IGetAllProductsController {
    handle():  Promise<HttpReponse<Product[]>>;
}

export interface IGetAllProductsRepository {
    getProducts(): Promise<Product[]>;
}