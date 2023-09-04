import React from 'react'
import './UserDetails.css'
import  UserModel  from './componenets/UserModel'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
 const UserDetails = () => {
    const[userData,setuserData]=useState([])
    useEffect(() => {
         try{
            axios.get('http://localhost:4000/User/Model/Names').then((res)=>{
             setuserData(res.data)
            })
         }catch{
            
         }
        
      }, []);
     
  return (
    <div className='user_Details_parent'><UserModel user_data={userData}/></div>
  )
}
export default UserDetails