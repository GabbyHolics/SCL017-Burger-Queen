import React from "react";
import { Link } from "react-router-dom";
import Additional from "../menuComponents/Additional";
import Entry from "../menuComponents/Entry";
import Pizzas from "../menuComponents/Pizzas";
import PizzasDobles from "../menuComponents/PizzasDouble";
import Drink from "../menuComponents/Drink";
import menuData from "../menu.json";
import ListOrder from "./ListOrder";
import Users from "./Users";
const Menu = ({ client, tab }) => {
  const getDataMenu = menuData;
  const [entry, setEntry] = React.useState([]);
  const [drink, setDrink] = React.useState([]);
  const [pizzas, setPizzas] = React.useState([]);
  const [pizzasDouble, setPizzasDouble] = React.useState([]);
  const [additional, setAdditional] = React.useState([]);
  const [listOrder, setListOrder] = React.useState([]);
  React.useEffect(() => {
    setEntry(getDataMenu.entradas);
    setDrink(getDataMenu.bebidas);
    setPizzas(getDataMenu.pizzas);
    setPizzasDouble(getDataMenu.pizzasDobles);
    setAdditional(getDataMenu.extras);
  }, [getDataMenu]);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6  bg-success">
            <Link to="/" className="btn btn-danger   ">
              X
            </Link>
            <h3 className="h1 text-center"> Menu </h3>
            <hr />
            <h3> Entradas</h3>
            <ul>
              <Entry
                dataEntry={entry}
                listOrder={listOrder}
                setListOrder={setListOrder}
              />
            </ul>
            <h3> Pizzas</h3>
            <ul>
              <Pizzas
                dataPizza={pizzas}
                setListOrder={setListOrder}
                listOrder={listOrder}
              />
            </ul>
            <h3> Pizzas Dobles</h3>
            <ul>
              <PizzasDobles dataPizzaDouble={pizzasDouble} />
            </ul>
            <h3> Bebidas</h3>
            <ul>
              <Drink dataDrink={drink} />
            </ul>
            <h3> Extras </h3>
            <ul>
              <Additional dataAdditional={additional} />
            </ul>
          </div>

          <div className="col-6 vh-100 bg-success bg-opacity-25">
            <div className="row d-flex flex-direction-column">
              <h3 className="h1 text-center mt-4"> Cliente </h3>
              <Users 
              client={client}
              tab={tab}
               />
            </div>
            <div className="row">
            <h3 className="h1 text-center"> Orden </h3>
              <ul>
                <ListOrder
                 listOrder={listOrder} 
                 setListOrder={setListOrder}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
