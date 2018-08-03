import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Charts from '../content/chart/Charts';
import Main from '../content/Main';
import './Sidebar.css';

const ListItem = ({ value, onClick }) => (
  <li onClick={onClick}><a>{value}</a></li>
);

const List = ({ items, onHeaderClick, onItemClick }) => (
  <ul className="sidebar-nav">
    <li className="sidebar-brand">
      <a onClick={onHeaderClick}>SbWeather</a>
    </li>
    {
      items.map((item, i) => <ListItem key={i} value={item} onClick={onItemClick} />)
    }
  </ul>
);

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      supportedCities: ['London', 'Washington', 'New York']
    };
  }

  handleItemClick = (e) => {
    ReactDOM.unmountComponentAtNode(document.getElementById('content'))
    ReactDOM.render(<Charts name={e.target.innerHTML} />, document.getElementById('content'));
  }

  handleHeaderClick = (e) => {
    ReactDOM.unmountComponentAtNode(document.getElementById('main')) 
    ReactDOM.render(<Main />, document.getElementById('main')); 
  }

  render() {
    const { supportedCities } = this.state;
    return (<List items={supportedCities} onHeaderClick={this.handleHeaderClick} onItemClick={this.handleItemClick} />)
  }
}

export default Sidebar;
