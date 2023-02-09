import React from 'react'
import AdminLogin from './components/admin/Admin'
import {Outlet} from "react-router-dom"

function RootLayOut() {
  return ( 
    <div>
      <AdminLogin/>
      <Outlet/>
    </div>
  )
}

export default RootLayOut
