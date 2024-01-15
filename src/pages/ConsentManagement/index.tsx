import { useCallback, useMemo, useState } from 'react'

import { useGetConsents } from '@api/consents/query'
import { AddNewConsentsResponse } from '@api/consents/types'
import { ConsentsAvailableKey } from '@api/consentsAvailable/keys'
import { useGetConsentsAvailable } from '@api/consentsAvailable/query'
import { ConsentsAvailableResponse } from '@api/consentsAvailable/types'
import { Table } from '@components/Table'
import { PageLayout } from '@layouts/PageLayout'
import { Box } from '@mui/material'
import {
  GridCallbackDetails,
  GridColDef,
  GridPaginationModel,
  GridValueGetterParams,
} from '@mui/x-data-grid'
import { EmptyState } from '@pages/ConsentManagement/components/emptyState'
import { useGlobalLoader } from '@storage/globalLoader'
import { useQueryClient } from 'react-query'

import { PAGE_SIZE } from './constants'

const columns: GridColDef[] = [
  { field: `id`, headerName: `ID`, width: 70 },
  { field: `name`, headerName: `Name`, width: 130 },
  { field: `email`, headerName: `E-mail`, width: 130 },
  {
    field: `consents`,
    headerName: `Consents`,
    width: 230,
    valueGetter: (params: GridValueGetterParams) => {
      const { consents } = params.row
      return consents?.length ? consents.toString() : ``
    },
  },
]

export const ConsentManagement = () => {
  const [page, setPage] = useState(0)
  const setGlobalLoad = useGlobalLoader((state) => state.setLoading)
  const useQuery = useQueryClient()
  const [consentList, setConsentList] = useState<AddNewConsentsResponse[]>([])
  const { data, isLoading } = useGetConsents({
    pageNumber: page,
    pageSize: PAGE_SIZE,
  })

  const permissionFromCache = useMemo(() => {
    const listFromCache = useQuery.getQueriesData<ConsentsAvailableResponse[]>(
      ConsentsAvailableKey(),
    )

    if (listFromCache?.length && listFromCache[0]?.length > 1) {
      return listFromCache[0][1]
    }
    return []
  }, [useQuery])

  const { data: permissionList, isLoading: isLoadingPermission } =
    useGetConsentsAvailable({
      enabled: !permissionFromCache?.length,
    })

  const fetchInfos = useMemo(() => {
    const isFetch = isLoading || isLoadingPermission
    setGlobalLoad(isFetch)
    return isFetch
  }, [isLoading, isLoadingPermission, setGlobalLoad])

  useMemo(() => {
    if (!!data && data?.length) {
      if (permissionFromCache?.length) {
        const formattedData = data.map((val) => ({
          ...val,
          consents: val.consents.map((id) => {
            const permissionLabel = permissionFromCache.filter(
              (permission) => permission.id === id,
            )
            return permissionLabel[0].label
          }),
        }))
        setConsentList(formattedData)
      } else if (permissionList?.length) {
        const formattedData = data.map((val) => ({
          ...val,
          consents: val.consents.map((id) => {
            const permissionLabel = permissionList.filter(
              (permission) => permission.id === id,
            )
            return permissionLabel[0].label
          }),
        }))
        setConsentList(formattedData)
      }
    }
  }, [permissionList, permissionFromCache, data])

  const onPageChange = useCallback(
    (
      { page: pageMui, pageSize: pageSizeMui }: GridPaginationModel,
      details: GridCallbackDetails,
    ) => {
      console.log(`page, pageSize`, pageMui, pageSizeMui)
      console.log(`details`, details)
      setPage(page)
    },
    [page],
  )

  return (
    <PageLayout>
      {!fetchInfos && consentList.length === 0 ? (
        <EmptyState />
      ) : (
        <Box>
          <Table
            columns={columns}
            rows={consentList}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: PAGE_SIZE },
              },
            }}
            pageSizeOptions={[2]}
            checkboxSelection={false}
            onPaginationModelChange={onPageChange}
          />
        </Box>
      )}
    </PageLayout>
  )
}
