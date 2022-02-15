
import Product from './Product'
import React,{useState, useEffect, useContext} from 'react'
import {CartContext} from '../CartContext'


const ProductList =()=>{


    // const {name} = useContext(CartContext);

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://ecom-rest-apis.herokuapp.com/api/products')
        .then(response=>response.json())
        .then(products=>{
            setProducts(products);
        });        
    },[]);//when component mount,it will run once when dependency array is empty.

    return (
        <div className="container mx-auto pb-24">
            <h1 className="text-lg font-bold my-4">Products </h1>
            <div className="grid grid-cols-5  my-8 gap-24">
                {
                    products.map(product=><Product product={product} key={product._id}/>)
                }               
            </div>
        </div>
    )
}

export default ProductList;