

export default class HeaderAction {
    constructor(comp) {
        this.comp = comp;
    }

    headerAlert = () => {
        this.comp.setState({
            headerName: 'header 点点点'
        });
    }
}