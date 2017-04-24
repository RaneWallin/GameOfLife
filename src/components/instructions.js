import React from 'react';

export default function Instructions() {
    return (
        <div className="instructions">
            <h3>Game of Life</h3>
            <hr />
            <p>The <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Game of Life</a> is a game of 'cellular automation'
            based on the theories of British mathematician John Conway.
                Cells live or die based on the following rules.</p>
            <ol>
                <li>A living cell with 2 or 3 living neighbors will stay alive</li>
                <li>A dead cell with exactly 3 living neighbors will spring to life</li>
            </ol>
            <p>In the above representation, new cells are light pink. Cells that have survived
                more than one generation are dark pink.</p>
            <p>Any cell can be turn 'on' or 'off' by clicking on it.</p>
            <p>The counter at the top right shows how many lifecycles have passed.</p>
        </div>
    );
}