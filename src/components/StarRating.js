import { useState } from "react";
export default function StarRating(){
 const len = 10;
const [rating,setRating] = useState(0);
const [tempRate,setTempRate] = useState(null)
function handleRating(i){
    setRating(i+1)
}
function handleMouseHover(i){
    setTempRate(i+1)
}
function handleMouseOut(){
    setTempRate(null)
}

    return(
        <>
        <p style={{display:"flex"}}>{
            Array.from({length:len},(x,i)=>
            <p key={i} onMouseLeave={()=>handleMouseOut()} onMouseEnter={()=>handleMouseHover(i)} onClick={()=>handleRating(i)}> {tempRate>i || rating>i ?"🌟":"⭐"}</p>
            )
            }{tempRate || rating}</p>
        </>
    )
}