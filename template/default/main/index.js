import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'src/hrpub/common/static/fonts/iconfont.css';

import {
    createPage
} from 'nc-lightapp-front';

import HomePage from '../container';

const Wrapper = createPage({})(HomePage);

ReactDOM.render(<Wrapper ref={ref => pageIns.ins = ref}/>, document.getElementById('app'));
