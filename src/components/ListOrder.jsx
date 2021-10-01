import React from 'react'
import Pizzas from "../menuComponents/Pizzas"


// export const data= (array)=>{
//     getDataMenu(array)
// }


const ListOrder = ({listOrder , setListOrder}) => {
    // React.useEffect(()=>{
    //     console.log(listOrder)
    //     console.log(setListOrder)
    // },[])
    console.log(listOrder)
    return (
        <div>
            {
               
                React.useEffect(()=>{
                    
                    listOrder.length === 0 ? (<p>0</p>): 
                    (
                        listOrder.map((item)=>(
                        <Pizzas
                            key={item.id}
                            type={item.type}
                            price={item.price}
                            listOrder={listOrder}
                            setListOrder={setListOrder}
                        />
                    )
                   
                   )) 
                },[])
            }
        </div>
    )
}

export default ListOrder
