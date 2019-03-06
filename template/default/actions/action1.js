

export default class Action1 {

    constructor(comp) {
        this.comp = comp;
    }

    alertName = () => {
        this.comp.setState({
            name: '筝'
        });
    }

}