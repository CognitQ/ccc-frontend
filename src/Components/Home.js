import React from "react";
import "./Home.css";
export const Home = ({ show }) => {
  return (
    <div>
      <div>
        {show ? (
          //   code for deployment
          <div>
            <div className="nav">
              <button type="button" class="btn btn-secondary">
                DEPLOYMENTS +
              </button>
            </div>
            <div className="incontainer ">
              {/* <form className="row g-3"> */}
              <div className="detailform">
                <input
                  type="text"
                  readonly
                  class="form-control-plaintext"
                  placeholder="Deployment 1"
                />
              </div>

              <div className="closebtn">
                <button type="button" class="btn btn-outline-primar">
                  X
                </button>
              </div>

              <div className="lane">
                <div className="maininputs">
                  *<label> Min Pods </label>
                  <input type="number" placeholder="1" />
                </div>
                <div className="maininputstwo">
                  <label> Max Pods </label>
                  <input type="number" />
                </div>
              </div>

              <div className="ram">
                <div className="raminput">
                  *<label> Min Ram </label>
                  <input type="number" placeholder="1" />
                </div>

                <div className="unit">
                  <select name="minRamUnit" id="unit">
                    <option value="MiB">MiB</option>
                    <option value="GiB">GiB</option>
                  </select>
                </div>

                <div className="raminputtwo">
                  <label> Max Ram </label>
                  <input type="number" />
                </div>
                <div className="unittwo">
                  <select name="minRamUnit" id="unit">
                    <option value="MiB">MiB</option>
                    <option value="GiB">GiB</option>
                  </select>
                </div>
              </div>

              <div className="lane vcpu">
                <div className="maininputs">
                  *<label> Min vCPU </label>
                  <input type="number" placeholder="1" />
                </div>
                <div className="maininputstwo">
                  <label> Max vCPU </label>
                  <input type="number" />
                </div>
              </div>

              <div className="ram">
                <div className="raminput">
                  *<label> Min Ram </label>
                  <input type="number" placeholder="1" />
                </div>

                <div className="unit">
                  <select name="minRamUnit" id="unit">
                    <option value="MiB">MiB</option>
                    <option value="GiB">GiB</option>
                  </select>
                </div>

                <div className="raminputtwo">
                  <button type="button" class="btn btn-primary">
                    {" "}
                    Reset
                  </button>
                </div>
                <div className="unittwo">
                  <button type="button" class="btn btn-primary done">
                    {" "}
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          //   code for demonset
          <div>demonset</div>
        )}
      </div>
    </div>
  );
};
