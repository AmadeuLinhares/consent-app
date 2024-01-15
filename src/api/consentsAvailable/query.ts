import { ConsentsAvailableKey } from '@api/consentsAvailable/keys'
import { ConsentsAvailableResponse } from '@api/consentsAvailable/types'
import { api } from '@axios/index'
import { UseQueryOptions, useQuery } from 'react-query'

export const useGetConsentsAvailable = (
  options?: UseQueryOptions<ConsentsAvailableResponse[]>,
) => {
  return useQuery<ConsentsAvailableResponse[]>({
    queryKey: ConsentsAvailableKey(),
    queryFn: () =>
      api
        .get<ConsentsAvailableResponse[]>(`/consentsAvailable`)
        .then((response) => response.data),
    ...options,
  })
}
