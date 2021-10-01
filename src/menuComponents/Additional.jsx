import React from "react";

const Additional = ({ dataAdditional }) => {
  return (
    <div>
      {
        dataAdditional.map((item) => (
        <li className="btn btn-danger m-1" key={item.id} >
    
          {item.type} $ {item.price}
        </li>
      ))
      }
    </div>
  );
};

export default Additional;
