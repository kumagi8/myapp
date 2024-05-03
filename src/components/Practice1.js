import React, { useState } from 'react'

const message= [
    "Learn React",
    "Apply for Job",
    "Invest your Income"
]

const Practice1 = () => {
    const [step, setStep] = useState(1);

    function handlePrevious(){
    if(step>1){
        setStep((s)=>s-1)
    }  
    }
    function handleNext(){
        if(step<3){
            setStep(step+1)  
        }
    }
  return (
    <div className='container' style={{
        width:"25rem", backgroundColor:"white", padding:"2rem",
        display:"flex", flexDirection:"column"}}>
        <div className='numbers' style={{
        display:"flex", flexDirection:"row",justifyContent:"space-around"}}>
            <div className='num' id={step>=1?"active":""} >
                <div>1</div>
                </div>
            <div className='num' id={step>=2?"active":""}>
            <div>2</div>
                </div>
            <div className='num' id={step>=3?"active":""}>
            <div>3</div>
                </div>
        </div>
        <div className='message' style={{
            margin:"3rem",textAlign:"center"
        }}>{`Step ${step}: ${message[step-1]}`}</div>
        <div className='control' style={{display:"flex", flexDirection:"row", justifyContent:'space-between'}}>
            <button className='btn' onClick={handlePrevious}>Previous</button>
            <button className='btn' onClick={()=>handleNext()}>Next</button>
        </div>
    </div>
  )
}

export default Practice1