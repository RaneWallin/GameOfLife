Game Of Life
---
### Description
This project is based off of [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) simulation. It uses React without Redux or Context. 

#### About Conway's Game of Life
From [Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life): 
>The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician 
John Horton Conway in 1970.[1]

>The game is a zero-player game, meaning that its evolution is determined by its initial state, 
requiring no further input. One interacts with the Game of Life by creating an initial configuration 
and observing how it evolves, or, for advanced players, by creating patterns with particular properties.

#### Challenge
In the Game of Life a cell must know the state (alive or dead) of neighboring
cells in order to know its own state. This creates a particular challenge in React. 
The default behavior of React does not easily facilitate communication between sibling components.
Information can be passed from parent to child via the props system and back up to the parent using
callback functions. 

#### Approach
In order to allow each cell to know the state of its neighboring cells, this program uses Reacts refs
system. Refs allows a component to have direct access to another component be setting the `ref` attribute.
To maintain the spirit of React communication, the cell refs are managed by the parent component `grid.js`.

As `grid.js` creates new cell components its stores a ref to each one. On each game turn `grid.js` checks the
state of each cell and then broadcasts its state to each of its neighbors. 
```javascript
runSimulation() {

    _.forEach(this.refs, cell => {
        if(cell.isAlive()) this.notifyNeighbors(cell);
    });

    this.updateStatus();
    this.props.announceTurn();
}
```


Since the neighboring cells are not actually concerned with which particular cells or active, but simply 
how many are active, it just increments a `livingNeighbor` counter. Based on the value of `livingNeighbor` 
each cell determines its own state, either alive or dead.
```javascript
addLivingNeighbor() {
    let livingNeighbor = this.state.livingNeighbor;
    livingNeighbor++;
    this.setState({ livingNeighbor });
}
```