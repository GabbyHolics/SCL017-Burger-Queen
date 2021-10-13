import React from 'react'

const Pizzas = ({dataPizza , setListOrder, listOrder}) => {
  
    const addDataPizzas = (id) =>{
        const newDataPizza = dataPizza.filter((item) => item.id === id)
        setListOrder([...listOrder, ...newDataPizza])
        
    }
    
    return (
        <div>
            {
                dataPizza.map((item) =>(
                    <li className="btn btn-lg text-white btn-menu m-1" key={item.id} onTouchStart={(() => addDataPizzas(item.id))}> {item.type} $ {item.price} </li>
                ))
            }
        </div>
    )
}

export default Pizzas
