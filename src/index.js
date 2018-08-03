import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import Sidebar from './sidebar/Sidebar';
import Main from './content/Main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Sidebar />, document.getElementById('sidebar-wrapper'));
ReactDOM.render(<Main />, document.getElementById('main'));
registerServiceWorker();
