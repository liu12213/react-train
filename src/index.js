import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';

import App from './components/app';


// 渲染组件
render(
    (
        <Router>
            <App />
        </Router>
    ),
    document.getElementById('container')
);
