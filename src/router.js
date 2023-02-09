import {createBrowserRouter} from "react-router-dom";
import AdminLogin from "./components/admin/AdminLogin";
import RootLayOut from './RootLayOut';
import Header from "./components/header/Header";
import SinglList from './components/admin/SinglList';
import Protected from "./components/protect/Protected";
export const routes = createBrowserRouter([
  
  {
    path: "/",
    element:<Header/>,
  },
  {
    path: "/admin",
    element:<AdminLogin/>,
    
  },
  {
    path:"/adminpanel",
    element: <RootLayOut/>,
  },
  {
    path:"/adminpanel/:id",
    element:(
      <Protected>
        <SinglList/>
      </Protected>
        ),
  },
]);
