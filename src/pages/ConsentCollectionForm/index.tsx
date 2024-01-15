import { useMemo } from 'react'

import { useAddNewConsents } from '@api/consents/mutations'
import { useGetConsentsAvailable } from '@api/consentsAvailable/query'
import { Checkbox } from '@components/CheckBox'
import { Input } from '@components/Input'
import { Typography } from '@components/Typography'
import { RouteNames } from '@configs/routes'
import { zodResolver } from '@hookform/resolvers/zod'
import { PageLayout } from '@layouts/PageLayout'
import { Box, Button, CircularProgress } from '@mui/material'
import { SkeletonHome } from '@pages/ConsentCollectionForm/components/Skeleton'
import {
  Form,
  cosentCollectionFormSchema,
} from '@pages/ConsentCollectionForm/types'
import tokens from '@theme/tokens'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const ConsentCollectionForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(cosentCollectionFormSchema),
  })
  const navigate = useNavigate()
  const { data, isLoading } = useGetConsentsAvailable()
  const { mutate, isLoading: isLoadingMutation } = useAddNewConsents({
    onSuccess: () => {
      reset()
      clearErrors()
      navigate(RouteNames.collected_consents)
    },
    onError: () => {
      alert(`error`)
    },
  })
  const submit = (dataForm: Form) => {
    const consentsAllowed = data?.filter((val) => !!dataForm[val.value])

    if (consentsAllowed && consentsAllowed.length) {
      mutate({
        email: dataForm.email,
        name: dataForm.name,
        consents: consentsAllowed?.map((val) => val.id),
      })
    }
  }

  const renderCheckboxItems = useMemo(
    () =>
      data?.map((val) => (
        <Checkbox key={val.id} label={val.label} {...register(val.value)} />
      )),
    [data, register],
  )

  return (
    <PageLayout>
      {isLoading ? (
        <SkeletonHome />
      ) : (
        <Box
          display={`grid`}
          rowGap={tokens.SPACINGS.spacing24}
          component={`form`}
          onSubmit={handleSubmit(submit)}
        >
          <Box
            display={`grid`}
            gridTemplateColumns={`repeat(2, 300px)`}
            columnGap={`30px`}
            justifyContent={`center`}
            alignItems={`center`}
          >
            <Box marginRight={tokens.SPACINGS.spacing8}>
              <Input
                {...register(`name`)}
                error={!!errors.name}
                helperText={errors.name?.message}
                placeholder="Name"
              />
            </Box>

            <Box>
              <Input
                {...register(`email`)}
                error={!!errors.email}
                helperText={errors.email?.message}
                placeholder="E-mail"
              />
            </Box>
          </Box>

          <Box display={`grid`} rowGap={tokens.SPACINGS.spacing4}>
            <Box
              display={`flex`}
              justifyContent={`center`}
              alignItems={`center`}
            >
              <Typography variant="tertiary">I agree to:</Typography>
            </Box>
            <Box
              display={`grid`}
              rowGap={tokens.SPACINGS.spacing4}
              justifyContent={`center`}
              alignItems={`center`}
            >
              {renderCheckboxItems}
              {!!errors.checkboxGroup && (
                <Box>
                  <Typography variant="error">
                    {errors.checkboxGroup?.message}
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>

          <Box display={`flex`} justifyContent={`center`} alignItems={`center`}>
            <Box width={`40%`}>
              <Button
                type="submit"
                variant="contained"
                disabled={isLoadingMutation}
              >
                {isLoadingMutation ? (
                  <CircularProgress size={`15px`} color={`inherit`} />
                ) : (
                  `Give consent`
                )}
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </PageLayout>
  )
}
