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

        //this.isAlive();
        //setTimeout(this.isAlive, 1);

    }

    isAlive() {
        //console.log("status", this.state.alive);
        return this.state.alive;
    }

    addLivingNeighbor() {
        this.setState({ livingNeighbor: this.state.livingNeighbor++ });
        //setTimeout(console.log(this.state), 50);
    }

    queryNeighbors() {
        console.log(this.state);
        //return this.state.livingNeighbor;
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