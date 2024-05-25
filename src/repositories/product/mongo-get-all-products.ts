
import { IGetAllProductsRepository } from "../../controllers/product/get-all-products/protocols";
import { Product } from "../../models/product";



export class MongoGetAllProductsRepository implements IGetAllProductsRepository {
  async getProducts(): Promise<Product[]> {
    return [
        {
            id: 1,
            name: 'product 1',
            description: 'description 1',
            color: 'color 1',
            weight: 1,
            type: 'type 1',
            price: 1,
            created_at: new Date()
        },
        {
            id: 2,
            name: 'product 2',
            description: 'description 2',
            color: 'color 2',
            weight: 2,
            type: 'type 2',
            price: 2,
            created_at: new Date()
        }
        ];

  }
}