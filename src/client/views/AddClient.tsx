import * as React from "react";

const AddClient = () => {
    
    const [feedback, setFeedback] = React.useState<string>("");
    const [LastName, setLastName] = React.useState<string>("");
    const [FirstName, setFirstName] = React.useState<string>("");
    const [MiddleName, setMiddleName] = React.useState<string>("");
    const [Street, setStreet] = React.useState<string>("");
    const [City, setCity] = React.useState<string>("");
    const [State, setState] = React.useState<string>("");
    const [Zip, setZip] = React.useState<number>(0);
    const [Diagnosis1, setDiagnosis1] = React.useState<string>("");
    const [Diagnosis2, setDiagnosis2] = React.useState<string>("");
    const [Diagnosis3, setDiagnosis3] = React.useState<string>("");
    const [Insurance, setInsurance] = React.useState<string>("");
    const [Notes, setNotes] = React.useState<string>("");
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
        
        fetch("/api/Clients", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ LastName, FirstName, MiddleName, Street, City, State, Zip, Diagnosis1, Diagnosis2, Diagnosis3, Insurance, Notes }),
        })
            .then((res) => res.json())
            .then((res) => {
                if(res) {
                    setFeedback("Client added");
                }
            })
            .catch((err) => {
                console.log(err)
                setFeedback("An error occurred while adding client info. Try again or contact support."
                );
            });
    };

    /* const validatePrice = (e: any) => {
        let price: number = Number(e.target.value.toFixed(2));
        if (isNaN(price)) {
            setFeedback("Invalid entry");
            return;
        }

        setPrice(price)
    }
 */
    return (
        <main className="container">
            <h1 className="text-center">Add Product</h1>
            <div className="row">
                <div className="card col-sm-6 mx-auto"> 
                    <p className="text-center">{feedback}</p>
                    <form className="form" onSubmit={formSubmit}>
                        <div className="form-group">
                        <label htmlFor="LastName">Last Name:</label>
                        <input 
                            className="form-control"
                            type="text" 
                            name="lastName" 
                            id="lastName" 
                            onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            className="form-control"
                            type="text"
                            name="firstName" 
                            id="firstName" 
                            onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="middleName">Price:</label>
                    <input 
                        className="form-control"
                        type="text" 
                        name="middleName" 
                        id="middleName" 
                        onChange={(e) => setMiddleName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="street">Price:</label>
                    <input 
                        className="form-control"
                        type="text" 
                        name="street" 
                        id="street" 
                        onChange={(e) => setStreet(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="city">Price:</label>
                    <input 
                        className="form-control"
                        type="text" 
                        name="city" 
                        id="city" 
                        onChange={(e) => setCity(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="state">Price:</label>
                    <input 
                        className="form-control"
                        type="text" 
                        name="state" 
                        id="state" 
                        onChange={(e) => setState(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="zip">Price:</label>
                    <input 
                        className="form-control"
                        type="text" 
                        name="zip" 
                        id="zip" 
                        onChange={(e) => setZip(Number(e.target.value))} />
                </div>
                <div>
                    <label htmlFor="diagnosis1">Price:</label>
                    <input 
                        className="form-control"
                        type="text" 
                        name="diagnosis1" 
                        id="diagnosis1" 
                        onChange={(e) => setDiagnosis1(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="diagnosis2">Price:</label>
                    <input 
                        className="form-control"
                        type="text" 
                        name="diagnosis2" 
                        id="diagnosis2" 
                        onChange={(e) => setDiagnosis2(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="diagnosis3">Price:</label>
                    <input 
                        className="form-control"
                        type="text" 
                        name="diagnosis3" 
                        id="diagnosis3" 
                        onChange={(e) => setDiagnosis3(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="insurance">Insurance:</label>
                    <select onChange={(e) => setInsurance(e.target.value)}>
                        <option value="0">No</option> 
                        <option value="1">Yes</option> 
                    </select>
                </div>
                <div>
                    <label htmlFor="notes">In Stock:</label>
                    <input 
                        type="text" 
                        name="notes" 
                        id="notes" 
                        onChange={(e) => setNotes(e.target.value)}/>
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
export default AddClient;