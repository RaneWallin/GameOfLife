import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import Cell from './cell';

export default class Grid extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            gridX: 50,
            gridY: 30,
            cells: [],
            cellRefs: []
        });

        //this.getStatus = this.getStatus.bind(this);
    }

    // componentWillMount() {
    //     let theCells = [];
    //     let cellRefs = [];
    //     let key = 0;
    //     this.setState({container});
    //     for(let i = 0; i < this.state.gridY; i++) {
    //         theCells[i]=[];
    //         cellRefs[i]=[];
    //         for(let j = 0; j < this.state.gridX; j++) {
    //             theCells[i].push(
    //                //ReactDOM.render(<Cell key={key} />, container)
    //                 <Cell key={key} ref={key} />
    //             );
    //             key++;
    //         }
    //     }
    //     //console.log("first cellRefs", cellRefs);
    //     //this.setState({ cellRefs });
    //     //console.log("theCells", theCells);
    //     //console.log("cellRefs", this.state.cellRefs);
    //     console.log(this.refs);
    //     //this.setState({ cells: theCells});
    // }

    checkCells() {
        this.state.cellRefs[0][0].isAlive();
    }

    startSimulation() {
       // const myInterval = setInterval(this.checkCells, this.state.heartbeat);
    }

    getState(status) {
        console.log(status)
    }

    componentDidMount() {
        //console.log(this.refs);
        //this.refs[1].isAlive();
        for(let i = 0; i < 3; i++)
            this.refs[1].addLivingNeighbor();
        //this.refs[1].isAlive();

       // console.log(this.refs[1].queryNeighbors());
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
                    <Cell key={key} ref={key} />
                );
                key++;
            }
        }
        //console.log("first cellRefs", cellRefs);
        //this.setState({ cellRefs });
        //console.log("theCells", theCells);
        //console.log("cellRefs", this.state.cellRefs);
        //console.log(this.refs);
        //this.setState({ cells: theCells});
        return theCells;
    }

    render() {
        console.log("test");
       // console.log(this);
        //  console.log(this.checkCells());
        return (
            <div className="default-grid">
                {this.renderCells()}
                {this.checkCells}
            </div>
        );
    }
}