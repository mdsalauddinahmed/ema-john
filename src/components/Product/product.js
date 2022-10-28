import React from 'react';
import   './product.css';
const Product = (props) => {
    //const img = props.product;
    const {img,name,seller,price,stock}=props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
             <h4 className='product-details'>{name}</h4>
             <br />
             <p><small>by : {seller}</small></p>
             <p>${price}</p>
             <p><small>Only {stock} left in stock- order soon</small></p>
             <br />
             <button className='btn' onClick={()=> props.handleAddproduct(props.product)}>Add to cart</button>
            </div>
      
        </div>
    );
};

export default Product;