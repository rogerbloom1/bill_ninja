import * as React from "react";


const EditModal: React.FC<IEditModalProps> = ({
    ClientID,
    LastName, 
    FirstName, 
    MiddleName, 
    Street, 
    City,
    State,
    Zip,
    Diagnosis1,
    Diagnosis2,
    Diagnosis3,
    Insurance,
    Notes,
    handleDisplayModal,
    setClient

}) => { 
    const [feedback, setFeedback] = React.useState<string>("");
    const [lastName, setLastName] = React.useState<string>(LastName);
    const [firstName, setFirstName] = React.useState<string>(FirstName);
    const [middleName, setMiddleName] = React.useState<string>(MiddleName);
    const [street, setStreet] = React.useState<string>(Street);
    const [city, setCity] = React.useState<string>(City);
    const [state, setState] = React.useState<string>(State);
    const [zip, setZip] = React.useState<number>(Zip);
    const [diagnosis1, setDiagnosis1] = React.useState<string>(Diagnosis1);
    const [diagnosis2, setDiagnosis2] = React.useState<string>(Diagnosis2);
    const [diagnosis3, setDiagnosis3] = React.useState<string>(Diagnosis3);
    const [insurance, setInsurance] = React.useState<string>(Insurance);
    const [notes, setNotes] = React.useState<string>(Notes);
    //const [categories, setCategories] = React.useState<any[]>([]);

    /* React.useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = () => {
        fetch("/api/categories")
        .then((res) => res.json())
        .then((c) => setCategories(c))
        .catch((err) => console.log(err));
    }; */
    
    const formSubmit = (e: React.FormEvent) => {
        e.preventDefault();

    const updatedClient = { lastName, firstName, middleName, street, city, state, zip, diagnosis1, diagnosis2, diagnosis3, insurance, notes }
        
        fetch(`/api/Clients/${ClientID}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedClient),
        })
            .then((res) => res.json())
            .then((res) => {
                if(res) {
                    setFeedback("Client information updated");
                    setClient(updatedClient);
                }
            })
            .catch((err) => {
                console.log(err)
                setFeedback("An error occurred while updating client info. Try again or contact support."
                );
            });
    };

    return (
        <main id="editModal" className="container">
            <h1 className="text-center">Edit Client</h1>
            <div className="row">
                <div className="card col-sm-6 mx-auto"> 
                    <p className="text-center">{feedback}</p>
                    <form className="form" onSubmit={formSubmit}>
                        <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input 
                            className="form-control"
                            type="text" 
                            name="lastName" 
                            id="lastName" 
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    {/* <div className="form-group">
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
                </div> */}
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input 
                        className="form-control"
                        type="number" 
                        step=".01"
                        name="firstName" 
                        id="firstName" 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="middleName">Middle Name:</label>
                    <input 
                        className="form-control"
                        type="number" 
                        step=".01"
                        name="middleName" 
                        id="middleName" 
                        value={middleName}
                        onChange={(e) => setMiddleName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="street">Street Address:</label>
                    <input 
                        className="form-control"
                        type="number" 
                        step=".01"
                        name="street" 
                        id="street" 
                        value={street}
                        onChange={(e) => setStreet(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="city">City:</label>
                    <input 
                        className="form-control"
                        type="number" 
                        step=".01"
                        name="city" 
                        id="city" 
                        value={city}
                        onChange={(e) => setCity(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="state">State:</label>
                    <input 
                        className="form-control"
                        type="number" 
                        step=".01"
                        name="state" 
                        id="state" 
                        value={state}
                        onChange={(e) => setState(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="zip">Zip:</label>
                    <input 
                        className="form-control"
                        type="number" 
                        step=".01"
                        name="zip" 
                        id="zip" 
                        value={zip}
                        onChange={(e) => setZip(Number(e.target.value))} />
                </div>
                <div>
                    <label htmlFor="diagnosis1">Diagnosis 1:</label>
                    <input 
                        className="form-control"
                        type="number" 
                        step=".01"
                        name="diagnosis1" 
                        id="diagnosis1" 
                        value={diagnosis1}
                        onChange={(e) => setDiagnosis1(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="diagnosis2">Diagnosis 2:</label>
                    <input 
                        className="form-control"
                        type="number" 
                        step=".01"
                        name="diagnosis2" 
                        id="diagnosis2" 
                        value={diagnosis2}
                        onChange={(e) => setDiagnosis2(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="diagnosis3">Diagnosis 3:</label>
                    <input 
                        className="form-control"
                        type="number" 
                        step=".01"
                        name="diagnosis3" 
                        id="diagnosis3" 
                        value={diagnosis3}
                        onChange={(e) => setDiagnosis3(e.target.value)} />
                </div>
                
                <div>
                    <label htmlFor="insurance">Insurance:</label>
                    <select 
                        className="form-control"
                        onChange={(e) => setInsurance(e.target.value)}
                        value={insurance}
                    >
                        <option value="0">No</option> 
                        <option value="1">Yes</option> 
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="notes">Notes:</label>
                    <input 
                        className="form-control"
                        type="text" 
                        name="notes" 
                        id="notes" 
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}/>
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
    ClientID: number;
    LastName: string;
    FirstName: string;
    MiddleName: string;
    Street: string;
    City: string;
    State: string;
    Zip: number;
    Diagnosis1: string;
    Diagnosis2: string;
    Diagnosis3: string;
    Insurance: string;
    Notes: string;
    handleDisplayModal: any;
    setClient: any
}

export default EditModal;