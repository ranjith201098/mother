import React from 'react'
import WhatsappChild from './LayoutFolders/componenets/WhatsappChild'

import { MyContext } from './LayoutFolders/componenets/MyContext';
import { useState } from 'react';
const Whatsapp = () => {
  const [text, setText] = useState("");
  return (
    <div >
       <MyContext.Provider value={{ text, setText }}>
       <WhatsappChild/>
       
      </MyContext.Provider>
       
    </div>
  )
}

export default Whatsapp