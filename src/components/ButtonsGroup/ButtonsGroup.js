import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'react-bootstrap';

function ButtonsGroup({ reset, boardExample }) {
  return (
    <ButtonGroup className="shadow">
      <Button
        variant="outline-dark"
        size="sm"
        onClick={() => {
          reset();
          boardExample();
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
          reset();
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

ButtonsGroup.propTypes = {
  reset: PropTypes.func.isRequired,
  boardExample: PropTypes.func.isRequired,
};

ButtonsGroup.defaultProps = {
};

export default React.memo(ButtonsGroup);
