import React from 'react';
import ReactDOM from 'react-dom';
import SidebarToggleButton from './SidebarToggleButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SidebarToggleButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
