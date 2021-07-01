import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import myInfo from "../../data/myInfo";

export default function NavBar(props) {
  return (
    <nav className="navbar is-fixed-top">
      <div className="navbar-brand">
        {/* <div
          className="navbar-burger burger"
          data-target="navbarExampleTransparentExample"
        >
          <span />
          <span />
          <span />
        </div> */}
        <img
          src={myInfo.logo}
          style={{ height: "60px", paddingLeft: "16px", paddingTop: "4px" }}
        />
      </div>
      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-end">
          <Link className="navbar-item" to="/">
            <span>Home</span>
          </Link>
          <Link className="navbar-item" to="/services">
            <span className="icon">
              <i className="fas fa-bars" />
            </span>
            <span>Services</span>
          </Link>
          <Link className="navbar-item" to="/about">
            <span className="icon">
              <i className="fas fa-info" />
            </span>
            <span>About</span>
          </Link>
          {/* <Link className="navbar-item" to="/blogs">
            <span>Blogs</span>
          </Link> 
          <Link className="navbar-item" to="/contact">
            <span className="icon">
              <i className="fas fa-envelope" />
            </span>
            <span>Contact</span>
          </Link>*/}
        </div>
      </div>
    </nav>
  );
}
