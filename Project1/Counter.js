import React, { useState } from 'react'
import './Style.css'
export default function Counter() {
    const[count,setCount]=useState(0)
    const increment=()=>{
        if(count<10){
          setCount(count+1)
        }
    }
    const decrement=()=>{
      if(count>0){
        setCount(count-1)      
    }
  }
return (
    <div className='counter'>
        <h1 className='count'>Count - {count}</h1><br/>
        <button className='decrement' onClick={decrement}>-</button>
        <button className='increment' onClick={increment}>+</button>        
    </div>
  )
}




