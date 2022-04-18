import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

function ButtonsGroup() {
  return (
    <ButtonGroup className="shadow">
      <Button
        variant="outline-dark"
        size="sm"
        onClick={() => {
          console.log('file: ButtonsGroup.js ~ Example Board ~ onClick');
        }}
      >
        Example Board
      </Button>
      <Button
        variant="outline-dark"
        size="sm"
        onClick={() => {
          console.log('file: ButtonsGroup.js ~ Solve ~ onClick');
        }}
      >
        Solve
      </Button>
      <Button
        variant="outline-dark"
        size="sm"
        onClick={() => {
          console.log('file: ButtonsGroup.js ~ Clear ~ onClick');
        }}
      >
        Clear
      </Button>
      <Button
        variant="outline-dark"
        size="sm"
        onClick={() => {
          console.log('file: ButtonsGroup.js ~ Undo ~ onClick');
        }}
      >
        Undo
      </Button>
    </ButtonGroup>
  );
}

export default React.memo(ButtonsGroup);
