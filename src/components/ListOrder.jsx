import React from "react";
import { addDataOrders } from "../firebaseFunctions/firebaseFunctions";
const ListOrder = ({ listOrder, setListOrder, client, tab }) => {
  

  const total = Object.values(listOrder).reduce(
    (acc, { price }) => acc + price,
    0
  );
  const deleteOrder = (id) => {
    const arrayFilter = listOrder.filter((item) => item.id !== id);
    setListOrder(arrayFilter);
  };

  const addCollectionOrder = () => {
    const listOrderArray = Object.values(listOrder)
    const itemsCollection = { client, tab, listOrderArray, total };
    addDataOrders(itemsCollection);
  };

  return (
    <div>
      <div>
      <div className="container-fluid">
      <div className="col-4 justify-content-end">
        {/* <button
                className="btn btn-danger btn-sm  float-end"
                onClick={() => deleteOrder(item.id)}
              >
                delete
              </button> */}
      </div>
        <h3 className="h3  mt-4"> Cliente </h3>
        <h6> Nombre cliente: {client}</h6>
        <h6> Numero de mesa: #{tab}</h6>
      </div>
      <ul>
        {listOrder.length === 0 ? (
          <p>No hay ordenes</p>
        ) : (
          listOrder.map((item, index) => (
            <li className="list-group-item mt-1" key={index} id={item.id}>
              <span>
                {item.type} $ {item.price}
              </span>
              <span> contador </span>
              <button
                className="btn btn-danger btn-sm  float-end"
                onClick={() => deleteOrder(item.id)}
              >
                delete
              </button>
            </li>
          ))
        )}
      </ul>
      <h3>Total: {total} </h3>
      <div className="row">
        <div className="col-6 d-flex justify-content-end">
          <button
            className="btn btn-success btn-lg mt-5 justify-content-end"
            onTouchStart={() => addCollectionOrder()}
          >
            Enviar a Cocina
          </button>
          <button className="btn btn-danger  btn-lg mt-5 "> Pagar </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ListOrder;
//const clearOrders = () => setOrders([]);
