import React, { Component } from 'react';
import axios from "axios";
import './forms.css';

const baseUrl = 'http://localhost:56123';

class CustomerEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {CompanyName: '',
                        Name:'',
                        AddressLine1:'',
                        AddressLine2:'',
                        Town:'',
                        Postcode:'',
                        PhoneNumber:'',
                        EmailAddress:''
        }
        this.onSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    };
    handleSubmit(e){
        e.preventDefault();
        axios.post(`${baseUrl}/Customers`, {
            CompanyName: this.state.CompanyName,
            Name: this.state.Name,
            AddressLine1: this.state.AddressLine1,
            AddressLine2: this.state.AddressLine2,
            Town: this.state. Town,
            Postcode: this.state.Postcode,
            PhoneNumber: this.state.PhoneNumber,
            EmailAddress: this.state.EmailAddress
        }).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };


    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    render() {
        return (
            <div>
                <pageheader>
                    <h1>Add a new customer</h1>
                </pageheader>
                <editCustomer>
                <form onSubmit={this.onSubmit}>
                    <div className="input-holder">
                        <label htmlFor="CompanyName">Company Name</label>
                        <input name="CompanyName" value={this.state.CompanyName}  type="text" onChange={this.handleInputChange}  />
                    </div>
                    <div className="input-holder">
                        <label htmlFor="Name">Name</label>
                        <input name="Name" value={this.state.Name} type="text" onChange={this.handleInputChange}  />
                    </div>
                    <div className="input-holder">
                        <label htmlFor="AddressLine1">Address line 1</label>
                        <input name="AddressLine1"  value={this.state.AddressLine1} type="text" onChange={this.handleInputChange}  />
                    </div>
                    <div className="input-holder">
                        <label htmlFor="AddressLine2">Address line 2</label>
                        <input name="AddressLine2" value={this.state.AddressLine2} type="text" onChange={this.handleInputChange}  />
                    </div>
                    <div className="input-holder">
                        <label htmlFor="Town">Town</label>
                        <input name="Town" value={this.state.Town} type="text" onChange={this.handleInputChange}  />
                    </div>
                    <div className="input-holder">
                        <label htmlFor="Postcode">Postcode</label>
                        <input name="Postcode" value={this.state.Postcode} type="text" onChange={this.handleInputChange}  />
                    </div>
                    <div className="input-holder">
                        <label htmlFor="PhoneNumber">Phone Number</label>
                        <input name="PhoneNumber" value={this.state.PhoneNumber} type="text" onChange={this.handleInputChange}  />
                    </div>
                    <div className="input-holder">
                        <label htmlFor="EmailAddress">Email</label>
                        <input name="EmailAddress" value={this.state.EmailAddress} type="email"  onChange={this.handleInputChange} />
                    </div>
                    <input class="button" type="submit" value="Submit"  />
                </form>
                </editCustomer>
            </div>
        );
    }
};

export default CustomerEdit;