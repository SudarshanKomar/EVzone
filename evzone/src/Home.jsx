import React from 'react'
import './Home.css';
import {configureAndRedirect} from './Rhome.js';
import { NavLink } from 'react-router-dom';

//import { BrowserRouter } from 'react-router-dom';
//import MyComponent from './MyComponent.jsx';
//import Shop from './Shop.jsx';
//const mapUrl='https://www.google.com/maps/search/nearby+charging+station/@12.9600527,77.6404989,12z/data=!3m1!4b1?entry=ttu';

const Home = () => {
    
  return (
    <>
        <header>
        <nav id="navbar">
            <ul>
                <li id="brand"><img src="/evzone.png" alt="Logo" /></li>
                <li><a href="#home">Home</a></li>
                <li><a href="#nav">Navigation</a></li>
                <li><a href="#rental">EV rentals</a></li>
                <li><a href="#shop">Shop</a></li>
                <li><a href="#service">Services</a></li>
                <li><a href="#abt">About us</a></li>
            </ul>
        </nav>
    </header>

    <section id="home">
        <div className="animation-container">
            <h1 className="keyframe-text">EV zone...</h1>
        </div>
    </section>  

    <section id="nav">
        <h2>Find EV charging stations</h2>
        <div className="navigation-container">
            <div className="map-container">
            {/* <MyComponent /> */}
                {/* <iframe title='map'
                    frameBorder="0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.481412110062!2d77.56295087375116!3d12.941017415550712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158b11e34d2f%3A0x5f4adbdbab8bd80f!2sBMS%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1704717833742!5m2!1sen!2sin"
                    ></iframe> */}
                    {/* <iframe>
                    width="600"
                    height="450"
                    
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={mapUrl}
                    title="Space Needle, Seattle WA"
 
                    </iframe> */}
                    <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d124423.53650700382!2d77.62083806080977!3d12.9567759078235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1snearby%20charging%20station!5e0!3m2!1sen!2sin!4v1709062212556!5m2!1sen!2sin" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="search-box">
                <input type="text" placeholder="Search for EV Charging Spot" />
                <button><a href='https://www.google.co.in/maps/search/nearby+charging+stations/@12.9531386,77.6208376,12z/data=!3m1!4b1?entry=ttu'>Search</a></button>
                <div className='batterybutton'><NavLink to='/Battery' style={{color:'white', textDecoration:'none'}} >Click here for battery swappable services</NavLink></div>
            </div>
        </div>
    </section>

    <section id="rental">
        <div className="rental-container">
            <h2>Enter Rental Details</h2>
            <form id="rental-form" action='/Rental'>
                <label for="startDateTime">Start Date and Time:</label>
                <input type="datetime-local" id="startDateTime" required />

                <label for="endDateTime">End Date and Time:</label>
                <input type="datetime-local" id="endDateTime" required />

                <button type="submit" onClick={configureAndRedirect}>Configure and View Vehicles</button>
            </form>
        </div>
        
    </section>

    <section id="shop">
        <div className="shop-container">
            <h2>Shop Now</h2>
            <p>Explore our selection of electric vehicles and accessories.</p>

            <div className="shop-items">
                <div className="shop-item">
                    <img src="/ric3.png" alt="Item 1" />
                    <h3>Ape E-City/Swappable</h3>
                    <p>Electric Rickshaw with great stability.</p>
                    <div className='shopbutton'><NavLink to='/Shop' style={{color:'white', textDecoration:'none'}} >View details</NavLink></div>
                </div>

                <div className="shop-item">
                    <img src="/sc1.png" alt="Item 2" />
                    <h3>Electric scooter</h3>
                    <p>Portable and easy to cary.</p>
                    <div className='shopbutton'><NavLink to='/Shop' style={{color:'white', textDecoration:'none'}} >View details</NavLink></div>
                </div>

                <div className="shop-item">
                    <img src="/evchargingplug.webp" alt="Item 3" />
                    <h3>EV charging plug</h3>
                    <p>Great charging plug in segment.</p>
                    <div className='shopbutton'><NavLink to='/Shop' style={{color:'white', textDecoration:'none'}} >View details</NavLink></div>
                </div>
            </div>
        </div>
    </section>

    <section id="service">
        <h2>Our Services</h2>
        <div className="service-content">
            <div className="membership-box">
                <h2>Membership Plans</h2>
                <ul>
                    <li>Basic Plan: Free</li>
                    <li>Premium Plan: Rs.999/month</li>
                    <li>Business Plan: Rs.9999/month</li>
                </ul>
            </div>
            <div className="payment-box">
                <h2>Payment Services</h2>
                <p>We accept various payment methods to make your charging experience seamless and secure.</p>
                <ul>
                    <li>VISA</li>
                    <li>MASTERCARD</li>
                    <li>UPI</li>
                </ul>
            </div>
            <div className="reviews-box">
                <h2>User Reviews</h2>
                <p>Read what others have to say about their charging experiences.</p>
            </div>
            <div className="news-box">
                <h2>Latest News</h2>
                <p>Stay updated with the latest news and developments in the electric vehicle industry.</p>
            </div>
        </div>
    </section>
    

    <section id="abt">
        <div className="about-content">
            <div className="about-box">
                <h2>About EVcharging Finder</h2>
                <p>Welcome to EVcharging Finder, your go-to platform for finding and navigating electric vehicle charging stations. Our mission is to make electric vehicle charging accessible, convenient, and sustainable for everyone.</p>
            </div>

            <div className="about-box">
                <h3>Our Team</h3>
                <p>Meet the passionate individuals behind EVcharging Finder.</p>
                <p>
                    <a href="mailto:sudarshan.cs22@bmsce.ac.in">Sudarshan Komar</a><br />
                    <a href="mailto:swapnil.cs22@bmsce.ac.in">Swapnil Sahil</a><br />
                    <a href="mailto:sumitkc.cs22@bmsce.ac.in">Sumit Kumar</a><br />
                    <a href="mailto:sumithun.cs22@bmsce.ac.in">Sumit UN</a>
                </p>
            </div>

            <div className="about-box">
                <h3>Commitment to Sustainability</h3>
                <p>At EVcharging Finder, we are committed to a greener and more sustainable future. By facilitating easy access to electric vehicle charging stations, we contribute to reducing carbon emissions and promoting eco-friendly transportation solutions.</p>
            </div>

            <div className="about-box">
                <h3>User Benefits and Features</h3>
                <p>Discover the benefits of using EVcharging Finder:</p>
                <ul>
                    <li>Real-time availability updates</li>
                    <li>Easy navigation to charging stations</li>
                    <li>Secure and convenient payment methods</li>
                    <li>User reviews and ratings</li>
                </ul>
                <p>Join us in the electric vehicle revolution and embrace a cleaner, more sustainable way of transportation.</p>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Home