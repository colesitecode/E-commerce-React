import React from 'react'
import '../Header/Header.css'
import { Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../StateProvider/StateProvider';
import { auth } from '../Firebase_DB/firebase';

function Header() {

  const [{basket, user}, dispatch] = useStateValue()
  
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className='header'>

      <Link to="/" style={{ textDecoration: 'none' }}>
      {/* <img className="header_logo" 
      src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" /> */}
      <p className="header_logo">Cole-Shop</p>
      </Link>

      <div className="header_search">
        <input className="hearder_searchInput" type="text" />
        <SearchIcon className="header_searchIcon"/>
      </div>

    <div className="header_nav">
    <Link to={!user && '/login'} style={{ textDecoration: 'none' }}>
      <div onClick={handleAuthentication} className="header_option">
        <span className="Header_optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
        <span className="Header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
      </div>
    </Link>
      <div className="header_option">
        <span className="Header_optionLineOne">Return</span>
        <span className="Header_optionLineTwo">& Orders</span>
      </div>

      <div className="header_option">
        <span className="Header_optionLineOne">Your</span>
        <span className="Header_optionLineTwo">Prime</span>
      </div>

      <div className="header_option">
        <span className="Header_optionLineOne">Order</span>
        <span className="Header_optionLineTwo">Returns</span>
      </div>

    

    <Link to="/checkout" style={{ textDecoration: 'none' }}>
    <div className="header_optionBasket">
      <ShoppingBasketIcon/>
      <span className="header_optionLineTwo header_backetCount">
        {basket?.length}
      </span>
    </div>
    </Link>

    </div>
    </div>
  )
}

export default Header
