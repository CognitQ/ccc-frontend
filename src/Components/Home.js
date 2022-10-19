import React, { useState } from "react";
import "./Home.css";
import { v4 as uuidv4 } from "uuid";

export const Home = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("form submited");
    console.log("DepoymentInputFields", inputFields);
  };

  // Start Code for deployment
  const [inputFields, setInputFields] = useState([
    {
      id: uuidv4(),
      deployment: "Deployment",
      minPods: "1",
      maxPods: "",
      minRam: "1",
      minRamUnit: "MiB",
      maxRam: "",
      maxRamUnit: "MiB",
      minVcpu: "1",
      maxVcpu: "",
      storageUnit: "Gib",
      storage: "",
    },
  ]);

  // const checkValidations = () => {};

  const handleReset = (id) => {
    const values = [...inputFields];
    const containerId = values.findIndex((value) => value.id === id);
    values[containerId] = [
      {
        id: uuidv4(),
        deployment: "Deployment",
        minPods: "1",
        maxPods: "",
        minRam: "1",
        minRamUnit: "MiB",
        maxRam: "",
        maxRamUnit: "MiB",
        minVcpu: "1",
        maxVcpu: "",
        storageUnit: "Gib",
        storage: "",
      },
    ];
    setInputFields(values);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      if (id.maxPods < id.minPods) {
        alert("max pods cant be less than min pods");
      }

      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      {
        id: uuidv4(),
        deployment: "Deployment",
        minPods: "1",
        maxPods: "",
        minRam: "1",
        minRamUnit: "MiB",
        maxRam: "",
        maxRamUnit: "MiB",
        minVcpu: "1",
        maxVcpu: "",
        storageUnit: "Gib",
        storage: "",
      },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  // End of the deployment functions code

  return (
    <div>
      <div>
        {props.show ? (
          //   code for deployment
          <div>
            <div className="nav">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleAddFields}
              >
                DEPLOYMENTS +
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              {/* deployment container starts here */}
              <div>
                {" "}
                {inputFields.map((inputField) => (
                  <div key={inputField.id} className="incontainer ">
                    {/* <form className="row g-3"> */}
                    <div className="detailform">
                      <input
                        type="text"
                        className="form-control-plaintext"
                        placeholder="Deployment 1"
                        name="deployment"
                        value={inputField.deployment}
                        onChange={(event) =>
                          handleChangeInput(inputField.id, event)
                        }
                        required
                      />
                    </div>

                    <div className="closebtn">
                      <button
                        type="button"
                        className="btn btn-outline-primar"
                        onClick={() => handleRemoveFields(inputField.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi-trash bi"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path
                            fillRule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="lane">
                      <div className="maininputs">
                        <span className="star">*</span>{" "}
                        <label> Min Pods </label>
                        <input
                          type="number"
                          placeholder="1"
                          name="minPods"
                          value={inputField.minPods}
                          onChange={(event) =>
                            handleChangeInput(inputField.id, event)
                          }
                          min="1"
                          required
                        />
                      </div>
                      <div className="maininputstwo">
                        <label> Max Pods </label>
                        <input
                          type="number"
                          name="maxPods"
                          value={inputField.maxPods}
                          onChange={(event) =>
                            handleChangeInput(inputField.id, event)
                          }
                          min="2"
                        />
                      </div>
                    </div>

                    <div className="ram">
                      <div className="raminput">
                        <span className="star">*</span> <label> Min Ram </label>
                        <input
                          type="number"
                          placeholder="1"
                          min="1"
                          name="minRam"
                          value={inputField.minRam}
                          onChange={(event) =>
                            handleChangeInput(inputField.id, event)
                          }
                          required
                        />
                      </div>

                      <div className="unit">
                        <select
                          name="minRamUnit"
                          id="unit"
                          onChange={(event) =>
                            handleChangeInput(inputField.id, event)
                          }
                        >
                          <option value="MiB">MiB</option>
                          <option value="GiB">GiB</option>
                        </select>
                      </div>

                      <div className="raminputtwo">
                        <label> Max Ram </label>
                        <input
                          type="number"
                          min="2"
                          name="maxRam"
                          value={inputField.maxRam}
                          onChange={(event) =>
                            handleChangeInput(inputField.id, event)
                          }
                        />
                      </div>
                      <div className="unittwo">
                        <select
                          name="maxRamUnit"
                          id="unit"
                          onChange={(event) =>
                            handleChangeInput(inputField.id, event)
                          }
                        >
                          <option value="MiB">MiB</option>
                          <option value="GiB">GiB</option>
                        </select>
                      </div>
                    </div>

                    <div className="lane vcpu">
                      <div className="maininputs">
                        <span className="star">*</span>{" "}
                        <label> Min vCPU </label>
                        <input
                          type="number"
                          placeholder="1"
                          name="minVcpu"
                          value={inputField.minVcpu}
                          onChange={(event) =>
                            handleChangeInput(inputField.id, event)
                          }
                          min="1"
                          required
                        />
                      </div>
                      <div className="maininputstwo">
                        <label> Max vCPU </label>
                        <input
                          type="number"
                          name="maxVcpu"
                          value={inputField.maxVcpu}
                          onChange={(event) =>
                            handleChangeInput(inputField.id, event)
                          }
                          min="2"
                        />
                      </div>
                    </div>

                    <div className="ram">
                      <div className="raminput">
                        <label> Storage </label>
                        <input
                          type="number"
                          placeholder="1"
                          name="storage"
                          value={inputField.storage}
                          onChange={(event) =>
                            handleChangeInput(inputField.id, event)
                          }
                          min="1"
                        />
                      </div>

                      <div className="unit">
                        <select
                          name="storageUnit"
                          id="unit"
                          onChange={(event) =>
                            handleChangeInput(inputField.id, event)
                          }
                        >
                          <option value="MiB">MiB</option>
                          <option value="GiB">GiB</option>
                          <option value="GiB">TB</option>
                        </select>
                      </div>

                      <div className="raminputtwo">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => handleReset(inputField.id)}
                        >
                          {" "}
                          Reset
                        </button>
                      </div>
                      <div className="unittwo">
                        <button type="button" className="btn btn-primary done">
                          {" "}
                          Done
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* container ends */}
              {/* submit button start */}
              <div className="submit">
                <button type="submit" className="btn btn-secondary">
                  submit
                </button>
              </div>
            </form>
            {/* submit button ends */}
          </div>
        ) : (
          //   code for demonset
          <div>demonset</div>
        )}
      </div>
    </div>
  );
};
