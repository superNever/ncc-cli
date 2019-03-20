import render from 'src/hrpub/common/frame/render'
import heaerAction from '../../actions/header'

let handleConfig = {
    actions: {
        header: heaerAction
    }
}

let createDom = ({props, action, state})=>{
    return (
        <div>
            <button onClick={action.header.reverseName}>reverse name</button>
            {
                props.name
            }
        </div>
    )
}

export default render(handleConfig)(createDom)