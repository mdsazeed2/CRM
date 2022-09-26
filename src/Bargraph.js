import { BsThreeDotsVertical } from "react-icons/bs";
import "./style/Bargraph.css";
export default function Bargraph() {
  return (
    <>
      <div className="bargraph">
        <div>
          <label className="text"> Campign wise Prospect Count</label>
          <BsThreeDotsVertical className="icon" />  {" "}
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
      </div>
    </>
  );
}
