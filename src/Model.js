import React, { useState } from "react";
import "./style/Model.css";
export default function Page() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <Model show={show} handleClick={handleClick} />
      <div className="page">
        Hi There!
        <button onClick={handleClick}>Click Here!</button>
      </div>
    </>
  );
}
 
function Model({ show, handleClick }) {
  return show ? (
    <div className="modalcontainer">
      <div className="modal">
        <h1>CRM</h1>
        <h2>Frontend</h2>
        <button onClick={handleClick}>Close</button>
      </div>
    </div>
  ) : (
    <></>
  );
}
