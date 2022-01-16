import React from 'react';
import './Footer.css';
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='localtion'>
                    <p> <FaSearchLocation size={20} style={{ color: 'white', marginRight: '2rem' }} /> Avenue Paul Valerie, Sarcelles</p>
                    </div>
               


                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> 06 04 18 06 71</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> nathan.benais@delat_ts.com</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About the company</h4>
                    <p>"Delta TS is the French national airline, founded on October 7, 1933.
                         It's main activities are the transport of passengers, and the maintenance and upkeep of jets."</p>
                    <div className='social'>
                        <FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <FaTwitter size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
