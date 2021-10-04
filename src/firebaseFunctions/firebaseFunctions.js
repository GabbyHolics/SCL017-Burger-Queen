import db from "../firebase"
import { collection, addDoc } from "firebase/firestore";

const addDataOrders = async(name, tab) =>{
    try{
        await addDoc(collection(db, "orders"), {
        name, 
        tab,
        order: []
      });
     
    } catch (error) {
      console.log(error);
    }
   
  }

export { addDataOrders }