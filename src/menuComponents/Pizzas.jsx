import React from 'react'

const Pizzas = ({dataPizza , setListOrder, listOrder}) => {
  
    const addData = (id) =>{
        const newData = dataPizza.filter((item) => item.id === id)
        setListOrder([...listOrder, ...newData])
        
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
//tengo el array flitrado por id
//tengo que pasarlo a el componente de lista para verlo
// editarlo
// sumarlo el component