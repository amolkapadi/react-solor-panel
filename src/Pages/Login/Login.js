import React,{useState} from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
export default function Login() {
    let navigate=useNavigate();

    const [username,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(e.target.username.value==="Admin" && e.target.password.value==="Admin@123"){
            return navigate("/home")
        }
    }
  return (
    <div class="container-fluid">
    <form class="mx-auto" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">User Name</label>
          <input type="text" 
        name='username'
        onChange={(e)=>setUserName(e.target.value)}
          class="form-control" 
          id="exampleInputEmail1"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" 
             name='password'
             onChange={(e)=>setPassword(e.target.value)}
          class="form-control" 
          id="exampleInputPassword1"
          />
          <div id="emailHelp" class="form-text mt-3">Username: - Admin</div>
          <div id="emailHelp" class="form-text mt-3">Password: - Admin@123</div>
        </div>
      
        <button type="submit" class="btn btn-login ">Login</button>
      </form>
</div>

  )
}
