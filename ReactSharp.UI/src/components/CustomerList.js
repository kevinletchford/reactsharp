import React, { Component } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const baseUrl = 'http://localhost:56123';

class CustomerList extends Component {
    state = {
        customers: [],
    };
    componentDidMount() {
        axios
            .get(`${baseUrl}/customers`)
            .then(response => {
                this.setState({
                    customers: response.data
                });
            });
    };

    render() {
        const customers = this.state.customers.map((customer) => (
            <Customer
                key={customer.Id}
                id={customer.Id}
                CompanyName={customer.CompanyName}
                Name={customer.Name}
                AddressLine1={customer.AddressLine1}
                AddressLine2={customer.AddressLine2}
                Town={customer.Town}
                Postcode={customer.Postcode}
            />
        ));
        return (
            <Router>
            <div className="ui cards container">
                {customers}
            </div>
            </Router>
        );
    }
}


class Customer extends Component {
    render() {
        return (
            <div className="card">
                <div className="content">
                    <div className="header">{this.props.CompanyName}</div>
                    <div clasName="meta">{this.props.Name}</div>
                    <address>
                        <span>{this.props.AddressLine1}</span><br />
                        <span>{this.props.AddressLine2}</span><br />
                        <span>{this.props.Town}</span><br />
                        <span>{this.props.Postcode}</span><br />
                    </address>
                    <p>{this.props.PhoneNumber}</p>
                    <p>{this.props.EmailAddress}</p>
                </div>
            </div>
        );
    }
}

class Customers extends Component {
    render() {
        return (
            
                <Route path="/CustomerList/:id" component={Customer} />

        );
    }
}

export default CustomerList;