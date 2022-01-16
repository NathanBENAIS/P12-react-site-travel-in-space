import React from 'react';
import { Link } from 'react-router-dom';
import './HeroVideo.css';
import spaceVideo from '../../assets/space.mp4';

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>

            <div className='content'>
                <h1>Galaxy Travel</h1>               
                <p>Do  Your First Trip Into Space.</p>           


                <div>
                    <Link to='/training' className='btn'>Training</Link>
                    <Link to='/contact' className='btn'>Contact</Link>                    
                </div>
            </div>
        </div >
    )
}

export default Video
