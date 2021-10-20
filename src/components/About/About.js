import React from 'react';
import "./About.css";
import aboutone from "../../images/about/team-doctor01.webp";
import abouttwo from "../../images/about/team-doctor02.webp";
import aboutthree from "../../images/about/team-doctor03.webp";
import aboutfour from "../../images/about/team-doctor04.webp";
import aboutfive from "../../images/about/team-doctor05.webp";
import aboutsix from "../../images/about/team-doctor06.webp";


const About = () => {
    return (
      <div class="about">
        <div className="container my-5">
          <h5 className="text-center fw-bolder">Who We Are</h5>
          <h1 className="text-center fw-bolder">
            About <span style={{ color: "#1eb0ba" }}>Us</span>
          </h1>
          <p className="text-center mb-5">
            To contribute to positive change and achieve our <br />{" "}
            sustainability goals with many extraordinary
          </p>
          <div className="row">
            <div className="col-md-4">
              <div className="row m-2 text-center">
                <div className="border bg-light p-5 mb-4">
                  <div className="user-image">
                    <img className="p=5 mb-3" src={aboutone} alt="" />
                  </div>
                  <h5>Mohammad Imaran</h5>
                  <hr className="m-2" />
                  <h5>Cosmetic Dentistry</h5>
                  <hr className="m-2" />
                  <h5>91715223311</h5>
                  <hr className="m-2" />
                  <div>
                    <i className="fab fa-facebook-square p-2"></i>
                    <i className="fab fa-twitter-square p-2"></i>
                    <i className="fab fa-linkedin p-2"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row m-2 text-center">
                <div className="border bg-light p-5 mb-4">
                  <div className="user-image">
                    <img className="p=5 mb-3" src={abouttwo} alt="" />
                  </div>
                  <h5>Jonathan Gomez</h5>
                  <hr className="m-2" />
                  <h5>Pediatric Dentistry</h5>
                  <hr className="m-2" />
                  <h5>91715223322</h5>
                  <hr className="m-2" />
                  <div>
                    <i className="fab fa-facebook-square p-2"></i>
                    <i className="fab fa-twitter-square p-2"></i>
                    <i className="fab fa-linkedin p-2"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row m-2 text-center">
                <div className="border bg-light p-5 mb-4">
                  <div className="user-image">
                    <img className="p=5 mb-3" src={aboutthree} alt="" />
                  </div>
                  <h5>Mahmuda Aktar</h5>
                  <hr className="m-2" />
                  <h5>Dental Implants</h5>
                  <hr className="m-2" />
                  <h5>91715223355</h5>
                  <hr className="m-2" />
                  <div>
                    <i className="fab fa-facebook-square p-2"></i>
                    <i className="fab fa-twitter-square p-2"></i>
                    <i className="fab fa-linkedin p-2"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row m-2 text-center">
                <div className="border bg-light p-5 mb-4">
                  <div className="user-image">
                    <img className="p=5 mb-3" src={aboutfour} alt="" />
                  </div>
                  <h5>Hasan Faruque</h5>
                  <hr className="m-2" />
                  <h5>Dentistry Cosmetic</h5>
                  <hr className="m-2" />
                  <h5>91715223377</h5>
                  <hr className="m-2" />
                  <div>
                    <i className="fab fa-facebook-square p-2"></i>
                    <i className="fab fa-twitter-square p-2"></i>
                    <i className="fab fa-linkedin p-2"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row m-2 text-center">
                <div className="border bg-light p-5 mb-4">
                  <div className="user-image">
                    <img className="p=5 mb-3" src={aboutfive} alt="" />
                  </div>
                  <h5>Nargis Aktar</h5>
                  <hr className="m-2" />
                  <h5>Dentistry Pediatric</h5>
                  <hr className="m-2" />
                  <h5>91715223377</h5>
                  <hr className="m-2" />
                  <div>
                    <i className="fab fa-facebook-square p-2"></i>
                    <i className="fab fa-twitter-square p-2"></i>
                    <i className="fab fa-linkedin p-2"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row m-2 text-center">
                <div className="border bg-light p-5 mb-4">
                  <div className="user-image">
                    <img className="p=5 mb-3" src={aboutsix} alt="" />
                  </div>
                  <h5>Ruth Miller</h5>
                  <hr className="m-2" />
                  <h5>Implants Dental</h5>
                  <hr className="m-2" />
                  <h5>01715223377</h5>
                  <hr className="m-2" />
                  <div>
                    <i className="fab fa-facebook-square p-2"></i>
                    <i className="fab fa-twitter-square p-2"></i>
                    <i className="fab fa-linkedin p-2"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;