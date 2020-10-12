import React from 'react';
import './Plane.css';

class Plane extends React.Component {
  render() {
    return (
        <div className="plane-component">
            <div className="banner-side">
                {this.props.plane}
            </div>
            <a href="#summary">
                <div className="banner" id="summary">
                    { this.props.text }
                    <div className="notch"></div>
                </div>
            </a>
            <div className="banner-side"></div>
        </div>
    );
  }
}

export default Plane;
