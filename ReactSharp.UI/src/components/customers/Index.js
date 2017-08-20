import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import CustomerList from './CustomerList';
import CustomerEdit from './CustomerEdit';


class customerIndex extends Component {
    render() {
        return (
            <main>
            <Switch>
                <Route path={this.props.match.path} exact component={CustomerList} />
                <Route path={`${this.props.match.path}/CustomerEdit`} component={CustomerEdit} />
            </Switch>
            </main>
        );
    }
}

export default customerIndex;