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
            heartbeat: 100,
            myInterval: '',
            myCell: ''
        });

        this.runSimulation = this.runSimulation.bind(this);
        this.updateStatus = this.updateStatus.bind(this);
        //this.announceTurn = this.announceTurn.bind(this);
    }

    checkCells() {
        this.state.cellRefs[0][0].isAlive();
    }

    runSimulation() {

        _.forEach(this.refs, cell => {
            if(cell.isAlive()) this.notifyNeighbors(cell);
        });

        this.updateStatus();
        this.props.announceTurn();
    }

    //announceTurn() {
        //let newTurn = this.state.turn;
        //newTurn ++;
        //this.setState({ turn: newTurn });
    //    this.props.announceTurn();
    //}

    updateStatus() {
        _.forEach(this.refs, cell => {
            cell.updateMe();
        });
    }

    notifyNeighbors(cell) {
        let key = cell.props.myRef;
        const X = this.state.gridX;
        const Xp = X + 1;
        const Xm = X - 1;

        this.notifyNeighbor(key-1);
        this.notifyNeighbor(key+1);
        this.notifyNeighbor(key-Xm);
        this.notifyNeighbor(key-X);
        this.notifyNeighbor(key-Xp);
        this.notifyNeighbor(key+Xm);
        this.notifyNeighbor(key+X);
        this.notifyNeighbor(key+Xp);
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

    isRunning() {
        return this.state.myInterval !== '';
    }

    toggleRunning() {
        if(this.state.myInterval !== '') {
            this.stopMe();
        } else {
            this.setState({myInterval: setInterval(this.runSimulation, this.state.heartbeat)});
        }
    }

    stopMe() {
        clearInterval(this.state.myInterval);
        this.setState({ myInterval: '' });
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
        return Math.floor((Math.random() * 5) + 1);
    }

    clearGrid() {
        _.forEach(this.refs, cell => {
            cell.dieDie()
        });

        this.stopMe();

        this.props.announceTurn(true);
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