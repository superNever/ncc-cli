import React, {Component} from 'react';
import './index.less';


import {connect} from '../../../../hrpub/common/store';

class HomePage extends Component {
    constructor(props) {
        super(props);

        // 示例为hrhi入职登记的appcode
        this.appConfig = {
            pagecode: '60071010p',
            appcode: '60071010'
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
            dispatch({
                type: 'newNode/update',
                payload: {
                    context: data.context
                }
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
                this.props.dispatch({
                    type: 'newNode/update',
                    payload: {
                        language: json
                    }
                });
            }
        });
    }

    render() {
        return (
            <div>
                我是内容
                <div>
                    多语言
                    {JSON.stringify(this.props.newNode.language)}
                </div>
            </div>
            
        );
    }
};

export default connect(HomePage);