import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../assets/images/logo/voopo.png";
import LogoAnimated from "./LogoAnimated";

const Logo = () => {
  return (
    <div className="logo">
      <Link to={process.env.PUBLIC_URL + "/"}>
        {/* <img src={logo} alt="voopo" className="img-fluid" /> */}
        <div className="col-11 col-2">
              <h1 className="mb-0 site-logo">
                <a href="index.html" 
                // className="text-white h2 mb-0"
                >
                  <LogoAnimated /> 
                  {/* <span className="text-primary"></span>{" "} */}
                </a>
              </h1>
            </div>
      </Link>
    </div>
  );
};

export default Logo;
