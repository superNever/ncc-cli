import React from 'react';

import render from 'src/hrpub/common/frame/render';

import MainAction from '../actions/main';

import {createPage} from 'nc-lightapp-front';

import Header from '../components/Header';

import './index.less';

let handleConfig = {
    actions: {
        mainAction: MainAction
    },
    customData: '哈哈哈',
    state: {
        name: '12345'
    },
    scope: ['name']
}
let createDom = ({props, action, state})=>{
    return (
        <div>
           <Header name = {state.name}></Header>
           <button onClick = {action.mainAction.reverseName}>container click</button>
           {state.name}
        </div>
    )
}

const Homepage = render(handleConfig)(createDom)
export default createPage({})(Homepage)