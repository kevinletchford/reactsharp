import React, { Component } from 'react'

import {getData, postData, putData} from './../../helpers/helpers'
import './customer.css'

class Customer extends Component {
  constructor (props) {
    super(props)
    this.state = {customer: []}
    this.onSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentDidMount () {
    const customerId = this.props.match.params.customerId
    getData(this, `/Customer/${customerId}`, 'customer')
  }

  handleSubmit (e) {
    e.preventDefault()
    const customerDetails = this.state.customer
    var customerData = {
      Id: customerDetails.CustomerId.trim(),
      CompanyName: customerDetails.CompanyName,
      Name: customerDetails.Name,
      AddressLine1: customerDetails.AddressLine1,
      AddressLine2: customerDetails.AddressLine2,
      Town: customerDetails.Town,
      Postcode: customerDetails.Postcode,
      PhoneNumber: customerDetails.PhoneNumber,
      EmailAddress: customerDetails.EmailAddress
    }
    if (this.state.customer.CustomerId > 0) {
      putData(this, '/Customers/', customerData, 'customer')
    } else {
      var customerId = customerData[0]
      var customerDetailsNoId = customerDetails.filter(item => item !== customerId)
      postData(this, '/Customers/', customerDetailsNoId, 'customer')
    }
  }

  handleInputChange (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      customer: {
        [name]: [value]
      }
    })
  }

  render () {
    const customerDetails = this.state.customer
    let pageHeader = null
    if (customerDetails.CustomerId > 0) {
      pageHeader = <h1>Edit Customer</h1>
    } else {
      pageHeader = <h1>Add a new customer</h1>
    }
    return (
      <div>
        {pageHeader}
        <customerDetails>
          <form onSubmit={this.onSubmit}>
            <div className='input-holder'>
              <label htmlFor='CompanyName'>Company Name</label>
              <input name='CompanyName' value={customerDetails.CompanyName} type='text' onChange={this.handleInputChange} />
            </div>
            <div className='input-holder'>
              <label htmlFor='Name'>Name</label>
              <input name='Name' value={customerDetails.Name} type='text' onChange={this.handleInputChange} />
            </div>
            <div className='input-holder'>
              <label htmlFor='AddressLine1'>Address line 1</label>
              <input name='AddressLine1' value={customerDetails.AddressLine1} type='text' onChange={this.handleInputChange} />
            </div>
            <div className='input-holder'>
              <label htmlFor='AddressLine2'>Address line 2</label>
              <input name='AddressLine2' value={customerDetails.AddressLine2} type='text' onChange={this.handleInputChange} />
            </div>
            <div className='input-holder'>
              <label htmlFor='Town'>Town</label>
              <input name='Town' value={customerDetails.Town} type='text' onChange={this.handleInputChange} />
            </div>
            <div className='input-holder'>
              <label htmlFor='Postcode'>Postcode</label>
              <input name='Postcode' value={customerDetails.Postcode} type='text' onChange={this.handleInputChange} />
            </div>
            <div className='input-holder'>
              <label htmlFor='PhoneNumber'>Phone Number</label>
              <input name='PhoneNumber' value={customerDetails.PhoneNumber} type='text' onChange={this.handleInputChange} />
            </div>
            <div className='input-holder'>
              <label htmlFor='EmailAddress'>Email</label>
              <input name='EmailAddress' value={customerDetails.EmailAddress} type='email' onChange={this.handleInputChange} />
            </div>
            <input className='button' type='submit' value='Submit' />
          </form>
        </customerDetails>
      </div>
    )
  }
}

export default Customer
