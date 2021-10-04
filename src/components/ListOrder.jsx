import React from "react";
// import {vector} from '../assets/logo'
const ListOrder = ({ listOrder, setListOrder }) => {
  const total = Object.values(listOrder).reduce((acc,{price}) => acc + price ,0)
  const deleteOrder = (id) => {
    console.log(id)
    const arrayFilter = listOrder.filter(item => item.id !== id)
    setListOrder(arrayFilter)
  }
  return (
    <div>
      <ul>
        {listOrder.length === 0 ? (
          <p>No hay ordenes</p>
        ) : (
          listOrder.map((item) => <li className = 'list-group-item mt-1' key={item.id}>
          <span>{item.type} $ {item.price}</span>
          <button className ="btn btn-danger btn-sm  float-end" onClick={() => deleteOrder(item.id)} > delete </button>
          </li>)
        )}
      </ul>
      <h3>Total: {total} </h3>
      <div className="row">
      <div className="col-6 d-flex justify-content-end">
        <button className="btn btn-success btn-lg mt-5 justify-content-end"> Enviar a Cocina </button>
        <button className="btn btn-danger  btn-lg mt-5 "> Pagar </button>
        </div>
      </div>

    </div>
  );
};

export default ListOrder;
