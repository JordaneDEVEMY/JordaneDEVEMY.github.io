import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

function Cell({ onChange, id, value }) {
  return (
    <FormControl
      id={id}
      className="cell"
      type="text"
      value={value}
      onChange={(e) => onChange(e, id)}
      maxLength="1"
    />
  );
}

Cell.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

Cell.defaultProps = {
};

export default React.memo(Cell);
