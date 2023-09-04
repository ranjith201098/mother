import React from 'react'
import './WhatsappChild.css'
import { IoMdContact } from 'react-icons/io';
import { LiaSearchSolid } from 'react-icons/lia';
import { FaPinterestP } from 'react-icons/fa';
import { GrEmoji } from 'react-icons/gr';
import { FcPhoneAndroid } from 'react-icons/fc';
import { PiArrowFatRightFill } from 'react-icons/pi';
import { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { MyContext } from './MyContext';
import { useEffect } from 'react';
const WhatsappChild = () => {
    const [message,setmessage]=useState('')
    const [ranjith,setranjith]=useState([])
    const { text, setText } = useContext(MyContext);
    const MessageSend=(e)=>{
        
        axios.post("http://localhost:4000/whatsapp/message/ranjith", {
            message: message,
          })
          .then((response) => {
            setranjith(response.data);
            setText(response.data);
          });
    }
   
  return (
    <div
    className='WhatsappChild_parent'
    >
        <div className='WhatsappChild_child'>
            <div className='WhatsappChild_child_header'>
                <div className='WhatsappChild_child_header_one'>
                      <div className='WhatsappChild_child_header_one_1'>
                      <div>
                        <div><IoMdContact size={40}/></div>
                    </div>
                    <div className='WhatsappChild_child_name'>
                        <div>RanjithKumar<br></br>Online</div>
                    </div>
                      </div>
                      <div className='WhatsappChild_child_header_one_2'>
                      <div>
                        <div><LiaSearchSolid/></div>
                    </div>
                    <div>
                        <div><FaPinterestP/></div>
                    </div>
                    <div>
                        <div>...</div>
                    </div>
                      </div>
                </div>
            </div>
            
            <div className='WhatsappChild_child_body'>
              <div className='WhatsappChild_child_body_child'> { ranjith.map((data)=>(
                <><div className='WhatsappChild_child_body_child_one' key={data.id}>{data.ranjitj_th}</div><div style={{opacity:"0"}}>dfgfdgfgf</div></>
               )) }</div>
            </div>
                        <div className='WhatsappChild_child_footer'>
                <div className='WhatsappChild_child_footer_one'>
                    <div><GrEmoji size={30}/></div>
                </div>
                <div className='WhatsappChild_child_footer_two'>
                    <div >
                        <input style={{width:"340px",borderRadius:"10px",border:"1px solid black "}}
                         onChange={(e)=>{setmessage(e.target.value)}}
                        ></input>
                    </div>
                </div>
                <div className='WhatsappChild_child_footer_three'>
                     <div><PiArrowFatRightFill size={30} onClick={MessageSend}/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhatsappChild