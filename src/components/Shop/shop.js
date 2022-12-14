import React, { useState } from 'react';
import './shop.css';
  
 import fakeData from '../../fakeData';
import Product from '../Product/product';
import Cart from '../CART/cart';
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
     const [cart,setCart] = useState([]);



    const handleAddproduct = (product) =>{
        console.log("added something",product);
        const newCart = [...cart,product]
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
    
            
           <div className='product-container'>
 
                {
                    products.map(pd=> <Product handleAddproduct ={handleAddproduct}
                        product={pd}></Product>)
                }
          
           </div>
           <div className='cart-container'>
             <Cart cart={cart}></Cart> 
             </div>
        </div>
    );
};

export default Shop;