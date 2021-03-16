import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Products from "./views/Products";
import ProductView from "./views/ProductView";
import NotFound from "./views/NotFound";
import AddProduct from "./views/AddProduct";
import Navbar from "./components/navbar";

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/products/add">
                    <AddProduct />
                </Route>
                <Route exact path="/products/:id">
                    <ProductView />
                </Route>
                <Route exact path="/products">
                    <Products/>
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;