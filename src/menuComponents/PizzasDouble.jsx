import React from 'react'

const PizzasDouble = ({dataPizzaDouble, setListOrder, listOrder }) => {
    const addDataPizzaDouble = (id) => {
        const newDataPizzaDouble = dataPizzaDouble.filter((item) => item.id === id)
        setListOrder([...listOrder, ...newDataPizzaDouble])
    }
    return (
        <div>
           {
            dataPizzaDouble.map((item) =>(
                <li className="btn btn-danger m-1" key={item.id} onTouchStart={()=> addDataPizzaDouble(item.id)} > {item.type}  $ {item.price} </li>
            ))
           }
        </div>
    )
}

export default PizzasDouble
