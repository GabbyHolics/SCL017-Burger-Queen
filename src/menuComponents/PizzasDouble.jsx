import React from 'react'

const PizzasDouble = ({dataPizzaDouble = []}) => {
    return (
        <div>
           {
            dataPizzaDouble.map((item) =>(
                <li className="btn btn-danger m-1" key={item.id} > {item.type}  $ {item.price} </li>
            ))
           }
        </div>
    )
}

export default PizzasDouble
