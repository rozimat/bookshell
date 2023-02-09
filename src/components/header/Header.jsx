import React from 'react'
import "./Header.css";
import {Link} from "react-router-dom";
import img from "../../images/logo.png";
import {AiOutlineSearch, AiOutlineCalendar} from "react-icons/ai";
import Main from '../main/Main';
function Header() {
  return (
    <>
        <div className='header'>
      <Link>
        <img src={img} alt="BookShelter" />
      </Link>
      <div className='inputWrapper'>
        <AiOutlineSearch className='search_icon'/>
        <input type="text" placeholder='search'/>
      </div>
      <Link to="/admin" className='lingAdmin'>
        Admin
      </Link>
    </div>
    <div className='miniHeader'>
      <p>Showing 18 Result</p>
      <div className='calendar'>
      <AiOutlineCalendar />
      <select >
        <option value="">Order by newest</option>
      </select>
      </div>
    </div>
    <Main /> 
    </>

  )
}

export default Header
