import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopop from './components/LoginPopup/LoginPopop'

const App = () => {
 
  const [showLogin,setShowLogin] = useState(false);

  return (
    <>
    {showLogin  ? <LoginPopop setShowLogin={setShowLogin}/> : <></> }
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/Order' element={<PlaceOrder/>}/>
    </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
