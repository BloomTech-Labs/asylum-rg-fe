import React from 'react';
import TableRow from './TableRow';
import { colors } from '../../../../../styles/data_vis_colors';
import { useEffect } from 'react';

const { primary_accent_color } = colors;

function Table(props) {
  const { rows, columns, tableWidth, rowHeight } = props;
  // rows here should be an array of rows containing objects w/ properties keyed by column names
  // columns should just be an array of column names
  function officeHeatMapDataFormatter(yearOffice) {
    switch (yearOffice['Year [Office]']) {
      case yearOffice['Year [Office]'].includes('ZHN'):
        yearOffice['Year [Office]'] = 'test';
        break;
      case yearOffice['Year [Office]'].includes('ZNY'):
        yearOffice['Year [Office]'] = 'test';
        break;
      case yearOffice['Year [Office]'].includes('ZNK'):
        yearOffice['Year [Office]'] = 'test';
        break;
      case yearOffice['Year [Office]'].includes('ZBO'):
        yearOffice['Year [Office]'] = 'test';
        break;
      case yearOffice['Year [Office]'].includes('ZMI'):
        yearOffice['Year [Office]'] = 'test';
        break;
      case yearOffice['Year [Office]'].includes('ZAR'):
        yearOffice['Year [Office]'] = 'test';
        break;
      case yearOffice['Year [Office]'].includes('ZSF'):
        yearOffice['Year [Office]'] = 'test';
        break;
      case yearOffice['Year [Office]'].includes('ZLA'):
        yearOffice['Year [Office]'] = 'Las Angelas';
        break;
      case yearOffice['Year [Office]'].includes('ZCH'):
        yearOffice['Year [Office]'] = 'test';
        break;
      default:
        console.log(yearOffice['Year [Office]']);
        console.log('No Year [Office] Found!');
    }
  }

  let newRows = [];

  newRows = rows.map(officeHeatMapDataFormatter);
  console.log(newRows);

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
                backgroundColor: primary_accent_color,
                border: '1px solid black',
                color: 'white',
                width: '100%',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
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
