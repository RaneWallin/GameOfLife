import React, { Component } from 'react';
import StartToggle from './start_toggle';

export default class Controls extends Component {
    constructor(props) {
        super(props);
        this.myClick = this.myClick.bind(this);
    }

    myClick(e) {
        this.props.myClick();
    }

    render() {
        return (
            <div className="gol-controller">
                <div className="btn btn-group">
                    <StartToggle myClick={this.myClick} />
                    <a href="#" className="btn btn-default">Clear</a>
                </div>
            </div>

        );
    }
}