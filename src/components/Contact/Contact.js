import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <h1 className="contact-title">Contact With Us</h1>
                <p className="contact-paragraph">This one is a typical sweet Thanksgiving pie, although it took a bit of getting used to, at first. Top it up with develoment and enjoy.</p>
                <div className=" row">
                    <div className="col-md-5">
                        <div className="home">
                            <i className="fas fa-map-marker-alt"></i>
                            <h5 className="mt-2">Home</h5>
                            <p>558, Shaheenbag, Tejgaon, Dhaka</p>
                        </div>
                        <div className="email">
                            <i className="fas fa-envelope"></i>
                            <h5 className=" mt-2">Email</h5>
                            <p>nextcareertech@gmail.com</p>
                        </div>
                        <div className="phone">
                            <i className="fas fa-mobile-alt"></i>
                            <h5 className=" mt-2">Phone</h5>
                            <p>+880 1616 888 888</p>
                        </div>
                    </div>       
                    <div className="col-md-7">
                        <form action="" method="">                   
                                <div className="name">
                                    <div className="form-group">
                                        <input name="name" type="text" className="form-control" id="name" placeholder="Name"/>
                                    </div>
                                </div>                 
                                <div className="email">
                                    <div className="form-group">
                                        <input name="email" type="email" className="form-control" id="email" placeholder="Email"/>
                                    </div>
                                </div>             
                            <div className="form-group">
                                <input name="sub" type="text" className="form-control" id="sub" placeholder="Subject"/>
                            </div>
                            <div className="form-group">
                                <textarea name="msg" className="form-control" id="mag" rows="4" placeholder="Message"></textarea>
                            </div>
                            <div className="text-right">
                                <NavLink className="btn btn-danger bannerbtn" to="/">Send</NavLink>
                            </div>
                        </form>
                    </div>   
                </div>  
            </div>
        </div>
    );
};

export default Contact;