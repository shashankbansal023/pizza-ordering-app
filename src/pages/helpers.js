export const getCart = ()=>{

    return new Promise((reject,resolve)=>{
        const cart = window.localStorage.getItem('cart');
        resolve(cart);
        
    })
    
}

export const storeCart = (cart) =>{
    window.localStorage.setItem('cart',JSON.stringify(cart));
}