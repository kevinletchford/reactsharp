import React, { Component } from 'react';
import './forms.css';

class CustomerEdit extends Component {
    render() {
        return (
            <div>
                <pageheader>
                    <h1>Add a new customer</h1>
                </pageheader>
                <editCustomer>
                <form>
                    <div className="input-holder">
                        <label htmlFor="CompanyName">Company Name</label>
                        <input name="CompanyName" type="text" />
                    </div>
                    <div className="input-holder">
                        <label htmlFor="Name">Name</label>
                        <input name="Name" type="text" />
                    </div>
                    <div className="input-holder">
                        <label htmlFor="AddressLine1">Address line 1</label>
                        <input name="AddressLine1" type="text" />
                    </div>
                    <div className="input-holder">
                        <label htmlFor="AddressLine2">Address line 2</label>
                        <input name="AddressLine2" type="text" />
                    </div>
                    <div className="input-holder">
                        <label htmlFor="Town">Town</label>
                        <input name="Town" type="text" />
                    </div>
                    <div className="input-holder">
                        <label htmlFor="Postcode">Postcode</label>
                        <input name="Postcode" type="text" />
                    </div>
                    <div className="input-holder">
                        <label htmlFor="PhoneNumber">Phone Number</label>
                        <input name="PhoneNumber" type="text" />
                    </div>
                    <div className="input-holder">
                        <label htmlFor="EmailAddress">Email</label>
                        <input name="EmailAddress" type="email" />
                    </div>
                    <input class="button" type="button" value="Add Customer" />
                </form>
                </editCustomer>
            </div>
        );
    }
}

export default CustomerEdit;