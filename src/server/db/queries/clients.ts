import { IClients } from "../../../client/utils/types";
import Query from "../models";

const getOneClient = (id: number) => {
    return Query("SELECT * FROM Clients WHERE ClientID = ?", [id]);
};

const getAllClients = () => {
    return Query("SELECT * FROM Clients");
};

const insertClient = (client: IClients) => {
    return Query("INSERT INTO Clients SET ?", [client]);
};

const updateClient = (client: IClients, id: number) => {
   return Query("UPDATE Clients SET ? WHERE ClientID = ?", [client, id]); 
};

const removeClient = (id: number) => {
   return Query("DELETE FROM Clients WHERE ClientID = ?", [id]); 
};

export default {
    getOneClient,
    getAllClients,
    insertClient,
    updateClient,
    removeClient
};