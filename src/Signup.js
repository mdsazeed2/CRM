import "./style/Signup.css";
import Logo from "./logo.jpg";

export default function Signup() {
  return (
    <>
      <div className="Signup_outer">
        <div className="Signup_outer_inner">
          <div className="Signup_outer_inner_row1">
            <img src={Logo} alt="invalid_path"></img>
            <h2>Logo</h2>
          </div>
          <div className="Signup_outer_inner_row2">
            <h2> Welcome !</h2>
          </div>
          <div className="Signup_outer_inner_row3">
            <label>Please signup your account </label>
          </div>
          <div className="Signup_outer_inner_row4">
            <input type="text" placeholder="FirstName" />
            <input type="text" placeholder="LastName" />
          </div>
          <div className="Signup_outer_inner_row5">
            <input type="text" placeholder="Email" />
          </div>
          <div className="Signup_outer_inner_row6">
            <input type="password" placeholder="Password" />
          </div>
          <div className="Signup_outer_inner_row7">
            <input type="password" placeholder="Re-Password" />
          </div>
          <div className="Signup_outer_inner_row81">
            <div className="Signup_outer_inner_row8">
              {" "}
              <input type="checkbox" />
            </div>
            <div className="Signup_outer_inner_row8_text">
                 <label>By clicking on Register, you agree to our </label>
                 <label>
                   <span className="Tnc">Terms and Conditions</span> of  use.
                </label>
            </div>
          </div>
          <div className="Signup_outer_inner_row9">
            <botton>Register</botton>
          </div>
        </div>
      </div>
    </>
  );
}