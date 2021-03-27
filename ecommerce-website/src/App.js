import React, {useEffect} from 'react'
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Checkout from './Checkout/Checkout';
import Login from './Login/Login'
import { auth } from './Firebase_DB/firebase';
import { useStateValue } from './StateProvider/StateProvider';
import Payment from './Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Order/Orders';

const promise = loadStripe('pk_test_51IZSBnDexwACSOCgysFUc2OxmwAHJ2h2fYrkyH66ulWVoDM2XYE0uPnA6LUccsMhE0PTfrszBX8utgltjBuJvJ3s00Alma9b0K')


function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
  
    auth.onAuthStateChanged(authUser => {
      // console.log('this user is >>', authUser);
  
      if(authUser){
        //the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
  
      } else{
        //the user looged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])


  return (
    <Router>
      <div className="app">
      
    <Switch>

    <Route path="/orders">
      <Header/>
      <Orders />
    </Route>

    <Route path="/login">
      <Login />
    </Route>
    
    <Route path="/checkout">
      <Header/>
      <Checkout/>
    </Route>

    <Route path="/payment">
      <Header/>
      <Elements stripe={promise}>
        <Payment/>
      </Elements>
    </Route>

    <Route path="/">
      <Header/>
      <Home/>
    </Route>

    </Switch>
       
    </div>
    </Router>
  );
}

export default App;
