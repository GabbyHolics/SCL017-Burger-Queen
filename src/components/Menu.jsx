import React from "react";
import '../components/styleComponents.css'
import { Link } from "react-router-dom";
import Additional from "../menuComponents/Additional";
import Entry from "../menuComponents/Entry";
import Pizzas from "../menuComponents/Pizzas";
import PizzasDouble from "../menuComponents/PizzasDouble";
import Drink from "../menuComponents/Drink";
import menuData from "../menu.json";
import ListOrder from "./ListOrder";
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
            <Link to="/waiter" className="btn btn-danger mt-4">
              X
            </Link>
            <h3 className="h1 text-center text-white"> Menu </h3>
            <hr />
            <h3 className=" text-white m-3"> Entradas</h3>
            <ul>
              <Entry
                dataEntry={entry}
                listOrder={listOrder}
                setListOrder={setListOrder}
              />
            </ul>
            <h3 className=" text-white m-3"> Pizzas</h3>
            <ul>
              <Pizzas
                dataPizza={pizzas}
                setListOrder={setListOrder}
                listOrder={listOrder}
              />
            </ul>
            <h3 className=" text-white m-3"> Pizzas Dobles</h3>
            <ul>
              <PizzasDouble 
              dataPizzaDouble={pizzasDouble}
              setListOrder={setListOrder}
              listOrder={listOrder}
              />
            </ul>
            <h3 className=" text-white m-3"> Bebidas</h3>
            <ul>
              <Drink
              dataDrink={drink} 
              setListOrder={setListOrder}
              listOrder={listOrder}
              />
            </ul>
            <h3 className=" text-white m-3"> Extras </h3>
            <ul>
              <Additional 
              dataAdditional={additional} 
              setListOrder={setListOrder}
              listOrder={listOrder}
              />
            </ul>
          </div>

          <div className="col-6   background-listOrder ">
            <div className="row d-flex flex-direction-column">
      
            </div>
            <div className="row mt-2">
            <h3 className="h1 text-center mt-5"> Orden </h3>
              <ul>
                <ListOrder
                 listOrder={listOrder} 
                 setListOrder={setListOrder}
                 client={client}
                  tab ={tab}
                 
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
