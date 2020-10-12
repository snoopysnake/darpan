import React from 'react';
import './Plane.css';
import { Link } from 'react-scroll';

function Plane(props) {
  return (
    <div className="plane-component">
      <div className="banner-side">
        {props.plane}
      </div>
      <Link to={props.text.toLowerCase()} smooth={true} duration={500}>
        <div className="banner" id="summary">
          {props.text}
          <div className="notch"></div>
        </div>
      </Link>
      <div className="banner-side"></div>
    </div>
  );
}

export default Plane;
