import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from "react-scroll";
import { ReactComponent as LogoSVG } from '../assets/logo_white.svg'

const NavBar = () => {
const [nav, setNav] = useState(false);

    const links = [
        { 
            id: 1,
            link: 'home',
            color: 'hover:text-amber-400',
            scrollLink: 'home'
        },
        {
            id: 2,
            link: 'about',
            color: 'hover:text-red-400',
            scrollLink: 'about'
        },
        {
            id: 3,
            link: 'minecraft builds',
            color: 'hover:text-green-400',
            scrollLink: 'portfolio'
        },
        {
            id: 4,
            link: 'code',
            color: 'hover:text-blue-400',
            scrollLink: 'experience'
        },
        {
            id: 5,
            link: 'contact',
            color: 'hover:text-purple-400',
            scrollLink: 'contact'
        },
    ]
  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-5'>
        <div>
            <h1 className='text-5xl font-signature ml-2 cursor-pointer'>
                <a href="./">
                    <LogoSVG width="5rem" height="5rem" className='hover:scale-110 duration-500'/>  
                </a>
            </h1>      
        </div>

        <ul className='hidden md:flex text-amber-400'>
            {links.map(({link, id, color, scrollLink}) => (
            <li
            key={id}
            className={
                `px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-300 ${color}`  
            }
            >
                <Link to={scrollLink} smooth duration={500}>{link}</Link>
            </li>
            ))}
        </ul>
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={35} className='hover:scale-105 hover:rotate-180 duration-500'/> : <FaBars size={35} className='hover:scale-105'/>}
        </div>

        {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-slate-600 text-gray-500'>
        {links.map(({link, id, color, scrollLink}) => (
            <li
            key={id}
            className={`px-4 cursor-pointer capitalize py-6 text-4xl text-gray-500 hover:scale-105 duration-300 ${color}`}
            >
                <Link to={scrollLink} onClick={() => setNav(!nav)} smooth duration={500}>{link}</Link>
            </li>
            ))}
        </ul>
        )}
    </div>
  )
}

export default NavBar