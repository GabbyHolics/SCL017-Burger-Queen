import React from "react";
import { addDataOrders } from "../firebaseFunctions/firebaseFunctions";
import { useHistory } from "react-router-dom"
import logo from '../assets/logo.png'

const NewOrder = ({setClientHandler}) => {

  const [newOrder,setNewOrder] = React.useState('');
  const [newTab, setNewTab] = React.useState('');
  const [error, setError] = React.useState(null);
  let history = useHistory();

  const getData = (e) => {
    e.preventDefault();
    if (newOrder === ('')) {
      setError("Ingrese nombre del cliente");
      return;
    }
    if (newTab === ('')) {
      setError("Ingrese Numero de Mesa");
      return;
    } 
    setClientHandler(newOrder);
    addDataOrders(newOrder, newTab);
    setError(null);
    setNewOrder('');
    setNewTab('');
    history.push('/menu')
  }

  return (
    <div className="container-fluid vh-100  bg-success  bg-opacity-25">
        <div className=" row   justify-content-center align-items-center ">
          <div className="col-8">
            <form onSubmit={getData}>
              {error && <div className="alert alert-danger">{error}</div>}
              <img src={logo} alt="" className="img-fluid mb-5 " />
              <div className="mb-3">
                <label className="form-label h2 ">
                  Nombre de Cliente
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setNewOrder(e.target.value)}
                  value={newOrder}
                />
                <div className="form-text " >
                  Recuerda escribir bien el nombre del cliente
                </div>
              </div>
              <div className="mb-3">
                <label  className="form-label h2">
                  Numero de Mesa
                </label>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) => setNewTab(e.target.value)}
                  value={newTab}
                />
              </div> 
              
              <button type="submit" className="btn btn-success btn-lg">
                Registrar
              </button>
            </form>
        </div>
      </div>
    </div>
  );
  }
//m-0 vh-100 row justify-content-center align-items-center
export default NewOrder
