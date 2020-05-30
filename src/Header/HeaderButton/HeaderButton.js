import React from 'react';
import './HeaderButton.css';

class HeaderButton extends React.Component {
  render() {
    return (
      <button>
        <a className="button-text" href={`#${this.props.text.toLowerCase()}`}>{this.props.text}</a>
        {this.props.render()}
      </button>
    );
  }
}

export default HeaderButton;
