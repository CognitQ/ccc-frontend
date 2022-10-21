import React, { useState } from "react";
import { Home } from "./Home";

export const Sidebar = () => {
  const [deployment, setDeployment] = useState(true);

  const clearAll = () => {
    alert("Are you sure you want to clear all");
    window.location.reload(false);
    alert("Data clear");
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a
                href="/"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span className="fs-5 d-none d-sm-inline">Dashbord</span>
              </a>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="nav-item">
                  <button
                    className="nav-link align-middle px-0"
                    onClick={() => setDeployment(true)}
                    
                  >
                    <i className="fs-4 bi-house"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Deployment</span>
                  </button>
                </li>

                <li>
                  <button
                    className="nav-link px-0 align-middle"
                    onClick={() => setDeployment(false)}
                  >
        
                    <i className="fs-4 bi-people"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Demonset</span>{" "}
                  </button>
                </li>
                

                <li>
                  <button className="nav-link px-0 align-middle" onClick={clearAll}>
                    <i className="fs-4 bi-people"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">clearAll Data</span>{" "}
                  </button>
                </li>
              </ul>
              <hr />
            </div>
          </div>
          <div className="col py-3">
            <Home show={deployment} />
          </div>
        </div>
      </div>
    </div>
  );
};
