import React from "react";

const Entry = ({ dataEntry, listOrder, setListOrder }) => {
  const addData = (id) => {
    const newData = dataEntry.filter((item) => item.id === id);
    setListOrder([...listOrder, ...newData]);
  };
  return (
    <div>
      {dataEntry.map((item) => (
        <li
          className="btn btn-lg btn-menu text-white entry m-1"
          key={item.id}
          onTouchStart={() => addData(item.id)}
        >
          {item.type} $ {item.price}
        </li>
      ))}
    </div>
  );
};

export default Entry;
