import render from '../../../../hrpub/common/frame/render';

import Action1 from '../actions/action1';

import {createPage} from 'nc-lightapp-front';

import Header from '../components/Header';

import './index.less';

const Homepage =  render({
    actions: {
        action1: Action1
    },
    customData: '哈哈哈'
})(({props, action, state}, {customData}) => {
    return (
        <div>
            <Header />
            {props.exam.name}
            {customData}
            <div>
                <button
                    onClick={action.action1.alertName}
                >
                    我是一点击就会alert的按钮
                </button>
            </div>
        </div>
    )
});

export default createPage({})(Homepage)