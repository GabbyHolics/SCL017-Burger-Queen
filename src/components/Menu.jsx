import React from 'react'

const Menu = () => {

    React.useEffect(() => {
        const getMenu = async() =>{
            const data = await fetch('../menu.json')
            const dataMenu = await data.json()
            console.log(dataMenu)
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
