

export default class Action1 {

    constructor(comp) {
        this.comp = comp;
    }

    alertName = () => {
        this.comp.props.dispatch({
            type: 'exam/update',
            payload: {
                name: '筝'
            }
        });
    }

}