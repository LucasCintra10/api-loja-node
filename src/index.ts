import express from "express";
import { config } from "dotenv";
import { MongoGetAllProductsRepository } from "./repositories/product/mongo-get-all-products";
import { GetAllProductsController } from "./controllers/product/get-all-products/get-all-products";
import { MongoClient } from "./database/mongo";

const main = async () => {
  config();

  const app = express();
  const port = process.env.PORT || 3000;
  await MongoClient.connect();

  app.get("/products", async (req, res) => {
    console.log("GET /products");

    const mongoGetAllProductsRepository = new MongoGetAllProductsRepository();

    const getAllProductsController = new GetAllProductsController(mongoGetAllProductsRepository);

    const response = await getAllProductsController.handle();

    res.status(response.statusCode).json(response.body);
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

main();
