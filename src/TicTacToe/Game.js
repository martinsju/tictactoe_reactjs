import React, { useState, useEffect } from 'react'

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#b8b8b8',
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
  'flexDirection': 'column',
  'height': '100vh',
  'backgroundColor': '#8b8b8b'
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
  const [isToggle, setToggle] = useState(true)
  const turn = isToggle ? "X" : "O"
  // const squares = Array(9).fill('')
  const [squares, setSquares] = useState(Array(9).fill(''))
  const [hasWinner, setWinner] = useState(false)
  const winner = hasWinner ? turn : ""

  const verifyWinner = () => {
      //if array matches any of these, setWinner to true

      if (squares[0] !== ''){
        if (squares[0] === squares[1] && squares[1] === squares[2]) {
          //win top horizontal
          console.log("ganhou pelo top horizontal")
          return true
        } if (squares[0] === squares[3] && squares[3] === squares[6]) {
          //win left vertical
          console.log("ganhou pelo left vertical")
          return true
        } if (squares[0] === squares[4] && squares[4] === squares[8]) {
          //win left diagonal
          console.log("ganhou pelo left diagonal")
          return true
        }
      } if (squares[3] !== '') {
        if (squares[3] === squares[4] && squares[4] === squares[5])
          //win middle horizontal
          console.log("ganhou pelo middle horizontal")
          return true
      } if (squares[6] !== '') {
        if (squares[6] === squares[7] && squares[7] === squares[8])
          //win bottom horizontal
          console.log("ganhou pelo bottom horizontal")
          return true
      } if (squares[1] !== '') {
        if (squares[1] === squares[4] && squares[4] === squares[7])
          //win middle vertical
          console.log("ganhou pelo middle vertical")
          return true
      } if (squares[2] !== '') {
        if (squares[2] === squares[5] && squares[5] === squares[8]) {
          //win right vertical
          console.log("ganhou pelo right vertical")
          return true
        } if (squares[2] === squares[4] && squares[4] === squares[6]) {
          //win right diagonal
          console.log("ganhou pelo right diagonal")
          return true
        }
      } else {
        console.log("ngm ganhou ainda")
        return false
      }

      // if (squares[0] === squares[1] && squares[1] === squares[2]) {
      //   //win top horizontal
      //   return true
      // } else if (squares[3] === squares[4] && squares[4] === squares[5]) {
      //   //win middle horizontal
      //   return true
      // } else if (squares[6] === squares[7] && squares[7] === squares[8]) {
      //   //win bottom horizontal
      //   return true
      // } else if (squares[0] === squares[3] && squares[3] === squares[6]) {
      //   //win left vertical
      //   return true
      // } else if (squares[1] === squares[4] && squares[4] === squares[7]) {
      //   //win middle vertical
      //   return true
      // } else if (squares[2] === squares[5] && squares[5] === squares[8]) {
      //   //win right vertical
      //   return true
      // } else if (squares[0] === squares[4] && squares[4] === squares[8]) {
      //   //win left diagonal
      //   return true
      // } else if (squares[2] === squares[4] && squares[4] === squares[6]) {
      //   //win right diagonal
      //   return true
      // } else {
      //   return false
      // }
    }

  function Square({ num }){ 

    // const winSolutions = [
    //   ["0", "1", "2",
    //    "3", "4", "5",
    //    "6", "7", "8"]
    // ]

    useEffect(() => {
      if (verifyWinner()) {
        //setWinner state to 'turn' and stops the game
        setWinner(true)
      }
      
    }, [isToggle])
    
    function onPress() {
      
      if (!hasWinner && squares[num] === '') {
        setToggle(!isToggle)
        squares[num] = turn
      }
      console.log("function verify winner", verifyWinner())
      console.log("valor do square ", squares[num])
    }

    return (
      <div
        className="square"
        style={squareStyle}
        onClick={onPress}>
          {squares[num]}
      </div>
    );
  }

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>{turn}</span></div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>{winner}</span></div>
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