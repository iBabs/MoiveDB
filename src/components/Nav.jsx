import { Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./Nav.css";

const Navi = () => {
  return (
    <Navbar style={{display:'flex', justifyContent:'space-around'}}>
      <Link to='/' style={{textDecoration: 'none', color: 'black'}}><h2>MovieLOgo</h2></Link>
      <div className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="latest">LATEST</NavLink>
      </div>
    </Navbar>
  );
};

export default Navi;
