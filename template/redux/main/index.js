

import HomePage from '../container';

import {createPage} from 'nc-lightapp-front';

import {start} from 'src/hrpub/common/store';

import model from '../store/model';

const Wrapper = createPage({})(HomePage);


start({
    root: document.getElementById('app'),
    component: <Wrapper />,
    model: model
});