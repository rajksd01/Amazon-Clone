import React from "react";

import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="Home">
      <div className="home__container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="425"
            title="The Lean Startup"
            price={199}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Product
            id="4254"
            title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait Landscape, Tilt, and HDMI  VGA Ports (1KL30AA) - Black"
            price={599}
            rating={4}
            image=" https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SY679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="7825"
            title="
OnePlus 8 Pro Onyx Black,​ 5G Unlocked Android Smartphone U.S Version, 12GB RAM+256GB Storage, 120Hz Fluid Display,Quad Camera, Wireless Charge, with Alexa..."
            price={599}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51az5uPx4AL._AC_SL1040_.jpg"
          />
          <Product
            id="42855"
            title="Samsung Galaxy S9+ Factory Unlocked Smartphone 64GB - Coral Blue - US Version [SM-G965UZBAXAA]"
            price={499}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/814LT0LzEPL._AC_SL1500_.jpg"
          />
          <Product
            id="425852"
            title="Google Pixel 4a - New Unlocked Android Smartphone - 128 GB of Storage - Up to 24 Hour Battery - Just Black"
            price={1299}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Q8gm97H8L._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="785425"
            title="
            New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray"
            price={2299}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4250202"
            title="
            Samsung Galaxy A20s, A207M, 32GB, GSM, Unlocked Phone, Dual-SIM, Blue"
            price={399}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41yVqjvkLcL._AC_.jpg"
          />
          <Product
            id="42598500"
            title="
            Samsung Galaxy S10+ Plus 128GB+8GB RAM SM-G975F/DS Dual Sim 6.4 LTE Factory Unlocked Smartphone International Model No-Warranty (Prism White)"
            price={1599}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg "
          />
          <Product
            id="6501725"
            title="
ASUS ROG Phone 2 (ZS660KL) Smartphone 128GB ROM 8GB RAM Snapdragon 855 Plus 6000 mAh NFC Android 9.0 - GSM Only International Version, No Warranty (Black)"
            price={799}
            rating={4}
            image=" https://images-na.ssl-images-amazon.com/images/I/71LR0GDhfxL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4254545454545454"
            title="
            ASUS ZenBook Duo UX481 Laptop, 14” FHD NanoEdge Bezel Touch, Intel Core i7-10510U, GeForce MX250, 16GB RAM, 1TB PCIe SSD, Innovative ScreenPad Plus,...
           "
            price={1399}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/814LADIi8NL._AC_SL1500_.jpg"
          />
          <Product
            id="4250010202"
            title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver
            by Acer"
            price={899}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
