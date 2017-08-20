import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import circle from './../../svg/icons_circle.svg'; 
import square from './../../svg/icons_square.svg'; 
import view from './../../svg/icons_view.svg'; 
import './table-list.css';
class CustomerList extends Component {
    render() {
        return (
            <div>
                <pageheader>
                    <h1>Customers</h1>
                    <Link  to="/Customers/CustomerEdit" ><img src={circle} className="icon" />New customer</Link>
                </pageheader>
                <customerListTable className="table-list">
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Phone</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>James Ham</td>
                            <td>Ham International</td>
                            <td>43473204730247</td>
                            <td><img src={square} className="icon" />Invoices</td>
                            <td><img src={view}className="icon icon_view"  />View Customer</td>
                        </tr>
                        <tr>
                            <td>James Ham</td>
                            <td>Ham International</td>
                            <td>43473204730247</td>
                            <td><img src={square} className="icon" />Invoices</td>
                            <td><img src={view} className="icon icon_view" />View Customer</td>
                        </tr>
                        <tr>
                            <td>James Ham</td>
                            <td>Ham International</td>
                            <td>43473204730247</td>
                            <td><img src={square} className="icon" />Invoices</td>
                            <td><img src={view} className="icon icon_view"  />View Customer</td>
                        </tr>
                        <tr>
                            <td>James Ham</td>
                            <td>Ham International</td>
                            <td>43473204730247</td>
                            <td><img src={square} className="icon" />Invoices</td>
                            <td><img src={view} className="icon icon_view"  />View Customer</td>
                        </tr>
                        <tr>
                            <td>James Ham</td>
                            <td>Ham International</td>
                            <td>43473204730247</td>
                            <td><img src={square} className="icon" />Invoices</td>
                            <td><img src={view} className="icon icon_view"  />View Customer</td>
                        </tr>
                    </tbody>

                </table>
                </customerListTable>


            </div>
        );
    }
}

export default CustomerList;