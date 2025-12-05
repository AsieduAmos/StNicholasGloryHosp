import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.jpg';


const NavBar = () => {
  return (

<>
  <nav>
   <div className="container mx-auto">
     <section className="h-25 grid grid-cols-3 bg-white text-blue-600  font-bold items-center border-b 
                         border-blue-600 ">
      <img className="w-22  ml-20 " src={logo}alt="logo"/>
      <ul className="flex gap-6 text-xl cursor-pointer">
        <li> 
          <Link className="border border-blue-500 px-3 py-1.5 rounded-lg  hover:text-blue-800 
                       hover:border-blue-800" to="/">Home</Link>
        </li>
        <li> 
          <Link className="hover:text-blue-800" to="/NotFoundPage">Services</Link>
        </li>
        <li>
          <Link className="hover:text-blue-800" to="/NotFoundPage">About Us</Link>
        </li>
        <li>
          <Link className="hover:text-blue-800" to="/NotFoundPage">Contact Us</Link>
        </li>
      </ul>
      <ul className="bg-blue-600 text-white w-48 p-3 mx-auto ml-40 rounded-lg hover:bg-red-500 cursor-pointer">
        <li>
          <Link to="/NotFoundPage">Book Appointment</Link>
        </li>
      </ul>
     </section>
    </div>
  </nav>
</>
  )
}

export default NavBar