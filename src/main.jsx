import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './App'
import App from './App'
import './index.css'
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import AHMyourspace from './pages/AHMyourspace'
import Listing from './pages/listing'
import Getstarted from './pages/getstarted'
import Tellaboutplace from './pages/tellaboutplace'
import GeneralErrorpage from './component/generalerror'


const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:<GeneralErrorpage/>
  },
  {
    path:'/ahm',
    element:<AHMyourspace/>,
    errorElement:<GeneralErrorpage/>
  },
  {
    path:'/listing',
    element:<Listing/>,
    errorElement:<GeneralErrorpage/>
  },
  {
    path:'/getstarted',
    element:<Getstarted/>,
    errorElement:<GeneralErrorpage/>
  },
  {
    path:'/tellaboutplace',
    element:<Tellaboutplace/>,
    errorElement:<GeneralErrorpage/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}/>
  </React.StrictMode>,
)
