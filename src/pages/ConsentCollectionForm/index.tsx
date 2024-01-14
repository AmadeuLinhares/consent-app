import { useMemo } from 'react'

import { useAddNewConsents } from '@api/consents/mutations'
import { useGtConsentsAvailable } from '@api/consentsAvailable/query'
import { Checkbox } from '@components/CheckBox'
import { Input } from '@components/Input'
import { Typography } from '@components/Typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { PageLayout } from '@layouts/PageLayout'
import { Box, Button } from '@mui/material'
import { SkeletonHome } from '@pages/ConsentCollectionForm/components/Skeleton'
import {
  Form,
  cosentCollectionFormSchema,
} from '@pages/ConsentCollectionForm/types'
import tokens from '@theme/tokens'
import { useForm } from 'react-hook-form'

export const ConsentCollectionForm = () => {
  const { data, isLoading } = useGtConsentsAvailable()
  const { mutate } = useAddNewConsents({
    onSuccess: () => {
      alert(`success`)
    },
    onError: () => {
      alert(`error`)
    },
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(cosentCollectionFormSchema),
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
              <Button type="submit" variant="contained">
                send
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </PageLayout>
  )
}
