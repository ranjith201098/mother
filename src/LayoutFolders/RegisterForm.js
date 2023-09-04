import React, { useCallback, useRef, useState } from 'react'
import './RigisterForm.css'
import { jsPDF } from "jspdf";
import axios from 'axios';
import { useEffect } from 'react';
export const RegisterForm = () => {
  const [full_name,setfullname]=useState('')
  const [fathername,setfathername]=useState('')
  const [email,setemail]=useState('')
  const [phone_number,setphone_number]=useState('')
  const [password,setpassword]=useState('')
  const [adress,setadress]=useState('')
  const [gender,setgender]=useState('')
  const [jspdf1,setjspdf]=useState('')
  const [regis_file,setregis_file]=useState(null)
     const[fullname_error,setfullname_error]=useState(false)
     const[fathername_error,setfathername_error]=useState(false)
     const[email_error,setemail_error]=useState(false)
     const[phnumber_error,setphnumber_error]=useState(false)
     const[password_error,setpassword_error]=useState(false)
     const[address_error,setaddress_error]=useState(false)
     const [email_success,setemail_success]=useState(false)
  const register_form_ref=useRef(null)

  const Registration_pdf_form=()=>{
        if(full_name.length==0){
          setfullname_error(true)
        }
        if(full_name.length!=0){
          setfullname_error(false)
        }
        if(fathername.length==0){
          setfathername_error(true)
        }
        if(fathername.length!=0){
          setfathername_error(false)
        }
        if(email.length==0){
          setemail_error(true)
        }  if(email.length!=0){
          setemail_error(false)
        }
        if(phone_number.length==0){
          setphnumber_error(true)
        }  if(phone_number.length!=0){
          setphnumber_error(false)
        }
        if(password.length==0){
          setpassword_error(true)
        }  if(password.length!=0){
          setpassword_error(false)
        }
        if(adress.length==0){
          setaddress_error(true)
        }  if(adress.length!=0){
          setaddress_error(false)
        }
     if(full_name.length && fathername.length && email.length && phone_number.length && password.length && adress.length !=0){
const pdf_file=[full_name,fathername,email,phone_number,password,adress]
const doc = new jsPDF({
  orientation: "landscape",
  unit: "in",
  format: [6.5, 4]
});
doc. addFont('asfdsf')
doc.setFontSize(26);
doc.setTextColor(255,69,0);
doc.text('Register Details',2,0.6)
doc.setFontSize(16);
doc.setTextColor(51, 51, 255);
doc.text(full_name,3.2, 1) 
doc.text(fathername,3.2, 1.4) 
doc.text(email,3.2, 1.8) 
doc.text(phone_number,3.2, 2.2) 
doc.text(password,3.2,2.6) 
doc.text(adress,3.2,3) 

doc.text(':',2.9, 1)
doc.text(':',2.9, 1.4)
doc.text(':',2.9, 1.9)
doc.text(':',2.9, 2.2)
doc.text(':',2.9, 2.6)
doc.text(':',2.9, 3)
doc.setFontSize(20);
doc.setTextColor(0, 0, 0);
doc.text('Name',0.7, 1)
doc.text('Fathername',0.7, 1.4)
doc.text('email',0.7, 1.8)
doc.text('phhone number',0.7, 2.2)
doc.text('password',0.7,2.6)
doc.text('address',0.7, 3)
 setjspdf(doc.output('datauristring'))


   
     }else{
      alert('Fill all red shadow field')
     }
        
      
  }
  console.log(jspdf1)
  useEffect(() => {
   if(jspdf1){
     alert('Form send current email address')
   
    const formData = new FormData();
    formData.append('regis_file', regis_file);
    formData.append('email', email);
    formData.append('jspdf',  jspdf1.split('base64,')[1]);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    try {
      const response =  axios.post('http://localhost:4000/email/regis',formData,config).then((res)=>{
        console.log(res.data)
        if(res.data.status==true){
          setemail_success(true)
          setemail_success('email send successfully')
          alert('Email send to '+res.data.email)
          window.location.reload()
        }
       
      })} catch (error) {
      console.error(error);} 
  
   }
  }, [jspdf1]);
 
   
 const onHandlechange=useCallback((e)=>{
  setfullname(e.target.value)
  
 },[full_name])
  return (
    <form >
    <div className='rigister_form_parent' >
      <header  ref={register_form_ref}>
        <div style={{
          color:'red'
        }}>
          <div>{email_success}</div>
        </div>
       <div className='rigister_form_child1'>
         <div>RegistrationForm</div>
       </div>
    <><div className='rigister_form_child2'>
            <div>
              <div>
                <label>FullName</label>
              </div>
              <div>
                <input type='text' name='full_name' style={fullname_error ? { boxShadow: "2px 4px 5px red" } : {}} value={full_name} onChange={onHandlechange}></input>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <label>FatherName</label>
                </div>
                <div>
                  <input type='text' name='fathername' style={fathername_error ? { boxShadow: "2px 4px 5px red" } : {}} value={fathername} onChange={(e) => {
                    setfathername(e.target.value);
                  } }></input>
                </div>
              </div>
            </div>
          </div><div className='rigister_form_child3'>
              <div>
                <div>
                  <label>Email</label>
                </div>
                <div>
                  <input type='email' name='email' style={email_error ? { boxShadow: "2px 4px 5px red" } : {}} value={email} onChange={(e) => {
                    setemail(e.target.value);
                  } }></input>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <label>PhoneNumber</label>
                  </div>
                  <div>
                    <input type='number' name='phone_number' style={phnumber_error ? { boxShadow: "2px 4px 5px red" } : {}} value={phone_number} onChange={(e) => {
                      setphone_number(e.target.value);
                    } }></input>
                  </div>
                </div>
              </div>
            </div><div className='rigister_form_child4'>
              <div>
                <div>
                  <label>password</label>
                </div>
                <div>
                  <input type='password' name='password' value={[password]} style={password_error ? { boxShadow: "2px 4px 5px red" } : {}} onChange={(e) => {
                    setpassword(e.target.value);
                  } }></input>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <label>address</label>
                  </div>
                  <div>
                    <input type='text' name='adress' value={adress} style={address_error ? { boxShadow: "2px 4px 5px red" } : {}} onChange={(e) => {
                      setadress(e.target.value);
                    } }></input>
                  </div>
                </div>
              </div>
            </div></>
       <div className='rigister_form_child6'>
        <div>
        <div> <button className='rigister_form_child1_button' type='button' onClick={Registration_pdf_form}>generate pdf</button></div>
        </div>
       </div>
       </header>
    </div>
    </form>
  )
}

