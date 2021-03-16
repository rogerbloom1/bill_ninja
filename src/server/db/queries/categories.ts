import Query from "../models";

const getOneCategory = (id: number) => {
    return Query("SELECT CategoryID, Name FROM categories WHERE CategoryID = ?", [id]);
};

const getAllCategories = () => {
    return Query("SELECT CategoryID, Name FROM categories");
};

const insertCategory = (body: any) => {
    return Query("INSERT INTO categories SET ?", [body]);
};

export default {
    getOneCategory,
    getAllCategories,
    insertCategory
};