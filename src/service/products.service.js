import { productosDao } from "../daos/index.js";


class ProductService {

    static async getProducts() {
        return await productosDao.listar();
    }

    static async saveProduct(body) {
        return await productosDao.save(body)
    }

    static async getProduct(id) {
        return await productosDao.getById(id)
    }

    //update product
    static async updateProduct(id, body) {
        return await productosDao.updateById(id, body)
    }

    static async deleteProduct(id) {
        return await productosDao.deleteById(id)
    }

    static async deleteAllProducts() {
        return await productosDao.deleteAllProducts()
    }
};

export { ProductService }