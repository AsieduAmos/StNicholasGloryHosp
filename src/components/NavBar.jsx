import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaAddressBook } from 'react-icons/fa'; 
import logo from '../assets/images/logo.jpg';


const NavBar = () => {

const activeStyle = ({ isActive }) => 
    isActive ? 
      ' px-3 py-1 rounded-md text-xl text-red-500 hover:text-red-700 cursor-pointer transition duration-300 ease-in-out'
     : 
     '  text-blue-500 hover:text-blue-900 cursor-pointer transition duration-300 ease-in-out';

  return (

<>
  <nav>
   <div>
     <section className="grid grid-cols-3 items-center border-b border-blue-700 mt-3 shadow-xl">
      <img className="w-24 sm:ml-20 ml-10 p-2 pointer-events-none select-none" src={logo}alt="logo"/>

      <ul className="flex gap-5 text-lg cursor-pointer">
        <li> 
          <NavLink className={ activeStyle }
           to="/">Home
           </NavLink>
        </li>
        <li> 
          <NavLink className={ activeStyle } to="services">Services</NavLink>
        </li>
        <li>
          <NavLink className={ activeStyle } to="about">About Us</NavLink>
        </li>
        <li>
          <NavLink className={ activeStyle } to="contact">Contact Us</NavLink>
        </li>
      </ul>

      <ul>
        <li>
          <NavLink className="bg-blue-600 text-white sm:w-48 w-35 py-2 px-3 mx-auto sm:ml-40 ml-25 rounded-lg hover:bg-red-500 cursor-pointer" 
           to=" ">
             <FaAddressBook className='inline mr-1'/>
            Book Appointment
           </NavLink>
        </li>
      </ul>
     </section>
    </div>
  </nav>
</>
  )
}

export default NavBar