import React from 'react';
import Cell from '../Cell/Cell';

function Board() {
  const cells = [];
  console.log('file: Board.js ~ line 6 ~ Board ~ cells', cells);

  const renderCells = () => {
    const boardSize = {
      row: 9,
      columns: 9,
    };

    for (let i = 0; i < boardSize.row; i += 1) {
      for (let j = 0; j < boardSize.columns; j += 1) {
        const index = `${i},${j}`;
        cells.push(
          <Cell
            key={index}
            id={index}
          />,
        );
      }
    }

    return cells;
  };

  return <div className="sudoku-grid shadow">{renderCells()}</div>;
}

export default React.memo(Board);
