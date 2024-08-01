"use client"

import React, { useState } from 'react';

const Tempelate = ({children}) => {
    const [input , setInput] = useState("ok")
    return ( 
        <>
        
        {children}
        <h2 style={{marginBottom : "50px"}} >hellow world</h2>
      
        <input value={input} onChange={e=> setInput(e.target.value)} style={{cursor : "pointer"}} />
        <div>{input}</div>
       
        </>
     );
}
 
export default Tempelate;