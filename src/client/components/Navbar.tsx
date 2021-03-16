import * as React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav bg-primary">
            <h1>BestBuy</h1>
            <ul className="nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/products">
                        Products
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/admin">
                        Admin
                    </NavLink>
                </li>
            </ul>
        </nav>
    );   
};

export default Navbar;
