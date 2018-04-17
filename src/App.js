import React, { Component } from 'react';
import Board from './components/Board';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
    }
  }

  calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for(let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  handleReset = () => {
    console.log('this is reset');
    window.location.reload();
    // this.setState({
    //   squares: Array(9).fill(null),
    //   xIsNext: true,
    // })
  }

  render() {
    return (
      <div className="game">
        <h1>Tic-Tac-Toe</h1>
        <div className="game-board">
          <Board calculateWinner={this.calculateWinner} 
                 handleReset={this.handleReset} />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default App;
