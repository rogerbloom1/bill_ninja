import * as React from "react";

const AddProduct = () => {
    
    const [feedback, setFeedback] = React.useState<string>("");
    const [Name, setName] = React.useState<string>("");
    const [CategoryID, setCategoryID] = React.useState<number>(1);
    const [Price, setPrice] = React.useState<number>(0);
    const [OnSale, setOnSale] = React.useState<number>(0);
    const [StockLevel, setStockLevel] = React.useState<string>("");
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
        
        fetch("/api/products", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ Name, Price, OnSale, StockLevel, CategoryID }),
        })
            .then((res) => res.json())
            .then((res) => {
                if(res) {
                    setFeedback("Product added");
                }
            })
            .catch((err) => {
                console.log(err)
                setFeedback("An error occurred while adding product info. Try again or contact support."
                );
            });
    };

    const validatePrice = (e: any) => {
        let price: number = Number(e.target.value.toFixed(2));
        if (isNaN(price)) {
            setFeedback("Invalid entry");
            return;
        }

        setPrice(price)
    }

    return (
        <main className="container">
            <h1 className="text-center">Add Product</h1>
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
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productCategory">Product Category:</label>
                        <select
                            className="form-control"
                            name="productCategory" 
                            id="productCategory" 
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
                        onChange={(e) => setPrice(Number(e.target.value))} />
                </div>
                <div>
                    <label htmlFor="onSale">On Sale:</label>
                    <select onChange={(e) => setOnSale(Number(e.target.value))}>
                        <option value="0">No</option> 
                        <option value="1">Yes</option> 
                    </select>
                </div>
                <div>
                    <label htmlFor="stockLevel">In Stock:</label>
                    <input 
                        type="text" 
                        name="stockLevel" 
                        id="stockLevel" 
                        onChange={(e) => setStockLevel(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
            </div>
            </div>
        </main>
    );
};
export default AddProduct;