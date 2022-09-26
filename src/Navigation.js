
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
export default function Navigation() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/frontend/src/Signup.js" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
