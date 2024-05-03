import React from "react";
const tasks = [
    {
        id:1,
        title:"title 1",
        done:false,
    },
    {
        id:2,
        title:"title 2",
        done:false,
    },
    {
        id:3,
        title:"title 3",
        done:false,
    }
]
const Tasks = ()=>{
    return(
        <>
            {
                tasks.map((task)=>
                (<div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", margin:"1rem", backgroundColor:"rgba(255, 255, 255, 0.812)"}}>
                    <div style={{display:"flex", flexDirection:"row"}}><input type="checkbox" style={{marginRight:"1rem"}}></input><h3>{task.title}</h3></div>
                   <div style={{ alignSelf:"center"}}><button style={{backgroundColor:"red",color:"whitesmoke",height:"1.2rem",border:"none", alignSelf:"center", borderRadius:".2rem"}}>remove</button></div> </div>
                ))
            }
        </>
    )
}

export default Tasks