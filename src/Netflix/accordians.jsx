


import React, {  useState } from 'react'

export default function Accordians({q,ans}) {


  const [value,change]=useState(false)
  const click=()=>{
    change(!value)
  }
  return (
    <div>
        <h4 onClick={click}>{q}<span><svg xmlns="http://www.w3.org/2000/svg" fill="none" width="36" height="36" viewBox="0 0 36 36" role="img" data-icon="PlusLarge" aria-hidden="true" className="elj7tfr3 default-ltr-cache-1dpnjn e164gv2o4"><path fillRule="evenodd" clipRule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg></span></h4>
        <p className='p' style={value?{display:"none"}:{display:"block"}} >{ans}</p>
      
    </div>
  )
}
