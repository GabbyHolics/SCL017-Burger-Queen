import React from 'react'
import {data} from '../components/ListOrder'

const Pizzas = ({dataPizza}) => {
    let arrayPizza = [];

    const addData = (id) =>{
        const newData = dataPizza.filter((item) => item.id === id)
        arrayPizza.push(newData);
        data(arrayPizza);
        
    }
    return (
        <div>
            {
                dataPizza.map((item) =>(
                    <li className="btn btn-danger m-1" key={item.id} onTouchStart={(() => addData(item.id))}> {item.type} $ {item.price} </li>
                ))
            }
        </div>
    )
}

export default Pizzas
