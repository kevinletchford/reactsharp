import React, { Component } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
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
                        EmailAddress:'',
                        CustomerId:'',
        }
        this.onSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    };
    componentDidMount() {
          const customerId = this.props.match.params.customerId;
          console.log(`${baseUrl}/customer/${customerId}`);
          axios
              .get(`${baseUrl}/Customer/${customerId}`)
              .then(response => {
                  console.log( response.data);
                  this.setState({
                    CustomerId: response.data.Id,
                    CompanyName: response.data.CompanyName,
                    Name: response.data.Name,
                    AddressLine1: response.data.AddressLine1,
                    AddressLine2: response.data.AddressLine2,
                    Town: response.data.Town,
                    Postcode: response.data.Postcode,
                    PhoneNumber: response.data.PhoneNumber,
                    EmailAddress: response.data.EmailAddress
                  });
              });
      };


    handleSubmit(e){
        e.preventDefault();
        var _this = this;
        if(this.state.CustomerId > 0){
            axios.put(`${baseUrl}/Customers/`, {
                Id: this.state.CustomerId,
                CompanyName: this.state.CompanyName,
                Name: this.state.Name,
                AddressLine1: this.state.AddressLine1,
                AddressLine2: this.state.AddressLine2,
                Town: this.state.Town,
                Postcode: this.state.Postcode,
                PhoneNumber: this.state.PhoneNumber,
                EmailAddress: this.state.EmailAddress
            }).then(function (response) {
                _this.setState({});
                })
                .catch(function (error) {
                console.log(error);
                });
        }
        else{
            axios.post(`${baseUrl}/Customers`, {
                CompanyName: this.state.CompanyName,
                Name: this.state.Name,
                AddressLine1: this.state.AddressLine1,
                AddressLine2: this.state.AddressLine2,
                Town: this.state.Town,
                Postcode: this.state.Postcode,
                PhoneNumber: this.state.PhoneNumber,
                EmailAddress: this.state.EmailAddress
            }).then(function (response) {
                _this.setState({
                    CustomerId: response.data
                });
                })
                .catch(function (error) {
                console.log(error);
                });
        }
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
        const editCustomer = this.state.CustomerId;
        let pageHeader = null;
        if(this.state.CustomerId > 0){
            pageHeader = <h1>Edit Customer</h1>
        }
        else{
            pageHeader = <h1>Add a new customer</h1>
        }
        return (
            <div>
                {pageHeader}
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
                    <input className="button" type="submit" value="Submit"  />
                </form>
                </editCustomer>
            </div>
        );
    }
};

export default CustomerEdit;