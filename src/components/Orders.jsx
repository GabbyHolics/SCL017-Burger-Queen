import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebaseFunctions/firebaseFunctions";
import { Link } from "react-router-dom";
import '../components/styleComponents.css'

import React, { useState, useEffect } from "react";
const Orders = () => {
  const [getOrder, setGetOrder] = useState([]);
  useEffect(
    () =>
      onSnapshot(query(collection(db, "orders"), orderBy('tab','desc')), (snapshot) =>
        setGetOrder(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  return (
    <div className="container-fluid-md ">
      <div className="row">
            <div className="col-12 ">
                <Link to="/waiter" className="btn btn-danger mt-4  ">
                    X
                </Link>
                <h3 className="h1 text-center">Ordenes </h3>
            </div>
            <span className="border mt-5 bg-danger p-1"></span>
            <span className="border mt-2 bg-success p-1"></span>
      </div>
     <div className="row">
        <div className="listOrderGrid ">
              {getOrder.map((item, index) => (
                  <div key={index} className="list-group-item list-group-item-action list-group-item-success m-2 overflow-auto">
                  <h6>
                      Fecha: {item.date}
                      </h6> 
                      <h5> N# 
                      {item.tab}
                      </h5> 
                      <h5>
                      Cliente:
                       {item.client} 
                      </h5>
                      <div className='list-group list-group-flush '>
                          {item.listOrderArray.map(({ type, price }) => (
                              <div className='list-group-item'>{type} $ {price}</div>
                          ))}
                      </div>
                      <h5 className="mt-1">
                      Total:
                        $ {item.total} 
                      </h5>
                  </div>
              ))}
        </div>
     </div>
     
       
    </div>
  );
};

export default Orders;
