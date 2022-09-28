import React from "react";
import "./style/Mainlist.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import {TiTick} from "react-icons/ti";
export default function Mainlist() {
  return (
    <>
      <div>
        <div className="box"></div>
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
          <div className="list">
            <div className="list_row_top">
              <div className="list_whitecircle"></div>
              <div className="list_row">
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
            <ListRow/>
            <ListRow/>
            <ListRow/>
            <ListRow/>
            <div className="list_row7_top">
              <div className="list_whitecircle7"><TiTick/></div>
              <div className="list_row7">
                <label>John</label>
                <label>Smith</label>
                <label>Confirmed</label>
                <label>2022-02-01</label>
                <label>larrywilson@nomail.com</label>
                <label>10</label>
                <label>Larry wilson</label>
                <AiOutlineArrowRight />
              </div>
            </div>
            <ListRow/>
            <ListRow/>
            <ListRow/>
            <ListRow/>
            <div><button className="Button">load more leads</button></div>
          </div>
        </div>
      </div>
    </>
  );

 
}
function ListRow(){
  return(<>
  <div className="list_row_top">
            <div className="list_whitecircle"></div>
            <div className="list_row">
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
  </>)
}
