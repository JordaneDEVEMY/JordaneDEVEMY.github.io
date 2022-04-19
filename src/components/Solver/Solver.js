/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import Board from '../Board/Board';
import ButtonsGroup from '../ButtonsGroup/ButtonsGroup';
import { EMPTY_GRID, EMPTY_START_GRID, GET_RANDOM_BOARD } from '../../config/constants';

function Solver() {
  const [grid, setGrid] = useState(EMPTY_GRID);
  const [startGrid, setStartGrid] = useState(EMPTY_START_GRID);

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

    // eslint-disable-next-line max-len
    // ? console.log('file: Solver.js ~ line 34 ~ handleValueChange ~ localStorage[\'sudoku-board\']');
    // ? console.table(localStorage['sudoku-board']);
  };

  const reset = () => {
    setGrid(EMPTY_GRID);
    setStartGrid(EMPTY_START_GRID);
    localStorage.setItem('sudoku-board', JSON.stringify(EMPTY_GRID()));
  };

  const boardExample = () => {
    const randomGrid = GET_RANDOM_BOARD();
    setGrid(randomGrid);
    localStorage.setItem('sudoku-board', JSON.stringify(randomGrid));
  };

  return (
    <>
      <br />
      <Board
        onChange={handleValueChange}
        grid={grid}
      />
      <br />
      <ButtonsGroup reset={reset} boardExample={boardExample} />
    </>
  );
}

export default React.memo(Solver);
