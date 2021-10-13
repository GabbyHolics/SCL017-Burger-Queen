import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import './styleComponents.css'
const Home = () => {

  return (
    <div className="container-fluid ">

      <div className="m-0  vh-100 row justify-content-center align-items-center">
        <div className="col-8  ">
          <div className="card  ">
            <img src={logo} alt="" className="img-fluid image-logo" />
            <div className="card-body d-flex flex-column gap-2">
              <Link
                to="/waiter"
                className="btn btn-success btn-lg mt-5 "
              >
                Garzón 
              </Link>
              <Link
                to="/cousine"
                className="btn btn-danger btn-lg  mt-5 "
              >
                Cocina
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home
