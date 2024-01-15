import { GetConsentsKey } from '@api/consents/keys'
import {
  AddNewConsentsResponse,
  ConsentsResponse,
  PaginationParams,
} from '@api/consents/types'
import { api } from '@axios/index'
import { AxiosError } from 'axios'
import { UseQueryOptions, useQuery } from 'react-query'

export const useGetConsents = (
  pagination: PaginationParams,
  options?: UseQueryOptions<ConsentsResponse, AxiosError>,
) => {
  return useQuery({
    queryKey: GetConsentsKey(pagination),
    queryFn: () =>
      api
        .get<AddNewConsentsResponse[]>(
          `/consents?_limit=${pagination.pageSize}&_page=${pagination.pageNumber}`,
        )
        .then((response) => {
          console.log(response.headers[`x-total-count`])

          const totalPages =
            response.headers[`x-total-count`] % 2 === 1
              ? Math.floor(response.headers[`x-total-count`] / 2) + 1
              : response.headers[`x-total-count`] / 2

          const formattedData: ConsentsResponse = {
            currentPage: pagination.pageNumber,
            entries: response.data,
            totalItems: totalPages,
          }
          return formattedData
        }),
    ...options,
  })
}
