/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import Board from './Board';
import ButtonsGroup from './ButtonsGroup';
import { EMPTY_GRID, EMPTY_START_GRID, GET_RANDOM_BOARD } from '../config/constants';
import solveSudoku from '../utils/solvingAlgorithm';

function Solver() {
  const [grid, setGrid] = useState(EMPTY_GRID);
  const [startGrid, setStartGrid] = useState(EMPTY_START_GRID);
  const [isSolved, setIsSolved] = useState(false);

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
    setIsSolved(false);
  };

  const boardExample = () => {
    const randomGrid = GET_RANDOM_BOARD();
    setGrid(randomGrid);
    localStorage.setItem('sudoku-board', JSON.stringify(randomGrid));
  };

  const handleSolveButtonClicked = () => {
    setStartGrid(grid.map((arr) => arr.slice()));
    const progress = solveSudoku(grid);
    console.log('file: Solver.js ~ line 57 ~ handleSolveButtonClicked ~ solveSudoku(grid)', solveSudoku(grid));
    setGrid(progress);
    console.log('file: Solver.js ~ line 65 ~ handleSolveButtonClicked ~ grid', grid);
    setIsSolved(true);
  };

  const undo = () => {
    setGrid(startGrid);
    setStartGrid(EMPTY_START_GRID);
    setIsSolved(false);
  };

  return (
    <>
      <br />
      <Board
        startGrid={startGrid}
        onChange={handleValueChange}
        grid={grid}
      />
      <br />
      <ButtonsGroup
        reset={reset}
        boardExample={boardExample}
        handleSolveButtonClicked={handleSolveButtonClicked}
        disabled={!isSolved}
        undo={undo}
      />
    </>
  );
}

export default React.memo(Solver);
