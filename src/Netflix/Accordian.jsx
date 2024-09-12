
import { data } from './AccordianData'

import React from 'react'
import Accordians from './accordians'

export default function Accordian() {
  return (
    <div className='accordian'>
        <h1>Frequently Asked Questions</h1>
        <div>
      {data.map(({q,ans,id})=>{
return <Accordians q={q} ans={ans} key={id}/>

      })}
      <p className='p2'>Ready to watch? Enter your email to create or restart your membership.</p>
      <div  className="hai" style={{display:"flex" ,alignItems:"center",justifyContent:"center",padding:2, gap:2 }}>
        <input className="input" type="email" placeholder='Email Adress' />
        <button className='button'>Get Started</button>
      </div>
      </div>
      
    </div>
  )
}
