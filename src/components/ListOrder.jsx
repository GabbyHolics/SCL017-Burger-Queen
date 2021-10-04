import React from "react";

const ListOrder = ({ listOrder }) => {
  return (
    <div>
      <ul>
        {listOrder.length === 0 ? (
          <p>0</p>
        ) : (
          listOrder.map((item) => <li key={item.id}>{item.type}</li>)
        )}
      </ul>
    </div>
  );
};

export default ListOrder;
