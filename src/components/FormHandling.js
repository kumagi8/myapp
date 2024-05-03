//form handling using useReducer

import React, { useState } from 'react'

const FormHandling = () => {
    const [userdata,setUserdata] = useState([])

    const [inputs,setInputs] = useState({})

    function handleChange(e){
            const name = e.target.name
            const value = e.target.value
            setInputs(old_data=>({...old_data,[name]:value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        setUserdata([...userdata,{inputs}])
        console.log(userdata)
        setInputs({})

    }

  return (
    <div style={{height:'30rem',width:'25rem',border:'solid black 1px',display:'flex',justifyContent:'center', alignItems:'center'}}>
        <form style={{display:'flex', flexDirection:'column'}}>
            <label>First name: <input type='text' name='firstname' value={inputs.firstname || ""} onChange={handleChange}/></label>
            <label>Last name: <input type='text' name='lastname' value={inputs.lastname || ""} onChange={handleChange}/></label>
            <label>Mobile number: <input type='text' name='mobile' value={inputs.mobile || ""} onChange={handleChange}/></label>
            <label>Email id: <input type='email' name='email' value={inputs.email || ""} onChange={handleChange}/></label>
            <button onClick={handleSubmit}>Register</button>
        </form>
    </div>
  )
}

export default FormHandling