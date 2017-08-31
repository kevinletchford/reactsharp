import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import CustomerIndex from './components/customers/Index';
import InvoiceIndex from './components/invoices/Index';
import Settings from './components/settings/Index';
import Dashboard from './components/dashboard/Index';
import Header from './components/layout/Header.js';

class App extends Component {
    render() {
        return (
           
            <Router>           
            <div>
                <Header/>
                <div className="pusher">
                    <div className="ui basic segment">
                        <Route path="/" exact component={Dashboard} />
                        <Route path='/Customers' component={CustomerIndex} />
                        <Route path='/Invoices' component={InvoiceIndex} />
                        <Route path='/Settings' component={Settings} />
                    </div>
                </div>
            </div>
            </Router >

        )
    }

}



export default App;
