import React from 'react'
import './ChildPractish.css'
import "bootstrap/dist/css/bootstrap.min.css";
const ChildPractish = () => {
  return (
    <div className='childpractish_parent'>
        <div className='childpractish_parent_one'>
      <div className='childpractish_child1 row '>
          <div className='childpractish_input_one col ' >
           <div>
            <label>UserName</label>
           </div>
           <div>
           <input type='text' /></div>
           </div>
           <div className='childpractish_input_two col '>
           <div>
            <label>Fathername</label>
           </div>
           <div>
           <input type='text' /></div>
           </div>
           <div className='childpractish_input_three col '>
           <div>
            <label>mothername</label>
           </div>
           <div>
           <input type='text' /></div>
           </div>
         </div>
         <div className='childpractish_child2 row '>
          <div className='childpractish_input_one2 col ' >
           <div>
            <label>phone number</label>
           </div>
           <div>
           <input type='text' /></div>
           </div>
           <div className='childpractish_input_two2  col '>
           <div>
            <label>email </label>
           </div>
           <div>
           <input type='text' /></div>
           </div>
           <div className='childpractish_input_three2 col '>
           <div>
            <label>adress</label>
           </div>
           <div>
           <input type='text' /></div>
           </div>
         </div>
         <div className='childpractish_child3 row '>
          <div className='childpractish_input_one3 col ' >
           <div>
            <label>male</label>
           </div>
           <div>
           <input type='radio' /></div>
           </div>
           <div className='childpractish_input_two3  col '>
           <div>
            <label>female </label>
           </div>
           <div>
           <input type='radio' /></div>
           </div>
           <div className='childpractish_input_three3 col '>
           <div>
            <label>others</label>
           </div>
           <div>
           <input type='radio' /></div>
           </div>
         </div>
         <div className='childpractish_child_checkbox row '>
          <div className='childpractish_input_one_checkbox3 col ' >
           <div>
            <label>React</label>
           </div>
           <div>
           <input type='checkbox' /></div>
           </div>
           <div className='childpractish_input_two_checkbox3  col '>
           <div>
            <label>jquery </label>
           </div>
           <div>
           <input type='checkbox' /></div>
           </div>
           <div className='childpractish_input_three_checkbox3 col '>
           <div>
            <label>flutter</label>
           </div>
           <div>
           <input type='checkbox' /></div>
           </div>
         </div>
         <div className='childpractish_child4 row '>
          <div className='childpractish_input_one4 col ' >
           <div>
            <label>address </label>
           </div>
           <div>
           <input type='text' /></div>
           </div>
           <div className='childpractish_input_two4  col '>
           <div>
            <label>DOB </label>
           </div>
           <div>
           <input type='date' className='childpractish_input_two4_dob' style={{width:"234px"}}/></div>
           </div>
           <div className='childpractish_input_three4 col '>
           <div>
            <label>Age</label>
           </div>
           <div>
           <input type='text' /></div>
           </div>
         </div>
         <div>
          <div className='childpractish_button'>
            <button>submit</button>
          </div>
         </div>
         </div>
    </div>
  )
}

export default ChildPractish