import React from 'react'

const Drink = ({dataDrink}) => {
    return (
        <div>
            {
                dataDrink.map((item) => (
                    <li className="btn btn-danger m-1" key={item.id} > {item.type}  $ {item.price}</li>
                ))
            }
        </div>
    )
}

export default Drink

