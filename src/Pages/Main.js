import React, { useState } from 'react'
import img1 from "../assets/download.png"
import img2 from "../assets/screenshot1.png"
import { useNavigate } from 'react-router-dom'
const Main = () => {
  const [name,setName]=useState("")
  const [pass,setPass]=useState("")
  const navigate=useNavigate()
  const handleClick=()=>{
    localStorage.setItem("data",JSON.stringify({name,pass}))
    navigate("/Profile")
  }
  
  

  return (
    <div className='login'>
    <div>
        <img src={img1} alt="404" />
        <img src={img2} alt="404" />
    </div>
    <div className='login-form'>
    <h3>Instagram</h3>
        <input type="text" onChange={(e)=>setName(e.target.value)} />
        <input type="password" onChange={(e)=>setPass(e.target.value)} />
        <button onClick={()=>name.length!==0 && pass.length!==0 ?handleClick():alert('required')}>Login</button>
    </div>
    
    
    
    </div>
  )
}

export default Main