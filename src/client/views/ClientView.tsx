import * as React from "react";
import {useParams, useHistory} from "react-router";
import {IClients} from "../utils/types";
import EditModal from "../components/EditModal";

const ClientView: React.FC = () =>  {
    const [feedback, setFeedback] = React.useState<string>("");
    const [client, setClient] = React.useState<IClients>(null);
    const [displayModal, setDisplayModal] = React.useState<boolean>(false);

    const params: any = useParams();
    const history: any = useHistory();

    React.useEffect(() => {
        fetchClient();
    }, [])

    const fetchClient = () => {
        fetch(`/api/Clients/${params.id}`)
        .then((res) => res.json())
        .then(([c]) => setClient(c))
        .catch((err) => console.log(err)); 
        
    };

    const handleDisplayModal = () => {
        setDisplayModal(!displayModal);
    };

    const handleClientRemoval = () => {
        fetch(`/api/Clients/${client.ClientID}`, {
            method: "DELETE",
        }).then(res => res.json()).then(res => {
            setFeedback("Client removed. You will be redirected.");
            setTimeout(() => history.push("/Clients"), 2000);
        })
        .catch((err) => {
            console.log(err);
            setFeedback("An error occurred. Unable to remove client.");
        });
    };

    if (displayModal) {
        return (<EditModal 
            ClientID={client.ClientID}
            LastName={client.LastName} 
            FirstName={client.FirstName}
            MiddleName={client.MiddleName}
            Street={client.Street}
            City={client.City}
            State={client.State}
            Zip={client.Zip}
            Diagnosis1={client.Diagnosis1} 
            Diagnosis2={client.Diagnosis2}
            Diagnosis3={client.Diagnosis3}
            Insurance={client.Insurance}
            Notes={client.Notes}
            handleDisplayModal={handleDisplayModal}
            setClient={setClient}
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
                    onClick={handleClientRemoval}
                >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>  
                </div>
                </div>
                <div className="card-body">
                    <h1>{client?.FirstName} {client?.MiddleName} {client?.LastName}</h1>
                    <p>{client?.Insurance ? "Insurance" : "Cash Client"}</p>
                    <p>Diagnosis: {client?.Diagnosis1}</p>
                </div>
            </div>
        </main>
        
    )};
};

export default ClientView;