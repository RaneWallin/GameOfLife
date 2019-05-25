import React, { Component } from 'react';

class Cell extends Component {

    constructor(props) {
        super(props);

        this.state = {
            alive: false,
            livingNeighbor: 0,
            isOld: false
        }

        this.toggleActive = this.toggleActive.bind(this);
        this.isAlive = this.isAlive.bind(this);
    }

    toggleActive() {
        this.setState({
            alive: !this.state.alive
        });
        //console.log("test");
    }

    dieDie() {
        this.setState({ alive: false,
                        isOld: false});
    }

    isAlive() {
        return this.state.alive;
    }

    addLivingNeighbor() {
        let livingNeighbor = this.state.livingNeighbor;
        livingNeighbor++;
        this.setState({ livingNeighbor });
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
                this.dieDie();
            else
                this.setState({ isOld: true });
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
                className={this.state.alive?
                    (this.state.isOld?'single-cell active old': 'single-cell active'):'single-cell' }
            >
            </div>


        );
    }
}

export default Cell;