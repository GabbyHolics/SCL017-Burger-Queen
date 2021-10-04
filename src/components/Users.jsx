import React from 'react'
const Users = ({client, tab}) => {
    return (
        <div>
        <h6 > Nombre cliente: {client}</h6>
        <h6> Numero de mesa: #{tab}</h6>
        </div>
    )
  }
  
  export default Users
  