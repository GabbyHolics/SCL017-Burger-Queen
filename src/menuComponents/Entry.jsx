import React from 'react'
// import './menuComponents/styleButton'
const Entry = ({dataEntry, listOrder, setListOrder}) => {

    
    const addData= (id) =>   {
        const newData = dataEntry.filter((item) => item.id === id)
        setListOrder([
            ...listOrder,...newData,
        ])
      
    }
    return (

        <div>
            {
                dataEntry.map((item)=>(
            <li  className="btn btn-primary entry m-1" key={item.id} onTouchStart={(() => addData(item.id))} >{item.type} $ {item.price}</li>

                ))
            }

        </div>
    )
}

export default Entry
