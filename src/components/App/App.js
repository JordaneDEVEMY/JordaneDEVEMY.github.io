import React from 'react';
import { Container } from 'react-bootstrap';

// import Board from '../Board/Board';
// import Cell from '../Cell/Cell';
import Solver from '../Solver/Solver';

function App() {
  return (
    <Container className="text-center" id="App">
      <h1>[TT] Sudoku Solver</h1>
      <Solver />
    </Container>
  );
}

export default App;
