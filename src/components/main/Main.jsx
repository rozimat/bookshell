import React, {useEffect, useState} from 'react'
import "./Main.css";
import {IoIosBook} from "react-icons/io";
import {BsFillBackspaceFill} from "react-icons/bs";
import {Link } from "react-router-dom";
import axios from 'axios';



function Main() {
  const [datauz, setDatauz] = useState([" "]);
  useEffect(()=>{
    axios
    .get("https://bookshelter-5c3b9-default-rtdb.firebaseio.com/bookshelter.json")
    .then(({data})=>{
    const  newData = Object.keys(data).map((item)=>{
        return{
          ...data[item],
          id:item,
        };
      });
      setDatauz(newData);
    })
    .catch((error)=>{
      console.log(error);
    })
  },[datauz]);
  
  

  return (
    
    <div className='main'>
      <div className='mainLeft'>
      <div>
        <h2> Bookmarks </h2>
          <p>If you don’t like to read, 
          you haven’t found the right book
        </p>
      </div>
        <div>
          <div className='card1'>
            <span> 
              <h5>Raqamli qala</h5>
              <p>Den Brown</p>
            </span>
            <span>
              <IoIosBook/>
              <BsFillBackspaceFill/>
            </span>
          </div>

        </div>
      </div>
        <div className='mainRight'>
          {
            datauz.map(itme=>
              <div className='card2' key={Math.random().toFixed(2)}>
                <div>
                  <img src="https://picsum.photos/200/300" alt="book" className='card2Img'/>
                </div>
                <div>
                  <h4>{itme.title}</h4>
                  <span>{itme.author}</span>
                  <p>{itme.data}</p>
                </div>
                <div>
                  <span>
                    <div className='btn1'>BOOKMARK</div>
                    <Link className='btn1'>SEE MORE</Link>
                  </span>
                  <button className='btn2'> READ </button>
                </div>
            </div>
            )
          }

        </div>
    </div>
  
  )
}

export default Main
