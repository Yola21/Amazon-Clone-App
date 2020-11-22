import React from 'react'
import { useHistory } from 'react-router-dom';
import { useStateValue } from './DataLayer'
import { auth } from './firebase';
import './Product.css'

function Product({ id, title, price, rating, image }) {
    const history = useHistory();
    const[{ cart }, dispatch] = useStateValue();
    const addToCart = () => {
        auth.onAuthStateChanged((User) => {
            if(User){
                dispatch({
                    type: 'ADD_TO_CART',
                    item: {
                        id: id,
                        title: title,
                        price: price,
                        rating: rating,
                        image: image
                    },
                });
            }
            else{
                history.push("/login");
            }
        });
        
    };
    
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_) => (
                            <p>⭐️</p>
                        ))
                    }
                </div>    
            </div>
            
            <img src={image} alt="" />
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product
