import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "./Home.css";
const Home = () => {
  return (
    <div>
      <AliceCarousel autoPlay autoPlayInterval={500}>
        <img
          src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
          className="sliderimg"
        />
        <img
          src={
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          }
          className="sliderimg"
        />
        <img
          src={
            "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
          }
          className="sliderimg"
        />
        <img
          src={"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"}
          className="sliderimg"
        />
      </AliceCarousel>
    </div>
  );
};

export default Home;
