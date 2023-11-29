
import React, { useState } from "react";
import {FaBars, FaReact} from 'react-icons/fa';
import {HiX} from 'react-icons/hi';
import {Link, link} from 'react-router-dom';
import './style.scss';
const data = [{
    label: 'HOME',
    to: '/'
},
{
    label: 'ABOUT',
    to: '/about'
},
{
    label: 'SKILLS',
    to: '/skills'
},
{
    label: 'PROJECTS',
    to: '/projects'
},
{
    label: 'CONTACT',
    to: '/contact'
}]
const Navbar = () => {
    const [icon,setIcon]=useState(false);

    const hundelIcon=()=>{
        setIcon(!icon);
    }
    return (
        <div>
            <nav className="navbar">
                <div className='navbar__container'>

                    <Link to={'/'} className='navbar__container__logo'>
                        <FaReact size={30} />
                    </Link>
                </div>
                <ul className={`navbar__container__menu ${icon ? 'active' : ' '}`}>
                    {
                        data.map((items, key)=>(
                            <li key={key} className='navbar__container__menu__item'>
                                <Link className='navbar__container__menu__item__links' to={items.to}>
                                    {items.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className='nav-icon' onClick={hundelIcon}>
                    {
                        icon ? <HiX size={30}/> : <FaBars size={30}/>
                    }
                </div>
            </nav>

        </div>
    )
}
export default Navbar;
