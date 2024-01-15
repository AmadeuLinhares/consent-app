import { PaginationParams } from '@api/consents/types'
import { QueryKey } from 'react-query'

export const GetConsentsKey = (pagination: PaginationParams): QueryKey => [
  `GetConsentsKey`,
  pagination.pageNumber,
  pagination.pageSize,
]
