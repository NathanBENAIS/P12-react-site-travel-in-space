import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo.png'
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
            }else {
                setColor(false)
            }
        }
        window.addEventListener('scroll',changeColor)

        // console.log(handleClick);
        return (
            <div className={color? 'header header-bg' : 'header'}>

               <p> <Link to='/'>  <h1 style={{fontSize: '2.1rem'}}> <img  className='imgNav' src={logo} alt="Logo" /> Delta TS</h1> </Link></p>
                <ul className={click ? 'nav-menu active' : 'nav-menu '}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/pricing'>Pricing</Link>
                    </li>
                    <li>
                        <Link to='/training'>Training</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>

                <div className='hamburger' onClick={handleClick}>


                    {click ? (<FaTimes size={20} style={{ color: '#fff' }} />) : <FaBars size={20} style={{ color: '#fff' }} />}


                </div>
            </div>
        )
    }
    export default Navbar;
