import React from "react";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="32435454"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="21323443"
            title="Kenwood kMix Stand Mixer for Baking, Styish Kitchen Mixer with K-beater,Dough Hook and Whisk,5 Litre Glass Bowl"
            price={229.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="21223443"
            title="FITBit Band Pro x13456 - Gold Edition"
            price={113.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={2}
          />

          <Product
            id="21923443"
            title="Amazon Echo (3rd Generation) | Smart speaker with Alexa"
            price={98.99}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24&fbclid=IwAR3gxDXg2EF-KVeR99SpbvOzVAstbkotMFkZsHU5YvnT1U-dDQVx5F0gJlU"
            rating={3}
          />

          <Product
            id="212233343"
            title="New Apple iPad Pro(12.9-inch,Wi-Fi,128gb)-Silver"
            price={598.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="21223863"
            title="Samsung 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={999.99}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
