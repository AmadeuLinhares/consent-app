import { Box } from '@mui/material'
import { DataGrid, DataGridProps } from '@mui/x-data-grid'

export const Table = (props: DataGridProps) => {
  return (
    <Box>
      <DataGrid
        // rows={rows}
        // columns={columns}
        // initialState={{
        //   pagination: {
        //     paginationModel: { page: 0, pageSize: 5 },
        //   },
        // }}
        // pageSizeOptions={[5, 10]}
        // checkboxSelection
        {...props}
      />
    </Box>
  )
}
