import React, { Component } from 'react';
import StartToggle from './start_toggle';
import ClearMe from './clear';

export default class Controls extends Component {
    constructor(props) {
        super(props);
        this.myClick = this.myClick.bind(this);
    }

    myClick(e) {
        console.log(this.props.myClick(e));

    }

    render() {
        return (
            <div className="gol-controller">
                <div className="btn btn-group">
                    <StartToggle myClick={this.myClick} />
                    <ClearMe myClick={this.myClick} />
                </div>
            </div>

        );
    }
}