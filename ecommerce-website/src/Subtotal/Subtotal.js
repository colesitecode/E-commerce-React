import React from 'react'
import '../Subtotal/subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider/StateProvider'
import { getBasketTotal } from '../Reducer/reducer'
import { useHistory } from 'react-router-dom'


function Subtotal() {
  const history = useHistory()
  const [{ basket }, dispatch] = useStateValue()



  return (
    <div className="subtotal">
      <CurrencyFormat
      renderText={(value) => (
        <>
        <p>
          Subtotal ({basket.length} items): <strong>{value}</strong>
        </p>
        <small className="subtotal_gift">
          <input type="checkbox"/>
          This order contains a gift
        </small>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
      />

    <button type="" onClick={e => history.push('/payment')}>
      Proceed to Checkout
    </button>

    </div>
  )
}

export default Subtotal
