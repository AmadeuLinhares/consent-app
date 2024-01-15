import { GetConsentsKey } from '@api/consents/keys'
import { AddNewConsentsResponse, PaginationParams } from '@api/consents/types'
import { api } from '@axios/index'
import { AxiosError } from 'axios'
import { UseQueryOptions, useQuery } from 'react-query'

export const useGetConsents = (
  pagination: PaginationParams,
  options?: UseQueryOptions<AddNewConsentsResponse[], AxiosError>,
) => {
  return useQuery({
    queryKey: GetConsentsKey(pagination),
    queryFn: () =>
      api
        .get(
          `/consents?_limit=${pagination.pageSize}&_page=${pagination.pageNumber}`,
        )
        .then((response) => response.data),
    ...options,
  })
}
