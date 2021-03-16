import * as React from "react";

const EditModal: React.FC<IEditModalProps> = ({
    productID,
    name, 
    categoryID, 
    price, 
    onSale, 
    stockLevel,
    handleDisplayModal,
    setProduct

}) => { 
    const [feedback, setFeedback] = React.useState<string>("");
    const [Name, setName] = React.useState<string>(name);
    const [CategoryID, setCategoryID] = React.useState<number>(categoryID);
    const [Price, setPrice] = React.useState<number>(price);
    const [OnSale, setOnSale] = React.useState<number>(onSale);
    const [StockLevel, setStockLevel] = React.useState<string>(stockLevel);
    const [categories, setCategories] = React.useState<any[]>([]);

    React.useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = () => {
        fetch("/api/categories")
        .then((res) => res.json())
        .then((c) => setCategories(c))
        .catch((err) => console.log(err));
    };
    
    const formSubmit = (e: React.FormEvent) => {
        e.preventDefault();

    const updatedProduct = { Name, Price, OnSale, StockLevel, CategoryID }
        
        fetch(`/api/products/${productID}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedProduct),
        })
            .then((res) => res.json())
            .then((res) => {
                if(res) {
                    setFeedback("Product updated");
                    setProduct(updatedProduct);
                }
            })
            .catch((err) => {
                console.log(err)
                setFeedback("An error occurred while updating product info. Try again or contact support."
                );
            });
    };

    return (
        <main id="editModal" className="container">
            <h1 className="text-center">Edit Product</h1>
            <div className="row">
                <div className="card col-sm-6 mx-auto"> 
                    <p className="text-center">{feedback}</p>
                    <form className="form" onSubmit={formSubmit}>
                        <div className="form-group">
                        <label htmlFor="productName">Product Name:</label>
                        <input 
                            className="form-control"
                            type="text" 
                            name="productName" 
                            id="productName" 
                            value={Name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productCategory">Product Category:</label>
                        <select
                            className="form-control"
                            name="productCategory" 
                            id="productCategory" 
                            value={CategoryID}
                            onChange={(e) => setCategoryID(Number(e.target.value))} 
                        >
                        {categories.map((category) => {
                            return (
                                <option 
                                    value={category.CategoryID} 
                                    key={category.CategoryID}
                                >
                                    {category.Name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor="productPrice">Price:</label>
                    <input 
                        className="form-control"
                        type="number" 
                        step=".01"
                        name="productPrice" 
                        id="productPrice" 
                        value={Price}
                        onChange={(e) => setPrice(Number(e.target.value))} />
                </div>
                <div>
                    <label htmlFor="onSale">On Sale:</label>
                    <select 
                        className="form-control"
                        onChange={(e) => setOnSale(Number(e.target.value))}
                        value={OnSale}
                    >
                        <option value="0">No</option> 
                        <option value="1">Yes</option> 
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="stockLevel">In Stock:</label>
                    <input 
                        className="form-control"
                        type="text" 
                        name="stockLevel" 
                        id="stockLevel" 
                        value={StockLevel}
                        onChange={(e) => setStockLevel(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input className="form-control" type="submit" value="edit"/>
                    <button 
                        className="btn btn-secondary d-block"
                        onClick={handleDisplayModal}
                    >
                        Close
                    </button>
                </div>
            </form>
            </div>
            </div>
        </main>
    );
};

interface IEditModalProps {
    productID: number;
    name: string;
    onSale: number;
    price: number;
    stockLevel: string;
    categoryID: number;
    handleDisplayModal: any;
    setProduct: any
}

export default EditModal;