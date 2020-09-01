import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
import Star from '@material-ui/icons/Star'

function CheckoutProduct({id,title,image,rating,price}) {
 
    const [,dispatch] = useStateValue();

    const removefromBasket = () => {
        dispatch({
            type :"REMOVE_FROM_BASKET",
            id:id,
        })
    }

    return (
        <div className='checkout_product'>
            <img className='checkoutproduct_image' src={image} alt='' />
            <div className='checkoutproduct_info'>
            <p className='checkoutproduct_title'>{title}</p>
            <p className='checkoutprodut_price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutproduct_rating'>
                { Array(rating)
                .fill()
                .map((_) => (
                    <span><Star className='checkoutproduct_star'/></span>
                ))}
            </div>
            <button onClick={removefromBasket} >Remove From Basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
