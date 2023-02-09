import React, {useState} from 'react';
import './App.css';
import { routes} from "./router";
import { RouterProvider } from "react-router-dom";


function App() {
  return <RouterProvider router={routes}/>
}

export default App;
