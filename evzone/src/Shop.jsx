import React from 'react'
import './Shop.css'



const Shop = () => {
  return (
    <>
    <body className='shopbody'>
        <div className="shopnavbar" id="shopnav">
        <div className="shoptext">
         <div className="shoptext1">Deliver at:</div>
         <div className="shoppin">
         <div className="shoploc-icon"></div>
         <div className="shoptext2"><input type="text" placeholder="Enter pincode" maxlength="6" /></div>
         </div>
        </div>
        <div className="shopsearch">
         <input type="text" id="shopsearch-input" placeholder="search here for E-cycles,E-bikes & accessories" />
         <div className="shopsearch-icon">
             <i className="fa-solid fa-magnifying-glass"></i>
         </div>
        </div>
        <div className="shopcart-icon">
        cart(0)
        </div>
        <div className="shopliked-icon">
            <i className="fa-regular fa-heart"></i>
        </div>
        
    </div>
     <div className="shopimgbar">
        <div className="shopimg1"></div>
        <div className="shopimg2"></div>
    </div>
    <div className="shopsections">
        <div className="shopsec"><a href="#cycle">E-CYCLE</a></div>
        <div className="shopsec"><a href="#bike">E-SCOOTERS</a></div>
        <div className="shopsec"><a href="#rickshaw">E-RICKSHAW</a></div>
        <div className="shopsec"><a href="#battery">BATTERY</a></div>
        <div className="shopsec"><a href="#accessories">ACCESSORIES</a></div>
    </div>

    <div className="shopcat1" id="cycle">E-CYCLE</div>
    <div className="shopsection">
        <div className="shopbox">
            <a href="C1"><div className="shopimg" style={{backgroundImage: "url('cycle1.png')"}} ></div></a>
            <div className="shopitem-name">EMotorad Doodle</div>
            <div className="shopinfo">Color:black<br /><s>₹54,999</s> ₹49,999</div>
        </div>
        <div className="shopbox">
            <a href="C2"><div className="shopimg" style={{backgroundImage: "url('cycle2.png')"}}></div></a>
            <div className="shopitem-name">Hero Lectro C8</div>
            <div className="shopinfo">Color:grey<br /><s>₹36,999</s> ₹35,999</div>
        </div>
        <div className="shopbox">
            <a href="C3"><div className="shopimg" style={{backgroundImage: "url('cycle3.png')"}}></div></a>
            <div className="shopitem-name">E-Motorad EMX</div>
            <div className="shopinfo">Color:neon yellow<br /><s>₹66,999 </s>₹58,999</div>
        </div>
    </div>
    <div className="shopsection">
        <div className="shopbox">
            <a href="C4"><div className="shopimg" style={{backgroundImage: "url('cycle4.png')"}}></div></a>
            <div className="shopitem-name">Hero Lectro C9</div>
            <div className="shopinfo">Color:brown<br /><s>₹46,999</s> ₹45,999</div>
        </div>
        <div className="shopbox">
            <a href="C5"><div className="shopimg" style={{backgroundImage: "url('cycle5.png')"}}></div></a>
            <div className="shopitem-name">Motovolt HUM</div>
            <div className="shopinfo">Color:black<br /><s>₹36,100</s> ₹35,600</div>
        </div>
        <div className="shopbox">
            <a href="C6"><div className="shopimg" style={{backgroundImage: "url('cycle6.png')"}}></div></a>
            <div className="shopitem-name">Svitch XE</div>
            <div className="shopinfo">Color:black<br /><s>₹93,450</s> ₹92,450</div>
        </div>
    </div>
    <div className="shopcat1" id="bike">E-SCOOTERS</div>
    <div className="shopsection">
        <div className="shopbox">
            <a href="movie1.html"><div className="shopimg" style={{backgroundImage: "url('sc1.png')"}}></div></a>
            <div className="shopitem-name">Hero Electric Optima</div>
            <div className="shopinfo">Color:cyan<br />₹63,190</div>
        </div>
        <div className="shopbox">
            <a href="movie2.html"><div className="shopimg" style={{backgroundImage: "url('sc2.png')"}}></div></a>
            <div className="shopitem-name">Hero Electric Photon</div>
            <div className="shopinfo">Color:red<br />₹80,790</div>
        </div>
        <div className="shopbox">
            <a href="movie3.html"><div className="shopimg" style={{backgroundImage: "url('sc3.png')"}}></div></a>
            <div className="shopitem-name">Ampere Reo Elite</div>
            <div className="shopinfo">Color:blue<br />₹60,490</div>
        </div>
    </div>
    <div className="shopsection">
        <div className="shopbox">
            <a href="movie1.html"><div className="shopimg" style={{backgroundImage: "url('sc4.png')"}}></div></a>
            <div className="shopitem-name">Batt:RE One</div>
            <div className="shopinfo">Color:red<br />₹73,900</div>
        </div>
        <div className="shopbox">
            <a href="movie2.html"><div className="shopimg" style={{backgroundImage: "url('sc5.png')"}}></div></a>
            <div className="shopitem-name">Gemopai Astrid</div>
            <div className="shopinfo">Color:red<br />₹84,699</div>
        </div>
        <div className="shopbox">
            <a href="movie3.html"><div className="shopimg" style={{backgroundImage: "url('sc6.png')"}}></div></a>
            <div className="shopitem-name">Ampere Magnus Pro</div>
            <div className="shopinfo">Color:red<br />₹72,999</div>
        </div>
    </div>
    <div className="shopcat1" id="rickshaw">E-RICKSHAW</div>
    <div className="shopsection">
        <div className="shopbox">
            <a href="movie1.html"><div className="shopimg" style={{backgroundImage: "url('ric1.png')"}}></div></a>
            <div className="shopitem-name">Rage+ Tipper</div>
            <div className="shopinfo">Color:yellow<br /></div>
        </div>
        <div className="shopbox">
            <a href="movie2.html"><div className="shopimg" style={{backgroundImage: "url('ric2.png')"}}></div></a>
            <div className="shopitem-name">E-Alfa Mini</div>
            <div className="shopinfo">Color:red<br /></div>
        </div>
        <div className="shopbox">
            <a href="movie3.html"><div className="shopimg" style={{backgroundImage: "url('ric3.png')"}}></div></a>
            <div className="shopitem-name">Ape E-City/Swappable</div>
            <div className="shopinfo">Color:blue<br /></div>
        </div>
    </div>
    <div className="shopsection">
        <div className="shopbox">
            <a href="movie1.html"><div className="shopimg" style={{backgroundImage: "url('ric4.png')"}}></div></a>
            <div className="shopitem-name">HiLoad HDXR</div>
            <div className="shopinfo">Color:white<br /></div>
        </div>
        <div className="shopbox">
            <a href="movie2.html"><div className="shopimg" style={{backgroundImage: "url('ric5.png')"}}></div></a>
            <div className="shopitem-name">Apé E-City/Fixed Battery</div>
            <div className="shopinfo">Color:blue<br /></div>
        </div>
        <div className="shopbox">
            <a href="movie3.html"><div className="shopimg" style={{backgroundImage: "url('ric6.png')"}}></div></a>
            <div className="shopitem-name">HiLoad DVXR</div>
            <div className="shopinfo">Color:white<br /></div>
        </div>
    </div>
    <div className="shopcat1" id="battery">BATTERY</div>
    <div className="shopsection">
        <div className="shopbox">
            <a href="movie1.html"><div className="shopbat-img" style={{backgroundImage: "url('b1.webp')"}}></div></a>
            <div className="shopitem-name">LION EV 60V 30AH LFP BATTERY WITH FABRICATION</div>
            <div className="shopinfo"><br /><s>Rs. 46,500.00</s>Rs. 37,200.00</div>
        </div>
        <div className="shopbox">
            <a href="movie2.html"><div className="shopbat-img" style={{backgroundImage: "url('b2.webp')"}}></div></a>
            <div className="shopitem-name">LION EV LSP-A100 SPOT WELDING MACHINE</div>
            <div className="shopinfo"><br /><s>Rs. 18,125.00</s>Rs. 14,500.00</div>
        </div>
        <div className="shopbox">
            <a href="movie3.html"><div className="shopbat-img" style={{backgroundImage: "url('b3.webp')"}}></div></a>
            <div className="shopitem-name">LION EV BATTERY SPOT WELDING MACHINE SPOT GUN</div>
            <div className="shopinfo"><br /><s>Rs. 4,999.00</s>Rs. 1,200.00</div>
        </div>
        <div className="shopbox">
            <a href="movie3.html"><div className="shopbat-img" style={{backgroundImage: "url('b4.webp')"}}></div></a>
            <div className="shopitem-name">LION EV AMPTEK 12V 14AH SMF BATTERY   </div>
            <div className="shopinfo"><br /><s>Rs. 3,500.00</s>Rs. 2,800.00</div>
        </div>
    </div>
    </body>
    </>
  )
}

export default Shop