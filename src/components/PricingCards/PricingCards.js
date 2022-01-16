import React from 'react'
import {Link} from 'react-router-dom'
import './PricingCards.css'

const Pricing = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3>- Basic -</h3>
                    <span className='bar'></span>
                    <p className='btc'>345 ETH</p>
                    <p>- 3 Days -</p>
                    <p>- Room -</p>
                    <p>- Activity -</p>
                    <p></p>
                    <p></p>
                  
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3>- Suite -</h3>
                    <span className='bar'></span>
                    <p className='btc'>467 ETH</p>
                    <p>- 3 Days -</p>
                    <p>- Room -</p>
                    <p>- Activity  -</p>                  
                    <p>- Food -</p>
                    <p></p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3>- Executive -</h3>
                    <span className='bar'></span>
                    <p className='btc'>989 ETH</p>
                    <p>- 3 Days -</p>
                    <p>- Room -</p>
                    <p>- Activity -</p>
                    <p>- Food -</p>
                    <p>- Great comfort -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
            </div>
        </div>
    )
}

export default Pricing
