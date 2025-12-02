import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

class App extends Component{
  render(){
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return(
      <div className="mainContainer">
        {/* <h2>Auto Play</h2> */}
        <Slider {...settings}>
          <div className="container">
            <img src="https://digitaleggheads.com/wp-content/uploads/2022/09/Toyota.svg" className="md:w-[12rem] sm:w-[3rem]" />
          </div>
          <div className="container">
            <img src="https://digitaleggheads.com/wp-content/uploads/2022/09/Faysal-Funds.svg" className="md:w-[12rem] sm:w-[3rem]" />
          </div>
          <div className="container">
            <img src="https://digitaleggheads.com/wp-content/uploads/2022/09/Master-Class.svg" className="md:w-[12rem] sm:w-[3rem]" />
          </div>
          <div className="container">
            <img src="https://digitaleggheads.com/wp-content/uploads/2022/09/Toyota.svg" className="md:w-[12rem] sm:w-[3rem]" />
          </div>
          <div className="container">
            <img src="https://digitaleggheads.com/wp-content/uploads/2022/09/GPC.svg" className="md:w-[12rem] sm:w-[3rem]" />
          </div>
          <div className="container">
            <img src="https://digitaleggheads.com/wp-content/uploads/2022/09/Husaini.svg" className="md:w-[12rem] sm:w-[3rem]" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default App;