import React, { Component } from 'react';

export default class ClearMe extends Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     running: true
        // }

        this.myClick =  this.myClick.bind(this);
    }

    myClick(e) {
        this.props.myClick(e);
        //this.setState({ running: !this.state.running });
    }
    render() {
        return (
            <a href="#" id="clear-btn" onClick={this.myClick} className="btn btn-default">Clear</a>
        );
    }
}