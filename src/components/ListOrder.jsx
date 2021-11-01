import React from "react";
import { useState } from "react";
import ModalSend from "../componentsModal/ModalSend";
import { addDataOrders } from "../firebaseFunctions/firebaseFunctions";
const ListOrder = ({ listOrder, setListOrder, client, tab }) => {
  const [openModal, setOpenModal] = useState(false);
  const total = Object.values(listOrder).reduce(
    (acc, { price }) => acc + price,
    0
  );
  const deleteOrder = (id) => {
    const arrayFilter = listOrder.filter((item) => item.id !== id);
    setListOrder(arrayFilter);
  };
  const clearOrders = () => setListOrder([]);

  const addCollectionOrder = () => {
    const listOrderArray = Object.values(listOrder);
    const itemsCollection = { client, tab, listOrderArray, total };
    addDataOrders(itemsCollection);
    setOpenModal(true);
  };

  return (
    <div className="container-fluid mt-4">
        <div className="row">
          <h3 className="h3 text-center "> Cliente </h3>
          <h6 className="list-group-item "> Nombre cliente: {client}</h6>
          <h6 className="list-group-item "> Numero de mesa: #{tab}</h6>
          <div className="row mt-1">
            <div className="col-12 justify-content-end mb-3">
              <button
                className="btn btn-danger btn-sm  float-end"
                onTouchStart={() => clearOrders()}
              >
                Borrar todas las ordenes
              </button>
            </div>
        </div>
        <div className="row justify-content-center">
          <ul className="list-group list-group-order  ">
            {listOrder.length === 0 ? (
              <p>No hay ordenes</p>
            ) : (
              listOrder.map((item, index) => (
                <li className="list-group-item mt-1 overflow-auto " key={index} id={item.id}>
                  <span>
                    {item.type} $ {item.price}
                  </span>
                  <button
                    className="btn btn-danger btn-sm justify-content-center float-end"
                    onTouchStart={() => deleteOrder(item.id)}
                  >
                    X
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="row  d-flex align-items-end">
          <h3 className='mt-2'>Total: {total} </h3>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-end align-items-end">
            <button
              className="btn btn-success btn-lg mt-5 "
              onTouchStart={() => addCollectionOrder()}
            >
              Enviar Pedido
            </button>
            
            <button className="btn btn-danger btn-lg mt-5 "> Pagar </button>
           
 
          </div>
          {openModal && <ModalSend  />}
        </div>
      </div>
    </div>
  );
};

export default ListOrder;
