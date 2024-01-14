import { AddNewConsentsBody } from '@api/consents/types'
import { api } from '@axios/index'
import { AxiosError } from 'axios'
import { useMutation, UseMutationOptions } from 'react-query'

export const useAddNewConsents = (
  options?: UseMutationOptions<void, AxiosError, AddNewConsentsBody>,
) =>
  useMutation<void, AxiosError, AddNewConsentsBody>({
    mutationFn: (body) => api.post(`/consents`, body),
    ...options,
  })
