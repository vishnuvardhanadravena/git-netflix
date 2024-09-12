   import React from 'react'
import Footli from './footli'
   const footData=[{
     value:" FAQ"},
    {value:"Help Centre"},
    {value:"Account"},
    {value:"Media Centre"},
    {value:"Investor Relations"},
    {value:"Jobs"},
    {value:"Ways to Watch"},
    {value:"Terms of Use"},
    {value:"Privacy"},
    {value:"Cookie Preferences"},
    {value:"Corporate Information"},
    {value:"Contact Us"},
   {value:"Speed Test"},
    {value:"Legal Notices"},
    {value:"Only on Netflix"
   }]
   
   export default function Footer() {
     return (
       <div className='foot'><div>
        Questions? Call. <a href=""> 000-800-919-1694</a>
       </div>
       <ul>
                {footData.map(({value})=>{
    return<Footli value={value} key={value}/>
   })}

       </ul>
         
       </div>
     )
   }
   