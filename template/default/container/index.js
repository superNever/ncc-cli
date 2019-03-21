import React from 'react';

import {render, HrContainer} from 'src/hrpub/common/frame/index';

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
    }
}
let createDom = ({props, action, state, scope})=>{
    return (
        <HrContainer scope={state}>
            <Header></Header>
            <button onClick = {action.mainAction.reverseName}>container click</button>
            {state.name}
        </HrContainer> 
    )
}

const Homepage = render(handleConfig)(createDom)
export default createPage({})(Homepage)