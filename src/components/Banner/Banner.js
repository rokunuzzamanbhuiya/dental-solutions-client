import React from 'react';
import "./Banner.css";
import dental01 from "../../images/banner-images/dental01.png";
import dental02 from "../../images/banner-images/dental02.png";
import dental03 from "../../images/banner-images/dental03.png";

const Banner = () => {
  return (
    <div className="bg-color">
      <div className="container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators pb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row align-items-center p-5 mt-5">
                <div className="col-md-7 dentalone">
                  <h1 className="pb-2 text-white">
                    WE USE LATEST MEDICAL TECHNOLOGY
                  </h1>
                  <h2 className="text-white">Let Us Brighten Your Smile</h2>
                  <button className="btn bannerbtn text-light mt-4">
                    Who We Are
                  </button>
                </div>
                <div className="col-md-5">
                  <img src={dental01} className="d-block w-100" alt="dental" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row align-items-center p-5 mt-5">
                <div className="col-md-5">
                  <img src={dental03} className="d-block w-100" alt="dental" />
                </div>
                <div className="col-md-7 dentaltwo">
                  <h1 className="pb-2 text-white">
                    WE USE LATEST MEDICAL TECHNOLOGY
                  </h1>
                  <h2 className="text-white">Let Us Brighten Your Smile</h2>
                  <button className="btn bannerbtn text-light mt-4">
                    Who We Are
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row align-items-center p-5 mt-5">
                <div className="col-md-7 dentalthree">
                  <h1 className="pb-2 text-white">
                    WE USE LATEST MEDICAL TECHNOLOGY
                  </h1>
                  <h2 className="text-white">Let Us Brighten Your Smile</h2>
                  <button className="btn bannerbtn text-light mt-4">
                    Who We Are
                  </button>
                </div>
                <div className="col-md-5">
                  <img src={dental02} className="d-block w-100" alt="dental" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;