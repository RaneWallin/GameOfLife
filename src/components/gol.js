import React, { Component } from 'react';
import Controls from "./controls";
import Grid from "./grid";

class GoL extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gameRunning: true,
            turn: 0
        }

        this.myClick = this.myClick.bind(this);
        this.announceTurn = this.announceTurn.bind(this);
    }

    myClick(e) {
        if(e.target.id === 'clear-btn') {
            this.refs["gridRef"].clearGrid();
            if(this.refs["gridRef"].isRunning()) {
                this.refs["gridRef"].toggleRunning();
                this.setState({ gameRunning: !this.state.gameRunning });
            }
        } else {
            this.refs["gridRef"].toggleRunning();
            this.setState({ gameRunning: !this.state.gameRunning });
        }
        e.target.blur();
    }

    announceTurn(clearTurn) {
        if(clearTurn) {
            this.setState({ turn: 0 });
        } else {
            let newTurn = this.state.turn;
            newTurn++;
            this.setState({turn: newTurn});
        }
    }

    render() {
        return (
            <div className='gol-container'>
                <Controls myClick={this.myClick} running={this.state.gameRunning} turn={ this.state.turn } />
                <Grid announceTurn={this.announceTurn} ref="gridRef" />
            </div>
        );
    }
}

export default GoL;