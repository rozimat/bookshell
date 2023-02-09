import React from 'react'
import { Navigate } from 'react-router-dom';

function Protected(props) {
  const isLoggedin = false;
  if(isLoggedin === false){
    return <Navigate to="/admin" replace/>;
  }
  else{
    return <Navigate to="/adminPanel" replace/>; 
  }
}

export default Protected;
