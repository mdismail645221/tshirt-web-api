import React from 'react';
import Products from '../Products/Products';

const Cart = ({cart, handleRemoveItems}) => {
    return (
        <div>
            <h4>Cart</h4>
            <h5>Order Quantity: {cart.length}</h5>
            <div>
                {
                    cart.map(Product => <p key={Product._id}>
                        {Product.name}
                        <button onClick={()=>handleRemoveItems(Product)} className='bg-violet-500 px-2 rounded-full text-white my-2 ml-2 text-sm hover:bg-violet-900'>remove</button>
                    </p>
                    )
                }
            </div>
        </div>
    );
};

export default Cart;