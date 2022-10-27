import React from 'react';

const Product = (props) => {
    //const img = props.product;
    const {img,name}=props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
            <h2>{name}</h2>
            </div>
      
        </div>
    );
};

export default Product;