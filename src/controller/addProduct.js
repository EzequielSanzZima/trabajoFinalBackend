import { ProductService } from "../service/products.service.js"
import { logger } from "../helpers/logger.js"
import { contenedorMongoDb } from "../container/ContenedorMongoDb.js"


class ProductController {
    static async getProducts(req, res) {
        try {
            const result = await ProductService.getProducts()
            if (typeof result == "string") {
                res.status(404).send('El archivo no existe')
            } else {
                res.json(result)
            }
        } catch (error) {
            res.status(400).json({
                status: "ERROR",
                message: `Hubo un error ${error}`
            })
        }
    }

    static async getProductById(req, res) {
        try {
            logger.info(req.params.id);
            res.json(await ProductService.getProduct(req.params.id));
        } catch (error) {
            res.status(400).json({
                status: "ERROR",
                message: `Hubo un error ${error}`
            })
        }
    }

    static async saveProduct(req, res) {
        try {
            const result = await ProductService.saveProduct(req.body)
            res.json(result);
        } catch (error) {
            res.status(400).json({
                status: "ERROR",
                message: `Hubo un error ${error}`
            })
        }
    }

    static async updateProduct(req, res) {
        try {
            const result = await ProductService.updateProduct(req.params.id, req.body)
            res.json(result);
        } catch (error) {
            res.status(400).json({
                status: "ERROR",
                message: `Hubo un error ${error}`
            })
        }
    }

    static async deleteProduct(req, res) {
        try {
            const result = await ProductService.deleteProduct(req.params.id)
            res.json(result);
        } catch (error) {
            res.status(400).json({
                status: "ERROR",
                message: `Hubo un error ${error}`
            })
        }
    }

    static async deleteAllProducts(req, res) {
        try {
            const result = await ProductService.deleteAllProducts()
            res.json(result);
        } catch (error) {
            res.status(400).json({
                status: "ERROR",
                message: `Hubo un error ${error}`
            })
        }
    }
}

export { ProductController }