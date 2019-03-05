import React, {Component} from 'react';
import './index.less';

class HomePage extends Component {
    constructor(props) {
        super(props);

        // 示例为hrhi入职登记的appcode
        this.appConfig = {
            pagecode: '60071010p',
            appcode: '60071010'
        };

        this.state = {
            language: {},
            context: {}
        };

        this.getLanguage = this.getLanguage.bind(this)
        this.getTemplateData = this.getTemplateData.bind(this);
    }

    componentDidMount() {
        this.getLanguage();
        this.getTemplateData();
    }

    getTemplateData() {
        const {createUIDom, dispatch, meta, button} = this.props;

        createUIDom(this.appConfig, (data = {}) => {
            this.setState({
                context: data.context
            });

            meta.setMeta(data.template || {});
            button.setButtons(data.button || {});
        });
    }

    getLanguage() {
        this.props.MultiInit.getMultiLang({
            moduleId: 'hi6007',
            domainName: 'hrhi',
            callback: (json, status, init) => {
                this.setState({
                    language: json
                });
            }
        });
    }

    render() {
        return (
            <div>
                多语言
                {JSON.stringify(this.props.newNode.language)}
            </div>
        );
    }
};

export default connect(HomePage);