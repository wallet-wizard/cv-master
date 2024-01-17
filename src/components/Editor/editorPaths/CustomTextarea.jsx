import React, { useRef, useEffect, useState } from 'react';

function CustomTextarea() {
  const [columns, setColumns] = useState([]);
  const [rowsCount, setRowsCount] = useState(0);

  function handleTextareaChange(event) {
    const inputText = event.target.value;
    const newRows = inputText.split('\n');
    setRowsCount(newRows.length)
  };

  console.log(columns) 
  return (

      <textarea
        onChange={handleTextareaChange}
        placeholder="Type your columns here, each line is a new column"
        className='editor-textArea'
        rows={rowsCount > 2 && rowsCount}
      />

  );
};

export default CustomTextarea;
