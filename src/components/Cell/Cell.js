import React, { useState } from 'react';
import { FormControl } from 'react-bootstrap';

function Cell() {
  const [cellValue, setCellValue] = useState('');

  const onChange = (event) => {
    const { value } = event.target;

    if ((value <= 9 && value > 0) || value === '') {
      setCellValue(value);
    } else {
      // ! For development only
      // Todo: remove this else condition in production
      console.log('Only numbers from 1 to 9 are allowed');
    }
  };

  return (
    <FormControl
      // id={id}
      className="cell"
      type="text"
      value={cellValue}
      onChange={(event) => onChange(event)}
      maxLength="1"
    />
  );
}

export default React.memo(Cell);
