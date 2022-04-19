import React from 'react';
import PropTypes from 'prop-types';

import Cell from '../Cell/Cell';
import { COLUMN_SIZE, ROW_SIZE } from '../../config/constants';

function Board({ onChange, grid }) {
  const cells = [];

  const renderCells = () => {
    for (let i = 0; i < ROW_SIZE; i += 1) {
      for (let j = 0; j < COLUMN_SIZE; j += 1) {
        const index = `${i},${j}`;
        cells.push(
          <Cell
            key={index}
            id={index}
            onChange={onChange}
            value={grid[i][j] === 0 ? '' : grid[i][j]}
          />,
        );
      }
    }

    return cells;
  };

  return <div className="sudoku-grid shadow">{renderCells()}</div>;
}

Board.propTypes = {
  onChange: PropTypes.func.isRequired,
  grid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};

Board.defaultProps = {
};

export default React.memo(Board);
