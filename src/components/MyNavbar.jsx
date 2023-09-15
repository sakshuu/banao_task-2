import React from 'react';
import { Link } from 'react-router-dom';
import './../assets/css/navbar.css'; // Import your custom CSS for styling

function MyNavbar() {
  return (
    <div className="container ">
      <div className="row">
        {/* Left Grid */}
        <div className="col-md-5">
          <div className="grid">
            {/* Create NavLink elements for the left grid */}
            <Link className="nav-link" to="/page1">
              {/* Your SVG path for the left grid */}
              <svg
                version="1.1"
                id="transring"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 414 414"
                style={{ enableBackground: 'new 0 0 414 414', backgroundColor: 'lightblue' }}
              >
                {/* Your SVG path here */}
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Center Circle */}
        <div className="col-md-2">
          <div className="circle">
            {/* Your SVG path for the center circle */}
            <svg
              version="1.1"
              id="transring"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 414 414"
              style={{ enableBackground: 'new 0 0 414 414', backgroundColor: 'lightblue' }}
            >
              {/* Your SVG path here */}
            </svg>
          </div>
        </div>

        {/* Right Grid */}
        <div className="col-md-5">
          <div className="grid">
            {/* Create NavLink elements for the right grid */}
            <Link className="nav-link" to="/page2">
              {/* Your SVG path for the right grid */}
              <svg
                version="1.1"
                id="transring"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 414 414"
                style={{ enableBackground: 'new 0 0 414 414', backgroundColor: 'lightblue' }}
              >
                {/* Your SVG path here */}
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyNavbar;
