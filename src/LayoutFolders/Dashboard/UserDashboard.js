import React, { useState } from 'react'
import { Outlet, useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { BiSolidDownArrow } from 'react-icons/bi';
import { BiLogOutCircle } from 'react-icons/bi';
import './UserDashboard.css'
import { useRef } from 'react';
import { ImMenu } from 'react-icons/im';
import Cookies from "universal-cookie";
import { useEffect } from 'react';
import UserDetails from '../UserDetails';
import { IoMdContact } from 'react-icons/io';
 function UserDashboard() {
  const coo_kies=new Cookies()
  const home_ref=useRef(0)
  const menu_open=useRef(0)
  const UserDetailsref=useRef(0)
  const[time,settime]=useState('')
    const navigate = useNavigate();
    let location = useLocation();
    const pathname = location.pathname
    const Homepage =()=>{
        navigate('home') 
    }
    const Aboutpage =()=>{
        navigate('about')
    }
    const Contact_Page =()=>{
        navigate('contactus')
    }
    const LogoutFuntion=()=>{
         coo_kies.remove('Token') 
         alert('Logout successfully')
          navigate('/')
          window.location.reload()
    }
    const Details=()=>{
      navigate('details')
    }
    const Harishpage=()=>{
      navigate('harish')
    }
    const path=location.pathname
      const ResponsiveMenu =()=>{
       menu_open.current.style.display='block'
      }
      var token =(coo_kies.get('Token'))
      console.log(token)
  const _data1 = location.state;
   useEffect(() => {
    if(token===undefined){
    return   navigate('/')
    }
        
  }, [time]); 
  useEffect(() => {
    const timer = setTimeout(() => {
      coo_kies.remove('Token')
      settime('value')
    }, 5550000);
    
  }, []); 
  useEffect(() => {
     if(pathname=='/contacts'){
      navigate('/')
     }
    
  }, []); 
  return (
    <><div className='Outlet'><Outlet namr='ranjith'/></div>
      <div className='menu_icon'><ImMenu size={40} onClick={ResponsiveMenu}/></div>
    <div className='paRent' ref={menu_open}>
        <div className='WELCOME'>
            <span className='w'>W</span>
            <span className='e'>E</span>
            <span className='l'>L</span>
            <span className='c'>C</span>
            <span className='o'>O</span>
            <span className='m'>M</span>
            <span className='e'>E</span>
        </div>
       {token && <div style={{marginTop:"-19px"}}><IoMdContact size={40} color='green'/>{token.username}</div>}
        
          <div style={path=='/contacts/details'?{color:"yellow"}:{}} ref={home_ref} onClick={Details}>Home</div>
          <div style={path=='/contacts/home'?{color:"yellow"}:{}} onClick={Homepage}>EmployeeForm</div>
          <div style={path=='/contacts/about'?{color:"yellow"}:{}} onClick={Aboutpage}>EmployeeList</div>
          <div style={path=='/contacts/contactus'?{color:"yellow"}:{}} onClick={Contact_Page}>ContactUs</div>
          <div onClick={Harishpage} style={path=='/contacts/harish'?{color:"yellow"}:{}}  >Aboutus</div>
       
          <div onClick={()=>{
            navigate('./userdetails')
          }} style={path=='/contacts/userdetails'?{color:"yellow"}:{}} ref={UserDetailsref} >UserDetails</div>
          <div onClick={()=>{
            navigate('./registerform')
          }}>RegisterForm</div>
          <div className='topnave'>
            <button onClick={LogoutFuntion}><span>Logout</span><BiLogOutCircle/></button>
        </div>
        
      </div></>    
  )
}
export default UserDashboard
