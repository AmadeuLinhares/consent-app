import { TableProps } from '@components/Table/types'
import { Typography } from '@components/Typography'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import tokens from '@theme/tokens'

export const Table = (props: TableProps) => {
  return (
    <Box>
      <DataGrid
        {...props}
        hideFooterPagination={true}
        hideFooter={true}
        sx={{
          color: tokens.colors.grey.GRAY_200,
        }}
        data-testid="dataGrid-component-id"
      />
      <Box
        display={`flex`}
        justifyContent={`flex-end`}
        alignItems={`center`}
        padding={tokens.SPACINGS.spacing12}
      >
        <Box>
          <Typography
            variant="tertiary"
            dataTestid="dataGrid-component-pagination-description"
          >
            {props.currentPage} - {props.totalPages} of {props.totalPages}
          </Typography>
        </Box>
        <Box
          marginLeft={tokens.SPACINGS.spacing12}
          display={`flex`}
          justifyContent={`center`}
          alignItems={`center`}
        >
          <Box
            display={`flex`}
            justifyContent={`center`}
            alignItems={`center`}
            onClick={props.onPreviousPage}
            data-testid="dataGrid-component-previousPage-id"
          >
            <ArrowCircleLeftIcon color="primary" fontSize="small" />
          </Box>
          <Box
            marginLeft={tokens.SPACINGS.spacing12}
            display={`flex`}
            justifyContent={`center`}
            alignItems={`center`}
            onClick={props.onNextPage}
            data-testid="dataGrid-component-nextPage-id"
          >
            <ArrowCircleRightIcon color="primary" fontSize="small" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
