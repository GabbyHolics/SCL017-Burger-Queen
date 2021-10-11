import React, { useState, useEffect } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebaseFunctions/firebaseFunctions";
import { Link } from "react-router-dom";
import "../components/styleComponents.css";

const Cuisine = () => {
  const [getOrder, setGetOrder] = useState([]);
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "orders"), orderBy("date", "desc")),
        (snapshot) =>
          setGetOrder(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          )
      ),
    []
  );
  return (
    <div className="container-fluid-md ">
      <div className="row">
        <div className="col-12 mt-4">
          <Link to="/" className="btn btn-danger   ">
            X
          </Link>
          <h2 className="fs-1 text-center">Cocina</h2>
        </div>
        <span className="border mt-5 bg-danger p-1"></span>
        <span className="border mt-2 bg-success p-1"></span>
      </div>
      <div className="row">
        <div className="listOrderGrid ">
          {getOrder.map((item, index) => (
            <div
              key={index}
              className="list-group-item list-group-item-action list-group-item-danger m-2 overflow-auto"
            >
              <h6>Fecha: {item.date}</h6>
              <h5 className>N #{item.tab}</h5>
              <div className="list-group list-group-flush ">
                {item.listOrderArray.map(({ type }) => (
                  <div className="list-group-item">{type}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cuisine;
