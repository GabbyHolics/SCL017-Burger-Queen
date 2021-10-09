// import { query, orderBy, limit } from "firebase/firestore";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebaseFunctions/firebaseFunctions";
import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";
const Orders = () => {
  const [getOrder, setGetOrder] = useState([]);
  useEffect(
    () =>
      onSnapshot(query(collection(db, "orders"), orderBy('date','desc')), (snapshot) =>
        setGetOrder(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  return (
    <div className="container-fluid-md ">
      <div className="row">
            <div className="col-12 ">
                <Link to="/" className="btn btn-danger   ">
                    X
                </Link>
                <h3 className="h1 text-center">Ordenes </h3>
            </div>
            <span class="border mt-5 bg-danger p-1"></span>
            <span class="border mt-2 bg-success p-1"></span>
      </div>
     <div className="row">
         <div className="col- ">
            <ul className="list-group d-flex flex-row flex-wrap ">
                {getOrder.map((item) => (
                    <li key={item.id} className="list-group-item list-group-item-action list-group-item-primary m-2 ">
                       Nombre de Cliente: {item.client},  N # {item.tab} Fecha: {item.date}
                        <ul>
                            {item.listOrderArray.map(({ type }) => (
                                <li>{type}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
         </div>
     </div>
     
       
    </div>
  );
};

export default Orders;
