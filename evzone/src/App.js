import React from 'react'
import {Route ,Routes} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Rental from './Rental';
import Shop from './Shop';
import C1 from './C1';
import C2 from './C2';
import C3 from './C3';
import C4 from './C4';
import C5 from './C5';
import C6 from './C6';
import Address from './Address';
import Payment from './Payment';
import Visa from './Visa';
import Mcard from './Mcard';
import Upi from './Upi';

const App = () => {
  return (
    <>
        <Routes>
        <Route   exact path='/' element={<Signup />} />
        <Route  exact path='/Home' element={<Home />} />
        <Route  exact path='/Login' element={<Login />} />
        <Route  exact path='/Rental' element={<Rental />} />
        <Route  exact path='/Shop' element={<Shop />} />
        <Route  exact path='/C1' element={<C1 />} />
        <Route  exact path='/C2' element={<C2 />} />
        <Route  exact path='/C3' element={<C3 />} />
        <Route  exact path='/C4' element={<C4 />} />
        <Route  exact path='/C5' element={<C5 />} />
        <Route  exact path='/C6' element={<C6 />} />
        <Route  exact path='/Address' element={<Address />} />
        <Route  exact path='/Payment' element={<Payment />} />
        <Route  exact path='/Visa' element={<Visa />} />
        <Route  exact path='/Mcard' element={<Mcard />} />
        <Route  exact path='/Upi' element={<Upi />} />
    
        </Routes>
    </>
  )
}

export default App