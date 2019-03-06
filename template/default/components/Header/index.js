import React from 'react';

import render from '../../../../../hrpub/common/frame/render';

import HeaderAction from './headerAction';

export default render({
    actions: {
        header: HeaderAction
    },
    state: {
        headerName: '我是头部的name'
    }
})(({props, action, state}) => {

    return (
        <div>
            我是一个头部{props.name}
            <button
                onClick={action.header.headerAlert}
            >
                我是header里的按钮
            </button>
            {state.headerName}
        </div>
    );

});