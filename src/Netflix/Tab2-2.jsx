

import React from 'react'

export default function TabDiv2({img,src}) {
  return (
    <div className="box2-right">
        <img src={img} alt="error" />
        <video className='box2-video' autoPlay loop  playsInline src={src} ></video>
      
    </div>
  )
}
