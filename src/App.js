import React, { useState, useRef, useEffect } from "react";
import Forms from "./components/forms";
import Personaldetails from "./components/personaldetails";
import Address from "./components/address";
function App() {
  const [currentstep, setCurrentstep] = useState(0);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const [formData, setFormdata] = useState({
    userName: "",
    password: "",
    name: "",
    email: "",
    address: "",
    city: "",
  });
  const [error, setError] = useState(true);

  const selRef = useRef([]);
  const steper = ["personal", "details", "confirm"];

  useEffect(() => {
    setMargins({
      marginLeft: selRef.current[0].offsetWidth / 2,
      marginRight: selRef.current[steper.length - 1].offsetWidth / 2,
    });
  }, [selRef, steper.length]);

  const goTonextStep = () => {
    if (error) {
      if (steper.length !== 0 && currentstep <= steper.length - 1) {
        setCurrentstep((currentstep) => currentstep + 1);
        console.log(currentstep);
      }
    } else {
      alert("Enter the Valid Input");
    }
  };
  const backTonextStep = () => {
    setCurrentstep((currentstep) => currentstep - 1);
  };

  const processwodth = (100 / (steper.length - 1)) * currentstep;
  console.log(formData);
  return (
    <div className="contentwrapper">
      <div className="inner-box">
        <div className="proline">
          <div
            className="progressbar"
            style={{
              width: `calc(100% - ${
                margins.marginLeft + margins.marginRight
              }px)`,
              marginLeft: margins.marginLeft,
              marginRight: margins.marginRight,
            }}
          >
            <div
              className="progress"
              style={{
                width: `${
                  currentstep <= steper.length - 1 ? `${processwodth}%` : "100%"
                }`,
              }}
            ></div>
          </div>
          <div className="step-container">
            {steper.map((item, index) => {
              return (
                <div
                  className="step"
                  key={index}
                  ref={(el) => (selRef.current[index] = el)}
                >
                  <div
                    className={`step-count ${
                      currentstep >= index ? "currentState" : ""
                    }`}
                  >
                    <span>{index + 1}</span>
                  </div>
                  <div className="step-name">
                    <span>{item}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="cont-body">
          {currentstep <= steper.length - 1 ? (
            <>
              {steper[currentstep] === "personal" && (
                <Forms
                  formData={formData}
                  setFormdata={setFormdata}
                  setError={setError}
                />
              )}
              {steper[currentstep] === "details" && (
                <Personaldetails
                  formData={formData}
                  setFormdata={setFormdata}
                  setError={setError}
                />
              )}
              {steper[currentstep] === "confirm" && (
                <Address
                  formData={formData}
                  setFormdata={setFormdata}
                  setError={setError}
                />
              )}
            </>
          ) : (
            <div>Sucess Submit</div>
          )}
        </div>
        <div className="footer">
          <button
            onClick={() => backTonextStep()}
            disabled={currentstep === 0 ? true : false}
          >
            Back
          </button>
          <button onClick={() => goTonextStep()}>
            {currentstep === steper.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
