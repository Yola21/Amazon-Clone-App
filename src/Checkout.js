import React from 'react'
import { useStateValue } from './DataLayer'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ cart }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                    alt=""
                />

                {cart?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Cart is Empty!!!</h2>
                        <p>
                            You have not added any item in your Cart. Click <em>"Add to Cart"</em> to add item in your cart. 
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2>Your Shopping Cart</h2>
                        <hr />
                        <br />
                        {cart.map((item) => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}                    
                    </div>
                )}    
            </div>
            
            { cart.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            ) }
        </div>
    )
}

export default Checkout
