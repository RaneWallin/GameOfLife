import React, { Component } from 'react';

export default class TurnViewer extends Component {
    render() {

        return (

            <div className="turn-viewer"><div className="turn-text">{this.props.turn}</div></div>
        );
    }
}