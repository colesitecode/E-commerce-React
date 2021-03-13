import React from 'react'
import '../Home/Home.css'
import home_background from '../images/home.svg'
import Product from '../product/Product'
import Product1 from '../images/product1.jpg'
import product2 from '../images/product2.jpg'
import Product3 from '../images/product3.jpg'

function Home() {
  return (
    <div className="home">
      <div className="home_container">

        <div className="title">
          <h1>ONLINE SHOPPING</h1>
          <p>We make honest products, durable and timeless</p>
        </div>
        
        <div className="hero-img">
          <img className="home_image" src={home_background} alt=""/>
        </div>
        
      </div>

    
    <div className="product_container">
      
    
      <div className="home_row">

        <Product 
        id="1"
        title="product title 1" 
        price={80.69}
        image={Product1}
        rating={5} />

        <Product 
        id="2"
        title="product title 2" 
        price={70.69}
        image={product2}
        rating={4} />

        <Product 
        id="3"
        title="product title 3" 
        price={60.69}
        image={Product3}
        rating={3} />
        
      </div>
      
      <div className="home_row">
      <Product 
        id="4"
        title="product title 3" 
        price={60.69}
        image={Product3}
        rating={3} />

      <Product 
        id="5"
        title="product title 3" 
        price={60.69}
        image={Product3}
        rating={3} />

      </div>

      <div className="home_row">

      <Product 
        id="5"
        title="product title 3" 
        price={60.69}
        image={Product3}
        rating={3} />

      </div>

    </div>

    </div>
  )
}

export default Home
