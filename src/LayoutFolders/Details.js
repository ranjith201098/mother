import React, { createContext, useState } from 'react'
import './Details.css'
import office from './office.jpg'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillBellFill } from 'react-icons/bs';
import Newform from './Newform';

import { useLocation } from 'react-router-dom';

function Details() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000);
    return () => clearTimeout(timer);
  }, []);  
  const navigate = useNavigate();
  const [show,setshow]=useState(false)
  const [show1,setshow1]=useState(false)
  const [show2,setshow2]=useState(false)
  const [show3,setshow3]=useState(false)
  useEffect(() => {
    setTimeout(() => {
      setshow(true)
    }, 1000);
    setTimeout(() => {
      setshow1(true)
    }, 1500);
    setTimeout(() => {
      setshow2(true)
    }, 2000);
    setTimeout(() => {
      setshow3(true)
    }, 2000);
  }, []);
  const Homenavigate=()=>{
       navigate('/contacts/home')
  }
  const location = useLocation();

  useEffect(() => {
    if(!location.state){
      navigate('/')
    }
  }, []);
  return (
    <div className='details_parent'>
  { isLoading ? <div><Newform/></div>
  : <div>
        <img src={office} className='office'></img>
      <div className='bell_image'><BsFillBellFill size={30} /></div>
      <div className='details_header'><span className='details_w'>W</span>ELCOME</div>
      <div className='details_footer'>
        <div>{show && <span className='gen'>Generate</span>}{show1 &&<span className='new'>New</span>}{show2 &&<span className='ideas'>Ideas</span>} </div>
         <div>
          {show3 &&<button className='details_button' onClick={Homenavigate}>get start</button>}
         </div>
      </div>
    </div>}
    </div>
  )
}

export default Details