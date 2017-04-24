import React, { Component } from 'react';

export default class ClearMe extends Component {

    constructor(props) {
        super(props);

        this.myClick =  this.myClick.bind(this);
    }

    myClick(e) {
        this.props.myClick(e);
    }
    render() {
        return (
            <a href="#" id="clear-btn" onClick={this.myClick} className="btn">Clear</a>
        );
    }
}