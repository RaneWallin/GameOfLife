import React, { Component } from 'react';
import StartToggle from './start_toggle';
import TurnViewer from './turn_viewer';
import ClearMe from './clear';

export default class Controls extends Component {
    constructor(props) {
        super(props);
        this.myClick = this.myClick.bind(this);
    }

    myClick(e) {
        this.props.myClick(e);

    }

    render() {
        return (
            <div className="gol-controller">
                <div className="btn-group">
                    <StartToggle myClick={this.myClick} {...this.props } />
                    <ClearMe myClick={this.myClick} { ...this.props } />
                </div>
                <TurnViewer { ...this.props } />
            </div>

        );
    }
}