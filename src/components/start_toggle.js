import React, { Component } from 'react';

export default class StartToggle extends Component {

    constructor(props) {
        super(props);

        this.myClick =  this.myClick.bind(this);
    }

    myClick(e) {
        this.props.myClick(e);
    }

    render() {
        return (
            <a href="#" onClick={this.myClick} className="btn">{this.props.running?'Stop':'Start'}</a>
        );
    }
}