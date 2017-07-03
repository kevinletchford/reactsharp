import React, { Component } from 'react';
class CustomerSearch extends Component {
    render() {
        return (
        <div className="ui search">
         <input className="prompt" type="text" placeholder="Common passwords..." />
        <div className="results"></div>
        </div>
        );
    }
}

export default CustomerSearch;