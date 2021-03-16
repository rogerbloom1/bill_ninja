import { IProduct } from "../../../client/utils/types";
import Query from "../models";

const getOneProduct = (id: number) => {
    return Query("SELECT * FROM products WHERE ProductID = ?", [id]);
};

const getAllProducts = () => {
    return Query("SELECT * FROM products");
};

const insertProduct = (product: IProduct) => {
    return Query("INSERT INTO products SET ?", [product]);
};

const updateProduct = (product: IProduct, id: number) => {
   return Query("UPDATE products SET ? WHERE ProductID = ?", [product, id]); 
};

const removeProduct = (id: number) => {
   return Query("DELETE FROM products WHERE ProductID = ?", [id]); 
};

export default {
    getOneProduct,
    getAllProducts,
    insertProduct,
    updateProduct,
    removeProduct
};