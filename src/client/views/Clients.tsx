import * as React from "react";
import { Link } from "react-router-dom";
import { IClients } from "../utils/types";

const Clients: React.FC = () => {
    const [clients, setClients] = React.useState([]);

    React.useEffect(() => {
        fetchClients();
    }, []);
    
    const fetchClients = () => {
        fetch("/api/clients")
        .then(res => res.json())
        .then((data) => setClients(data))
        .catch((err) => console.log(err));
        };

    

    return (
        <main className="container">
            <div className="d-flex justify-content-between">
            <h1>Clients</h1>
            <Link className="btn btn-outline-warning nav-link" to="/products/add">
                Add Client
            </Link>
            </div>
            <div className = "list-group">
                {clients.map((c: IClients) => {
                    return (
                        <div key={c.ClientID} className="List-group-item">
                            {<Link to={`/clients/${c.ClientID}`}>{c.LastName}</Link>}
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

export default Clients;
