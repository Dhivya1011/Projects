import React, { useState } from 'react'
import './Style.css'
export default function Calculator() {
    const[input,setInput]=useState()
  return (
    <div className='calculator'>
        <h3 className='head'>CALCULATOR</h3>
        <input className='input' type='number' value={input}/><br/>
        <button className='button1' onClick={()=>setInput(input+'1')}>1</button>
        <button className='button2' onClick={()=>setInput(input+'2')}>2</button>
        <button className='button3' onClick={()=>setInput(input+'3')}>3</button>
        <button className='buttonplus' onClick={()=>setInput(input+'+')}>+</button>
        <button className='buttonminus' onClick={()=>setInput(input+'-')}>-</button><br/>
        <button className='button4' onClick={()=>setInput(input+'4')}>4</button>
        <button className='button5' onClick={()=>setInput(input+'5')}>5</button>
        <button className='button6' onClick={()=>setInput(input+'6')}>6</button>
        <button className='buttonmultiply' onClick={()=>setInput(input+'*')}>*</button>
        <button className='buttondivide' onClick={()=>setInput(input+'/')}>/</button><br/>
        <button className='button7' onClick={()=>setInput(input+'7')}>7</button>
        <button className='button8' onClick={()=>setInput(input+'8')}>8</button>
        <button className='button9' onClick={()=>setInput(input+'9')}>9</button>
        <button className='buttonmodulus' onClick={()=>setInput(input+'%')}>%</button><br/>
        <button className='buttonclear' onClick={()=>setInput('')}>C</button>
        <button className='button0' onClick={()=>setInput(input+'0')}>0</button>
        <button className='buttonequal' onClick={()=>setInput(eval(input))}>=</button>
        <button className='buttonspace' onClick={()=>setInput(input.slice(0,input.length-1))}>X</button><br/>
    </div>
  )
}

   