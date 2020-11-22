import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './DataLayer';

function CheckoutProduct({ id, title, image, price, rating }) {
    const[{ cart }, dispatch] = useStateValue();


    const removefromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        });
    }
    
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((_) => (
                            <p>⭐️</p>
                        ))
                    }
                </div>   

                <button onClick={removefromCart}>Remove from Cart</button> 
            </div>
        </div>
    )
}

export default CheckoutProduct
