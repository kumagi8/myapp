// import React, { useEffect, useState } from 'react'

// export const ApiIntegration = () => {
//   const GeneratedToken = '3dcprQdU4QfIYW6c894KkjiNkmrV_2Jr715297BFUej1OIpaXhAo9bpclLpAkYZ-pBo'
//   const [data, setData] = useState([]);

//   //fetching data
//   const GetData = async()=>{
//     const resp = await fetch('https://api.sampleapis.com/beers/ale');
//     const jsn = await resp.json();
//     setData(jsn);
//   }
// // fetching in states
//   const getStates = async()=>{
//   //   var req = unirest("GET", "https://www.universal-tutorial.com/api/getaccesstoken");

//   // req.headers({
//   //   "Accept": "application/json",
//   //   "api-token": "AuXnFjES43NqbdODZoc1anLtpO9op_9HsA7hqU56HJoxlbbNrMsUAzmsp6cqoZ0HhWQ",
//   //   "user-email": "abc@gmail.com"
//   // });
//   // var reqst = unirest("GET", "https://www.universal-tutorial.com/api/countries/");

//   // req.headers({
//   //   "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJtdmdhZGFnaUBnbWFpbC5jb20ifSwiZXhwIjoxNTY2MjM0ODU0fQ.nMWPN38zptwwDKAo11bFyjhCRuzNhZc6NqqCaYJVxP0",
//   //   "Accept": "application/json"
//   // });
    
//   }

//   useEffect(() => {
//     GetData();
    
//   }, []);
//   return (
//     <div>{data.map((d)=>{
//       return(
//         <div style={{backgroundColor:"green", display:"flex", margin:"1rem", borderRadius:"1rem", padding:".5rem"}}><p>{d.name}</p>
//         <p>{d.price}</p>

//         </div>

//       )
//     })}</div>
//   )
// }
