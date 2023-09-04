
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './contact.css'
import { useNavigate } from 'react-router-dom';
import { BsFillExclamationCircleFill } from 'react-icons/bs';
import { AiTwotoneHome } from 'react-icons/ai';
import Newform from './Newform';
import { useEffect } from 'react';
const Contactus = () => {
  const navigate = useNavigate();
  const[show,setshow]=useState(false)
  const[show1,setshow1]=useState(false)
  const[show2,setshow2]=useState(false)
  const[show3,setshow3]=useState(false)
  const[show4,setshow4]=useState(false)
  const[name,setname]=useState('')
  const[email,setemail]=useState('')
  const[company,setcompany]=useState('')
  const[phone,setphone]=useState('')
  const[message,setmessage]=useState('')
  const Homenavigate=()=>{
     navigate('/contacts/details')
  }
const Contactsubmit=(event)=>{
  event.preventDefault()
 if(name==0){
  setshow(true)
 }else if(name!=0){
  setshow(false)
 }
 if(email==0){
     setshow1(true)
 }else if(email!=0){
  setshow1(false)
 }
 if(company==0){
  setshow2(true)
}else if(company!=0){
setshow2(false)
}
if(phone==0){
  setshow3(true)
}else if(phone!=0){
setshow3(false)
}
if(message==0){
  setshow4(true)
}else if(message!=0){
setshow4(false)
}
}
const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false)
  }, 1000);
  return () => clearTimeout(timer);
}, []);
  return (
    <div >
        {isLoading? <div><Newform/></div>
         :<div className='_header_body'>
               <Container className='container_form'>
      <Row>
        <Col >
         <div className='left_side'>
          <div className='left_child'>
         <div style={{fontSize:"40px"}}>Lets Chat</div>
         <div>whether you have a question want to</div>
         <div>start a project or simply want to connect</div>
              <div style={{opacity:"0"}}>gffdhgfjkhg</div>
        <div>
           <div>feel free to send me meassage in the</div>
           <div> contact form</div>
        </div>
        </div>
        </div>
        </Col>
        <Col>
        <form onSubmit={Contactsubmit}>
          <div  className='right_side'>
            <div className='form_input'>
           <div className='contact_form'>
            <div>contact form</div>
           </div>
           <div>
            <input type='text' value={name} placeholder='name' onChange={(e)=>{setname(e.target.value)}}></input>
           </div>
           <div>
            <input type='text' value={email} placeholder='email' onChange={(e)=>{setemail(e.target.value)}}></input>
           </div>
           <div>
            <input type='text' value={company} placeholder='company' onChange={(e)=>{setcompany(e.target.value)}}></input>
           </div>
           <div>
            <input type='text' value={phone} placeholder='phone'  onChange={(e)=>{setphone(e.target.value)}}></input>
           </div>
           <div>
           <textarea placeholder='message ' onChange={(e)=>{setmessage(e.target.value)}}></textarea>
           </div>
           <div>
            <button className='contact_button' type='submit'>submit</button>
           </div>
           </div>
           </div>
           </form>
        </Col>
      </Row>
     {show && <div  className='tooltip_name'>
       required
      </div>}
      {show1 && <div  className='tooltip_email'>
       required
      </div>}
      {show2 && <div  className='tooltip_company'>
       required
      </div>}
      {show3 && <div  className='tooltip_phone'>
       required
      </div>}
      {show4 && <div  className='tooltip_message'>
       required
      </div>}
     {show && <BsFillExclamationCircleFill size={14} className='tooltip_name_symble'/>}
     {show1 && <BsFillExclamationCircleFill size={14} className='tooltip_email_symble'/>}
     {show2 && <BsFillExclamationCircleFill size={14} className='tooltip_company_symble'/>}
     {show3 && <BsFillExclamationCircleFill size={14} className='tooltip_phone_symble'/>}
     {show4 && <BsFillExclamationCircleFill size={14} className='tooltip_message_symble'/>}
    </Container>
    <AiTwotoneHome className='home_icon' onClick={Homenavigate} size={40}/>
          </div>}
    </div>
  )
}

export default Contactus