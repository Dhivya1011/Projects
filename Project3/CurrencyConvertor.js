import React, { useState } from 'react'
import './Style.css';
export default function CurrencyConvertor() {
    let values={
        'inr to inr':1,
        'inr to usd':0.012,
        'inr to aed':0.044,
        'usd to usd':1,
        'usd to inr':0.14,
        'usd to aed':3.67,
        'aed to aed':1,
        'aed to usd':0.27,
        'aed to inr':22.7
    }
    const[currency1,setCurrency1]=useState('inr')
    const[currency2,setCurrency2]=useState('inr')
    const[input1,setInput1]=useState(0)
    const[input2,setInput2]=useState(0)
    const changeCurrency1=(e)=>{
        setCurrency1(e.target.value)
    }
    const changeCurrency2=(e)=>{
        setCurrency2(e.target.value)
    }
     const changeInput1=(e)=>{
        setInput1(e.target.value)
        setInput2(e.target.value*values[`${currency1} to ${currency2}`])
     }
     const changeInput2=(e)=>{
        setInput2(e.target.value)
        setInput1(e.target.value*values[`${currency1} to ${currency2}`])
     }
  return (
    <div className='currencyconvertor'>
        <h2 className='head1'>CURRENCY CONVERTOR</h2>
        <select className='select1' onChange={changeCurrency1}>
            <option value='inr'>Inr</option>
            <option value='usd'>Usd</option>
            <option value='aed'>Aed</option>
        </select> 
        <input className='input1' type='number' value={input1} onChange={changeInput1}/><br/>
        <select className='select2' onChange={changeCurrency2}>
            <option value='inr'>Inr</option>
            <option value='usd'>Usd</option>
            <option value='aed'>Aed</option>
        </select>  
        <input className='input2' type='number' value={input2} onChange={changeInput2}/>
    </div>
  )
}
