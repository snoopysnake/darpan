import React from 'react';
import './Plane.css';
import { Link } from 'react-scroll';
import { useInView } from 'react-intersection-observer';

function Plane(props) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  });

  return (
    <div className={'plane-component ' + (inView ? 'plane-pass' : '')} ref={ref}>
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
