import React from 'react'
import '../Checkout/checkout.css'
import ads from '../images/banner.jpg'
import Subtotal from '../Subtotal/Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from '../StateProvider/StateProvider'

function Checkout() {

  const [{basket, user}, dispatch] = useStateValue()
  return (
    <div className="checkout">
      
      <div className="checkout_left">
        <img className="checkout_ad" src={ads} alt=""/>

      <div>
        <h3>Hello, {user?.email}</h3>
        <h2 className="Checkout_title">Your shopping Basket</h2>

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

      </div>

      <div className="checkout_right">
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout
