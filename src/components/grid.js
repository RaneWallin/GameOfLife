import React, { Component } from 'react';
import Cell from './cell';
import _ from 'lodash';

export default class Grid extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            gridX: 50,
            gridY: 30,
            cells: [],
            cellRefs: [],
            heartbeat: 500,
            myInterval: '',
            myCell: ''
        });

        this.runSimulation = this.runSimulation.bind(this);
        this.updateStatus = this.updateStatus.bind(this);
    }

    checkCells() {
        this.state.cellRefs[0][0].isAlive();
    }

    runSimulation() {

        _.forEach(this.refs, cell => {
            if(cell.isAlive()) this.notifyNeighbors(cell);
        });

        this.updateStatus();
    }

    updateStatus() {
        _.forEach(this.refs, cell => {
            cell.updateMe();
        });
    }

    notifyNeighbors(cell) {
        let key = cell.props.myRef;

        this.notifyNeighbor(key-1);
        this.notifyNeighbor(key+1);
        this.notifyNeighbor(key-49);
        this.notifyNeighbor(key-50);
        this.notifyNeighbor(key-51);
        this.notifyNeighbor(key+49);
        this.notifyNeighbor(key+50);
        this.notifyNeighbor(key+51);
    }

    notifyNeighbor(key) {
        if(key < 0) {
            key += ((this.state.gridX * this.state.gridY));
        }
        if(key >= this.state.gridX * this.state.gridY) {
            key -= ((this.state.gridX * this.state.gridY));
        }

        this.refs[key].addLivingNeighbor();
    }

    toggleRunning() {
        if(this.state.myInterval !== '') {
            clearInterval(this.state.myInterval);
            this.setState({ myInterval: '' });
        } else {
            this.setState({myInterval: setInterval(this.runSimulation, this.state.heartbeat)});
        }
    }

    getState(status) {
        console.log(status)
    }

    componentDidMount() {
        let num;

        Object.keys(this.refs).forEach(key => {
            num = this.getRandomNumber();
            if (num === 3) {
                this.refs[key].toggleActive();
            }
        }
    );

       this.setState({ myInterval: setInterval(this.runSimulation, this.state.heartbeat)});

    }

    getRandomNumber() {
        return Math.floor((Math.random() * 10) + 1);
    }

    renderCells() {
        let theCells = [];
        let cellRefs = [];
        let key = 0;
        //this.setState({container});
        for(let i = 0; i < this.state.gridY; i++) {
            theCells[i]=[];
            cellRefs[i]=[];
            for(let j = 0; j < this.state.gridX; j++) {
                theCells[i].push(
                    <Cell key={key} myRef={key} ref={key} />
                );
                key++;
            }
        }

        return theCells;
    }



    render() {

        return (
            <div>
            <div className="default-grid">
                {this.renderCells()}
                {this.checkCells}
            </div>
            <div className="cell-output" >
            </div>
            </div>
        );
    }
}