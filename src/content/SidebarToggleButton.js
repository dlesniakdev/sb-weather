import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { btn, btnInfo } from 'bootstrap-css-modules/css/buttons.css';
import { mb2 } from 'bootstrap-css-modules/css/marginBottom.css';

class SidebarToggleButton extends Component {
  handleButtonClick = (e) => {
    var sidebar = ReactDOM.findDOMNode(document.getElementById('wrapper'));
    sidebar.classList.toggle('with-sidebar');
  }

  render() {
    return (
      <button onClick={ this.handleButtonClick } type="button"
        id="sidebarCollapse" className="active btn btnInfo mb2">
        <i className="fas fa-align-left"></i>
        <span>Toggle Sidebar</span>
      </button>
    )
  }
}

export default SidebarToggleButton;
