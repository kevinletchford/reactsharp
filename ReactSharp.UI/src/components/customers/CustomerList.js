﻿import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import circle from './../../svg/icons_circle.svg'
import square from './../../svg/icons_square.svg'
import view from './../../svg/icons_view.svg'
import './table-list.css'
import {getData} from './../../helpers/helpers'

class CustomerList extends Component {
  constructor (props) {
    super(props)
    this.state = {customers: []}
  }
  componentDidMount () {
    getData(this, '/Customers/100/asc', 'customers')
  }
  render () {
    const customers = this.state.customers.map((customer) => (
      <CustomerRow
        key={customer.Id}
        id={customer.Id}
        CompanyName={customer.CompanyName}
        Name={customer.Name}
        AddressLine1={customer.AddressLine1}
        AddressLine2={customer.AddressLine2}
        Town={customer.Town}
        PhoneNumber={customer.PhoneNumber}
        Postcode={customer.Postcode}
            />
        ))
    return (
      <div>
        <pageheader>
              <h1>Customers</h1>
              <Link to='/Customers/CustomerEdit' ><img src={circle} className='icon' />New customer</Link>
            </pageheader>
        <customerListTable className='table-list'>
              <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Phone</th>
                        <th />
                        <th />
                      </tr>
                  </thead>
                <tbody>
                    {customers}
                  </tbody>

              </table>
            </customerListTable>

      </div>
    )
  }
}

class CustomerRow extends Component {
  render () {
    return (
      <tr>
        <td>{this.props.Name}</td>
        <td>{this.props.CompanyName}</td>
        <td>{this.props.PhoneNumber}</td>
        <td><img src={square} className='icon' />Invoices</td>
        <td>
            <Link className='customers' to={'/customers/' + this.props.id} >
                <img src={view}className='icon icon_view' />View Customer
                    </Link>
          </td>
      </tr>
    )
  }
}

export default CustomerList
