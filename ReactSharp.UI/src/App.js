import React, { Component } from 'react';
import axios from "axios";
import './App.css';

const baseUrl = 'http://localhost:56123';

class App extends Component {
    state = {
        customers: [],
    };
    componentDidMount() {
        axios
            .get(`${baseUrl}/api/customers`)
            .then(response => {
                this.setState({
                    customers: response.data
                });
            });
    };

    render() {
        const customers = this.state.customers.map((customer) => (
            <Customer
                key={customer.CustomerID}
                id={customer.CustomerID}
                CompanyName={customer.CompanyName}
                Name={customer.Name}
                AddressLine1={customer.AddressLine1}
                AddressLine2={customer.AddressLine2}
                Town={customer.Town}
                Postcode={customer.Postcode}
                 />
        ));
    return (
        <div id='customers'>
            {customers}
        </div>
    );
  }
}


class Customer extends Component {
    render(){
        return (
            <div className='ui centered card'>
                <div className='content'>
                    <h2>{this.props.CompanyName}</h2>
                    <h3>{this.props.Name}</h3>
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


export default App;
