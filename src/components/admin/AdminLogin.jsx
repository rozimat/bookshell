import React, {useState, useEffect} from 'react'
import "./AdminLogin.css";
import logoImg from "../../images/logoWhite.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [disabl, setDisabl]=useState(true);
  const navigate = useNavigate();
  const [error, setError]= useState(true);
  const [inputValue, setInputValue]= useState([
    {
      email:"",
      password:"",
    }
  ]);

  function getValue(e){
    setInputValue((item)=>{
      return{
        ...item,
        [e.target.name] : e.target.value,
      }
    })
  }
  const login = "rozimattoshtanboyev@gmail.com";
  const password = "20021127rg";
  function submitValue(e){
    e.preventDefault();
    if (inputValue.email===login && inputValue.password === password ){
      
      navigate("/adminPanel");
    }
    else{
      setError(false);
    }
    
  }
  useEffect(()=>{
    if (!inputValue.email===" " && !inputValue.password === " "){
      setDisabl(false);
    }
  },[]);




  return (
    <div className={"adminLogin"} style={{backgroundImage: `url("https://static01.nyt.com/images/2015/10/24/opinion/24manguel/24manguel-superJumbo.jpg")`}}>
      <img src={logoImg} alt="booksheter" />
      {error === "false" && <p>Error</p> }
      <form onSubmit={submitValue} className='adminLoginForm'>
        <input name='email' 
          onChange={getValue} 
          type="email" 
          placeholder='your admin login'
          autoComplete='off'/>
        <input  name='password' 
          onChange={getValue} 
          type="text" 
          placeholder='your admin parol'
          autoComplete='off'/>
        <button type='submit' disabled={!disabl}> Login </button>
      </form>
      <Link to="">Forgot passwor?</Link>
    </div>
  )
}

export default AdminLogin;
