import * as React from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../utils/types";

const Products: React.FC = () => {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetchProducts();
    }, []);
    
    const fetchProducts = () => {
        fetch("/api/products")
        .then(res => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.log(err));
        };

    

    return (
        <main className="container">
            <div className="d-flex justify-content-between">
            <h1>Products</h1>
            <Link className="btn btn-outline-warning nav-link" to="/products/add">
                Add Product
            </Link>
            </div>
            <ul className = "list-group">
                {products.map((p: IProduct) => {
                    return (
                        <li key={p.ProductID} className="List-group-item">
                            {<Link to={`/products/${p.ProductID}`}>{p.Name}</Link>}
                        </li>
                    );
                })}
            </ul>
        </main>
    );
};

export default Products;
