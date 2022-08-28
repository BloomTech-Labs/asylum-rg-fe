import React from 'react';

function TableInnerSquare(props) {
  const { innerData, rowHeight } = props;
  return (
    <div
      className="table-inner-square"
      style={{
        backgroundColor: 'gold',
        border: '1px solid red',
        height: rowHeight,
        overflow: 'hidden',
        padding: '2%',
        width: '100%',
        flex: '1',
      }}
    >
      {innerData}
    </div>
  );
}

export default TableInnerSquare;
