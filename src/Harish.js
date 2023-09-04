import React from 'react'
import './Harish.css'
import planet from './planet.jpg'
import Newform from './LayoutFolders/Newform';
import { useEffect } from 'react';
import { useState } from 'react';
import earthgif from './earthgif.gif'
export const Harish = () => {
  const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false)
  }, 1000);
  return () => clearTimeout(timer);
}, []);
  return (
    <div >
    { isLoading ? <div><Newform/></div>
     :   <><div>
          <div >
            <img src={planet} className='Parent_header' alt='images'></img>
          </div>
        </div>
        <div className='earthgif'>
            <img src={earthgif} width={60}></img>
          </div></>
      }
    </div>
  )
}
