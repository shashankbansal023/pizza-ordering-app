import React,{useContext,useState} from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../CartContext'

const Product = (props) =>{
    //props is an object containing the properties passed to the component
    const {product} = props;
    const {cart, setCart} = useContext(CartContext)
    const [isAdding,setIsAdding] = useState(false);

    const addToCart = (event, product)=>{
        event.preventDefault();
        //event.stopPropagation();
        // console.log(event,product);
        let _cart = {...cart}; //cart = {} -> first time its called
        if(!_cart.items){ // cart = { items: {} }
            _cart.items = {};
            _cart.totalItems = 0;
        }
        if(_cart.items[product._id]){
            _cart.items[product._id]++;
        }else{
            _cart.items[product._id] = 1;
        }
        _cart.totalItems+=1

        setCart(_cart);
        setIsAdding(true);
        setTimeout(()=>{
            setIsAdding(false);
        },1000)
    }


    return(
        <Link to={`/products/${product._id}`}>
        <div>
            <img src={product.image} alt="pizza"/>
            <div className="text-center">
                <h2 className="text-lg font-bold py-2">{product.name}</h2>
                <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{product.size}</span>
            </div>
            <div className="flex justify-between text-center mt-4">
                <span>{product.price}</span>
                <button disabled={isAdding} onClick={(e)=>addToCart(e, product)} className={`${isAdding ? 'bg-green-500':'bg-yellow-400'} 
                py-1 px-4 rounded-full font-bold`}>{isAdding ? 'ADDED' : 'ADD'}</button>
            </div>
        </div>
        </Link>
    )
}

export default Product