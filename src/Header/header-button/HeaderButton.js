import React from 'react';
import './HeaderButton.css';
import { Link } from 'react-scroll';

function HeaderButton(props) {
  return (
    <button>
      <div className="button-text">
        <Link to={props.text.toLowerCase()} smooth={true} duration={750}>
          {props.text}
        </Link>
      </div>
      {props.cloud}
    </button>
  );
}

export default HeaderButton;
