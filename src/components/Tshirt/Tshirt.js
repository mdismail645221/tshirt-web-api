import React from 'react';
import './Tshirt.css'

const Tshirt = ({ product, handleCart }) => {
    // console.log(product)
    const { picture, price, name, _id} = product;
    return (

            <div className='card'>
                <img src={picture} alt="" />
                <div className='card-info'>
                    <h3 className='font-semibold'>{name}</h3>
                    <p>Price: {price}</p>
                </div>
                <button onClick={()=> handleCart(product)} className='bg-violet-500 text-white px-3 rounded-lg w-full hover:bg-violet-600'>Add to Cart</button>
            </div>
 
    );
};

export default Tshirt;