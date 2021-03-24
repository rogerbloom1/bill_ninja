import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Clients from "./views/Clients";
import ClientView from "./views/ClientView";
import NotFound from "./views/NotFound";
//import AddProduct from "./views/AddProduct";
import Navbar from "./components/navbar";

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                {/* <Route exact path="/products/add">
                    <AddProduct />
                </Route> */}
                <Route exact path="/Clients/:id">
                    <ClientView />
                </Route>
                <Route exact path="/Clients">
                    <Clients/>
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;