import React, { Component } from 'react';
import Controls from "./controls";
import Grid from "./grid";

class GoL extends Component {
    constructor(props) {
        super(props);

        this.myClick = this.myClick.bind(this);
    }

    myClick(e) {
        console.log("test");
        this.refs["gridRef"].toggleRunning();
    }

    render() {
        return (
            <div className='gol-container'>
                <Controls myClick={this.myClick} />
                <Grid ref="gridRef" />
            </div>
        );
    }
}

export default GoL;