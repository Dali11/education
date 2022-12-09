import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Navbar.css'
import Dropdown from './Dropdown/Dropdown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {

    const [hide, sethide] = useState(false)

    const [isSidebarOpen, setisSidebarOpen] = useState(false)
    const [dropdown, setdropdown] = useState(false)
    const [navbar, setnavbar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 70) {
            setnavbar(true)
        } else {
            setnavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    const handleToggle = () => {
        { (isSidebarOpen) ? setisSidebarOpen(false) : setisSidebarOpen(true) }
        sethide(false)
    }

    const handleHide = () => {
        sethide(true)
        setisSidebarOpen(false)
    }

    return (
        <div className='nav laptop:fixed top-0 sticky w-full'>

            <div 
            className=
                {(navbar) ?
                    'nav-cont  shadow-xl w-full bg-white laptop:bg-white flex  laptop:justify-evenly laptop:p-8 p-3'
                    :
                    'nav-cont opacity-50  shadow-xl w-full bg-white laptop:bg-slate-600 flex  laptop:justify-evenly laptop:p-8 p-3'}>
                <div className="brand">
                    <h1 className={(navbar) ? 'font-black text-zinc-900 laptop:text-black uppercase text-2xl laptop:text-3xl' : 'font-black text-zinc-900 laptop:text-white uppercase text-2xl laptop:text-3xl'}>edu meeting</h1>
                </div>
                <div className="nav-links">
                    <ul className={(navbar) ? 'hidden laptop:flex gap-16  uppercase ml-20 text-black' : 'hidden laptop:flex gap-16  uppercase ml-20 text-white'}>
                        <li className='hover:text-orange-500 duration-300'><Link to="#/">Home</Link></li>
                        <li className='hover:text-orange-500 duration-300'><Link to="#meeting">Meeting</Link></li>
                        <li className='hover:text-orange-500 duration-300'><Link to="#apply">apply now</Link></li>
                        <li className='hover:text-orange-500 duration-300 h-10' onMouseEnter={() => setdropdown(true)} onMouseLeave={() => setdropdown(false)}><a href="#">pages<KeyboardArrowDownIcon /></a>{(dropdown) ? <Dropdown /> : ""}</li>
                        <li className='hover:text-orange-500 duration-300'><Link to="#courses">courses</Link></li>
                        <li className='hover:text-orange-500 duration-300'><Link to="#contact">contact</Link></li>
                    </ul>
                </div>
                {(!isSidebarOpen) ?
                    <span
                        className='
                    text-zinc-900 
                    text-xl  
                    laptop:hidden 
                    cursor-pointer
                    block
                    md:ml-40 ml-32 large-tab:absolute large-tab:right-6 
                    tablet:absolute tablet:right-6'
                        onClick={() => handleToggle()}>
                        <MenuIcon sx={{ fontSize: 39 }} />
                    </span>
                    :
                    <span
                        className='
                    text-zinc-900 
                    text-xl
                    laptop:hidden 
                    cursor-pointer
                    block
                    md:ml-40 ml-32 large-tab:absolute large-tab:right-6
                    tablet:absolute tablet:right-6'
                        onClick={() => handleToggle()}>
                        <CloseIcon sx={{ fontSize: 39 }} />
                    </span>
                }
            </div>
            {(isSidebarOpen) ?

                <div className={(hide) ? "hidden fixed left-10 top-17 justify-center ease-in-out duration-600 " : "flex fixed left-10 top-17 justify-center ease-in-out duration-600 "}>
                    <ul className='flex-row gap-10 text-zinc-900 p-8 px-24 bg-white uppercase ease-in-out duration-300' >
                        <li className='hover:text-orange-500 duration-300 pb-4'><Link to="#/" onClick={() => handleHide()}>Home</Link></li>
                        <li className='hover:text-orange-500 duration-300 pb-4'><Link to="#meeting" onClick={() => handleHide()}>Meeting</Link></li>
                        <li className='hover:text-orange-500 duration-300 pb-4'><Link to="#apply" onClick={() => handleHide()}>apply now</Link></li>
                        <li className='hover:text-orange-500 duration-300 pb-4'><a href="#" onClick={() => handleHide()}>pages</a></li>
                        <li className='hover:text-orange-500 duration-300 pb-4'><Link to="#courses" onClick={() => handleHide()}>courses</Link></li>
                        <li className='hover:text-orange-500 duration-300 pb-4'><Link to="#contact" onClick={() => handleHide()}>contact</Link></li>
                    </ul>
                </div>
                : ""}
        </div>
    )
}


export default Navbar