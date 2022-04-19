import React from 'react';
import { Container } from 'react-bootstrap';

import Solver from './Solver';

function App() {
  return (
    <Container className="text-center" id="App">
      <h1>[TT] Sudoku Solver</h1>
      <Solver />
    </Container>
  );
}

export default App;
