import React from 'react'

const Menu = () => {


    React.useEffect(() => {
        const getMenu = async () =>{
            const data = await fetch('http://localhost:3000/menu.json')
            const response = await data.json()
            console.log(response)
        }
        getMenu()
    })
 
    return (
        <div>
            <h3> Soy el menu</h3>
        </div>
    )
}

export default Menu
