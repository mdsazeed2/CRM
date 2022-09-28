import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillStar,
  AiFillCompass,
} from "react-icons/ai";

import { MdOutlineArrowForwardIos } from "react-icons/md";

import { BsThreeDots, BsMessenger, BsThreeDotsVertical } from "react-icons/bs";
import "./style/Userlist.css";
export default function AdminDashboard() {
  return (
    <>
      <div className="topbar">
        <div className="topbar_col1">
          <div className="topbar_col1_circle">
            <AiOutlineMenu className="topbar_col1_circle_icon" />
          </div>
          <label>Company</label>
        </div>
        <div className="topbar_col2">
          <ul>
            <li>Dashboard</li>
            <li>Leads</li>
            <li>Campaign</li>
            <li>Prospects</li>
            <li>Account</li>
            <li>
              <BsThreeDots />
            </li>
          </ul>
        </div>
        <div className="topbar_col3">
          <AiOutlineSearch />
          <input type={"text"} placeholder="Search something..." />
          <MdOutlineArrowForwardIos />
        </div>
        <div className="topbar_col4">
          <label>Clayton</label>
        </div>
      </div>

      <div className="contentpart">
        <div className="contentpart_leftbar">
          <div className="contentpart_leftbar_circle">
            <AiFillCompass />
          </div>
          <div className="contentpart_leftbar_circle">
            <AiFillStar />
          </div>
          <div className="contentpart_leftbar_circle">
            <BsMessenger />
          </div>
        </div>
        <div className="bargraph">
          <div>
            <label className="text"> Campign wise Prospect Count</label>
            <BsThreeDotsVertical className="icon" /> {"    "}
          </div>
          <ul>
            <li className="blue">
              <label className="title">8</label>
              <div></div> <label>Cam 1</label>
            </li>
            <li className="green">
              <label className="title">7</label>
              <div></div> <label>Cam2</label>
            </li>
            <li className="red">
              <label className="title">10</label>
              <div></div> <label>Cam3</label>
            </li>
          </ul>
          <div className="summary">
            <div className="summary_row1">
              <label>Manager wise Prospect Count</label>
              <BsThreeDotsVertical className="icon" />{" "}
            </div>
            <div className="summary_row">
              <div className="summary_single">
                <label><h4>Manager1</h4></label>
                <label className="summary_value">18</label>
              </div>
              <div className="summary_single">
                <label><h4>Manager1</h4></label>
                <label className="summary_value">12</label>
              </div>
              <div className="summary_single">
                <label><h4>Manager1</h4></label>
                <label className="summary_value">32</label>
              </div>
            </div>{" "}
            <div className="summary_row">
              <div className="summary_single">
                <label><h4>Manager1</h4></label>
                <label className="summary_value">32</label>
              </div>
              <div className="summary_single">
                <label><h4>Manager1</h4></label>
                <label className="summary_value">4</label>
              </div>
              <div className="summary_single">
                <label><h4>Manager1</h4></label>
                <label className="summary_value">11</label>
              </div>
            </div>
          </div>
        </div>
            <div className="summarycourt">
                <div className="summarycourt1">
                    <label><h4>Prospect Growth</h4></label>
                </div>
                <div>
                    <label className="summarycount_value"># 500</label>
                </div>
            </div>
        <div className="contentpart_contentarea"></div>
        <div className="contentpart_list">
          <div className="contentpart_list_title">
            <label>User List</label>
            <BsThreeDotsVertical />
          </div>
          <SingleRow />
          <SingleRow />
          <SingleRow />
          <SingleRow />
          <SingleRow />
        </div>
      </div>
    </>
  );
}

function SingleRow() {
  return (
    <div className="contentpart_list_singlerow">
      <div className="contentpart_list_singlerow_circle">
        <AiFillStar />
      </div>
      <label>Larry Claton</label>
      <button>Pending</button>
    </div>
  );
}
