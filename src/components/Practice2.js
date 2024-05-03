import React from "react";
import { useState } from "react";

const Practice2 = ()=>{

    const [show,setShow] = useState(false);
    return(
        <>
          { show && <div>
           <div >Practice2</div>
           </div>}
           
           <button onClick={()=>setShow(!show)}>{show?"hide":"show"}</button>
              </>
        
    )
}

export default Practice2