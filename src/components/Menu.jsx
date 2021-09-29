import React from 'react'
import Extras from '../menuComponents/Extras'
const Menu = () => {
const [menu, setMenu] = React.useState([])

    React.useEffect(() => {
        const getMenu = async () =>{
            const data = await fetch('http://localhost:3000/menu.json')
            const response = await data.json()
          setMenu(response)
        }
        getMenu()
    },[])
 
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-6 vh-100 bg-success" >
                <h3></h3>
                    <ul>
                        <Extras extrasMenu={menu.extras}/>
                    </ul>
                </div>
                <div className="col-6 vh-100 bg-danger">
                    <span></span>
                    <span></span>
                    <div className="row">
                        <ul>
                            <li>

                            </li>
                            <span>

                            </span>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
