import React from "react";
import "./style/Test.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import {AiOutlineCheckCircle} from "react-icons/ai"
export default function Mainlist() {
  return (
    <>
      <div>
        <div className="header">
          <div className="row1">
            <ul>
              <li>FirstName</li>
              <li>LastName</li>
              <li>Status</li>
              <li>Created On</li>
              <li>Email</li>
              <li>Responses</li>
              <li>Owner</li>
            </ul>
          </div>
        </div>
        <div className="Innerbox">
          <div className="list_row">
            <label className="list_whitecircle"><AiOutlineCheckCircle/></label>
            <label>John</label>
            <label>Smith</label>
            <label>Confirmed</label>
            <label>2022-02-01</label>
            <label>larrywilson@nomail.com</label>
            <label>10</label>
            <label>Larry wilson</label>
            <div className="icon">
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
