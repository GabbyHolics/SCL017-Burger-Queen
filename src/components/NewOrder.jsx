import React from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import db from "../firebase"


const NewOrder = () => {
  const [newOrder,setNewOrder] = React.useState([]);
  const [newTab, setNewTab] = React.useState([]);
  const [error, setError] = React.useState(null);

  const getData = (e) => {
    e.preventDefault();
    if (!newOrder.trim()) {
      setError("Ingrese nombre del cliente");
      return;
    }
    if (!newTab.trim()) {
      setError("Ingrese Numero de Mesa");
      return;
    } else {
      
     
    }
    setError("");
    setNewOrder('');
    setNewTab('');
  
  }

  React.useEffect=(()=>{
    const addData = async() =>{
      try {
        const docRef = await addDoc(collection(db, "orders"), {
          name: newOrder,
          tab: newTab
        });
        console.log("Document written with ID: ", docRef.id);
        
      } catch (error) {
        console.log(error);
      }
     
    }
    addData(setNewOrder)
    addData(setNewTab)

  }, [])
  
    
 
  

  return (
    <div className="container-fluid  view-menu">
        <div className="m-0 vh-100 row justify-content-center align-items-center">
          <div className="col-8">
            <form onSubmit={getData}>
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="mb-3">
                <label className="form-label">
                  Nombre de Cliente
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setNewOrder(e.target.value)}
                  value={newOrder}
                />
                <div id="emailHelp" className="form-text">
                  Recuerda escribir bien el nombre del cliente
                </div>
              </div>
              <div className="mb-3">
                <label  className="form-label">
                  Numero de Mesa
                </label>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) => setNewTab(e.target.value)}
                  value={newTab}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Registar
              </button>
            </form>
        </div>
      </div>
    </div>
  );
  }

export default NewOrder
