import React from 'react'
import "./Pagination.css";
import { useSearchParams} from "react-router-dom";

function Pagination({count}) {
  const [query, setQuery] = useSearchParams();
  
  let countBTN = count / 2;
  let btn = [];
  for (let i =1; i<countBTN +2; i++){
    btn.push(i);
  }

  const getValueFromBtn =(item)=>{
    setQuery({
      page: item,
    });
    console.log(item);
  }


  return (
    <div className='pagination'>   
      <button> Prev </button>
      <div>
        {
          btn.map((item)=>
          ( <button onClick={getValueFromBtn.bind(undefined, item)}>{item}</button> )
          )
        }
      </div>
      <button> Next </button>
    </div>
  )
}

export default Pagination
