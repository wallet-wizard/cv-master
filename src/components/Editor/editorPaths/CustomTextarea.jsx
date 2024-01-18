import React, { useId, useRef, useEffect, useState } from 'react';

function CustomTextarea(props) {
  const id = useId();
  const textAreaRef = useRef(null)
  const startingRows = useRef(null)
  console.log(id)
  const [rowsCount, setRowsCount] = useState(0);
  
  useEffect(() => {
    if (textAreaRef.current) {
      const lineHeight = parseInt(getComputedStyle(textAreaRef.current).lineHeight, 10);
      const rows = Math.floor(textAreaRef.current.scrollHeight / lineHeight);
      console.log(`Text spans approximately ${rows} rows.`);
      startingRows.current = rows
      setRowsCount(rows)
    }
  }, [])

  function updateRows(event) {
    if (textAreaRef.current) {
      const startingRowsLength = startingRows.current;
      const lineHeight = parseInt(getComputedStyle(textAreaRef.current).lineHeight, 10);
      const rows = Math.floor(textAreaRef.current.scrollHeight / lineHeight);

      console.log("starting Rows:", startingRowsLength)
      console.log("actual Rows:", rows)
      console.log("prev Rows:", rowsCount)

      if (rows < startingRowsLength) {
        return setRowsCount(startingRowsLength);
      }
      
      if (rows > startingRowsLength && rows > rowsCount) {
        return setRowsCount(rows);
      } else if (rows === rowsCount){
        return setRowsCount(rowsCount - 1)
      } else {
        return setRowsCount(rows - 1);
      }


    }
  };


  return (
      <div>
        <label htmlFor={`${id}-${props.id ? props.id : ""}`}></label>
        <textarea
          ref={textAreaRef}
          id={`${id}-${props.id ? props.id : ""}`}
          onChange={updateRows}
          placeholder="Enter Title (no more than 2 lines recommended)"
          className='editor-textArea'
          rows={(rowsCount > props.rows) ? rowsCount : props.rows}
          defaultValue={props.defaultValue ? props.defaultValue : ""}
        />
      </div>

  );
};

export default CustomTextarea;
