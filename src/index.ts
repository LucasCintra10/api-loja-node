import express from "express";
import { config } from "dotenv";
import { MongoGetAllProductsRepository } from "./repositories/product/mongo-get-all-products";
import { MongoCreateProductRepository } from "./repositories/product/monto-create-product";
import { GetAllProductsController } from "./controllers/product/get-all-products/get-all-products";
import { CreateProductController } from "./controllers/product/create-product/create-product";
import { MongoClient } from "./database/mongo";

const main = async () => {
  config();

  const app = express();

  app.use(express.json());
  const port = process.env.PORT || 3000;
  await MongoClient.connect();

  app.get("/products", async (req, res) => {
    console.log("GET /products");

    const mongoGetAllProductsRepository = new MongoGetAllProductsRepository();

    const getAllProductsController = new GetAllProductsController(mongoGetAllProductsRepository);

    const response = await getAllProductsController.handle();

    res.status(response.statusCode).json(response.body);
  });

  app.post("/products/create", async (req, res) => {
    console.log("POST /products/create");

    const mongoCreateProductRepository = new MongoCreateProductRepository();

    const createProductController = new CreateProductController(mongoCreateProductRepository);

    const response = await createProductController.handle({ body: req.body });

    res.status(response.statusCode).json(response.body);
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

main();
