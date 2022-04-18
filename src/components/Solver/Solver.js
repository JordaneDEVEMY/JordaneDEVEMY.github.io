import React from 'react';

import Board from '../Board/Board';
import ButtonsGroup from '../ButtonsGroup/ButtonsGroup';

function Solver() {
  return (
    <>
      <br />
      <Board />
      <br />
      <ButtonsGroup />
    </>
  );
}

export default React.memo(Solver);
