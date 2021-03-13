import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js'
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import CurrencyFormat from 'react-currency-format'
import { Link, useHistory } from 'react-router-dom'
import CheckoutProduct from '../Checkout/CheckoutProduct'
import '../Payment/payment.css'
import { getBasketTotal } from '../Reducer/reducer'
import { useStateValue } from '../StateProvider/StateProvider'

function Payment() {
  const [{basket, user}, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
        const response = await axios({
            method: 'post',
            // Stripe expects the total in a currencies subunits
            url: `/payments/create?total=${getBasketTotal(basket) * 100}`
        });
        setClientSecret(response.data.clientSecret)
    }

    getClientSecret();
}, [basket])

console.log('THE SECRET IS >>>', clientSecret)

  const handleSubmit = async (event) => {
    //do all the stripe stuff...
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      //paymentIntent = payment confirmation

      setSucceeded(true);
      setError(null)
      setProcessing(false)

      history.replace('/orders');
    })

    // const payload = await stripe 
  }

  const handleChange = event => {
    //Listen for changes in the cardElement
    //and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message: "");
  }


  return (
    <div className="payment">
      <div className="payment_container">

        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        {/*payment section - delivery address*/}
        <div className="payment_section">
          <div className="payment_title">
          <h3>Delivery Address</h3>
          </div>  
        </div>

      <div className="payment_address">
        <p>{user?.email}</p>
        <p>123 React app project</p>
        <p>Los Angeles, CA</p>
      </div>

        {/*payment section - Review Items*/}
        <div className="payment_section">
        <div className="payment_title">
          <h3>Review items and delivery</h3>
        </div>

        <div className="payment_items">
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

        {/*payment section - Payment method*/}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>

        <div className="payment_details">
          {/*Strip magic payment*/}

          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />

            <div className="payment_priceContainer">
              <CurrencyFormat 
                renderText={(value) => (                  
                    <h3>Total Order: {value}</h3>             
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
              </button>
            </div>
              
              {/*Errors*/}
              {error && <div>{error}</div>}
          </form>

        </div>
        </div>

      </div>
    </div>
  )
}

export default Payment
