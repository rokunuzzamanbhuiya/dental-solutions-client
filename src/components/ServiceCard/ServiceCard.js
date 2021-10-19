import React from "react";
//import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = (props) => {
  const { name, detail, picture, id } = props.service;
  return (
    <div className="mb-5 col-lg-4 col-sm-6 ">
      <div className="card w-100 h-100 text-center rounded vehicleCard">
        <div className="d-flex justify-content-center align-items-center p-2">
          <img src={picture} className=" w-100 py-3 px-3 svcimg" alt="" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>{detail.slice(0, 90)}...</p>
        </div>
        <div className="card-footer">
          <div className="d-flex align-items-center justify-content-center ">
            <Link to={`/servicedetail/${id}`}>
              <button className="btn btn-success btnservice my-2">Service Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
