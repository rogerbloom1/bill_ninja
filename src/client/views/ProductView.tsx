import * as React from "react";
import {useParams, useHistory} from "react-router";
import {IProduct} from "../utils/types";
import EditModal from "../components/EditModal";

const ProductView: React.FC = () =>  {
    const [feedback, setFeedback] = React.useState<string>("");
    const [product, setProduct] = React.useState<IProduct>(null);
    const [displayModal, setDisplayModal] = React.useState<boolean>(false);

    const params: any = useParams();
    const history: any = useHistory();

    React.useEffect(() => {
        fetchProduct();
    }, [])

    const fetchProduct = () => {
        fetch(`/api/products/${params.id}`)
        .then((res) => res.json())
        .then(([p]) => setProduct(p))
        .catch((err) => console.log(err)); 
        
    };

    const handleDisplayModal = () => {
        setDisplayModal(!displayModal);
    };

    const handleProductRemoval = () => {
        fetch(`/api/products/${product.ProductID}`, {
            method: "DELETE",
        }).then(res => res.json()).then(res => {
            setFeedback("Product removed. You will be redirected.");
            setTimeout(() => history.push("/products"), 2000);
        })
        .catch((err) => {
            console.log(err);
            setFeedback("An error occurred. Unable to remove product.");
        });
    };

    if (displayModal) {
        return (<EditModal 
            productID={product.ProductID}
            name={product.Name} 
            categoryID={product.CategoryID}
            stockLevel={product.StockLevel}
            price={product.Price}
            onSale={product.OnSale}
            handleDisplayModal={handleDisplayModal}
            setProduct={setProduct}
        />
        );
    } else {
    return (
        <main className="container">
            <p className="text-center">{feedback}</p>
            <div className="card text-center">
                <div className="card header row p-2">
                <div className="col-md-4 d-flex justify-content">
                {/* Edit SVG*/}
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="feather feather-edit"
                    onClick={handleDisplayModal}
                >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
                {/*delete SVG*/}
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="feather feather-trash-2"
                    onClick={handleProductRemoval}
                >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>  
                </div>
                </div>
                <div className="card-body">
                    <h1>{product?.Name}</h1>
                    <p>${product?.Price}</p>
                    <p>{product?.OnSale ? "On Sale" : "Not on Sale"}</p>
                    <p>In stock: {product?.StockLevel}</p>
                </div>
            </div>
        </main>
        
    )};
};

export default ProductView;