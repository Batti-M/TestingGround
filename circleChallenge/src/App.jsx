import React, { createElement } from "react";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [coordinates, setCoordinates] = useState([]);

  const showPosition = (e) => {
    const { clientX, clientY } = e;
    console.log(e.target.offsetLeft);
    setCoordinates((prev) => [
      ...prev,
      {
        X: clientX - e.target.offsetLeft - 15,
        Y: clientY - e.target.offsetTop - 15,
      },
    ]);
  };

  const deleteCircle = () => {
    const newCircleArray = [...coordinates];
    newCircleArray.pop();
    setCoordinates(newCircleArray);
  };

  const redoCircle = () => {
    console.log("works");
  };

  return (
    <>
      <div onClick={(e) => showPosition(e)} className="App">
        <p>hi </p>
        {coordinates.map((coord, index) => (
          <div
            key={index}
            className="circle"
            style={{ top: coord.Y, left: coord.X }}
          ></div>
        ))}
      </div>
      <button onClick={deleteCircle}>UNDO</button>
      <button onClick={redoCircle}>REDO</button>
    </>
  );
}

// little training with events for the challenge

const FileNamer = () => {
  const [name, setName] = useState("");
  const [alert, setAlert] = useState(false);
  console.log(alert);
  useEffect(() => {
    const handleWindowClick = () => setAlert(false);
    if (alert) {
      window.addEventListener("click", handleWindowClick);
    } else {
      window.removeEventListener("click", handleWindowClick);
    }
    return () => window.removeEventListener("click", handleWindowClick);
  }, [alert, setAlert]);

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const validate = (event) => {
    if (/\*/.test(name)) {
      event.preventDefault();
      event.stopPropagation();
      setAlert(true);
      return;
    }
    setAlert(false);
  };
  return (
    <div className="wrapper">
      <div className="preview">
        <h2>Preview:{name}.js</h2>
      </div>
      <form>
        <label>
          <p>Name:</p>
          <input name="name" value={name} onChange={handleChange} />
        </label>
        <div>
          <button onClick={validate}>Save</button>
        </div>
      </form>
      <div className="information-wrapper">
        <button
          className="information"
          onClick={(e) => {
            e.stopPropagation();
            setAlert(true);
          }}
          type="button"
        >
          more information
        </button>
      </div>
      {alert && (
        <div className="popup">
          <span role="img" aria-label="allowed">
            ✅
          </span>{" "}
          Alphanumeric Characters
          <br />
          <span role="img" aria-label="not allowed">
            ⛔️
          </span>{" "}
          *
        </div>
      )}
    </div>
  );
};

export { App, FileNamer };
