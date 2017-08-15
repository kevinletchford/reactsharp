import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import logo from './svg/icons_void-logo.svg';   
import CustomerList from './components/CustomerList';
import CustomerSearch from './components/CustomerSearch';
import EditCustomer from './components/EditCustomer';


class App extends Component {
    render() {
        return (
           
            <Router>

                <div className="ui bottom attached segment pushable">
                    <img src={logo} className="void" alt="logo" />
                <div className="ui visible inverted left vertical sidebar menu">
                    <Link className="item" to="/CustomerList" >Customer List</Link>
                    <Link className="item" to="/CustomerSearch" >Customer Search</Link>
                    <Link className="item" to="/EditCustomer" >Edit Customer</Link>
                </div>
                <div className="pusher">
                    <div className="ui basic segment">
                        <Route path='/CustomerList' component={CustomerList} />
                        <Route path='/CustomerSearch' component={CustomerSearch} />
                        <Route path='/EditCustomer' component={EditCustomer} />
                    </div>
                </div>
            </div>
            </Router >

        )
    }

}



export default App;
