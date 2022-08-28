import React from 'react';
import TableRow from './TableRow';

function Table(props) {
  const { rows, columns, tableWidth, rowHeight } = props;
  // rows here should be an array of rows containing objects w/ properties keyed by column names
  // columns should just be an array of column names
  return (
    <div
      className="g-table"
      style={{
        display: 'flex',
        width: tableWidth,
        flexDirection: 'column',
        margin: '5% auto',
        overflow: 'hidden',
      }}
    >
      <div
        className="column-id-container"
        style={{
          display: 'flex',
          width: tableWidth,
          height: rowHeight,
        }}
      >
        {columns.map((column, idx) => {
          return (
            <div
              className="column-id"
              style={{
                backgroundColor: 'lightblue',
                border: '1px solid blue',
                width: '100%',
                padding: '2%',
                overflow: 'hidden',
              }}
              key={idx}
            >
              {column}
            </div>
          );
        })}
      </div>
      <div className="rows-container">
        {rows.map((row, idx) => {
          return (
            <TableRow
              key={idx}
              row={row}
              rowId={idx}
              tableWidth={tableWidth}
              rowHeight={rowHeight}
              columns={columns}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Table;
