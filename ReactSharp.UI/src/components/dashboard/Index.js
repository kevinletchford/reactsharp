import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dashboard extends Component {
    render() {
        return (
            <main>
                <Clock />
            </main>
        );
    }
}

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }


    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            10000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                 <h1>{this.state.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</h1>
            </div>
        );
    }
}


export default Dashboard;