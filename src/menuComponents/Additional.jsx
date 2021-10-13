import React from "react";
import '../menuComponents/styleMenu.css'
const Additional = ({ dataAdditional, setListOrder, listOrder}) => {
  
  const addDataAdditonal = (id) =>{
    const newData = dataAdditional.filter((item) => item.id === id)
    setListOrder([...listOrder, ...newData])
  }
  return (

    <div>
      {
        dataAdditional.map((item) => (
        <li className="btn btn-lg btn-menu text-white m-1" key={item.id} onTouchStart={() => addDataAdditonal(item.id)} >
    
          {item.type} $ {item.price}
        </li>
      ))
      }
    </div>
  );
};

export default Additional;
