import './App.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import download from './download.png';
import axios from 'axios';
function App() {
  const [username,setusername]=useState('')
  const [password,setpassword]=useState('')
  const [con_password,setcon_password]=useState('')
  const [email,setemail]=useState('')
  const [loginemail,setloginemail]=useState('')
  const [loginpass,setloginpass]=useState('')
  const [adduser,setadduser]=useState(false)
  const [passerror,setpasserror]=useState(false)
  const [passerror1,setpasserror1]=useState(false)
  const [emailerror,setemailerror]=useState(false)
  const [usernameerror,setusernameerror]=useState(false)
  const [con_passerror,setcon_passerror]=useState(false)
  const[token,settoken]=useState([])
  const navigate = useNavigate();
 const OnhandleChangeName=(e)=>{
setusername(e.target.value)
 }
 const OnhandleChangePass=(e)=>{
  setpassword(e.target.value)
 }
 const OnhandleChangeEmail=(e)=>{
  setemail(e.target.value)
 }
const OnhandleChange_conirm_Pass=(e)=>{
  setcon_password(e.target.value)
}
const handleSubmit = async (event) => {
  event.preventDefault()
  if(email.length==0){
    setemailerror(true)
   }if(email.length>0){
    setemailerror(false)
   }
 if(password.length==0){
  setpasserror1(false)
  setpasserror(true)
 }
 if(password.length>0 && password.length <6){
  setpasserror(false)
  setpasserror1(true)
 }
 if( password.length >5){
  setpasserror1(false)
 }
 if(username.length ==0){
  setusernameerror(true)
 }
 if(username.length >0){
  setusernameerror(false)
 }
 if(password!=con_password){
  setcon_passerror(true)
 }
 if(password==con_password){
  setcon_passerror(false)
 }
 if((username.length && email.length && password.length >0) && (password.length >5)&&(password==con_password)){
 try {
  const response = await axios.post('http://localhost:4000/user/regis', {
    naMe: username,
    eMail:email,
    passWord:password,
    
  }).then((res)=>{
    alert(res.data)
    
      if(res.data=='not submitted'){
        console.log('false')
      }else{
        console.log('true')
        window.location.reload()
 
      }
  })
 
} catch (error) {
  console.error(error);
} 
 } 
}

const handleSubmitLogin= async (event)=>{
  event.preventDefault()
  try {
    const response = await axios.post('http://localhost:4000/user/login', {
      eMail:loginemail,
      passWord:loginpass
    }).then((res)=>{
         settoken(res.data)
       if(res.data=='invalid mail'){
        alert('invalid  email')
       }
     if( res.data.message==true){
      alert('login successfully')
       navigate('/contacts/details',{state:res.data}) 
     
      }if(res.data.message==false){
        alert('password Incorrect')
      }
    })
  } catch (error) {
    console.error(error);
  }
}
  return (
    <div className='_body'>
      <div className='animi'>
      <div className='header_lable'>
<span className='wel'>WELCOME</span > <span className='web'>TO OUR WEBSITE</span>
</div>
      </div>
      <div className='image'>
       <img src={download}></img>
      </div>
 
  <div className="_parent_app">
 { adduser?<form onSubmit={handleSubmitLogin} action='http://localhost:4000/user/login'>
 <div className='login_header'>User login </div>
     <div className='_username'>
      <div style={{fontSize:"25px"}} className='user'>
      <label>Email</label>
      </div>
      <div>
        <input  onChange={(e)=>{setloginemail(e.target.value)}} className='user_input'></input>
      </div>
     </div>
     <div className='password'>
      <label  style={{fontSize:"25px"}} className='pass'>PassWord</label>
      </div>
     <div >
        <input onChange={(e)=>{setloginpass(e.target.value)}} type='password' className='password_input'></input>
     </div>
     
     <div>
      <div >
        <button className='button' type='submit' >Login</button>
      </div>
      <div className='regis_header'>
        <span onClick={()=>{setadduser(false)}} className='register'>register?</span>
        <span className='login'>login</span>
      </div>
     </div>
     </form>
     //...............REGISTER FOR,M
      :
       <form onSubmit={handleSubmit} action='http://localhost:4000/user/regis'>
       <div className='_username'>
        <div className='login_header'>registration form</div>
        <div style={{fontSize:"25px"}} className='user'>
        <label>username</label>
        </div>
        { usernameerror && <div className='err_message'>required username</div>}
        <div>
          <input  className='user_input'  onChange={OnhandleChangeName}></input>
        </div>
        <div style={{fontSize:"25px"}} className='user'>
        <label>email</label>
        </div>
        <div>
          <input  className='user_input' type='email' onChange={OnhandleChangeEmail}></input>
        </div>
        { emailerror && <div className='err_message'>required email</div>}
       </div>
       <div className='password'>
        <label  style={{fontSize:"25px"}} className='pass'>PassWord</label>
        </div>
       <div >
          <input className='password_input' type='password' onChange={OnhandleChangePass}></input>
       </div>
       { passerror && <div className='err_message'>required password</div>}
       { passerror1 && <div className='err_message'>minimun 5 character </div>}
       <div>
       <div className='password'>
        <label  style={{fontSize:"25px"}} className='pass'>confirm PassWord</label>
        </div>
       <div >
          <input className='password_input' type='text' onChange={OnhandleChange_conirm_Pass}></input>
       </div>
       { con_passerror && <div className='err_message'>IncorrectPassword</div>}
        <div >
          <button className='button' type='submit' >Register</button>
        </div>
        <div className='regis_header'>
        <span className='register'>register?</span>
        <span  className='login' onClick={()=>{setadduser(true)}}>login</span>
      </div>
       </div>
       </form>
     }
    </div>
 
    </div>
  );
}

export default App;
