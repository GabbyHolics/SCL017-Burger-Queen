import "./App.css";
import React from "react";
import logo from "./assets/logo.png";
export const App = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-12 ">
        <ul class="nav nav-pills float-end">
          <li class="nav-item">
            <a class="nav-link active " href="#">
              Active
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active mx-2" href="#">
              Link
            </a>
          </li>
        </ul>
        </div>
        <div className="row ">
        <div className="col-8 mx-auto" >
        <div class="d-flex flex-row justify-content-center alig-items-center">
            <img
              class="rounded mx-auto d-block "
              className="logo"
              src={logo}
              alt="Card image cap"
            />
            <div class="card-body" className ="buttoms">
              <a href="#" class="btn btn-primary ">
                Go somewhere
                </a>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
              
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
