import db from "../firebase"
import { collection, addDoc  } from "firebase/firestore";

const addDataOrders = async (itemsCollection) =>{
  const today = new Date()
  const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear() +' '+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    try{
      const {client, tab, listOrderArray, total} = itemsCollection;
      
       const data = await addDoc(collection(db, "orders" ), {
        client, 
        tab,
        listOrderArray, 
        date,
       total
      });
     console.log(data.id);
    } catch (error) {
      console.log(error);
    }
   
  }

export { addDataOrders, db  }