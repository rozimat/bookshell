import React, {useState, useRef, useEffect} from 'react';
import Pagination from "../pagination/Pagination";
import { useNavigate, Link, useLocation} from "react-router-dom";
import "./Admin.css";
import { } from "react-icons";
import { FiLogOut} from "react-icons/fi";
import { BiLayer} from "react-icons/bi";
import {TiDeleteOutline} from "react-icons/ti";
import axios from 'axios';
import { use } from 'i18next';


function Admin() {
  const [ fakeStatus, setFakeStatus] =useState(false);
  const [active, setActive] = useState(true);
  const [datauz, setDatauz] = useState([]);
  const [dataUz, setDataUz] = useState([]);
  var imgLink = "https://picsum.photos/200/300";
  const location = useLocation();
  const url = new URLSearchParams(location.search);
  const pageNumber = +url.get('gape') || 1;
  console.log(pageNumber);

  const title= useRef();
  const author= useRef();
  const cost= useRef();
  const category= useRef();
  const date= useRef();
  const publisher= useRef();
  const rate= useRef();
  const navigate = useNavigate();

  const getDataSendToServar=(e)=>{
    e.preventDefault();
    const data={
      title: title.current.value,
      author: author.current.value,
      cost: cost.current.value,
      category: category.current.value,
      date: date.current.value,
      publisher: publisher.current.value,
      rate: rate.current.value,
    }
    axios.post("https://bookshelter-5c3b9-default-rtdb.firebaseio.com/bookshelter.json",
    data)
    .then((response)=>{
      
    })
    .catch((error)=>{
      console.log(error)
    })
  };

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
      let startCount = pageNumber *2 -2;
      const array = newData.slice(startCount, startCount+2);
      console.log(array);
      setDataUz(array);
      setDatauz(dataUz);
    })
    .catch((error)=>{
      console.log(error);
    })
  },[]);

  function deleteFunction(id){
      axios.delete(`https://bookshelter-5c3b9-default-rtdb.firebaseio.com/bookshelter/${id}.json`)
      .then((res)=>{ 
        setFakeStatus(true);
      }).catch((error)=>{
        console.log(error);
      })
    }

    function openItem() {
      setActive(true);
    }
  function closeItem() {
      setActive(false);
    }


  
  return (
    <>
    <div className='admin'>
      <div className='admin_header'>
          <div className='admiHeaderWrapperAdmin'>
          <BiLayer className='iconLogo'/>
          <h2>Admin</h2>
          </div>
          <Link>
            <FiLogOut className='iconLogout'/>
            Long out 
          </Link>
      </div>
      <div className='admin_top'>
        <div className='admin_top-wrapper'>
          <h2> Overview </h2>
        <div>
          <button> ... </button>
          <button  onClick={closeItem}> Add</button>
        </div>
      </div>



        <div className='admin_book-add'>
          {
            dataUz.map(item =>
              <div className='books' key={Math.random().toFixed(2)}>
                <Link className='linkSingl' to={"/adminpanel/${item.id}/"}>
                  <img className='linkSingl' src={imgLink} alt="img" />
                </Link>
              <div>
                <div>
                    <h2>{item.title}</h2>
                    <p>{item.author}</p>
                    <span>{item.rete}</span>
                    <p> {item.cost}</p>
                </div> 
                <div>
                  <button>Edit</button>
                  <button onClick={(e)=>deleteFunction(item.id)}>Delete</button>
                </div>
              </div>
            </div>
            )
          }
        </div>
        <Pagination count= {datauz.length}/> 
      </div>
    </div>
    <div   className={active ? "closeModal": "madalInfo && opeanModal"}>
        <div className='madalInputWrapper1'>
        <TiDeleteOutline  onClick={openItem}/> 
        <form onSubmit={getDataSendToServar} className='madalForm'>
            <input ref={title} type="text" placeholder='book title'/>
            <input ref={author}  type="text" placeholder='Author'/>
            <input ref={cost}  name="cost"   type="text" placeholder='cost $'/>
            <select ref={category} >
              <option>Category</option>
            </select>
            <input ref={date}  type="text" placeholder='Publish date'/>
            <input ref={publisher}   type="text" placeholder='Publisher'/>
            <input ref={rate}  type="text" placeholder='Rate'/>
            <button type='submit' onClick={openItem}>Add</button>
          </form>
        </div>

      </div>
    </>
  )
}

export default Admin;
