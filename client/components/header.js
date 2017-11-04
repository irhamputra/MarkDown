import React, { Component } from 'react';
import Accounts from './accounts';

class Header extends Component {

    onBinClick(e){
        e.preventDefault();

        Meteor.call('bins.insert');
    }

    render(){
        return(
            <nav className="nav navbar-inverse">
                <div className="navbar-header">
                    <a className="navbar-brand">MarkBin</a>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a>
                    </li>
                    <li>
                        <Accounts/>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header;