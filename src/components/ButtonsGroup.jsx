import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'react-bootstrap';

function ButtonsGroup({
  reset,
  boardExample,
  handleSolveButtonClicked,
  undo,
  disabled,
}) {
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
          handleSolveButtonClicked();
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
        disabled={disabled}
        onClick={() => {
          undo();
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
  handleSolveButtonClicked: PropTypes.func.isRequired,
  undo: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

ButtonsGroup.defaultProps = {
};

export default React.memo(ButtonsGroup);
