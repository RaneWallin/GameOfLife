import React, { Component } from 'react';

export default class Controls extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.myClick();
    }

    render() {
        return (
            <div className="gol-controller">
                <div className="btn btn-group">
                    <a href="#" onClick={this.handleClick} className="btn btn-default">Start</a>
                    <a href="#" className="btn btn-default">Clear</a>
                </div>
            </div>

        );
    }
}