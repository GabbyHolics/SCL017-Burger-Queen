import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Home = () => {
    const [newOrder,setNewOrder] = React.useState(null);
    const [order,setOrder] = React.useState(null);

    const getData = () => {
        setNewOrder(true);
        console.log('funcionando')
    }
    const viewData = () => {
        setOrder(true);
        console.log('funcionando')
    }
    
    return (
       <div className="container-fluid">
       <div className="row ">
        <div className="card">
        <img src={logo} alt="" />
            <div className="card-body d-flex flex-column gap-2">
                <Link to = "/NewOrder"  className="btn btn-success btn-lg " onClick={() => getData(setNewOrder)} > Nueva Orden  </Link>
                <Link to = "/Order"     className="btn btn-danger btn-lg " onClick={() => viewData(setOrder)} >  Orden  </Link>
            </div>
        </div>
       </div>
          
       </div>
    )
}

export default Home

// import React from 'react'

// export const Home = () => {
//     return (
//         <div className="container">
//       <div class="row">
//         <div class="col-12 border">
//           <button type="button" class="btn btn-success float-end mx-2">
//             Garzon
//           </button>
//           <button type="button" class="btn btn-danger float-end">
//             Cocina
//           </button>
//         </div>
//         <div class="row">
//           <div class="col-12 border"></div>
//         </div>
//       </div>
//     </div>
//     )
// }
// export default Home;
