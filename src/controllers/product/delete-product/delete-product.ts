import { IDeleteProductController } from "./protocols";
import { IDeleteProductRepository } from "./protocols";
import { HttpRequest, HttpResponse } from "../../protocols";
import { Product } from "../../../models/product";

export class DeleteProductController implements IDeleteProductController {
  constructor(private readonly deleteProductRepository: IDeleteProductRepository) {}

  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Product>> {
    try {
      const { id } = httpRequest.params;

      if (!id) {
        return {
          statusCode: 400,
          body: "Id inválido",
        };
      }

      const product = await this.deleteProductRepository.deleteProduct(id);

      return {
        statusCode: 200,
        body: product,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Erro interno",
      };
    }
  }
}
