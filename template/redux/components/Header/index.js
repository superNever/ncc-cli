import React from 'react';

import render from '../../../../../hrpub/common/frame/render';

import {connect} from '../../../../../hrpub/common/store';


const Header = render()(({props, action, state}) => {

    return (
        <div>
            我是一个头部{props.exam.name}
        </div>
    );

});

export default connect(Header);