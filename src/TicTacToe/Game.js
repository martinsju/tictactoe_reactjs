import React, { useState } from 'react'

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}


const Board = () => {
  const [isToggle, setToggle] = useState(true);
  const turn = isToggle ? "X" : "O";
  const [squares, setSquares] = useState(Array(9).fill('ha'));

  function Square({ num }){ 
    const [value, setValue] = useState(num);

    return (
      <div
        className="square"
        style={squareStyle}
        onClick={() => { setToggle(!isToggle); setSquares(squares[num] = turn); console.log(value); } }>
          {value}
      </div>
    );
  }

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>{turn}</span></div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>None</span></div>
      <button style={buttonStyle}>Reset</button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square num={0} />
          <Square num={1} />
          <Square num={2} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square num={3} />
          <Square num={4} />
          <Square num={5} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square num={6} />
          <Square num={7} />
          <Square num={8} />
        </div>
      </div>
    </div>
  )
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

export default Game