import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import CustomerList from './components/CustomerList';
import CustomerSearch from './components/CustomerSearch';
import EditCustomer from './components/EditCustomer';


class App extends Component {
    render() {
        return (

                <Router>
                <div>
                <nav>
                    <ul>
                        <li><Link to="/CustomerList" >Customer List</Link></li>
                        <li><Link to="/CustomerSearch" >Customer Search</Link></li>
                        <li><Link to="/EditCustomer" >Edit Customer</Link></li>
                    </ul>
                </nav>

                <main>

                    <Route path='/CustomerList'     component={CustomerList} />
                    <Route path='/CustomerSearch'   component={CustomerSearch} />
                    <Route path='/EditCustomer'     component={EditCustomer} />

                </main>
                </div>
                </Router>

        )
    }

}



export default App;
