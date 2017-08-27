import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import axios from "axios";
import './customer.css';

const baseUrl = 'http://localhost:56123';


class Customer extends Component {
    state = {
        customer: [],
    };
    componentDidMount() {
      
        const customerId = this.props.match.params.customerId;
        console.log(`${baseUrl}/api/customer/${customerId}`);
        axios
            .get(`${baseUrl}/api/customer/${customerId}`)
            .then(response => {
                console.log( response.data);
                this.setState({
                    customer: response.data
                });
            });
    };

   render() {  
        const customerDetails = this.state.customer;
        return (
            <div>
                <pageheader>
                    <h1>Customer Details {this.props.match.params.customerId}</h1>
                </pageheader>
                <customerDetails>
                    <div className="customer-details__item">
                        <span className="customer-details__label">Company Name</span>
                        <span className="customer-details__description">{customerDetails.CompanyName}</span>
                    </div>
                    <div className="customer-details__item">
                        <span className="customer-details__label">Name</span>
                        <span className="customer-details__description">{customerDetails.Name}</span>
                    </div>
                    <div className="customer-details__item">
                        <span className="customer-details__label">Address line 1</span>
                        <span className="customer-details__description">{customerDetails.AddressLine1}</span>
                    </div>
                    <div className="customer-details__item">
                        <span className="customer-details__label">Address line 2</span>
                        <span className="customer-details__description">{customerDetails.AddressLine2}</span>
                    </div>
                    <div className="customer-details__item">
                        <span className="customer-details__label">Town</span>
                        <span className="customer-details__description">{customerDetails.Town}</span>
                    </div>
                    <div className="customer-details__item">
                        <span className="customer-details__label">Postcode</span>
                        <span className="customer-details__description">{customerDetails.Postcode}</span>
                    </div>
                    <div className="customer-details__item">
                        <span className="customer-details__label">Phone Number</span>
                        <span className="customer-details__description">{customerDetails.PhoneNumber}</span>
                    </div>
                    <div className="customer-details__item">
                        <span className="customer-details__label">Email</span>
                        <span className="customer-details__description">{customerDetails.EmailAddress}</span>
                    </div>
                </customerDetails>
            </div>
        );
    }
}

export default Customer;