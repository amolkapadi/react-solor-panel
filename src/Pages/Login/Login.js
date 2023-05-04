import React,{useState} from 'react'
import './Login.css';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    let navigate=useNavigate();

    const [username,setUserName]=useState("")
    const [password,setPassword]=useState("")


    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    const setusername = localStorage.getItem('username');

    const setpassword = localStorage.getItem('password');

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(e.target.username.value== setusername && e.target.password.value==setpassword){
          // navigate("/");
        window.location.reload();

          localStorage.setItem("isLoggedIn", true);
        }
    }
  return (
    <div class="container-fluid">
    <form class="mx-auto p-3" onSubmit={handleSubmit} >
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
      
        </div>
        <button type="submit" class="btn btn-login mt-3">
      Login
      
        </button>
      </form>
</div>

  )
}
