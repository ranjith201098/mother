
import React, { useState } from 'react'
import { IoMdContact } from 'react-icons/io';
import './UserModel.css'
import Newform from '../Newform';
import { useEffect } from 'react';
 const UserModel = ({user_data}) => {
    const[isLoading,setisloading]=useState(true)
    
    useEffect(() => {
      const timer = setTimeout(() => {
        setisloading(false)
      }, 1000);
      return () => clearTimeout(timer);
    }, []); 
    console.log(user_data)
  return (
   <div className='regis_header_user_model_parent_one'>
    {isLoading ?<div className='usermodel_spinner'><Newform/></div>:
        <div className='regis_header_user_model_parent_top'>
    <div className='regis_header_user_model_parent'>
      <div className='user_registration_details'>
        <div>user registration details</div>
      </div>
      {user_data.length==0 && <div className='user_model_null'>No Register User</div>}
    {user_data.map((userValue)=>(
        <div>
        <div   className='user_model_parent' >
            <div><IoMdContact size={20}/></div>
            <div key={userValue.User_id}>
              <div>Name:{userValue.User_name}</div>
              </div>
              <div>
              <div> Time:{userValue.loGin_time}</div>
           
           
              </div>
              <div>
              <div >Email:{userValue.E_mail}</div>
              </div>
        </div>
        <div style={{opacity:"0",fontSize:"10px"}}>dsdg</div>
        </div>
    ))}
      </div>
      </div>
      }
   </div>

  
  )
}
export default UserModel
