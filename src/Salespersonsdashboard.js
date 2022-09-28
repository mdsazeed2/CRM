import React, { useState } from "react";
import "./style/Salesdashboard.css";
import { AiOutlineDown } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
export default function Salesdashboard() {
  const [show, setShow] = useState(false);

  function HandleClick() {
    setShow(!show);
  }
  return (
    <>
      <div className="salesdashboard">
        <div className="salesdashboard_single">
          <div className="salesdashboard_title">
            <AiOutlineDown />
            <label>TODO</label>
          </div>
          <div className="salesdashboard_single_item">
            <div className="salesdashboard_single_item_title">
              <AiOutlineDown onClick={HandleClick} />
              <label>Task name</label>
              <BsThreeDots />
            </div>
            {show ? (
              <div className="salesdashboard_single_item_details">
                <div>
                  <label>Campaign</label>
                </div>
                <div>
                  <label>Task</label>
                </div>
                <div>
                  <label>Lead</label>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="salesdashboard_single_add">
            <label>+</label>
          </div>
        </div>
        <div className="salesdashboard_single">
          {""}
          <div className="salesdashboard_title">
            <AiOutlineDown />
            <label>TODO</label>
          </div>
          <div className="salesdashboard_single_item">
            <div className="salesdashboard_single_item_title">
              <AiOutlineDown onClick={HandleClick} />
              <label>Task name</label>
              <BsThreeDots />
            </div>
            {show ? (
              <div className="salesdashboard_single_item_details">
                <div>
                  <label>Campaign</label>
                </div>
                <div>
                  <label>Task</label>
                </div>
                <div>
                  <label>Lead</label>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="salesdashboard_single_add">
            <label>+</label>
          </div>
        </div>
        <div className="salesdashboard_single">
          {""}
          <div className="salesdashboard_title">
            <AiOutlineDown />
            <label>TODO</label>
          </div>
          <div className="salesdashboard_single_item">
            <div className="salesdashboard_single_item_title">
              <AiOutlineDown onClick={HandleClick} />
              <label>Task name</label>
              <BsThreeDots />
            </div>
            {show ? (
              <div className="salesdashboard_single_item_details">
                <div>
                  <label>Campaign</label>
                </div>
                <div>
                  <label>Task</label>
                </div>
                <div>
                  <label>Lead</label>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="salesdashboard_single_add">
            <label>+</label>
          </div>
        </div>
      </div>
    </>
  );
}
