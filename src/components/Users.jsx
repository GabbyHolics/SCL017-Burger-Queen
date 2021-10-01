import React from 'react'
import { collection, getDocs } from "firebase/firestore";
import db from '../firebase'
const Users = () => {
const [user, setUsers ] = React.useState([])

    React.useEffect(()=>{
     getData()
    },[user])

    const getData = async() =>{
        const querySnapshot = await  getDocs(collection(db, 'orders'))
        let documents = [];
        querySnapshot.forEach((doc)=> {
           documents.push({ id: doc.id, ...doc.data })
        })
        setUsers(documents)
    }
 

 
    return (
        <div>
            {
              user.map((users)=>(
            <span className="" key={users.id}> {users.doc} </span>
              ))
            }
        </div>
    )
}

export default Users
