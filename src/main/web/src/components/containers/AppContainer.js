import React, {Component} from "react";
import * as Redux from "react-redux"
import actions from "../../actions";
import {bindActionCreators} from 'redux'
import App from "../presentational/App";

const mapStateToProps = function (store) {
    return {
        isFetching: store.link.isFetching,
        success: store.link.link.success,
        link: store.link.link.link
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            fetchLinkIfNeeded: actions.link.fetchLinkIfNeeded
        }, dispatch)
    };
};

class AppContainer extends Component {
    render() {
        return (
            <App {...this.props}/>
        );
    }
}

export default Redux.connect(mapStateToProps, mapDispatchToProps)(AppContainer);