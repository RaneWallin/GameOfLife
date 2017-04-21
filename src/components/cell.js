import React, { Component } from 'react';

class Cell extends Component {

    constructor(props) {
        super(props);

        this.state = {
            alive: false,
            livingNeighbor: 0
        }

        this.toggleActive = this.toggleActive.bind(this);
        this.isAlive = this.isAlive.bind(this);
    }

    toggleActive() {
        this.setState({
            alive: !this.state.alive
        });
    }

    isAlive() {
        return this.state.alive;
    }

    addLivingNeighbor() {
        let nb = this.state.livingNeighbor;
        nb++;
        this.setState({ livingNeighbor: nb });
    }


    queryNeighbors() {
        return this.state.livingNeighbor;
    }

    clearNeighbors() {
        this.setState({ livingNeighbor: 0 });
    }

    updateMe() {
        //console.log("updating status)");
        if(this.isAlive()) {
            if(this.queryNeighbors() !== 2 && this.queryNeighbors() !== 3)
                this.toggleActive();
        } else {
            if(this.queryNeighbors() === 3)
                this.toggleActive();
        }

        this.clearNeighbors();
    }


    render() {
        return (

            <div
                onClick={this.toggleActive}
                className={this.state.alive?'single-cell active':'single-cell' }
            >
            </div>


        );
    }
}

export default Cell;