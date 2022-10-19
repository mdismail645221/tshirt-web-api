import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Products.css'

const Products = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);



    const handleCart = (tshirt) => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
            alert('tshirt already added');
            return;
        } else {
            const newCart = [...cart, tshirt];
            setCart(newCart)
        }
    }



    const handleRemoveItems = (tshirt) => {
        const remaining = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaining)
    }



    return (
       <div className="products-container">
            <div className='products-items border grid grid-cols-1 sm:grid-cols-2 gap-3 m-3'>
                {
                    products.map(product => <Tshirt
                        key={product._id}
                        product={product}
                        handleCart= {handleCart}
                    ></Tshirt>)
                }
            </div>
            <div className='order-container'>
                <Cart
                    cart={cart}
                    handleRemoveItems={handleRemoveItems}
                ></Cart>
            </div>
        </div>
    );
};

export default Products;