import { DataGridProps } from '@mui/x-data-grid'

export interface TableProps extends DataGridProps {
  totalPages: number
  currentPage: number
  onNextPage: () => void
  onPreviousPage: () => void
}
