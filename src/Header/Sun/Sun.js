import React from 'react';
import { ReactComponent as SunSVG } from './../../assets/svg/sun.svg';
import './Sun.css'

class Sun extends React.Component {
  render() {
    return (
      <div className="sun-component">
        <div className="sun-container" title="If only you could be so... grossly incandescent.">
          <div className="sun-glow"></div>
          <SunSVG />
        </div>
        <div>
          <div className="name">Darpan Shah</div>
          <div className="title">AWS/GCP Certified IT Professional</div>
        </div>
      </div>
  );
  }
}

export default Sun;
