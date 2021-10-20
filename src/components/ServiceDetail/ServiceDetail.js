import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router';
import './ServiceDetail.css';


  const ServiceDetail = () => {
  const { detailId } = useParams();

  const [data, setData] = useState([]);

    useEffect(() => {
      fetch("/fakeData.json")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

    const showDetail = data.filter((fd) => fd.key === detailId);
    //console.log(showDetail[0]?.name);

    return (
      <div className="sdetail">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="justify-content-center align-items-center sdetail-title-head">
                Our Special Service
              </h2>
              <div className="d-flex justify-content-center align-items-center p-2">
                <img src={showDetail[0]?.picture} className="p-2 w-50" alt="" />
              </div>
              <h3 className="justify-content-center align-items-center sdetail-title">
                {showDetail[0]?.name}
              </h3>
              <p className="text-center detail-para">{showDetail[0]?.detail}</p>
              <div className="text-center">
                <Link className="btn btn-danger mt-3 sdetail-btn" to="/">
                  Go Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ServiceDetail;

