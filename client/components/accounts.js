import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
    componentDidMount(){
        // Render Blaze Accounts form template UI
        this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));
    }

    componentWillUnmount(){
        // Form destroys
        Blaze.remove(this.view);
    }

    render() {
        return(
            <div ref="container"></div>
        )
    }
}

export default Accounts;