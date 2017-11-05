import React, { Component } from 'react';
import Accounts from './accounts';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {
    onBinClick(e){
        e.preventDefault();

        Meteor.call('bins.insert', (error, binId) => {
            this.props.history.push(`/bins/${binId}`);
        });
    }

    render(){
        return(
            <nav className="nav navbar-inverse">
                <div className="col-xs-12">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">MarkBin</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a>
                        </li>
                        <li>
                            <Accounts/>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default withRouter(Header);