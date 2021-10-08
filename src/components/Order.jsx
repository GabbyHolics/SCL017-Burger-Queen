// import { query, orderBy, limit } from "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseFunctions/firebaseFunctions";

import React, { useState, useEffect } from 'react';
const Order = () => {
    const [getOrder, setGetOrder] = useState([])
    useEffect(() => 
    onSnapshot(collection(db,'orders'), (snapshot)=> 
    setGetOrder(snapshot.docs.map(doc => ({ ...doc.data(), id:doc.id})))
    ),
    []
    )
console.log(getOrder)
    return (
        <div>
           <div className="container-fluid">
               <h3>Soy los pedidos </h3>
               <ul>
              { 
                  getOrder.map((item)=>(
                    <li key={item.id}>{item.client }, {item.tab} 
                    <ul>
                        {
                            item.listOrderArray.map(({type})=>(
                                <li>{type}</li>
                            ))
                        }
                    </ul>
                    </li>

               ))}
                 
               </ul>
           </div> 
        </div>
    )
}

export default Order
