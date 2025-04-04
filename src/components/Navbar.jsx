import React from 'react';
// TODO - change the logo 
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo} alt="logo" className='mx-2 w-10'/>
        </div>
        <div className='mx-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
        </div>
    </nav>
  )
}

export default Navbar
