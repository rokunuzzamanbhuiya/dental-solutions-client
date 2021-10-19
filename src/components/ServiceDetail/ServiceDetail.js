import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import './ServiceDetail.css';


const ServiceDetail = () => {
  const {showId} = useParams();
  const [showDetail, setShowDetail] = useState([]);
  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => {
                const foundDetail = data.find(detail => detail.key === showId)
                setShowDetail(foundDetail);
                console.log(foundDetail);
            })
    }, [showId]);
  
 return (
   <div>
     <div className="container-fluid">
       <div className="row">
         <div className="col-md-12">
           <h1>Single Servic</h1>
           <div className="d-flex justify-content-center align-items-center p-2">
             <img src={showDetail.picture} className="p-2 w-50" alt="" />
           </div>
           <h3>{showDetail.name}</h3>
           <p className="detail-para">{showDetail.detail}</p>
           <NavLink className="notfound" to="/">
             Go To Home Page
           </NavLink>
         </div>
       </div>
     </div>
   </div>
 );
};

export default ServiceDetail;


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import './Details.css';


// const Details = () => {
//     //using useEffect & State
//     const { departmentId } = useParams();

//     // const [departmentDetails, setDepartmentDetails] = useState([]);
//     const [singleDepartment, setSingleDepartment] = useState({});

//     useEffect(() => {
//         fetch('/departments.json')
//             .then(res => res.json())
//             .then(data => {
//                 const foundDepartment = data.find(department => department.id == departmentId)
//                 setSingleDepartment(foundDepartment);
//                 console.log(foundDepartment);
//             })
//     }, [departmentId]);


//     return (
//         // Details Section
//         <div>
//             <div>
//                 <div class="card mx-auto mb-5 mt-5">
//                     <img src={singleDepartment.img} class="details-image" alt="..." />
//                     <div class="card-body">
//                         <h5 class="card-title text-info">{singleDepartment.name}</h5>
//                         <p class="card-text">{singleDepartment.description}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Details;