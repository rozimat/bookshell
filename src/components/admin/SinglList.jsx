import axios from 'axios';
import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "./SinglList.css";


function SinglList() {
 /* const {useParamsList}= useParams();
  const { useId } = useParamsList;
  console.log(useParamsList);
  
  ustozga korsat
  
  */

  useEffect(()=>{
    axios.get(`https://bookshelter-5c3b9-default-rtdb.firebaseio.com/bookshelter.json`)
    .then(({data})=>{
      console.log(data);
    })
    .catch((error)=>{
      console.log(error);
    })
    .finally();
  },[])

  return (
    <div className='allInfo'>
      <div className='allInfoContext'>
        <img src="https://picsum.photos/450/200" alt="" />
        <h3>Qanaqadir kitob</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Omnis sint nulla consequatur illo id suscipit. Autem, 
          magni cum perspiciatis assumenda repellat nostrum sunt. In libero iste quo, 
          officiis corporis esse eveniet suscipit corrupti quis quasi?
          Eius nesciunt repellendus quas dolores?
        </p>
        <h3>By Yozgan!</h3>
      </div>
    </div>
  )
}

export default SinglList
