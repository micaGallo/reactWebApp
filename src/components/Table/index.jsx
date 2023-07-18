import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "./index.scss";

export default function Table({ data, columns, actionColumn }) {
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20]}
        checkboxSelection
      />
    </div>
  );
}
