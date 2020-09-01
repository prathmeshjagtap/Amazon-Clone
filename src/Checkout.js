import React from 'react'
import './Checkout.css'
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'


function Checkout() {

    const [{basket}] = useStateValue()

    return (
        <div className='checkout'>
            <div className='checkout_left'>
            <img 
            className ='checkout_ad'
            src='https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/hsbcfederal/KotakHSBC_EMI_Fest_LP_1500x250.jpg'
            alt='checkout_advertisment'
            />
            {basket?.length === 0 ? (
                <div>
                    <h2 className='checkout_title'>Your Shopping Cart is empty.</h2>
                    <img 
                    className="checkout__emptyImg"
                    src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
                    alt=""
                    />
                </div>
            ):
            (
                <div>
                    <h2 className='checkout_title'>You have items in cart</h2>
                    {basket.map(item => (
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
            {basket.length > 0 && (
                <div className='checkout_right'>
                    < Subtotal/>
                </div>
            )}
        </div>
    )
}

export default Checkout
