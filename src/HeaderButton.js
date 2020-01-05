import React from 'react';
import './HeaderButton.css';

class HeaderButton extends React.Component {
  render() {
    return (
      <button>
  <div className="button-text">{ this.props.text }</div>
        { this.props.render() }
      </button>
  );
  }
}

export default HeaderButton;
