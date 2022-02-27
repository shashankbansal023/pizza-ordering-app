
import React,{useEffect, useState} from 'react'
import './index.css'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
// import About from './pages/About'
import Navigation from './components/Navigation'
import Products from './pages/Products';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct'
import {CartContext} from './CartContext'
import {getCart, storeCart} from './pages/helpers';

const App =()=>{
    
    const [cart , setCart] = useState({});
    
    //fetch from local storage
    useEffect(()=>{
        getCart().then(cart=>{
            setCart(JSON.parse(cart));
        })
    },[])

    useEffect(()=>{
        storeCart(JSON.stringify(cart));
    },[cart])


    return(
        <>
            <Router>
                <CartContext.Provider value={{ cart,setCart }} >
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    {/* <Route path="/about" element={<About/>}></Route> */}
                    <Route path="/products" element={<Products/>}></Route>
                    <Route path="/products/:_id" element={<SingleProduct/>}></Route>                    
                    <Route path="/cart" element={<Cart/>}></Route>                 
                </Routes>
                </CartContext.Provider>
            </Router>
        </>
    ) 
}

export default App;