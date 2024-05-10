import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const CustomFooter = ({ rowCount }) => {
  return (
    <div style={{ paddingLeft: '16px', fontSize: '0.875rem', color: '#888' }}>
      Showing 1 to 10 of {rowCount} entries
    </div>
  );
};

const DataTable = ({ columns, rows }) => {
  const customColumns = columns.map(column => {
    if ([
      'registrationDate',
      'clientName',
      'lawyerName',
      'caseStatus',
      'caseResult',
      'parties'
    ].includes(column.field)) {
      return {
        ...column,
        headerClassName: 'custom-column-header', // Apply custom header class
      };
    }
    return column;
  });

  return (
    <div className='h-[75vh] mt-4'>
      <DataGrid
        rows={rows}
        columns={columns}
        className='m-auto w-[96%] overflow-hidden text-sm text-white' // Adjust font size and color
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 15]}
        checkboxSelection
        headerHeight={200} // Reduce header height
        rowHeight={35} // Reduce row height
        getRowClassName={(params) => {
          if (params.row.isSelected) {
            return 'hover-effect-selected'; // Apply custom class for selected rows
          }
          return 'hover-effect'; // Apply custom class for non-selected rows
        }}
        getCheckboxProps={(params) => ({
          style: {
            color: params.row.isSelected ? '#fff' : '', // Change checkbox color for selected rows
          },
        })}
        getCellClassName={(params) => {
          if (params.field) {
            return 'p-2'; // Adjust cell padding as needed
          }
          return '';
        }}
      />
    </div>
  );
};

export default DataTable;
