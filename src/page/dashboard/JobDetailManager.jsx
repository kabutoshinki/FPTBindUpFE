import React from "react";
import "./single.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import logo from "../../assets/logo.png";
import { Navbar } from "../../components/navbar/Navbar";
import DatatableUserApply from "../../components/datatable/DatatableUserApply";

const JobDetailManager = () => {
  const param = useParams();
  const { data } = useFetch(
    `http://fhunt-env.eba-pr2amuxm.ap-southeast-1.elasticbeanstalk.com/api/v1/jobs/${param.jobId}/detail`
  );
  console.log(data);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top" style={{ marginTop: "80px" }}>
          <div className="left">
            <h1 className="title">Job Information</h1>
            <div className="item">
              <img src={data.data?.logo || logo} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{data.data?.name}</h1>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="detailItem">
              <h3 className="itemKey">Description:</h3>
              {data?.data?.description}
              {/* <div dangerouslySetInnerHTML={{ __html: data.data?.description }} /> */}
            </div>
          </div>
        </div>

        <div className="bottom">
          <DatatableUserApply id={param.jobId} />
        </div>
      </div>
    </div>
  );
};

export default JobDetailManager;
