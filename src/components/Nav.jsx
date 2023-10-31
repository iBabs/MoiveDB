import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Navi = () => {
  return (
    <Navbar style={{display:'flex', justifyContent:'space-around'}}>
      <h2>MovieLOgo</h2>
      <div className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="latest">LATEST</NavLink>
      </div>
    </Navbar>
  );
};

export default Navi;
