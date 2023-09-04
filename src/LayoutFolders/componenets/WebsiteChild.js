import React, { useState } from 'react'
import './WebsiteChild.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const WebsiteChild = () => {
    const[checked1,setchecked1]=useState(false)
    const[checked2,setchecked2]=useState(false)
    const[checked3,setchecked3]=useState(false)
    const[checked4,setchecked4]=useState(false)
    const[checked5,setchecked5]=useState(false)
    const[checked6,setchecked6]=useState(false)
    const[checked7,setchecked7]=useState(false)
    const checked={
        employeForm:checked1,
        Table:checked2,
        UserDetails:checked3,
        ContactUs:checked4,
        AboutUs:checked5,
        RegistratinForm:checked6,
        NotPage:checked7
    }
    const navigate=useNavigate()
    
    const OncheckedSubmit=(event)=>{
        event.preventDefault()
        try {
            const response =  axios.post('http://localhost:4000/checked/pages',checked).then((res)=>{
            alert(res.data)
            window.location.reload()
            })} catch (error) {
            console.error(error);} 
        
         }
         
  return (
    <form onSubmit={OncheckedSubmit}>
    <div className='WebsiteChild_parent'>
         <div className='WebsiteChild_child'>
            <div className='WebsiteChild_child_one'>
                <div className='WebsiteChild_child_one_header'>
                    <div>Select tha pages</div>
                </div>
                <div className='WebsiteChild_child_one_1'>
                   
                    <div>
                        <input type='checkbox' value={checked1} onChange={(e)=>{
                            setchecked1(e.target.checked)
                        }}></input>EmployeeForm
                    </div>
                </div>
                <div className='WebsiteChild_child_one_2'>
                    
                    <div>
                        <input type='checkbox' value={checked2} onChange={(e)=>{
                            setchecked2(e.target.checked)
                        }}></input>Table
                    </div>
                </div>
                <div className='WebsiteChild_child_one_3'>
                   
                    <div>
                        <input type='checkbox' value={checked3} onChange={(e)=>{
                            setchecked3(e.target.checked)
                        }}></input>userdetails
                    </div>
                </div>
                <div className='WebsiteChild_child_one_4'>
                    
                    <div>
                        <input type='checkbox' value={checked4} onChange={(e)=>{
                            setchecked4(e.target.checked)
                        }}></input>contactus
                    </div>
                </div>
                <div className='WebsiteChild_child_one_5'>
                    
                    <div>
                        <input type='checkbox' value={checked5} onChange={(e)=>{
                            setchecked5(e.target.checked)
                        }}></input>aboutus
                    </div>
                </div>
                <div className='WebsiteChild_child_one_6'>
                   
                    <div>
                        <input type='checkbox' value={checked6} onChange={(e)=>{
                            setchecked6(e.target.checked)
                        }}></input>registerform
                    </div>
                </div>
                <div className='WebsiteChild_child_one_7'>
                   
                    <div>
                        <input type='checkbox' value={checked7} onChange={(e)=>{
                            setchecked7(e.target.checked)
                        }}></input>404pages
                    </div>
                </div>   
                <div className='WebsiteChild_child_one_8'>
                    <div>
                        <button className='WebsiteChild_child_one_8_button' type='submit'>Submit</button>
                    </div>
                    
                </div>          
            </div>
         </div>
    </div>
    </form>
  )
}

export default WebsiteChild