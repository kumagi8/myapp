import React, { useState } from 'react'

const faqs = [
    {
        que:"what qwe vbnt tyuib dfh fgh nm vbnm cvbn vbnm, ?",
        ans:"qwert yuiop asdf hjkl vbnm rtyu sdfghjk cvbn wer qwert yuiop asdf hjkl vbnm rtyu sdfghjk cvbn werqwert yuiop asdf hjkl vbnm rtyu sdfghjk cvbn wer"
    },
    {
        que:"why qwe vbnt tyuib dfh fgh nm?",
        ans:"qwert yuiop asdf hjkl vbnm rtyu sdfghjk cvbn wer qwert yuiop asdf hjkl vbnm rtyu sdfghjk cvbn werqwert yuiop asdf hjkl vbnm rtyu sdfghjk cvbn wer"
    },{
        que:"who qwe vbnt tyuib dfh fgh nm?",
        ans:"qwert yuiop asdf hjkl vbnm rtyu sdfghjk cvbn wer qwert yuiop asdf hjkl vbnm rtyu sdfghjk cvbn werqwert yuiop asdf hjkl vbnm rtyu sdfghjk cvbn wer"
    },
]

// function tv(name,model){
//     this.name = name;
//     this.model = model;
// }
// const tv1 =new tv("lg","xcq1")

const Practice4 = () => {
    function Faqs({faqs,children}){
        const [curOpen,setCurOpen] = useState(null);
        return(
            <div>
                {/* {children} */}
                {
                faqs.map((f,i)=><Faq faq={f} i={i} curOpen={curOpen} onCurOpen={setCurOpen}/>)
                }
            </div>
        )
    }
    
    function Faq({faq,i,curOpen, onCurOpen}){
        const boxstyle = {width:"35rem",cursor:"pointer",display:"flex",flexDirection:"column",boxShadow:"1px 1px 5px", border:"1px solid none",margin:".5rem",padding:".5rem .5rem"}
        const questyle = {display:"flex",marginLeft:"1rem",flexDirection:"row",}

        const [isOpen,setIsOpen] = useState(false);

        function handleOpen(it){
            onCurOpen(it)
            setIsOpen(!isOpen)
        }
        const isOp = curOpen === i && isOpen;

        return(
            <div key={i} style={isOp?{...boxstyle,borderTop:"3px solid Green"}:{...boxstyle,borderTop:"none"}}>
            <div style={{display:"flex",alignItems:"center" }}>  
            <p style={{color:"grey",fontWeight:"bold"}}>{i<9?`0${i+1}`:i}</p>
            <p onClick={()=>handleOpen(i)} style={isOp?{...questyle,color:"green"}:{...questyle}}>
                <p style={{margin:"0rem"}}>{faq.que}</p> 
                {/* <p style={{color:"black",fontWeight:"bold",margin:"0rem"}}>{isOpen?"-":"+"}</p> */}
                </p>
            </div>
            <p style={{margin:"0rem"}}>
            {isOp && <p style={{margin:"0rem 1rem 1rem 2rem"}} >{faq.ans}</p>}
            </p>
            </div>
            )
    }
    return (
    <div>
        <Faqs faqs={faqs}>bachha hai tu mera bachha!</Faqs>
    </div>
  )
}

export default Practice4