import express from "express";
import { ProductController } from "../controller/addProduct.js";
import { checkUserLoggued } from "../../middlewares/userAuth.js";
import { checkAdminRole } from "../../middlewares/adminRole.js";

const router = express.Router()

router.get("/",  ProductController.getProducts)
router.get("/:id",  ProductController.getProductById)
router.post("/",  ProductController.saveProduct)
router.put("/:id",  ProductController.updateProduct)
router.delete("/:id",  ProductController.deleteProduct)
router.delete("/",  ProductController.deleteAllProducts)

export { router as productRouter }
