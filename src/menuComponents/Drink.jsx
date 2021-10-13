import React from 'react'

const Drink = ({dataDrink, setListOrder, listOrder}) => {
    const addDataDrink = (id) => {
        const newDataDrink = dataDrink.filter(item => item.id === id)
        setListOrder([...listOrder, ...newDataDrink])
    }
    return (
        <div>
            {
                dataDrink.map((item) => (
                    <li className="btn btn-lg btn-menu text-white m-1" key={item.id} onTouchStart={() => addDataDrink(item.id)}> {item.type}  $ {item.price}</li>
                ))
            }
        </div>
    )
}

export default Drink

