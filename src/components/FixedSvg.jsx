import React from 'react';
import { Link } from 'react-router-dom';

const svgStyle = {
  enableBackground: 'new 0 0 414 414',
  backgroundColor: 'lightblue',
  borderRadius: '100px',
};

const pathStyle = {
  opacity: 0.4,
  fill: 'none',
  stroke: '#FFFFFF',
  strokeWidth: 2,
  strokeMiterlimit: 10,
  enableBackground: 'new',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#007bff',
  fontWeight: 'bold',
  display: 'block',
  marginTop: '10px',
  transition: 'color 0.2s ease-in-out',
};

const dotsStyle = {
  fill: 'rgb(0, 146, 255)',
  opacity: 1,
};

const dotsStrokeStyle = {
  opacity: 1,
  fill: 'none',
  stroke: 'rgb(255, 255, 255)',
  strokeWidth: 2,
  strokeMiterlimit: 10,
};

const lineStyle = {
  position: 'absolute',
  width: '2px', // Adjust the width of the vertical lines as needed
  height: '100%', // Make them cover the entire height
  backgroundColor: 'rgba(255, 255, 255, 0.4)', // Color of the lines
  top: '0',
  bottom: '0',
};

const verticalLineStyle = {
  position: 'absolute',
  width: '2px', // Adjust the width of the vertical line as needed
  height: '200px', // Adjust the height of the line to match the circular SVG
  backgroundColor: 'green', // Color of the vertical line
  left: '50%', // Position it in the center horizontally
  transform: 'translateX(-50%)', // Center it horizontally
  display: 'none', // Initially hide the vertical line
};

const mdScreenMediaQuery = '@media (min-width: 768px)'; // Adjust the breakpoint for medium-sized screens

const FixedSvg = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-4">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis provident alias voluptate asperiores sint. Quidem aut a provident earum repellendus fuga quasi harum sunt modi quod! Assumenda, omnis est?
            </div>
            <div className="col-md-4">
    <div
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Adjust the height as needed
      }}
    >
      {/* Left vertical line */}
      <div style={{ ...lineStyle, left: '0' }}></div>

      {/* Circular SVG */}
      <div
        style={{
          width: '200px', // Adjust the size of the circular container as needed
          height: '200px', // It should be equal to create a circle
          borderRadius: '50%', // Make it circular
          backgroundColor: 'transparent', // Background color of the circle
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: '2', // Ensure the circular SVG is above the lines
        }}
      >
        <svg
          version="1.1"
          id="transring"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 414 414"
          style={svgStyle}
        >
                     <path
          id="Transparent_Ring"
          className="transrg"
          style={pathStyle}
          d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173 c-47.8,0-91-19.4-122.3-50.7"
        ></path>

        <path
          id="Opaque_Ring"
          className="transrgwht"
          strokeDasharray="0,1000"
          style={{
            fill: 'none',
            stroke: 'rgb(255, 255, 255)',
            strokeWidth: 2,
            strokeMiterlimit: 10,
            strokeDasharray: '10, 1000',
          }}
          d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173 c-47.8,0-91-19.4-122.3-50.7"
        >
          <Link to="/" style={linkStyle}>Link</Link>
        </path>

        <g id="Dots1" className="dots-nav">
          <g>
            <Link className="nav-link" to="/">
              <path
                className="dotsst dotsfill1"
                style={dotsStyle}
                d="M84,80 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 87, 80, 84,80 z"
              ></path>
            </Link>
          </g>
          <g>
            <path
              className="dotsstro1"
              style={dotsStrokeStyle}
              d="M84,80c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 87, 80, 84,80 z"
            ></path>
          </g>
        </g>

        {/* Dots2 */}
        <g id="Dots2" className="dots-nav">
          <g>
            <Link className="nav-link" to="/ux">
              <path
                className="dotsst dotsfill2"
                style={dotsStyle}
                d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6S 210.1,29, 206.8,29 z M206.8"
              ></path>
            </Link>
          </g>
          <g>
            <path
              className="dotsstro2"
              style={dotsStrokeStyle}
              d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6S 210.1,29, 206.8,29 z M206.8"
            ></path>
          </g>
        </g>

        {/* Dots3 */}
        <g id="Dots3" className="dots-nav">
          <g>
            <Link className="nav-link" to="/about">
              <path
                className="dotsst dotsfill3"
                style={dotsStyle}
                d="M332,85 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 335,85, 332,85 z M332"
              ></path>
            </Link>
          </g>
          <g>
            <path
              className="dotsstro3"
              style={dotsStrokeStyle}
              d="M332,85 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 335,85, 332,85 z M332"
            ></path>
          </g>
        </g>

        {/* Dots4 */}
        <g id="Dots4" className="dots-nav">
          <g>
            <Link className="nav-link" to="/">
              <path
                className="dotsst dotsfill4"
                style={dotsStyle}
                d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z M380"
              ></path>
            </Link>
          </g>
          <g>
            <path               className="dotsstro4"
              style={dotsStrokeStyle}
              d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z M380"
            ></path>
          </g>
        </g>

        {/* Dots5 */}
        <g id="Dots5" className="dots-nav">
          <g>
            <Link className="nav-link" to="/ux">
              <path
                className="dotsst dotsfill5"
                style={dotsStyle}
                d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 340,315, 335,315 z M335"
              ></path>
            </Link>
          </g>
          <g>
            <path
              className="dotsstro5"
              style={dotsStrokeStyle}
              d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 340,315, 335,315 z M335"
            ></path>
          </g>
        </g>

        {/* Dots6 */}
        <g id="Dots6" className="dots-nav">
          <g>
            <Link className="nav-link" to="/about">
              <path
                className="dotsst dotsfill6"
                style={dotsStyle}
                d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 215,375, 210,375 z M210"
              ></path>
            </Link>
          </g>
          <g>
            <path
              className="dotsstro6"
              style={dotsStrokeStyle}
              d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 215,375, 210,375 z M210"
            ></path>
          </g>
        </g>

          {/* ... Your SVG Paths ... */}
        </svg>
      </div>

      {/* Right vertical line */}
      <div style={{ ...lineStyle, right: '0' }}></div>

      {/* Vertical line outside the SVG (visible on md screens) */}
      <div style={{ ...verticalLineStyle }}>
        {mdScreenMediaQuery && (
          <style>{`${mdScreenMediaQuery}
            // { display: block; }`
           }</style>
        )}
      </div>
    </div>
    </div>
    <div className="col-md-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui consequuntur enim cupiditate voluptatem veritatis similique quae amet dolore delectus cumque exercitationem, corrupti doloremque, laborum vero. Molestiae nam nihil voluptatibus?
            </div>
    </div>
    </div>
  );
};

export default FixedSvg;
