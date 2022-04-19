import React, { useState } from 'react';

import Board from '../Board/Board';
import ButtonsGroup from '../ButtonsGroup/ButtonsGroup';
import { EMPTY_GRID } from '../../config/constants';

function Solver() {
  const [grid, setGrid] = useState(EMPTY_GRID);

  const handleValueChange = (e, id) => {
    const { value } = e.target;
    if ((value <= 9 && value > 0) || value === '') {
      const position = id.split(',');
      // ? console.log('file: Solver.js ~ line 15 ~ handleValueChange ~ position', position);

      // Creating a shallow copy of the grid
      const newGrid = grid.map((arr) => arr.slice());

      if (value === '') {
        newGrid[position[0]][position[1]] = 0;
      } else {
        newGrid[position[0]][position[1]] = Number(value);
      }

      // ? console.log('file: SudokuSolver.jsx ~ line 25 ~ handleValueChange ~ newGrid', newGrid);

      setGrid(newGrid);

      // update localStorage
      localStorage.setItem('sudoku-board', JSON.stringify(newGrid));
    }

    console.log('file: Solver.js ~ line 34 ~ handleValueChange ~ localStorage[\'sudoku-board\']');
    console.table(localStorage['sudoku-board']);
  };

  return (
    <>
      <br />
      <Board
        onChange={handleValueChange}
        grid={grid}
      />
      <br />
      <ButtonsGroup />
    </>
  );
}

export default React.memo(Solver);
