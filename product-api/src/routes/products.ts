import {Request, Response, Router} from "express";
import {productService} from "../services/product-service";
import catchAsync from "../utils/catchAsync";

export const productRouter = Router()

productRouter.get('/', catchAsync(async (req: Request, res: Response) => {
    const products = await productService.listProducts()
    return res.status(200).json(products)
}))
