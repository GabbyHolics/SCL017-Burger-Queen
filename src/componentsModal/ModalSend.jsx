import React from "react";
import "../componentsModal/modal.css";
import { Link } from "react-router-dom";

const ModalSend = () => {
  return (
    <div className="modalBackground">
      <div className="modal-container">
        <div className="modal-content">
          <div className="body">
            <span className='h4'>La orden se envio a cocina, y podras verla en orders</span> 
          </div>
          <div className="footer">
            <Link to="/">
              <button
                className="btn btn-danger mt-5 btn-lg"
              >
                Listo!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSend;
