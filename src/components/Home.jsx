import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Home = () => {
  const [newOrder, setNewOrder] = React.useState(null);
  const [order, setOrder] = React.useState(null);

  const getData = () => {
    setNewOrder(true);
    console.log("funcionando");
  };
  const viewData = () => {
    setOrder(true);
    console.log("funcionando");
  };

  return (
    <div className="container-fluid ">
      <div className="m-0 vh-100 row justify-content-center align-items-center">
      {/* <div className="justify-content-center align-items-center"></div> */}
        <div className="col-8  ">
          <div className="card  ">
            <img src={logo} alt="" className="img-fluid" />
            <div className="card-body d-flex flex-column gap-2">
              <Link
                to="/NewOrder"
                className="btn btn-success btn-lg mt-5 "
                onClick={() => getData(setNewOrder)}
              >
                Nueva Orden
              </Link>
              <Link
                to="/Order"
                className="btn btn-danger btn-lg  mt-5 "
                onClick={() => viewData(setOrder)}
              >
                Orden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home
