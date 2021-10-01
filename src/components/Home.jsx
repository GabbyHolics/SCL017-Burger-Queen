import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import './style.css'
const Home = () => {

  return (
    <div className="container-fluid ">
      <div className="m-0  vh-100 row justify-content-center align-items-center">
        <div className="col-8  ">
          <div className="card  ">
            <img src={logo} alt="" className="img-fluid image-logo" />
            <div className="card-body d-flex flex-column gap-2">
              <Link
                to="/NewOrder"
                className="btn btn-success btn-lg mt-5 "
              >
                Nueva Pedido
              </Link>
              <Link
                to="/Order"
                className="btn btn-danger btn-lg  mt-5 "
              >
                Pedidos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home
