import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Root from './Components/Root/Root.jsx'
import Home from './Components/Pages/Home/Home.jsx'
import MyBookings from './Components/Pages/MyBooking/MyBookings.jsx'
import Blogs from './Components/Pages/Blogs/Blogs.jsx'
import Contact from './Components/Pages/ContactUs/Contact.jsx'
import { getBlogsData, getContactData, getDoctorsData } from './Components/utilities.js'
import Loading from './Components/Loading/Loading.jsx'
import DoctorDetails from './Components/Pages/DoctorDetails/DoctorDetails.jsx'
import Invalid from './Components/Pages/Invalid/Invalid.jsx'

let router=createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element:<Home></Home>,
        loader:getDoctorsData,
        hydrateFallbackElement:<Loading></Loading>

      },
      {
        path: "home",
        element: <Home></Home>,
        loader:getDoctorsData,
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path: "mybookings",
        element: <MyBookings></MyBookings>,
        loader:getDoctorsData,
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
        loader:getBlogsData,
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path: "contact",
        element: <Contact></Contact>,
        loader:getContactData,
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path: "doctor-details/:id",
        element: <DoctorDetails></DoctorDetails>,
        loader:getDoctorsData,
        hydrateFallbackElement:<Loading></Loading>
      }
      
    ]
    
  },
  {
    path: "/404",
    element: <Invalid></Invalid>
  },
  {
    path: "*",
    element: <Invalid></Invalid>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   <RouterProvider router={router} />
  </StrictMode>,
)
