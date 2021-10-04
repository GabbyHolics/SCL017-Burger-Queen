import React from 'react'
import { collection, getDocs } from "firebase/firestore";
import db from '../firebase'
const Users = ({client}) => {
  console.log(client);
// const [user, setUsers ] = React.useState('');

    //   React.useEffect(()=>{
    //     getData()
    //   },[])

    // const getData = async() =>{
    //   try {
    //     const querySnapshot = await  getDocs(collection(db, 'orders'))
    //     const arrayData =  querySnapshot.docs.map((doc) => ({
    //       id: doc.id,
    //       ...doc.data()
    //     }))
    //     console.log(arrayData)
    //     // let documents = [];
    //     // querySnapshot.forEach((doc)=> {
    //     //    documents.push({ id: doc.id, ...doc.data })
    //     //    console.log(documents)
    //     setUsers(arrayData)
    //   } catch (error) {
    //     console.log(error)
    //   }
      
    // }
 

 
    return (
        <div>
        <h1>{client}</h1>
        {/* {
          user.map((users)=>(
         
       <span className="" key={users.id}> {users.doc}</span> 
          ))
        } */}
        </div>
    )
  }
  
  export default Users
  